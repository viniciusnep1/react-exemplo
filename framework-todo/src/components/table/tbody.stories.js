import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Tbody from './tbody.component';

const story = storiesOf('Component/Table/Tbody', module);

const onBtnClick = action('O botão foi clicado!');

/* Listagem alertas */
const columns = [
	{ title: 'Identificador', property: 'identificador' },
	{ title: 'Iniciador', property: 'iniciador' },
	{
		title: 'Data de ocorrência',
		property: 'dataOcorrencia',
	},
	{ title: 'Status', property: 'status' },
];
const emptyColSpan = columns.length + 1;
const emptyMessage = 'Não há alertas cadastrados';
const acoesSingleButton = false;

const actions = [
	{
		name: 'Visualizar',
		icon: 'fas fa-search',
		action: () => action('Botão visualizar clicado'),
		enabled: () => false,
	},
	{
		name: 'Cessar',
		icon: 'fas fa-redo',
		action: () => action('Botão cessar clicado'),
		enabled: item => item.status && item.status.statusAlerta === 'ALERTA_EMITIDO',
	},
	{
		name: 'Evoluir',
		icon: 'fas fa-edit',
		action: () => action('Botão evoluir clicado'),
		enabled: item => item.status && item.status.statusAlerta === 'EM_ANDAMENTO',
	},
	{
		name: 'Cancelar alerta',
		icon: 'fas fa-trash-alt',
		action: () => action('Botão cancelar clicado'),
		enabled: item => item.status && item.status.statusAlerta === 'EM_ANDAMENTO',
	},
];

const total = undefined;

const data = [
	{
		identificador: 1,
		iniciador: 'SEMA',
		dataOcorrencia: '23/05/97',
		status: 'Em andamento',
	},
];

if (process.env.NODE_ENV !== 'test') {
	story.add('Read Me',
		withInfo()(() => (
			<Tbody
				emptyColSpan={emptyColSpan}
				emptyMessage={emptyMessage}
				data={data}
				onClick={onBtnClick}
				columns={columns}
				acoesSingleButton={acoesSingleButton}
				actions={actions}
				total={total}
			/>
		)));
}

story.add('tbody listagem', () => (
	<Tbody
		emptyColSpan={emptyColSpan}
		emptyMessage={emptyMessage}
		data={data}
		onClick={onBtnClick}
		columns={columns}
		acoesSingleButton={acoesSingleButton}
		actions={actions}
		total={total}
	/>
));
