import { LitElement, html } from "lit";
import styles from "./header.css.js";

export class Header extends LitElement {

  static get styles() {
    return [styles];
  }
  
	render() {
		return html`
			<header>
				<h1>The Simpsons Memory Game</h1>
			</header>
		`;
	}
}
customElements.define('header-page', Header)