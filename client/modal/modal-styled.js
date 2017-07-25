import React from 'react';
import styled from 'styled-components';

export const Modal = styled.section`
	display: block;
  padding: 0 1rem;
  text-align: center;
	width: 100%;

	@media (min-width: 43.75rem) {
		text-align: right;
	}
`;

export const ModalLabel = styled.label`
	background: #000;
  border-radius: .2rem;
  color: #ffde16;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin: .5rem 1rem;
  padding: .75rem 1.5rem;
	transition: all .55s;

	&:hover {
		transform: scale(.97);
	}
`;

export const ModalInput = styled.input`
	position: absolute;
  right: 6.2rem;
  top: 2rem;
	z-index: -10;

	&:focus + label {
		transform: scale(.97);
	}
`;

export const ModalOverlay = styled.div`
	background: #fff;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
	z-index: ${props => props.isVisible ? 2 : -2};

	opacity: ${props => props.isVisible ? 1 : 0};
  overflow: hidden;
  transition: all .75s cubic-bezier(.19, 1, .22, 1);
`;

export const ModalBox = styled.div`

`;


export const ModalBoxLabel = styled.label`
	background: #FFDE16;
  border-radius: 50%;
  color: black;
  cursor: pointer;
  display: inline-block;
  height: 1.5em;
  line-height: 1.5em;
  position: absolute;
  right: .5em;
  top: .5em;
  width: 1.5em;
`;

export const ModalBoxHeader = styled.h2`
	color: #FFDE16;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const ModalBoxText = styled.p`
	color: #FFDE16;
  text-align: left;
`;
