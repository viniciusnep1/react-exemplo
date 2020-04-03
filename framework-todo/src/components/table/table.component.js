import React, { Component } from 'react';
import Pagination from '../pagination/pagination.component';
import { TableStyle, TdStyle } from './table.style';
import Tbody from './tbody.component';
import Thead from './thead.component';

export default class Table extends Component {
	/* Função para exibir numeros dos resultados de cada página */
	getCurrentItems() {
		/* Retorna até qual item está sendo exibindo na página
			Ex: Exibindo de 1 a 15 (15 no caso é o currentItem)
				Exibindo de 16 a 18 (18 no caso é o currentItem)

			É usado também no calculo do item inicial de cada página
			Ex: Exibindo de 1 a 15
				(1 no caso é o (currentItem) - (o total de items vindos do backend - 1))

				Exibindo de 16 a 18 (16 no caso é o
				(currentItem) - (o total de items vindos do backend - 1))

			Se quiser alterar quantos serão exibidos por página,
			basta mudar o 10, para o valor que você quiser,
			lembrando que tudo será afetado, não só esse componente
			ATENÇÃO: ISSO NÃO MUDA A PAGINAÇÃO, APENAS O 'EXIBINDO RESULTADOS' DA PÁGINA
		*/

		const { totalItemPages, currentPage } = this.props;
		// Verificação feita para garantir que currentPage sempre seja um valor positivo
		const positiveCurrentPage = currentPage > 0 ? currentPage : 0;
		const currentItems = totalItemPages
			? (10 * (positiveCurrentPage + 1))
			- (10 - totalItemPages)
			: 0;
		return currentItems;
	}

	exibirTotal = (columns, data) => {
		const result = [];
		result.push(
			<TdStyle>
				<b>Total geral: </b>
			</TdStyle>,
		);
		for (let i = columns.length - 2; i > 0; i -= 1) {
			result.push(<TdStyle />);
		}
		/* Soma a coluna das quantidades do estoque e obtem o total */
		const quantidadeTotal = data.reduce((prev, elem) => prev + elem.quantidade, 0);
		result.push(
			<TdStyle style={{ textAlign: 'right' }}>
				<b>{quantidadeTotal}</b>
			</TdStyle>,
		);
		return result;
	}

	render() {

		const {
			props: {
				align,
				className,
				columns,
				data,
				actions,
				onClick,
				onClickRow,
				onChangePage,
				totalPages,
				currentPage,
				showPages,
				acoesSingleButton,
				emptyMessage,
				emptyColSpan,
				showTotal,
				showPaginate,
				trClass,
				handleChangeInputTable,
				handleChangeDateTable,
				orderColumn,
				descending,
				orderFunction,
				handleButtonTable,
				ordenation,
				handleChangeDate,
				
			},
		} = this;
		return (
			
			<div className='container-fluid'>
				<div>
					<TableStyle align={align} className={className} >
						<Thead
							columns={columns}
							acoesSingleButton={acoesSingleButton}
							actions={actions}
							order={{orderColumn,descending,orderFunction}}
							ordenation={ordenation}
						/>
						<Tbody
							key={0}
							emptyColSpan={emptyColSpan}
							emptyMessage={emptyMessage}
							data={data}
							onClick={onClick}
							columns={columns}
							acoesSingleButton={acoesSingleButton}
							actions={actions}
							showTotal={showTotal}
							exibirTotal={this.exibirTotal}
							trClass={trClass}
							handleChangeInputTable={handleChangeInputTable}
							handleChangeDateTable={handleChangeDateTable}
							handleButtonTable={handleButtonTable}
							handleChangeDate={handleChangeDate}
							onClickRow={onClickRow}
						/>

					</TableStyle>
				</div>
				<div className='row'>
					<div className='col-md-4 mt-4'>
					</div>
					<div className='col-md-8'>
						<div className='ml-5'>

							{showPaginate && (
								<Pagination
									onChangePage={onChangePage}
									totalPages={totalPages}
									currentPage={currentPage}
									showPages={showPages}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
