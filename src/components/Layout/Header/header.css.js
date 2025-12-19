import { css } from "lit";

export default css`
	:host {
		display: block;
		width: 100%;
	}
	h1 {
		font-size: 5rem;
		color: #fffb00;
		text-align: center;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
		margin: 0;
	}
	
  @media (max-width: 768px) {
    h1 {
			font-size: 2.5rem;
		}
  }
`;
