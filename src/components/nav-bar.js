import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class NavBar extends HTMLElement {
  connectedCallback() {
    this.placeholder = this.getAttribute('placeholder') || 'search';
    this.title = this.getAttribute('title') || '';
    this.icon = this.getAttribute('icon') || '';
    this.render();
  }
  render() {
    this.innerHTML = `
    <style>
    .sizeimage-carousel {
      width: 100%;
      height: 350px;
      object-fit: cover;
      object-position: center;
    }
    #navbar{
      background-color: #c21414;
    }
    </style>

    <nav id="navbar" class="navbar navbar-expand-lg navbar-light  p-4">
        <div class="container-fluid">
          <div>
            <img src="https://i.ibb.co/rc8Dp3r/SAGE-removebg-preview.png" href = "index.html" class="imageNav" alt="logo">
            <a class="navbar-brand" style="color: white" href="/">Recipe Mama</a>
          </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" style = "color : white;" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style = "color : white;" aria-current="page" href="#about">Tentang Kami</a>
                    </li>
                    <form class="d-flex">
                    <input class="form-control me-2" type="search" id="cari" placeholder="${this.placeholder}" aria-label="Search">
                        <button class="btn btn-outline-dark" type="submit"><i class="bi bi-search text-white"></i>
                        ${this.title}</button>
                    </form>
                </ul>
            </div>
        </div>
    </nav>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://www.masakapahariini.com/wp-content/uploads/2022/06/beef-enoki-don-400x240.jpg" class="d-block sizeimage-carousel" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h2>Beef Enoki Don</h2>
            <p>Makanan Khas Jepang Viral Bikin Nagih</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://www.masakapahariini.com/wp-content/uploads/2022/05/ikan-ayam-ayam-panggang-bumbu-pesmol-400x240.jpg" class="d-block sizeimage-carousel" alt="case study vanitas">
          <div class="carousel-caption d-none d-md-block">
            <h2>Ikan Panggang Bumbu</h2>
            <p>Enak dan Cepat</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://www.masakapahariini.com/wp-content/uploads/2022/05/resep-samosa-ayam-sayuran-500x300.jpg" class="d-block sizeimage-carousel" alt="akebi-chan no sailor fuku">
          <div class="carousel-caption d-none d-md-block">
            <h2>Enak-Enak</h2>
            <p>Masakan yang mudah dibuat</p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  `;
  }
}

customElements.define("nav-bar", NavBar);
