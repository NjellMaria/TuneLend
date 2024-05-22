import avatar from './avatar.png';
import logo from '../LogoTunelend.png';
import star from './star.svg';
import infinit from '../Infinit.png';
import kampusmerdeka from '../kampusmerdeka.png';
import './DashboardPenyewa.css';
export const DashboardPenyewa = () => {

    return (

        // Navbar
        <div className="App">
            <header className="App-header">
                <nav class="navbar navbar-expand-lg bg-nav navv">
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
                                    <a class="nav-link text-navbar" href="/tentangkami">Tentang Kami</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-navbar" href="#">Pertanyaan Umum</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-navbar" href="#">Penyewa</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-navbar" href="#">Pemilik</a>
                                </li>
                                <li class="nav-item">
                                    <img src={avatar} class="img-profile" alt="..." />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
                <br />
                <div class="container text-center">
                    <div class="perbesar">
                        {/* <div class="col"> */}

                        <h1 className='text-start'>Selamat datang, Aca</h1>
                        <br />

                        <ul class="nav bg-transparan nav-pills mb-3" id="pills-tab" role="tablist">
                            <div class="nav-menu">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Ringkasan</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sewa Alat Musik</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Riwayat Sewa</button>
                                </li>
                            </div>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            {/* RINGKASAN */}
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

                                <div className='row'>
                                    <div className='col'>
                                        <div class="col-sm-10 mb-3 mb-sm-0">
                                            <div class="card card-sewa">
                                                <div class="card-body">

                                                    <div id="carouselExampleDark" class="carousel carousel-dark slide">
                                                        <div class="carousel-indicators">
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active" data-bs-interval="10000">
                                                                <img src={avatar} class="d-block w-100" alt="..." />
                                                                <div class="carousel-caption d-none d-md-block">
                                                                </div>
                                                            </div>
                                                            <div class="carousel-item" data-bs-interval="2000">
                                                                <img src={avatar} class="d-block w-100" alt="..." />
                                                                <div class="carousel-caption d-none d-md-block">
                                                                </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <img src={avatar} class="d-block w-100" alt="..." />
                                                                <div class="carousel-caption d-none d-md-block">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                    </div>

                                                    <h4 class="card-title">Yamaha Gitar Klasik C80</h4>
                                                    <br /> <br />
                                                    <img src={star} alt='...' /> 4.8 • Tersedia di daerah sekitar kampus UMM 3
                                                    <br /> <br />
                                                    <p class="card-text rata-kiri">Gitar yamaha klasik tipe C80 dengan kondisi mulus,
                                                        senar baru ganti. Gitar ini adalah teman setia saya
                                                        dalam perjalanan musik saya, dan sekarang saya
                                                        ingin memberi kesempatan kepada orang lain untuk
                                                        keindahan suaranya.</p>
                                                    <br />
                                                    <a href="#" class="btn btn-primary button-kiri">Selengkapnya</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div class="card card-two">
                                            <div class="card-body">

                                                <div class="carddd rata-kiri">Riwayat Sewa</div>
                                                <div class="item">
                                                    <div class="item-title rata-kiri">Yamaha gitar klasik C80</div>
                                                    <div class="item-subtitle rata-kiri">I Gede Bagas Darma Prayogi • Tlogomas
                                                        <div class="item-time">2 minggu yang lalu</div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-title rata-kiri">Ibanez GRX120SP-PBL Electric Guitar, Phantom Blue</div>
                                                    <div class="item-subtitle rata-kiri">Fahreza Al-Amoudi • Saxophone <div class="item-time">1 bulan yang lalu</div></div>
                                                </div>
                                                <div class="item">
                                                    <div class="item-title rata-kiri">Hexagonal cajon zebrano wood</div>
                                                    <div class="item-subtitle rata-kiri">Indra Wardana • Soekarno Hatta <div class="item-time">3 bulan yang lalu</div></div>
                                                </div>
                                                <br />
                                                <div class="button-container">
                                                    <a href="#" class="button">Selengkapnya</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Sewa Alat Musik */}
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...

                                {/* <div class="scroll-container">
                                    <div class="scroll-content">
                                        <div class="item">
                                            <div class="card">

                                                {data.map((d) => (

                                                    <div>
                                                        <h3 class="card-title">{d.namagitar}</h3>
                                                        <br /> <br />
                                                        <img src={d.img} alt='...' /> {d.rating}
                                                        <br /> <br />
                                                        <p class="card-text rata-kiri">{d.ket}</p>
                                                        <br />
                                                        <a href="#" class="btn btn-primary button-kiri">Selengkapnya</a>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div> */}

                            </div>

                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
                        </div>
                        {/* <div class="col"> */}

                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* <div class="col"> */}




                        {/* </div> */}
                    </div>
                </div>

                {/* footer */}

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

            </header >
        </div >
    );
}

const data = [
    {
        namagitar: `Yamaha Gitar Klasik C80`,
        img: avatar,
        rating: `4,8 • Tersedia di daerah sekitar kampus UMM 3`,
        ket: `Gitar yamaha klasik tipe C80 dengan kondisi mulus, 
        senar baru ganti. Gitar ini adalah teman setia saya 
        dalam perjalanan musik saya, dan sekarang saya 
        ingin memberi kesempatan kepada orang lain untuk 
        keindahan suaranya.`,
    },
    {
        namagitar: `Ibanez GRX120SP-PBL Electric Guitar, Phantom Blue`,
        img: avatar,
        rating: `4,9 • Tersedia di daerah Saxophone`,
        ket: `Gitar kesayangan saya, pemakaian pribadi 2 tahun
        merk Ibanez type GRX120SP warna phantom blue.`,
    },
    {
        namagitar: `Yamaha Gitar Klasik C80`,
        img: avatar,
        rating: `4,8 • Tersedia di daerah sekitar kampus UMM 3`,
        ket: `Gitar yamaha klasik tipe C80 dengan kondisi mulus, 
        senar baru ganti. Gitar ini adalah teman setia saya 
        dalam perjalanan musik saya, dan sekarang saya 
        ingin memberi kesempatan kepada orang lain untuk 
        keindahan suaranya.`,
    },
]