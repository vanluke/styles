import React from 'react';
import styled, {css} from 'styled-components';

const $color3 = '#d2d8d8';

export function clearfix() {
  return `
    &::after {
			content: "";
			display: table;
			clear: both;
		}
  `;
}
export const $S = '600px';
export const $M = '768px';
export const $L = '1170px';

export const media = {
  S: (...args) => css`
    @media (max-width: $S) {
      ${css(...args)}
    }
	`,
	M: (...args) => css`
		@media (max-width: $M) {
			${css(...args)}
		}
	`,
	L: (...args) => css`
		@media (max-width: $L) {
			${css(...args)}
		}
	`,
};

export function borderRadious(rad = '.25rem') {
	return `
  	border-radius: ${rad};
`;
}

export const ModalSwitchLink = styled.a`
		display: block;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: ${props => props.selected ? '#d2d8d8' : '#fff'};
		color: ${props => props.selected ? '#505260' : '#809191'}; rgba(210, 216, 216, .3);
`;

export const Modal = styled.section`
	transition: all .3s;
	visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
	opacity: ${props => props.isVisible ? 1 : 0};
	height: ${props => props.isVisible ? 'auto' : 0};
	width: ${props => props.isVisible ? 'auto' : 0};
`;

export const ModalBackdrop = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(52, 54, 66, .9);
	z-index: 1;
	overflow-y: auto;
	cursor: pointer;
	`;

export const ModalClose = styled.button`
	position: absolute;
	right: .5rem;
	top: .5rem;
	background: transparent;
	border: 0;
	outline: none;
`;

export const ModalCloseIcon = styled.span`
	cursor:pointer;
  &:after, &:before {
    content: '';
    height:20px;
    width:20px;
    border-top:1px solid #000;
    position: absolute;
    top:7px;
    right:-8px;
    transform: rotate(-45deg);
  }

  &:before {
    right:6px;
    transform: rotate(45deg);
  }

  &:hover {
 		opacity: .3;
  }
`;


export const ModalSwitchListItem = styled.li`
	width: 50%;
	display: inline-block;
	text-align: center;

	&:first-child ${ModalSwitchLink} {
		border-radius: .25rem 0 0 0;
	}

	&:last-child ${ModalSwitchLink} {
		border-radius: 0 .25rem 0 0;
	}
	${clearfix()}
`;

export const ModalBox = styled.div`
	position: relative;
	width: 90%;
	max-width: 600px;
	background: #FFF;
	margin: 3rem auto 4rem;
	cursor: auto;
	${borderRadious()}
	transform: translateY(0);
	height: 70%;
	transition: transform .3s ease-in;
  z-index: 3;

	${media.S`
		margin: 4rem auto;
		{ModalSwitchLink} {
				height: 70px;
				line-height: 70px;
		}
  `}
`;

export const ModalSwitch = styled.div`
	 ${clearfix()}
`;



export const ModalSwitchList = styled.ul`
	list-style: none;
	text-align: center;
	margin: 0;
	padding: 0;
	width: 100%;
	display: inline-block;
`;

export const ModalTab = styled.div`
	position: relative;
`;
