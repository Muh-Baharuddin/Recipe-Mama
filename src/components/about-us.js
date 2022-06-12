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
    <aside class="container-fluid p-5">

        <h2 class="mb-5" style="text-align:center;">Our Team</h2>

        <article id="about" class="row" >
        

            <div class="col-md-3 col-6">
                <div class="card">
                    <img src="https://i.ibb.co/DYmr5Wm/4.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Muh. Baharudin</h5>
                        <a href="https://www.instagram.com/m.6ahar_m/" class="btn ig"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="btn btn-dark"><i class="bi bi-github"></i></a>
                        <a href="www.linkedin.com/in/muh-baharuddin-12b28b1bb" class="btn btn-primary"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-6">
                <div class="card">
                    <img src="https://i.ibb.co/S0LSFH9/1.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Daniel Siburian</h5>
                        <a href="https://www.instagram.com/danielsbr_/" class="btn ig"><i class="bi bi-instagram"></i></a>
                        <a href="https://github.com/Danielsiburian" class="btn btn-dark"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/siburian-channel-b699881b9/" class="btn btn-primary"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-6">
                <div class="card">
                    <img src="https://i.ibb.co/0njFNFm/2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Indrawan Mulyadi</h5>
                        <a href="https://www.instagram.com/indra_myd/" class="btn ig"><i class="bi bi-instagram"></i></a>
                        <a href="https://github.com/TimeWalk13" class="btn btn-dark"><i class="bi bi-github"></i></a>
                        <a href=":https://www.linkedin.com/in/indrawan-mulyadi-7b0b961aa" class="btn btn-primary"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-6">
                <div class="card">
                    <img src="https://i.ibb.co/QHSD0bB/3.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Iqbal Syarif</h5>
                        <a href="https://www.instagram.com/iqbalrz21/ " class="btn ig"><i class="bi bi-instagram"></i></a>
                        <a href="https://github.com/IqbalRajif" class="btn btn-dark"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/iqbal-rajif-96b930229/" class="btn btn-primary"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </article>
    </aside>

    <div class="container-fluid badan">
        <div class="row">
          <div class="col peding-100">
            <h1 style="color:black ;">Hubungi Kami</h1>
            <p style="color:black ;">
              Silahkan tinggalkan pesan anda, pada kolom yang tersedia.
            </p>
          </div>
   
          <div class="col peding-30 ">
           
            <form action="https://formspree.io/f/mknyezek" method="POST">
               
              <div class="form-group">
                <label for="">Nama Anda:</label>
                <input type="text" class="form-control" name="nama" placeholder="Masukkan Nama">
              </div>
   
              <div class="form-group">
                <label for="">E-mail Anda:</label>
                <input type="email" class="form-control" name="email" placeholder="Masukkan Email">
              </div>
   
              <div class="form-group">
                <label for="">Pesan Anda:</label>
                <textarea name="pesan" class="form-control" cols="30" rows="7"></textarea>
              </div>
   
              <input class="btn btn-primary" type="submit" value="kirim">
   
            </form>
          </div>
        </div>
      </div>
  `;
  }
}

customElements.define("about-us", AboutUs);
