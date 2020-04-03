import PropTypes from 'prop-types';
import React from 'react';
import { ButtonPaginateStyle } from './buttonPaginate.style';

const ButtonPaginate = (props) => {
	const {
		onClick,
		className,
		type,
		isbackornext,
		iscurrent,
		ispagenumber,
		icon,
		text,
		children,
		disabled
	} = props;

	return (
		<ButtonPaginateStyle
			onClick={onClick}
			className={className}
			type={type}
			isbackornext={isbackornext.toString() ? isbackornext.toString() : "false"}
			iscurrent={iscurrent}
			ispagenumber={ispagenumber}
			disabled={disabled}
		>
			{icon ? (
				<span>
					<i className={icon} />
					{' '}
					{text}
				</span>
			) : (
				<span>{text}</span>
			)}
			{children}
		</ButtonPaginateStyle>
	);
};

ButtonPaginate.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
	icon: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.node,
	isbackornext: PropTypes.bool,
};

ButtonPaginate.defaultProps = {
	className: '',
	icon: '',
	text: '',
	children: '',
	isbackornext: false
};

export default ButtonPaginate;
