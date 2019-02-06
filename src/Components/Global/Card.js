import styled from "styled-components";
import { breakpoints, colors } from "../../Styles";

const Card = styled.div`
	border-radius: 8px;
	background: white;
	width: 100%;
	max-width: 480px;
	overflow: hidden;
	margin: 0 1rem 2rem 0;

	${props =>
    props.flex &&
    `
		display: flex;
		justify-content: flex-start;
		align-items: stretch;
		flex-direction: column;
	`}

	@media screen and (min-width: ${breakpoints.lrg}) {
		max-width: 360px;
	}
`;

export const CardTitle = styled.h2`
  padding: 2rem;
  margin: 0;
  font-size: 1.125rem;
  line-height: 1;
  font-weight: 600;
  color: ${colors.text};
`;

export default Card;
