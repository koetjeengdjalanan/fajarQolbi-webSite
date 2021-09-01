import Image from "next/image";
import handNlove from "./assets/21293331.png";
import fistHand from "./assets/28657011.png";

const ModulThree = () => {
 return (
  <div className="bgModuleThree vh-100 d-flex align-items-center">
   <div className="container py-5">
    <div className="row">
     <div className="col-9 d-flex justify-content-end">
      <div className="">
       <h2 className="text-right" style={{ fontSize: "3vw" }}>
        Visi
       </h2>
       <p className="text-right" style={{ fontSize: "3vw" }}>
        Membangun Generasi Qurani, Percaya Diri dan Rendah Hati
       </p>
      </div>
     </div>
     <div className="col-3">
      <Image src={handNlove} alt="handNlove" />
     </div>
    </div>
    <div className="row">
     <div className="col-3 d-flex justify-content-end">
      <Image src={fistHand} alt="fistHand" />
     </div>
     <div className="col-9">
      <h2 style={{ fontSize: "3vw" }}>Misi</h2>
      <p style={{ fontSize: "3vw" }}>
       Membantu Mewujudkan Cita-Cita Anak-Anak Yatim Piatu, Dhuafa dan Paket
       Sembako Untuk Para Janda & Dhuafa yang Menjadi Binaan (Majlis Taklim)
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ModulThree;
