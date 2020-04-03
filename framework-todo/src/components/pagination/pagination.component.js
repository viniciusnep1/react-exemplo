import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ItemPaginateStyle } from './pagination.style';
import Button from '../button/button.component';
import ButtonPaginate from '../button/buttonPaginate.component';

const preventDefault = e => e.preventDefault();

export default class Pagination extends Component {
	static defaultProps = {
		showPages: 5,
	};

	static propTypes = {
		onChangePage: PropTypes.func.isRequired,
		totalPages: PropTypes.number.isRequired,
		currentPage: PropTypes.number.isRequired,
		showPages: PropTypes.number,
	};

	shouldComponentUpdate(nextProps) {
		const { totalPages, currentPage, showPages } = this.props;

		return (
			totalPages !== nextProps.totalPages
			|| currentPage !== nextProps.currentPage
			|| showPages !== nextProps.showPages
		);
	}

	onChangePage(pageNumber, event) {
		const { onChangePage } = this.props;
		event.preventDefault();
		onChangePage(pageNumber);
	}

	createButtonFirst = (click, disabled) => (
		<ItemPaginateStyle key='f'>
			<ButtonPaginate
				type='button'
				onClick={click}
				className='page-link'
				disabled={disabled}
				icon='fas fa-angle-double-left'
			>
				<span className='sr-only'>Primeiro</span>
			</ButtonPaginate>
		</ItemPaginateStyle>
	);

	createButtonPrevious = (click, disabled) => (
		<ItemPaginateStyle key='p'>
			<ButtonPaginate
				type='button'
				onClick={click}
				className='page-link'
				disabled={disabled}
				icon='fas fa-angle-left'
				isbackornext
			>
				<span className='sr-only'>Anterior</span>
			</ButtonPaginate>
		</ItemPaginateStyle>
	);

	createButton = (click, current, page) => (
		<ItemPaginateStyle key={page}>
			<ButtonPaginate
				type='button'
				onClick={click}
				className='page-link'
				ispagenumber
				iscurrent={current}
			>
				{page}
			</ButtonPaginate>
		</ItemPaginateStyle>
	);

	createButtonDots = click => (
		<ItemPaginateStyle key='d'>
			<Button
				type='button'
				onClick={click}
				className='page-link'
				style={{ backgroundColor: 'transparent !important' }}
			>
				<span aria-hidden='true'>...</span>
				<span className='sr-only'>...</span>
			</Button>
		</ItemPaginateStyle>
	);

	createButtonNext = (click, disabled) => (
		
		<ItemPaginateStyle key='n'>
			<ButtonPaginate
				type='button'
				onClick={click}
				className='page-link'
				disabled={disabled}
				icon='fas fa-angle-right'
				isbackornext={true}
			>
				<span className='sr-only'>Próximo</span>
			</ButtonPaginate>
		</ItemPaginateStyle>
	);

	createButtonLast = (click, disabled) => (
		<ItemPaginateStyle key='l'>
			<ButtonPaginate
				type='button'
				onClick={click}
				disabled={disabled}
				icon='fas fa-angle-double-right'
			>
				<span className='sr-only'>Último</span>
			</ButtonPaginate>
		</ItemPaginateStyle>
	);

	render() {
		const { totalPages, showPages, currentPage } = this.props;

		if (totalPages === 0) {
			return null;
		}

		const diff = Math.floor(showPages / 2);

		let start = Math.max(currentPage - diff, 1);
		
		const end = Math.min(start + showPages, totalPages);
		
		if (totalPages >= showPages && end >= totalPages) {
			start = totalPages - showPages;
		}
		
		let buttons = [];
		
		let btnEvent;
		
		let iscurrent;
		
		for (let i = start > 0 ? start : 1; i <= end; i++) {
			iscurrent = currentPage === i;
			if (iscurrent) {
				btnEvent = preventDefault;
			} else {
				btnEvent = this.onChangePage.bind(this, i);
			}
			buttons.push(this.createButton(btnEvent, iscurrent, i));
		}

		const firstHandler = this.onChangePage.bind(this, 1);
		const prevHandler = this.onChangePage.bind(this, currentPage - 1);

		let nextHandler;
		if (currentPage < totalPages ) {
			nextHandler = this.onChangePage.bind(this, currentPage + 1);
		}

		const lastHandler = this.onChangePage.bind(this, totalPages);

		if (
			totalPages > 1
			&& currentPage !== totalPages
			&& currentPage !== 1
			) {
				
			buttons = [
				this.createButtonFirst(firstHandler),
				this.createButtonPrevious(prevHandler),
				buttons,
				this.createButtonNext(nextHandler),
				this.createButtonLast(lastHandler),
			];
		} else if (
			totalPages > 1
			&& currentPage === totalPages
		) {
			
			buttons = [
				this.createButtonFirst(firstHandler),
				this.createButtonPrevious(prevHandler),
				buttons,
				this.createButtonNext(nextHandler, true),
				this.createButtonLast(lastHandler, true),
			];
		} else if (totalPages > 1 && currentPage === 1) {
			buttons = [
				this.createButtonFirst(this.onChangePage.bind(this, 1), true),
				this.createButtonPrevious(prevHandler, true),
				buttons,
				this.createButtonNext(nextHandler),
				this.createButtonLast(this.onChangePage.bind(this, totalPages)),
			];
		}

		return <ul className='pagination mx-auto mt-3'>{buttons}</ul>;
	}
}
