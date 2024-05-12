import logo from '../LogoTunelend.png';
import logobiru from './logobiru.png';
import caca from './caca.png';
import dinda from './dinda.png';
import angel from './angel.png';
import khabil from './khabil.png';
import unima from './unima.png';
import fikri from './fikri.png';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';
import kampusmerdeka from '../kampusmerdeka.png';
import infinit from '../Infinit.png';
import './TentangKami.css';
export const TentangKami = () => {
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
                                    <a class="nav-link text-navbar" aria-current="page" href="/">Beranda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-navbar" href="/tentangkami">Tentang Kami</a>
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

                <section class="align-items-center" id="alatmusik">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={logobiru} class="img-fluid rounded-start logobiru-gambar" alt="logobiru" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title tittle-card ratakiri">Tentang TuneLend</h5>
                                    <br /><div class="card-text tittle-cardbiasa ratakiri">TuneLend merupakan website yang dibuat khusus untuk
                                        membantu masyarakat kota Malang dengan latar belakang
                                        hobi bermusik. Kami menyediakan platform untuk menghubungkan
                                        mereka yang memiliki alat musik dengan mereka yang memiliki
                                        keterbatasan untuk bermain alat musik.  Dengan TuneLend pemilik
                                        alat musik bisa mendapatkan penghasilan tambahan dengan
                                        menyewakan alat musiknya, sementara para penyewa bisa
                                        menemukan alat musik yang mereka butuhkan dengan mudah dan
                                        harga yang lebih terjangkau.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="padding-card" id='anggota'>
                    <br />
                    <br />
                    <h2>Tim Kami</h2>
                    <div class="table-responsive">
                        <table class="table">
                            <tr>
                                {data.map((d) => (
                                    <td>
                                        <div class="card card-tentang ratatengah padding-ccard">
                                            <img src={d.img} class="card-img rounded mx-auto d-block" alt="caca" />
                                            <div class="card-body">
                                                <h3 class="card-text">{d.name}</h3>
                                                <h5>{d.as}</h5>
                                                <p>{d.review}</p>
                                                <img src={instagram} alt='...' />
                                                <img src={linkedin} class="linkedin" alt='...' />
                                                <img src={github} alt='...' />
                                            </div>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </table>
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
                        <br />
                    </div>
                </section>

            </header>
        </div>
    );
}

const data = [
    {
        name: `Marchanda Balqis`,
        img: caca,
        as: `Hustler`,
        review: `Universitas Muhammadiyah Malang`,
    },
    {
        name: `Adinda Eka M.W`,
        img: dinda,
        as: `Hipster`,
        review: `Politeknik Negeri Jember`,
    },
    {
        name: `Unima Hia`,
        img: unima,
        as: `Hipster`,
        review: `Politeknik Negeri Batam`,
    },
    {
        name: `Angel Maria`,
        img: angel,
        as: `Hacker`,
        review: `Politeknik Negeri Batam`,
    },
    {
        name: `Khabil Putra P`,
        img: khabil,
        as: `Hacker`,
        review: `Universitas Jenderal Achmad Yani Yogyakarta`,
    },
    {
        name: `Fikri Agus T`,
        img: fikri,
        as: `Hacker`,
        review: `Universitas Negeri Surabaya`,
    },
]