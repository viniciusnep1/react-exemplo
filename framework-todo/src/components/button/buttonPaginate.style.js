/* eslint-disable no-nested-ternary */
import { Button } from 'reactstrap';
import styled from 'styled-components';
import variaveis from '../../styles/variaveis.scss';

function getStandardColor(props) {
	let color;

	if (props.ispagenumber && props.iscurrent) {
		color = variaveis.textLight;
	} else if (props.ispagenumber) {
		color = variaveis.textDark;
	} else {
		color = variaveis.btnColor;
	}
	return color;
}

function getActiveColor(props) {
	let color;

	if (props.isbackornext) {
		color = variaveis.btnColorHover;
	} else if (props.ispagenumber && props.iscurrent) {
		color = variaveis.textLight;
	} else {
		color = variaveis.textDark;
	}
	return color;
}

export const ButtonPaginateStyle = styled(Button)`
	&& {
		margin: 1.5px;
		max-height: 2.5em;
		background-color: ${props => (props.iscurrent ? variaveis.btnColor : 'transparent')};
		color: ${props => getStandardColor(props)};
		border: none;
		&:hover,
		&:active {
			background-color: ${props => (props.iscurrent ? variaveis.btnColorHover : 'transparent')};
			color: ${props => getActiveColor(props)};
			border: none;
		}
		&:focus {
			box-shadow: none;
		}
	}
`;
