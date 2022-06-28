import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../style/style.css"

class AboutUs extends HTMLElement {
connectedCallback() {
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
</style>

    <article id="about">
    <div class="team2">
      <h3>Our Team</h3>
      <br>
      <div class="container marketing">
        <hr>

    <div class="row m-4">
      <div class="col-md-7 " style="text-align: justify;">
        <h3 style="font-weight: bold;"><strong>Indrawan Mulyadi</strong></h3>
        <h5 class="title ">Front End Developer
        </h5>
        <p class="lead">Mengoptimalkan user experience supaya program dapat diakses oleh pengguna dengan
          cepat (selanjutnya tugas ini dibebankan pada back end developer). Menggunakan HTML, JavaScript,
          dan CSS sebagai “senjata” andalan dalam membuat tampilan program aplikasi atau website yang user
          friendly.
        </p>
        <a href="https://www.instagram.com/indra_myd/" class="btn btn-outline-danger"><i class="bi bi-instagram"></i></a>
        <a href="https://github.com/TimeWalk13" class="btn btn-outline-dark"><i class="bi bi-github"></i></a>
        <a href=":https://www.linkedin.com/in/indrawan-mulyadi-7b0b961aa" class="btn btn-outline-primary"><i class="bi bi-linkedin"></i></a>
      </div>
      <div class="col-md-5">
        <div>
          <div class="card">
            <img src="https://i.ibb.co/VC7Tj1X/4.png" class=" card-img-top" alt="...">
          </div>
        </div>

      </div>
    </div>

    <hr>

    <div class="row m-4">
      <div class="col-md-7 order-md-2" style="text-align: justify;">
        <h3 style="font-weight: bold;"><strong>Muh. Baharudin</strong></h3>
        <h5 class="tittle ">Back End Developer
        </h5>
        <p class="lead">fokus pada database, scripting, dan arsitektur dari sebuah website. Kode yang
          ditulis oleh mereka akan membantu mengomunikasi database informasi kepada browser. Pada umumnya,
          orang-orang yang bekerja sebagai back end developer dikenal sebagai pemecah masalah terbaik.</p>
        <a href="https://www.instagram.com/m.6ahar_m/" class="btn btn-outline-danger"><i class="bi bi-instagram"></i></a>
        <a href="https://github.com/Gamma-core" class="btn btn-outline-dark"><i class="bi bi-github"></i></a>
        <a href="www.linkedin.com/in/muh-baharuddin-12b28b1bb" class="btn btn-outline-primary"><i class="bi bi-linkedin"></i></a>
      </div>

      <div class="col-md-5 order-md-1">
        <div class="card">
          <img src="https://i.ibb.co/rmjxzQ0/3.png" class=" card-img-top" alt="...">
        </div>

      </div>
    </div>

    <hr>

    <div class="row m-4">
      <div class="col-md-7 " style="text-align: justify;">
        <h3 style="font-weight: bold;"><strong>Daniel Siburian</strong></h3>
        <h5 class="title ">Front End Developer
        </h5>
        <p class="lead">Mengoptimalkan user experience supaya program dapat diakses oleh pengguna dengan
          cepat (selanjutnya tugas ini dibebankan pada back end developer). Menggunakan HTML, JavaScript,
          dan CSS sebagai “senjata” andalan dalam membuat tampilan program aplikasi atau website yang user
          friendly.
        </p>
        <a href="https://www.instagram.com/danielsbr_/" class="btn btn-outline-danger"><i class="bi bi-instagram"></i></a>
        <a href="https://github.com/Danielsiburian" class="btn btn-outline-dark"><i class="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/siburian-channel-b699881b9/" class="btn btn-outline-primary"><i class="bi bi-linkedin"></i></a>
      </div>
      <div class="col-md-5">
        <div>
          <div class="card">
            <img src="https://i.ibb.co/MVJtPwf/2.png" class=" card-img-top" alt="...">
          </div>
        </div>

      </div>
    </div>

    <hr>

    <div class="row m-4">
      <div class="col-md-7 order-md-2" style="text-align: justify;">
        <h3 style="font-weight: bold;"><strong>Iqbal Rajif</strong></h3>
        <h5 class="tittle ">Back End Developer
        </h5>
        <p class="lead">fokus pada database, scripting, dan arsitektur dari sebuah website. Kode yang
          ditulis oleh mereka akan membantu mengomunikasi database informasi kepada browser. Pada umumnya,
          orang-orang yang bekerja sebagai back end developer dikenal sebagai pemecah masalah terbaik.</p>
        <a href="https://www.instagram.com/iqbalrz21/" class="btn btn-outline-danger"><i class="bi bi-instagram"></i></a>
        <a href="https://github.com/IqbalRajif" class="btn btn-outline-dark"><i class="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/iqbal-rajif-96b930229/" class="btn btn-outline-primary"><i class="bi bi-linkedin"></i></a>
      </div>

      <div class="col-md-5 order-md-1">
        <div class="card">
          <img src="https://i.ibb.co/JcrWHLs/1.png" class=" card-img-top" alt="...">
        </div>
      </div>
    </div>
  </div>
  </article>
`;
}
}

customElements.define("about-us", AboutUs);