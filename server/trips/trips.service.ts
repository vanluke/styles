import {
	connect,
	uri,
	create,
	update,
	deleteDocument,
	getDocuments,
	getDocument,
	findBy,
} from '../middleware/mongodb.service';
export interface ITrip {
	name: string;
	description: string;
	participants: string[];
	createdAt: Date;
	_id: string;
}

export const dbSource = connect(uri);


export const tripsCollectionName = 'trips';

export const handlePost = async (trip: ITrip) => await dbSource(create)(trip, tripsCollectionName);

export const handlePut = async (trip: ITrip) => await dbSource(update)(trip, tripsCollectionName);

export const handleDelete = async (tripId: string) => await dbSource(deleteDocument)(tripId, tripsCollectionName);

export const handleGet = async (tripId: string) => tripId
? await dbSource(getDocument)(tripId, tripsCollectionName)
: await dbSource(getDocuments)(tripsCollectionName);

export const isUniqTripName = async (name: string) => {
	const result = <ITrip>(await dbSource(findBy)(name, 'name', tripsCollectionName));
	return !result || !result._id;
}

