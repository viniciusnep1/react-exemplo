import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './button.component';

const story = storiesOf('Component/Button', module);

const onBtnClick = action('O botão foi clicado!');

if (process.env.NODE_ENV !== 'test') {
	story.add('Read Me',
		withInfo()(() => (
			<Button type='button' text='Título' primary onClick={onBtnClick} />
		)));
}

story.add('primary', () => <Button type='button' text='Título' primary onClick={onBtnClick} />);
story.add('cancel', () => <Button type='button' text='Título' onClick={onBtnClick} cancel />);
story.add('com ícone', () => <Button type='button' text='Título' primary onClick={onBtnClick} icon='fas fa-plus' />);
