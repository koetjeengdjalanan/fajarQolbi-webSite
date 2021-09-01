import { Card } from "react-bootstrap";

export default function ModulTwo({ news }) {
 console.log(news);
 return (
  <div
   className="container"
   style={{ marginTop: "10rem", marginBottom: "10rem" }}
  >
   <h1>Ragam Kegiatan</h1>
   <br />
   <div className="row">
    {news &&
     news.map((post) => (
      <div className="col d-flex justify-content-center" key={post.id}>
       <Card style={{ width: "18rem" }}>
        <Card.Img
         variant="top"
         src={`http://172.105.120.235:1337${post.thumbnail.url}`}
         className="cardImgModule2"
        />
        <Card.Body>
         <Card.Title>{post.title}</Card.Title>
         <Card.Text>{post.body.substring(0, 200)} ... </Card.Text>
         <a href="#">Lihat Lebih Banyak ...</a>
        </Card.Body>
       </Card>
      </div>
     ))}
   </div>
   <div className="d-flex justify-content-center mt-5">
    <a href="#">- Lihat Lebih Banyak -</a>
   </div>
  </div>
 );
}

ModulTwo.getInitialProps = async () => {
 const res = await fetch(
  "http://172.105.120.235:1337/blogs?_where[categories.title]=News&_sort=created_at:DESC&_start=0&_limit=3"
 );
 const news = await res.json();
 return { news: news };
};
