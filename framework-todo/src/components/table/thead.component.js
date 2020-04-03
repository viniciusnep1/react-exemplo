import React from 'react';
import PropTypes from 'prop-types';
import {
	ThStyle, TrStyle,
} from './thead.style';

const SingleActionHeader = () => (
	<th className='font-075em text-right'>#</th>
);

const MultiActionHeader = () => (
	<th className='font-075em text-right'>#</th>
);

const onClickOrder = (columnItem, order) => {
	let propertOrder =''
	if(columnItem.title === "Turno") {
		propertOrder = columnItem.title
	} else {
		propertOrder = columnItem.property
	}
	
	order.orderFunction(propertOrder, order.descending ? false : true)
};

const Thead = ({
	columns, acoesSingleButton, actions, order, ordenation
}) => (
	<thead>
		<TrStyle>
			{columns && columns.map((columnItem) => {
				/*
					Testa se o item de alguma coluna é número,
					se for alinha o mesmo a direita.

					Lembrando que deve ser colocado no array de
					objetos-coluna uma propriedade 'number', com o valor
					de false ou true
				*/
				const alignHeader = columnItem.number ? 'text-right': '';
				return (
					<ThStyle onClick={ordenation ? () => onClickOrder(columnItem, order) : null} style={ordenation ? { cursor: 'pointer' } : {}} className={alignHeader} key={columnItem.id}>
						<span className="mr-2"  >{columnItem.title}</span> 
						{	ordenation && order.orderColumn === columnItem.property && order.descending &&
							<i className="fas fa-sort-down"></i>
						}
						{	ordenation && order.orderColumn === columnItem.property && !order.descending &&
							<i className="fas fa-sort-up"></i>
						}
						{	ordenation && order.orderColumn !== columnItem.property &&
							<i className="fas fa-sort"></i>
						}
					</ThStyle>
				);
			})}

			{/* Header ação */}
			{(acoesSingleButton || (actions && actions.length <= 1)) && (
				<SingleActionHeader />
			)}

			{/* Header ações */}
			{actions && actions.length > 1 && (
				<MultiActionHeader />
			)}
		</TrStyle>
	</thead>
);

Thead.propTypes = {
	/** true: botão único com ação | false: botão select com várias ações */
	acoesSingleButton: PropTypes.bool,
	/** Array de objetos das actions */
	actions: PropTypes.arrayOf(PropTypes.object),
	/** Array de objetos com as colunas: title, property e number */
	columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Thead.defaultProps = {
	acoesSingleButton: false,
	actions: null,
	order: null
};

export default Thead;
