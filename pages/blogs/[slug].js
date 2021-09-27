import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";
import moment from "moment";

const Post = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{posts && posts.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className="container" style={{ marginTop: "3.85rem" }}>
        <div className="row">
          <h1>{posts && posts.title}</h1>
        </div>
        <div className="row d-flex justify-content-end">
          <p style={{ textAlign: "right" }}>
            {moment(posts && posts.dateTime).format(
              "dddd, Do MMMM YYYY, hh:mm:ss a"
            )}
          </p>
        </div>
        <br />
        <div className="row d-flex justify-content-center">
          <img
            className="postThumbNail"
            src={posts && posts.thumbnail.url}
            alt={posts && posts.thumbnail.url}
          />
        </div>
        <br />
        <ReactMarkdown>{posts && posts.body}</ReactMarkdown>
      </div>
    </>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `https://fajarqolbi-proddatabase.herokuapp.com/blogs?slug=${slug}`
  );
  const blogPost = await res.json();

  return {
    props: {
      posts: blogPost[0],
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  // Get Post From Strapi
  const res = await fetch(
    "https://fajarqolbi-proddatabase.herokuapp.com/blogs"
  );
  const post = await res.json();
  //  Retrun Enrich Content
  return {
    paths: post.map((posts) => ({
      params: { slug: String(posts.slug) },
    })),
    fallback: true,
  };
}

export default Post;
