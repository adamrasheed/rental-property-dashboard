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
    `flex-direction: column; max-height: 100vh; align-items: flex-start; justify-content: flex-start;`}
`;

export default Container;
