import PropTypes from 'prop-types';
import React from 'react';
import { ButtonStyle } from './button.style';

const Button = (props) => {
	const {
		disabled,
		onClick,
		primary,
		className,
		type,
		cancel,
		icon,
		text,
		children,
	} = props;

	return (
		<ButtonStyle
			disabled={disabled}
			onClick={onClick}
			primary={primary.toString()}
			className={className}
			type={type}
			cancel={cancel.toString()}
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
		</ButtonStyle>
	);
};

Button.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
	cancel: PropTypes.bool,
	icon: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.node,
};

Button.defaultProps = {
	disabled: false,
	onClick: () => null,
	primary: false,
	className: '',
	cancel: false,
	icon: '',
	text: '',
	children: '',
};

export default Button;
