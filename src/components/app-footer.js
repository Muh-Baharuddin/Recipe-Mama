import "bootstrap/dist/css/bootstrap.min.css";

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <footer>
        <p><a href="#">Back to top</a></p>
        <p>Capstone Project &#169; 2022, Studi Independen Batch 2 · Dicoding</p>
    </footer>
  `;
  }
}

customElements.define("app-footer", AppFooter);