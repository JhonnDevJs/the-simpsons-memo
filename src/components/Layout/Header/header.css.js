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
	}
	
	@media (max-width: 834px) {
    h1 {
			font-size: 2.5rem;
		}
  }
	
	@media (max-width: 428px) {
		h1 {
			font-size: 1.2rem;
			margin-bottom: 0;
		}

	}
`;
