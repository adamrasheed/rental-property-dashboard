import Styled from "styled-components";
import { container } from "../../Styles";

const Container = Styled.div`
	max-width: ${container.regular};
	margin: 0 auto;
	padding: 1rem;
	${props =>
    props.flex &&
    `
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
	flex-wrap: wrap;
	`}
	${props =>
    props.flexColumn &&
    `display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	max-height: 100vh;
	`}
	${props =>
    props.grid &&
    `	display: grid;
		grid-template-columns: 3;
	`}
	${props =>
    props.columns &&
    `
	column-count: 1;
		@media screen and (min-width: 768px){

			column-count: 3;
		}	

		div {
			break-inside: avoid;
		}
	`}
`;

export default Container;
