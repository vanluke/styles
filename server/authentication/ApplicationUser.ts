export interface IUser {
	name: string;
	dateOfBirth: Date;
	createdAt: Date;
	surname: string;
	image: string;
	group: number[];
	password: string;
}

export class ApplicationUser {
	name: string;
	dateOfBirth: Date;
	createdAt: Date;
	surname: string;
	image: string;
	group: number[];

	constructor(public user: IUser) {
		this.dateOfBirth = user.dateOfBirth;
		this.name = user.name;
		this.createdAt = user.createdAt;
		this.surname = user.surname;
		this.image = user.image;
		this.group = user.group;
	}
}
