import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Head from "next/head";
import { Card, Carousel } from "react-bootstrap";
import ModulFive from "../components/ModulFive";
import ModulFour from "../components/ModulFour";
import ModulThree from "../components/ModulThree";
import styles from "../styles/Home.module.css";

export default function Home({ headLine, blogPost }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Yayasan Fajar Qolbi</title>
          <meta name="description" content="Yayasan Yatim Piatu dan Dhuafa" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {/* <NavigationBarTop /> */}
          {/* <ModulOne /> */}
          <Carousel>
            {headLine &&
              headLine.map((head) => (
                <Carousel.Item interval={5000} key={head.id}>
                  <img
                    className="carouselImg d-block h-30 w-100"
                    src={head.thumbnail.url}
                    alt={head.thumbnail.url}
                  />
                  <Link href={`/blogs/${encodeURIComponent(head.slug)}`}>
                    <a>
                      <Carousel.Caption>
                        <h2>{head.title}</h2>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                      </Carousel.Caption>
                    </a>
                  </Link>
                </Carousel.Item>
              ))}
          </Carousel>
          {/* <ModulTwo /> */}
          <div
            className="container"
            style={{ marginTop: "10rem", marginBottom: "10rem" }}
          >
            <h1>Ragam Kegiatan</h1>
            <br />
            <div className="row">
              {blogPost &&
                blogPost.map((blog) => (
                  <div
                    className="col d-flex justify-content-center my-2"
                    key={blog.id}
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={blog.thumbnail.url}
                        className="cardImgModule2"
                      />
                      <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                          {blog.body.substring(0, 200)} ...{" "}
                        </Card.Text>
                        <Link href={`/blogs/${blog.slug}`}>
                          <a>Lihat Lebih Banyak ...</a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
            <Link href="/blogs" passHref>
              <a>
                <div className="d-flex justify-content-center mt-5">
                  - Lihat Lebih Banyak -
                </div>
              </a>
            </Link>
          </div>
          <ModulThree />
          <ModulFour />
          <ModulFive />
        </main>

        <footer className={styles.footer}>{/* <Footer /> */}</footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get Post From Strapi
  const [headLineRes, blogPostRes] = await Promise.all([
    fetch(
      `https://fajarqolbi-proddatabase.herokuapp.com/blogs?_where[categories.title]=HeadLine&_sort=created_at:DESC&_start=0&_limit=3`
    ),
    fetch(
      `https://fajarqolbi-proddatabase.herokuapp.com/blogs?_where[categories.title]=News&_sort=created_at:DESC&_start=0&_limit=4`
    ),
  ]);

  const [headLine, blogPost] = await Promise.all([
    headLineRes.json(),
    blogPostRes.json(),
  ]);

  return { props: { headLine, blogPost }, revalidate: 600 };
}
// export async function getStaticProps() {
//  // Get Post From Strapi
//  const res = await fetch(
//   "https://fajarqolbi-proddatabase.herokuapp.com/blogs?_sort=created_at:DESC"
//  );
//  const posts = await res.json();
//  //  console.log(posts);

//  return {
//   props: { posts },
//  };
// }
