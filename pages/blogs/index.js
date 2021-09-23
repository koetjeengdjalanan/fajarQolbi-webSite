import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import Head from "next/head";
import Link from "next/link";

export default function blogs({ posts }) {
  return (
    <>
      {/* <NavigationBarTop /> */}
      <div>
        <Head>
          <title>Fajar Qolbi | Blog Post</title>
          {/* <meta name="description" content="Generated by create next app" /> */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <br />
          <br />
          <br />
          <div className="container ">
            <h1>Blog Post List</h1>
            {posts &&
              posts.map((post) => (
                <>
                  <hr />
                  <Link href={`/blogs/${encodeURIComponent(post.slug)}`}>
                    <a style={{ color: "black", textDecoration: "none" }}>
                      <div className="row my-4" key={post.id}>
                        <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                          <img
                            className="blogPostThumbNail"
                            src={`https://fajarqolbi-proddatabase.herokuapp.com${post.thumbnail.url}`}
                            alt={`https://fajarqolbi-proddatabase.herokuapp.com${post.thumbnail.slug}`}
                          />
                        </div>
                        <div className="col-md-9 col-sm-12">
                          <div className="row d-flex justify-content-between">
                            <div className="col-9 d-flex align-items-center">
                              <h1>{post.title}</h1>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-end wrap border-start">
                              <p>
                                {moment(post.dateTime).format(
                                  "dddd, Do MMMM YYYY, hh:mm:ss a"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <p style={{ textAlign: "justify" }}>
                              {post.body.substring(0, 1360)} ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </>
              ))}
          </div>
        </main>

        <footer>{/* <Footer /> */}</footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get Post From Strapi
  const res = await fetch(
    "https://fajarqolbi-proddatabase.herokuapp.com/blogs?_sort=created_at:DESC"
  );
  const posts = await res.json();
  //  console.log(posts);

  return {
    props: { posts },
  };
}
