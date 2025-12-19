import { css } from "lit";

export default css`
	:host {
		display: block;
		width: 100%;
	}
	.cloud-bg {
		display: grid;
		grid-template-rows: auto 1fr auto;
		background-image: url("/clouds-bg.webp");
		background-size: cover;
		min-height: 100dvh;
		width: 100%;
	}
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-gap: 10px;
		justify-content: center;
		align-items: center;
		padding: 25px;
	}
	.__loading {
		text-align: center;
		font-size: 3rem;
		color: #fffb00;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}
	wired-card {
		justify-items: center;
		text-align: center;
		background-color: #8e81bf;
	}
  .container__image{
    background-color: #284b8b;
    padding: 10px;
  }
	wired-image {
    background-color: #ffff;
	}
  .__name_person {
    color: #61c1f5;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

	@media (max-width: 768px) {
		.__loading {
			font-size: 1.5rem;
		}
	}
`;
