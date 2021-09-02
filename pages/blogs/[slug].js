import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";
import moment from "moment";

const Post = ({ posts }) => {
 return (
  <>
   <Head>{posts.title && <title>{posts.title}</title>}</Head>
   <div className="container" style={{ marginTop: "3.85rem" }}>
    <div className="row">
     <h1>{posts.title}</h1>
    </div>
    <div className="row d-flex justify-content-end">
     <p style={{ textAlign: "right" }}>
      {moment(posts.dateTime).format("dddd, Do MMMM YYYY, hh:mm:ss a")}
     </p>
    </div>
    <br />
    <div className="row d-flex justify-content-center">
     <img
      className="postThumbNail"
      src={`http://172.105.120.235:1337${posts.thumbnail.url}`}
      alt={`http://172.105.120.235:1337${posts.thumbnail.slug}`}
     />
    </div>
    <br />
    <ReactMarkdown>{posts.body}</ReactMarkdown>
   </div>
  </>
 );
};

export async function getStaticProps({ params: { slug } }) {
 const res = await fetch(`http://172.105.120.235:1337/blogs?slug=${slug}`);
 const blogPost = await res.json();

 return {
  props: {
   posts: blogPost[0],
  },
 };
}

export async function getStaticPaths() {
 // Get Post From Strapi
 const res = await fetch("http://172.105.120.235:1337/blogs");
 const post = await res.json();
 //  Retrun Enrich Content
 return {
  paths: post.map((posts) => ({
   params: { slug: String(posts.slug) },
  })),
  fallback: false,
 };
}

export default Post;
