import styled from 'styled-components';
import variaveis from '../../styles/variaveis.scss';

export const ItemPaginateStyle = styled.li`
	button {
		z-index: 1;
		color: ${props => (props.iscurrent ? variaveis.whiteColor : variaveis.btnColor)};
		background-color: ${props => (props.iscurrent ? variaveis.btnColor : 'none')};
		border-color: #ffffff;
		border-radius: 0.25rem;
		&:focus {
			box-shadow: none !important;
			border: none;
		}
	}
`;
