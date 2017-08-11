import React from 'react';
import PropTypes from 'prop-types';
import {Nav} from './nav';
import {Ul} from './ul';
import {Li} from './li';
import {ListLink} from './list-link';
import {A} from './a';

export const NavBar = ({onLoginClick}) => (<Nav>
		<Ul>
			<Li>
				<A
					onClick={onLoginClick}
					activeClassName="active"
				>
					Login | Signup
				</A>

			</Li>
		</Ul>
	</Nav>);

	NavBar.propTypes = {
		onLoginClick: PropTypes.func.isRequired,
	};
