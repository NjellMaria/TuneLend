import logo from './LogoTunelend.png';
import nada from './Nada.png';
import manmusic from './manmusic.png';
import animasitangan from './Animasitangan.png';
import kampusmerdeka from './kampusmerdeka.png';
import infinit from './Infinit.png';
import './App.css';
function App() {
  return (
    // Navbar
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-nav nav">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="logotunelend" width="110" height="40" />
            </a>
            <div class="d-flex" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                <li class="nav-item">
                  <a class="nav-link text-navbar" aria-current="page" href="#">Beranda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-navbar" href="#">Tentang Kami</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-navbar" href="#">Pertanyaan Umum</a>
                </li>
                <li class="nav-item">
                  <button class="btn btn-outline-success me-2 button-radius" type="button">Masuk</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}

        {/* Section */}
        <section class="align-items-center bekgron-gambar bekgron-gambar-fixed" id="project">
          <div class="ratakiri">
            <b class="tittle-judul">TuneLend</b>
            <p class="tittle-biasa space">sewa dan sewakan alat musik dengan mudah</p>
            <br /> <a href="#" class="btn btn-outline-success me-2 button-telusuri">Mulai Telusuri</a>
          </div>
          <img src={nada} class="nada" alt="nada" />
        </section>

        <section class="align-items-center" id="alatmusik">
          <div class="card mb-3 ">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={manmusic} class="img-fluid rounded-start manmusic-gambar" alt="manmusic" width={15} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title tittle-card ratakiri">Sewakan alat musik yang Anda miliki</h5>
                  <br /><div class="card-text tittle-cardbiasa ratakiri">Dirancang agar Anda dapat menyewakan alat musik Anda yang tidak digunakan menjadi sumber pendapatan tambahan. Apapun alat musik yang Anda miliki, mulai dari gitar, drum, piano, hingga alat musik eksotis lainnya.</div>
                  <br /> <div class=" tittle-cardbiasa ratakiri">Anda dapat dengan mudah mengelola daftar alat musik yang tersedia untuk disewakan, menetapkan harga, dan berkomunikasi dengan penyewa. </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="align-items-center" id="animasitangan">
          <div class="card mb-3 ">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title tittle-card ratakiri">Sewa alat musik yang Anda inginkan</h5>
                  <br /><div class="card-text tittle-cardbiasa ratakiri">Dirancang agar Anda dapat menyewa alat musik yang Anda butuhkan, mulai dari gitar, drum, piano, hingga alat musik eksotis lainnya dengan harga yang lebih terjangkau.</div>
                  <br /> <div class=" tittle-cardbiasa ratakiri">Platform kami menyediakan pengalaman sewa yang aman dan nyaman, dengan berbagai pilihan alat musik dari penyewa yang diverifikasi. </div>
                </div>
              </div>
              <div class="col-md-4">
                <img src={animasitangan} class="img-fluid rounded-start animasitangan-gambar" alt="animasitangan" width={15} />
              </div>
            </div>
          </div>
        </section>

        <section class="align-items-center bekgron-gambar bekgron-gambar-fixed" id="footer">
          <div class="container ratakiri font-putih">
            <div class="row">
              <div class="col-5"> <img src={logo} alt="logotunelend" width="110" height="40" /> <br />
                TuneLend merupakan website yang membantu masyarakat kota Malang untuk melanjutkan hobi bermusik dengan solusi dari kami, sewa dan sewakan alat musik yang anda miliki.</div>
              <div class="col"><br />Navigasi
                <a class="nav-link" href="#">Beranda</a>
                <a class="nav-link" href="#">Tentang</a>
                <a class="nav-link" href="#">Pertanyaan Umum</a>
              </div>
              <div class="col"><br />Ikuti kami
                <a class="nav-link" href="#">Instagram</a>
                <a class="nav-link" href="#">Tiktok</a>
                <a class="nav-link" href="#">X</a>
              </div>
              <div class="col"><br />Hubungi kami
                <a class="nav-link" href="#">+62 8212-3476-131 (Admin)</a>
                <a class="nav-link" href="#">tunelend@gmail.com</a>
              </div>
            </div>
            <img src={kampusmerdeka} class="img-fluid rounded-start gambar-kecil" alt="kampusmerdeka" />
            <img src={infinit} class="img-fluid rounded-start gambar-kecilinfinit" alt="kampusmerdeka" />
            <hr />
            <div class="ratatengah">© 2024 Semar(T). All Rights Reserved</div>
          </div>
        </section>

      </header>
    </div >
  );
}

export default App;
