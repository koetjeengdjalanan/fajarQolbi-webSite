import Image from "next/image";
import kegPic1 from "./assets/qdws1.png";

const ModulFour = () => {
 return (
  <div
   className="container px-4"
   style={{ marginTop: "4.25rem", marginBottom: "4.25rem" }}
  >
   <div className="row my-5" style={{ backgroundColor: "#86D07E" }}>
    <div className="col">
     <h3>Ragam Kegiatan</h3>
     <ul>
      <li>Makan Bersama</li>
      <li>Peberian Uang Saku</li>
      <li>Kegiatan Sunatan Masal 3 Kali Setahun</li>
      <li>Pembayaran Uang Sekolah 6 Bulan Sekali oleh Penguruh YPQ</li>
      <li>Kegiatan Ekstrakurikuler Karate-Renang-Bola</li>
     </ul>
    </div>
    <div className="col">
     <Image src={kegPic1} alt="Ragam Kegitan" />
    </div>
   </div>
   <div className="row">
    <hr />
   </div>
   <div className="row my-5" style={{ backgroundColor: "#86D07E" }}>
    <div className="col">
     <Image src={kegPic1} alt="Ragam Kegitan" />
    </div>
    <div className="col">
     <h3>Kegiatan Rutin</h3>
     <ul>
      <li>
       Membantu Memberikan Beasiswa Biaya Sekolah Anak Yatim Piatu & Dhuafa Yang
       Menjadi Binaan Yayasan Fajar Qolbi per 6 Bulan Sekali & Didistibuskan
       kesekolah Masing-Masing Anak.
      </li>
      <li>
       Memberikan Paket Sembako Setiap Bulan Sesuai Kemampuan Yayasan Fajar
       Qolbi Kepada Janda & Dhuafa Yang Menjadi Binaan Yayasan Fajar Qolbi
       (Majlis Taklim). Dan Sebagian Besar Ibu-Ibu Tersebut Adalah Orang Tua
       Dari Anak-Anak Yatim Piatu Binaan Fajar Qolbi.
      </li>
      <li>
       Memberikan Pendidikan Agama Yang Wajib Diikuti Anak-Anak Yang Menjadi
       Binaan Yayasan Fajar Qolbi.
      </li>
      <li>
       Pemberian Uang Saku, Sebesar Rp.150.000,- / bulan Setiap Anak (Rp.5.000,-
       / hari)
      </li>
      <li>
       Kegiatan Sosial Secara Umum, Seperti Sunatan Masal, EkstraKurikuler Dan
       Sebagainya.
      </li>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default ModulFour;
