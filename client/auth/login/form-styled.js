import React from 'react';
import styled, {css} from 'styled-components';
import {media, S} from 'auth/modal/modal-styled';

export const $color1 = '#343642';
export const $color3 = '#d2d8d8';
export function center($xy) {
	if($xy === 'xy') {
		return `
			left: 50%;
			top: 50%;
			bottom: auto;
			right: auto;
			transform: translate(-50%, -50%);`;
	}
	if($xy === 'x') {
		return `
			left: 50%;
    	right: auto;
			transform: translate(-50%, -50%);`;
	}
	return `
		top: 50%;
    bottom: auto;
		transform: translate(-50%, -50%);`;
}

export function borderRadious(rad = '.25rem') {
	return `
  	border-radius: ${rad};
`;
}

export const LoginContainer = styled.div`
	visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
	height: ${props => props.isVisible ? '100%' : '0'};
	width: ${props => props.isVisible ? '100%' : '0'};
	position: relative;
`;

export const LoginForm = styled.form`
	padding: 1.4rem;
`;

export const LoginFieldset = styled.p`
	position: relative;
	margin: 1.4rem 0;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const LoginLabel = styled.label`
	background-image: ${props => props.labelType ? `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-${props.labelType}.svg)` : 'none'};
	font-size: .9rem;
	display: inline-block;
	position: absolute;
	left: 15px;
	${center('y')}
	height: 20px;
	width: 20px;

	overflow: hidden;
	text-indent: 100%;
	white-space: nowrap;
	color: transparent;
	text-shadow: none;

	background-repeat: no-repeat;
	background-position: 50% 0;
`;

export const LoginEmailLabel = styled(LoginLabel)`
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-email.svg');
`;

export const LoginPasswordLabel = styled(LoginLabel)`
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-password.svg');
`;

export const LoginUsernameLabel = styled(LoginLabel)`
	background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-username.svg');
`;

export const LoginInput = styled.input`
	font-size: medium;
	margin: 0;
	padding: 0;
	${borderRadious()};
	width: ${props => props.fullWidth ? '100%' : 'inherit'};
	height: 2.75rem;
	text-indent: 2.75rem;
	padding: .3rem;
	border: 1px solid ${$color3};
	&:focus {
		border-color: ${$color1};
		box-shadow: 0 0 .32rem rgba(52, 54, 66, .1);
		outline: none;
	}
	background-repeat: no-repeat;
	background-position: 2px 3px;
	&[type=password] {
	}
`;

export function triangle($color, $width, $height) {
	return `
		border-style: solid;
    height: 0;
    width: 0;
		border-color: transparent transparent ${$color};
		border-width: 0 (${$width} / 2) ${$height};
	`;
}

export const LoginErrorMessage = styled.span`
	display: inline-block;
	position: absolute;
	left: -.32rem;
	bottom: -2.19rem;
	background: rgba(255, 0, 0, .9);
	padding: .8rem;
	z-index: 2;
	color: #fff;
	font-size: 13px;
	${borderRadious()}
	pointer-events: none;

	visibility: {props => props.isVisible ? 'visible' : 'hidden'};
	opacity: {props => props.isVisible ? '1' : '0'};
	transition: all .2s ease;
	&::after {
		content: '';
		position: absolute;
		left: 22px;
		bottom: 100%;
		${triangle('rgba(255, 0, 0, .9)', '16px', '16px')};

		${media.S`
			padding: 2rem;
			{LoginFieldset} {
				margin: 2rem 0;
				&:first-child {
					margin-top: 0;
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
  `}
	}
`;

export const LoginCheckbox = styled.input`

`;

export const LoginCheckboxLabel= styled.label`

`;

export const red = '#3883f4';

export const LoginButton = styled.button`
	padding: 16px 0;
	cursor: pointer;
	background: ${red};
	color: #fff;
	font-weight: bold;
	border: none;
	width: 100%;
`;
