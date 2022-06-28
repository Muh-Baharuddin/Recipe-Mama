import "bootstrap/dist/css/bootstrap.min.css";

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <footer>
        <h4><a href="#"><i class="bi bi-arrow-up-circle-fill"></i></a></h4>
        <p>Capstone Project &#169; 2022, Studi Independen Batch 2 · Dicoding</p>
    </footer>
  `;
  }
}

customElements.define("app-footer", AppFooter);