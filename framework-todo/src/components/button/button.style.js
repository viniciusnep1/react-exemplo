import { Button } from 'reactstrap';
import styled from 'styled-components';
import variaveis from '../../styles/variaveis.scss';

export const ButtonStyle = styled(Button)`
	&& {
		margin: 1.5px;
		max-height: 2.5em;
		
		/*
			Sempre colocar em primeiro o caso default.
			({ exemplo }) é um desestruturação da props
		*/
		background-color: ${variaveis.secondaryColor};

		${({ primary }) => (primary === 'true') && `
			background-color: ${variaveis.btnColor}
		`};

		${({ cancel }) => (cancel === 'true') && `
			background-color: ${variaveis.btnCancel}
		`};

		color: ${props => ((props.primary === 'true') || (props.cancel === 'true')
		? variaveis.textLight
		: variaveis.textDark)};
		border: none;
		&:hover,
		&:active {

			/*
				Sempre que tiver uma props que se repete em todos testes,
				se tiver um caso em que ela aparece sozinha, colocar ela em primeiro
			*/
			background-color: 'none';

			${({ disabled }) => !disabled && `
				background-color: ${variaveis.gray400}
			`};

			${({ primary, disabled }) => (primary === 'true') && !disabled && `
				background-color: ${variaveis.btnColorHover}
			`};

			${({ cancel, disabled }) => (cancel === 'true') && !disabled && `
				background-color: ${variaveis.btnCancelHover}
			`};

			border: none;
		}
		&:focus {
			box-shadow: none;
		}
	}
`;
