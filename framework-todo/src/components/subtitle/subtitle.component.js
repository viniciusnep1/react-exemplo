import React from 'react';
import { SubtitleStyle } from './subtitle.style';

const Subtitle = (props) => <SubtitleStyle nopadding={props.nopadding}>{props.children}</SubtitleStyle>;

export default Subtitle;
