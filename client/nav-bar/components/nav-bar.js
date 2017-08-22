import React from 'react';
import PropTypes from 'prop-types';
import {Nav} from './nav';
import {Ul} from './ul';
import {SecretListLink} from './secret-link';
import {SecretNavButton}  from './secret-button';
import {NavButton} from './nav-button';

export const NavBar = ({
	onLoginClick,
	isAuthenticated,
	user,
	onLogoutClick,
}) => (<Nav>
		<Ul>
			<NavButton
				onClick={onLoginClick}
				activeClassName="active"
			>Login | Signup
			</NavButton>
			<SecretNavButton
				isAuthenticated={isAuthenticated}
				onClick={
					onLogoutClick
				}
				activeClassName="active"
			>
				Logout
			</SecretNavButton>
			<SecretListLink
				isAuthenticated={isAuthenticated}
				to="/trips"
				activeClassName="active"
			>
				Trips
			</SecretListLink>
		</Ul>
		{isAuthenticated ? `Welcome ${user.name}!`: ''}
	</Nav>);

	NavBar.propTypes = {
		onLoginClick: PropTypes.func.isRequired,
		onLogoutClick: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool.isRequired,
		user: PropTypes.shape({
			name: PropTypes.string,
		}).isRequired,
	};
