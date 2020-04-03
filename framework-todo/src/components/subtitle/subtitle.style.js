import styled from 'styled-components';
import variaveis from '../../styles/variaveis.scss';

export const SubtitleStyle = styled.h6`
  && {
    color: ${variaveis.textDark};
    padding-top: ${props => (props.nopadding ? "0%" : "2%")}
    font-family: ${variaveis.fontFamilyTitles};
    font-weight: bold;
  }
`;
