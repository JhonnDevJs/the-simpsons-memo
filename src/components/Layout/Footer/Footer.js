import { LitElement, html } from "lit"
import styles from "./footer.css.js";

export class Footer extends LitElement {
  static get styles() {
    return [styles];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <footer>
        <p>Power by The Simpsons API & <a href="https://www.jhondev.xyz" target="_blank" rel="noopener noreferrer" title="Go to JhonDev site">JhonDev</a></p>
      </footer>
    `;
  }
}
customElements.define('footer-page', Footer)