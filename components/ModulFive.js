import Image from "next/image";
import mainLogo from "./assets/mainLogo.png";

const ModulFive = () => {
 return (
  <div style={{ backgroundColor: "#D7EDD3" }}>
   <div className="container">
    <div className="row d-flex justify-content-center">
     <div style={{ height: "25rem", width: "25rem" }}>
      <Image src={mainLogo} alt="mainlogo" />
     </div>
    </div>
    <br />
    <div className="row d-flex justify-content-center">
     <div className="col">
      <h2 style={{ fontWeight: "bold", color: "#075402" }}>-Kotak Hijau</h2>
      <p>
       Menunjukkan Kejujuran dan Stabilitas. Kotak Hjiau Adalah Bentuk Yang Umum
       Digunakan dan Terpercaya. Hal ini Disebabkan Karena Umumnya Tulisan Yang
       Kita Baca Disusun DalamBentuk Kotak, Maka Bentuk Tersebut Menjadi
       Familiar, Aman dan Nyaman.
      </p>
      <br />
      <p>
       Kotak Memberikan Kesesuaian, Kedamaian, Soliditas, Keamanan dan
       Kesetaraan. Keakraban dan Stabilitasnya, Bersamaan Dengan Sifatnya Yang
       Terlalu Biasa Dapat Terlihat Membosankan. Kotak Umumnya Tidak Menarik
       Perhatian Namun Dapat Dimiringkan Untuk Menambahkan Twist Yang Tak
       Terduga. Misalnya Pada Halaman Web Yang Memiringkan Gambar Yang Dibingkai
       Agar Terlihat Menonjol.
      </p>
     </div>
     <div className="col">
      <h2 style={{ fontWeight: "bold", color: "#FFC705" }}>-Kotak Kuning</h2>
      <p>
       Ini Melambangkan Perhatian, Keceriaan, Bahagia, Ingin Tahu, Senang,
       Positif dan Hangat. Sebagai Warna Yang Cerah dan Memiliki Daya Tarik
       Paling Tinggi Dibandingkan Dengan Warna Lain, Maka Warna Ini Sering
       Dipakai Untuk Rambu Lalu Lintas Yang Melambangkan Hati-Hati.
      </p>
      <br />
      <p>Menguatkan Motivasi dan Meningkatkan Mood.</p>
      <ul>
       <li>
        Secara Psikologis Dikaitkan Dengan Kecerdasan, Kepercayaan Diri dan Ide
        Cemerlang
       </li>
       <li>
        Berkesan Positif Sehingga Dipakai Untuk Menghilangkan Keragu-raguan
       </li>
       <li>Menghalau Rasa Gelisah</li>
      </ul>
     </div>
     <div className="col">
      <h2 style={{ fontWeight: "bold", color: "#075402" }}>-Kotak Hijau</h2>
      <p>
       Mewakili Kehidupan, Kesegaran, Lingkungan Hidup dan Pembaharuan. Warna
       Hijau Membangkitkan Emosi Yang Menenangkan.
      </p>
     </div>
    </div>
   </div>
   <br />
  </div>
 );
};

export default ModulFive;
