import React from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import StringHelper from '../../utils/stringHelper';
import ObjectHelper from '../../utils/objectHelper';
import Subtitle from '../subtitle/subtitle.component';
import {
	ButtonDropdownStyle, ButtonStyle, IconStyle, TdStyle, TrStyle,
} from './table.style';
import DateHelper from '../../utils/dateHelper'

// Função para caso não haja dados para serem mostrados
const EmptyMessage = ({ emptyColSpan, emptyMessage }) => (
	<TrStyle>
		<TdStyle
			colSpan={emptyColSpan}
			className='text-center'
		>
			<Subtitle>{emptyMessage}</Subtitle>
		</TdStyle>
	</TrStyle>
);


// Função para caso seja escolhido apenas um botão de ação
const SingleActionButton = ({ action, item }) => (
	<TdStyle className='text-left'>
		{action.map(actionItem => (
			
					<ButtonStyle
						primary
						disabled={actionItem.enabled ? !actionItem.enabled(item) : false}
						key={actionItem.id}
						className='btn btn-secondary btn-sm'
						type='button'
						onClick={() => actionItem.action(item)}
						title={actionItem.name}
					>
						<IconStyle
							className={
								actionItem.icon
							}
						/>
					</ButtonStyle>
			
		))}
	</TdStyle>
);

// Função para caso seja escolhido um select de ações
const MultiActionButton = ({ actions, item }) => (
	<TdStyle className='text-right' id={'menu-acaoo'}>
		<div className='dropdown'>
			<ButtonDropdownStyle
				className='btn btn-secondary btn-sm dropdown-toggle'
				type='button'
				id={'menu-acao'}
				data-toggle='dropdown'
				aria-haspopup='true'
				aria-expanded='false'
			>
				Ações
			</ButtonDropdownStyle>
			<div
				className='dropdown-menu'
				aria-labelledby='menu-acao'
			>
				{/* Aplica regra para renderizar o action */}
				{actions.map(actionItem => (!actionItem.checkRule || actionItem.show(item)
					? (
						
								<button
									disabled={actionItem.enabled ? !actionItem.enabled(item) : false}
									key={actionItem.id}
									className='dropdown-item btn-sm'
									type='button'
									onClick={() => actionItem.action(item)}
								>
									<IconStyle className={actionItem.icon} />
									{' '}
									{actionItem.name}
								</button>
					)
					: null))}
			</div>
		</div>
	</TdStyle>
);

const validDate = (newState, event, document) => {
	var date = newState[event.target.name];
	if(!DateHelper.isDataValida(date)){
		document.style.boxShadow  = " rgb(255, 0, 0) 0px 0px 0px inset, rgb(255, 0, 0) 0px 0px 10px";
		document.style.borderRadius = "5px";
	}else{
		document.style.boxShadow  = "none";
		document.style.borderRadius = "none";
	}
}


const Tbody = ({
	acoesSingleButton,
	actions,
	columns,
	data,
	emptyColSpan,
	emptyMessage,
	exibirTotal,
	onClick,
	showTotal,
	trClass,
	handleChangeInputTable,
	handleButtonTable,
}) => (
	<tbody>
		{/* Verifica se há dados, se não exibe a mensagem de que não há itens */}
		{_.isEmpty(data) && (
			<EmptyMessage emptyMessage={emptyMessage} emptyColSpan={emptyColSpan} />
		)}

		{data && data.map((item) =>{

			return ( <TrStyle className={trClass } onClick={onClick} key={item.id}>
				{columns.map((columnItem) => {
					const content = ObjectHelper.getValueByPropertyName(columnItem.property,item);
					console.log('content: ', content);
					const alignField = columnItem.number ? 'text-left' : '';
					return (
						<TdStyle className={alignField} key={columnItem.id} title={content !== null ? content.toString() : ""}>
							{
								columnItem.icon
								?
									<div style={{marginLeft: 10}}>
										{
											content === true && 
											<i className="fas fa-check-circle" style={{color: "green", fontSize: 20}}></i>
										}
										{
											content === null && 
											<i class="fas fa-times-circle" style={{color: "red", fontSize: 20}}></i>
										}
									</div>
								:
								columnItem.button
								?
									<div type="button" title="" onClick={() => handleButtonTable(item)} >
										<icon style={{fontSize: 14}} className="far fa-eye" /> Visualizar
									</div>
								:
								columnItem.input
								?
									<input
										className='form-control bmd-form-group'
										name="nome"
										onChange={handleChangeInputTable({item: item, coluna: columnItem.property})}
										value={content === null ? "" : parseInt(content, 10)}
										htmlFor="nome"
										autoComplete="off"
										maxlength="40"
										type="number"
									/>
								:
								!columnItem.template
								? StringHelper.truncate(content, 50)
								:  columnItem.template(content)
							}
						</TdStyle>
					);
				})}
					{acoesSingleButton && actions && (
					<SingleActionButton action={actions} item={item} />
				)}

				{/* Testa se ações será apenas um select com várias ações */}
				{!acoesSingleButton && actions && (
					<MultiActionButton actions={actions} item={item} />
				)}
			</TrStyle>);

		})}
			{showTotal === false ? null : (
			<TrStyle>
				{exibirTotal(columns, data)}
			</TrStyle>
		)}
	</tbody>
);


Tbody.propTypes = {
	/** true: botão único com ação | false: botão select com várias ações */
	acoesSingleButton: PropTypes.bool,
	/** Array de objetos das actions */
	actions: PropTypes.arrayOf(PropTypes.object),
	/** Array de objetos com as colunas: title, property e number */
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
	/** Array de objeto vindo do backend que será renderizado pela tabela */
	data: PropTypes.arrayOf(PropTypes.object),
	/** Tamanho da coluna columns + 1 */
	emptyColSpan: PropTypes.number.isRequired,
	/** Mensagem caso não haja nada cadastro, ou seja, data = [] */
	emptyMessage: PropTypes.string.isRequired,
	/** Função para exibir quantidade total de uma coluna */
	exibirTotal: PropTypes.func,
	/** Soma dos valores das colunas */
	showTotal: PropTypes.bool,
};

Tbody.defaultProps = {
	acoesSingleButton: false,
	exibirTotal: () => { },
	actions: null,
	showTotal: false,
	data: [],
};

export default Tbody;
