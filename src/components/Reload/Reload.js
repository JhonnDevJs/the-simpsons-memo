import { LitElement, html } from "lit";
import styles from "./reload-page.css.js";
import reloadImage from "../../assets/reload-arrow.webp";

export class Reload extends LitElement {
	static get styles() {
		return [styles];
	}

	render() {
		return html`
			<div>
				<p>END GAME</p>
				<button
					@click=${() => this.dispatchEvent(new CustomEvent("reload-game"))}
					aria-label="click here for reload"
				>
					<img src=${reloadImage} alt="reload" />
				</button>
			</div>
		`;
	}
}
customElements.define("reload-page", Reload);
