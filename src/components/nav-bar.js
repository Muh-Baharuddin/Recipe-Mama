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
  #navbar {
    background-color: #9DD6DF;
  }
</style>

<nav id="navbar" class="navbar navbar-expand-lg navbar-light  p-4">
  <div class="container-fluid">
    <div>
      <img src="https://i.ibb.co/rc8Dp3r/SAGE-removebg-preview.png" href="index.html" class="imageNav" alt="logo">
      <a class="navbar-brand" style="color: black" href="/">Recipe Mama</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style="color : black;" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color : black;" aria-current="page" href="#about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color : black;" aria-current="page" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="background container-fluid">
    <div class="jumbotron">
        <h1>RECIPE MAMA</h1>
        <h2>Resep dengan rasa dan kualitas yang enak dan sehat serta mudah untuk dilakukan</h2>
        <br />
    </div>
</div>

<div class="recipe2">
  <div class="container marketing">
    <hr class="featurette-divider">

    <div class="row featurette m-4">
      <div class="col-md-7 " style="text-align: justify;">
        <h3 style="font-weight: bold;"><strong>Recipe Mama</strong></h3>
        </br>
        <p class="lead" style="font-weight: bold;">
        Makanan adalah zat yang dimakan oleh makhluk hidup untuk mendapatkan nutrisi yang kemudian diolah menjadi energi. Karbohidrat, lemak, protein, vitamin, dan mineral merupakan nutrien dalam makanan yang dibutuhkan oleh tubuh. Cairan untuk dikonsumsi sering disebut minuman, tetapi kata 'makanan' juga bisa dipakai. Makanan yang dikonsumsi oleh manusia disebut pangan, sedangkan makanan yang dikonsumsi oleh hewan disebut pakan.
        </p>
      </div>
      <div class="col-md-5">
        <div>
          <div class="card">
            <img src="https://i.pinimg.com/564x/67/83/e0/6783e0f3296fc38f57dc05e6233a168b.jpg" class=" card-img-top"
              alt="...">
          </div>
        </div>

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette m-4">
      <div class="col-md-7 order-md-2" style="text-align: justify;">
        <h3 style="font-weight: bold;"><strong>Recipe Mama</strong></h3>
        </br>
        <p class="lead" style="font-weight: bold;">Memasak merupakan suatu kegiatan yang dilakukan oleh semua umat manusia didunia untuk memenuhi kebutuhan primernya. Memasak juga merupakan kegiatan yang tidak jauh dari kata bumbu dapur,alat masak dan bahan masakannya. Maka dari itu kami menyediakan platform dimana orang-orang dapat melihat resep masakan baik lokal maupun mancanegara. Platform ini sangat mudah untuk digunakan, karena memiliki fitur yang baik dan tampilan yang sangat user friendly jadi ibu-ibu tidak susah dalam penggunaannya. Hanya mencari kata kunci mau membuat makanan apa, maka akan keluar beberapa pilihan masakan dan resep yang siap langsung untuk digunakan.

      </div>
      <div class="col-md-5 order-md-1">
        <div class="card" style="height: 500x500;">
          <img src="https://i.ibb.co/hRVpfBH/Kuliner-Indonesia.jpg" class=" card-img-top"
            alt="...">
        </div>

      </div>
    </div>

    <hr class="featurette-divider">
  </div>
</div>
`;
}
}

customElements.define("nav-bar", NavBar);