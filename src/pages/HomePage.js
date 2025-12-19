import { LitElement, html } from "lit";
import styles from "./home-page.css.js";
import { getCharacters } from "../api/TheSimpsonsDm.js";
import { Header } from "../components/Layout/Header/Header.js";
import { Footer } from "../components/Layout/Footer/Footer.js";
import { WiredCard } from "wired-elements";
import { WiredImage } from "wired-elements";
import cardBg from "../assets/card-bg.webp";

export class HomePage extends LitElement {
	async connectedCallback() {
		super.connectedCallback();
		this._chargeData();
	}

	static properties = {
		data: {
			type: Array,
		},
		cards: {
			type: Array,
		},
		cargando: {
			type: Boolean,
		},
		firstCardSelected: {
			type: Number,
		},
		secondCardSelected: {
			type: Number,
		},
	};

	static get styles() {
		return [styles];
	}

	constructor() {
		super();
		this.data = [];
		this.cards = [];
		this.imgeData = [];
		this.cargando = false;
		this.firstCardSelected = null;
		this.secondCardSelected = null;
	}

	async _chargeData() {
		this.cargando = true;
		this.data = await getCharacters();
		this.cards = [...this.data, ...this.data]
			.map((character) => ({ ...character, flipped: false, matched: false }))
			.sort(() => Math.random() - 0.5);
		console.log(this.data);
		this.cargando = false;
	}

	_handleClick(index) {
		const card = this.cards[index];

		// Evitar clicks si ya está volteada, emparejada o si ya hay 2 seleccionadas
		if (this.secondCardSelected !== null || card.flipped || card.matched)
			return;

		card.flipped = true;
		this.requestUpdate();

		if (this.firstCardSelected === null) {
			this.firstCardSelected = index;
		} else {
			this.secondCardSelected = index;
			this._checkMatch();
		}
	}

	_checkMatch() {
		const card1 = this.cards[this.firstCardSelected];
		const card2 = this.cards[this.secondCardSelected];

		if (card1.id === card2.id) {
			card1.matched = true;
			card2.matched = true;
			this._resetSelection();
		} else {
			setTimeout(() => {
				card1.flipped = false;
				card2.flipped = false;
				this._resetSelection();
			}, 1000);
		}
	}

	_resetSelection() {
		this.firstCardSelected = null;
		this.secondCardSelected = null;
		this.requestUpdate();
	}

	render() {
		return html`
			<div class="cloud-bg">
				<header-page></header-page>
				<main>
					<section>
						${this.cargando
							? html` <p class="__loading">Cargando...</p> `
							: html` ${this.cards.map(
									(character, index) => html`
										<wired-card
											id="${character.id}"
											elevation="3"
											@click=${() => this._handleClick(index)}
											style="visibility: ${character.matched
												? "hidden"
												: "visible"}; cursor: pointer;"
										>
											<div class="container__image">
												<wired-image
													src="${character.flipped
														? `https://cdn.thesimpsonsapi.com/200${character.portrait_path}`
														: cardBg}"
												></wired-image>
											</div>
											<p class="__name_person">${character.flipped ? character.name : "???"}</p>
										</wired-card>
									`
							  )}`}
					</section>
				</main>
				<footer-page></footer-page>
			</div>
		`;
	}
}
customElements.define("home-page", HomePage);
