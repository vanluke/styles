import authService from 'auth/service';

export const homeService = {
	getUser() {
		const token = authService.getTokenFromStorage();
		const user = token ? authService.decodeToken(token) : undefined;
		return {
			user,
			isAuthenticated: !!user,
		}
	}
}
