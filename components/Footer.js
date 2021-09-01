import Image from "next/image";
import mainLogo from "./assets/mainLogo.png";
import { GrMapLocation, GrPhone, GrMailOption } from "react-icons/gr";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
 return (
  <div className="py-3" style={{ backgroundColor: "#82AB81" }}>
   <div className="container">
    <div className="row d-flex align-items-center justify-content-center">
     <div className="col-3">
      <div
       style={{
        height: 245,
        width: 245,
        backgroundColor: "white",
        borderRadius: "3.438rem",
        padding: "1.25rem",
       }}
      >
       <Image src={mainLogo} alt="mainLogo" />
      </div>
     </div>
     <div className="col-6">
      <div className="row">
       <div className="col-2 d-flex justify-content-end align-items-center">
        <h1>
         <GrMapLocation id="mapIcon" />
        </h1>
       </div>
       <div className="col d-flex align-items-center">
        <p style={{ margin: 0, color: "white" }}>
         JL. BATAS INDAH NO.135, RT 5 / RW 01, Pd.BETUNG. KEC.Pd.AREN. KOTA
         TANGERANG SELATAN, 15224
        </p>
       </div>
      </div>
      <div className="row">
       <div className="col-2 d-flex justify-content-end align-items-center">
        <h1>
         <GrPhone id="mapIcon" />
        </h1>
       </div>
       <div className="col d-flex align-items-center">
        <p style={{ margin: 0, color: "white" }}>+6281281684473</p>
       </div>
      </div>
      <div className="row">
       <div className="col-2 d-flex justify-content-end align-items-center">
        <h1>
         <GrMailOption id="mapIcon" />
        </h1>
       </div>
       <div className="col d-flex align-items-center">
        <p style={{ margin: 0, color: "white" }}>
         assalamualaikum@yayasanfajarqolbi.org
        </p>
       </div>
      </div>
     </div>
     <div className="col-3">
      <div className="row">
       <div className="col-2 d-flex justify-content-end align-items-center">
        <h1>
         <FaYoutube />
        </h1>
       </div>
       <div className="col d-flex align-items-center">
        <p style={{ margin: 0, color: "white" }}>yayasanfajarqolbi</p>
       </div>
      </div>
      <div className="row">
       <div className="col-2 d-flex justify-content-end align-items-center">
        <h1>
         <FaInstagram />
        </h1>
       </div>
       <div className="col d-flex align-items-center">
        <p style={{ margin: 0, color: "white" }}>yayasanfajarqolbi_tangsel</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Footer;
