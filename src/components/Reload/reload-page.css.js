import { css } from "lit";

export default css`
  :root {
    display: block;
  }
	div {
		display: flex;
		flex-direction: column;
    justify-content: center;
    align-items: center;
		width: 100%;
    height: 100%;
	}
	p {
    text-align: center;
		font-size: 2rem;
    color: #fffb00;
	}
	button {
		max-width: 220px;
    width: 100%;
		height: auto;
    background-color: transparent;
    border: none;
	}
	img {
		width: 100%;
		object-fit: contain;
	}
`;
