import { css } from "lit";

export default css`
	:host {
		display: block;
		padding: 25px;
	}
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
	}
	p,
	a {
		margin: 0;
		padding: 0;
		text-align: center;
		text-decoration: none;
		color: #fffb00;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}
`;
