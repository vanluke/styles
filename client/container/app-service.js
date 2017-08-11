import authService from 'auth/service';

export const appService = {
	getUser() {
		const token = authService.getTokenFromStorage();
		const user = token ? authService.decodeToken(token) : undefined;
		return {
			user,
			isAuthenticated: !!user,
		}
	}
}
