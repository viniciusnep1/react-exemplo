import styled from 'styled-components';
import variaveis from '../../styles/variaveis.scss';

export const TableStyle = styled.table`
	text-align: ${props => (props.align ? props.align : 'center')};
	width: 100%;
	color: #737373;
	loading: {
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 1;
		width: 150px;
		height: 150px;
		margin: -75px 0 0 -75px;
		border: 16px solid #f3f3f3;
		border-radius: 50%;
		border-top: 16px solid #3498db;
		width: 120px;
		height: 120px;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
	}
`;

export const TrStyle = styled.tr`
	border-bottom: 1px solid #8d8d8d;
	color: ${variaveis.gray700};
	cursor: ${props => (props.pointer ? 'pointer' : 'default')};

	padding: 5px;
	:nth-child(even) {
		background-color: #f2f2f2;
	}
	border: 1px solid #ece4e4;
`;


export const ThStyle = styled.th`
	padding-bottom: 1%;
`;

export const TdStyle = styled.td`
	text-align: left;
	padding-left: 5px;
	border-right: 1px solid #ece4e4;
	font-size: 14px !important;
`;

export const IconStyle = styled.i`
	padding: 0.5em;
`;

export const ButtonStyle = styled.button`
	&& {
		background-color: ${variaveis.btnColor};
		border: none;
		padding: 0.1rem 0.12rem;
		&:hover,
		&:active,
		&:focus {
			box-shadow: none !important;
			border: none;
			background-color: ${variaveis.btnColorHover};
		}

	}
`;

export const ButtonDropdownStyle = styled.button`
	&& {
		background-color: ${variaveis.btnColor};
		border: none;
		&:hover,
		&:active,
		&:focus {
			box-shadow: none !important;
			border: none;
			background-color: ${variaveis.btnColorHover};
		}

	}
`;
