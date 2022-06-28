import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../style/style.css"

class ContactUs extends HTMLElement {
connectedCallback() {
this.render();
}
render() {
this.innerHTML = `

<section id="contact" class="contact">
  <div class="container-fluid px-5 p-5">
    <div class="text-center mb-5">
      <h1 class="fw-bolder">Contact</h1>
      <p class="lead fw-normal text-muted mb-0">Tinggal saran dan pesan anda disini</p>
    </div>
    <div class="row gx-5 justify-content-center">
      <div class="col-lg-8 col-xl-6">
        <form id="contactForm">
          <div class="form-floating mb-3">
            <input class="form-control" id="name" type="text" placeholder="Nama" data-sb-validations="required" />
            <label for="name">Full Name</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" id="email" type="email" placeholder="name@example.com"
              data-sb-validations="required,email" />
            <label for="email">Email address</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890"
              data-sb-validations="required" />
            <label for="phone">Phone number</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."
              style="height: 10rem" data-sb-validations="required"></textarea>
            <label for="message">Message</label>
          </div>
          <div class="d-grid"><button class="btn btn-warning btn-lg" id="submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
</section>
`;
}
}
customElements.define("contact-us", ContactUs);