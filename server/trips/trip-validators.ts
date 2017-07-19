import validate from 'koa-req-validator';
import * as validator from 'validator';
import {isUniqTripName} from './trips.service';

validator['isUniqTripName'] = async (name) =>
	await isUniqTripName(name);

export const TripValidator = validate({
  'name:body': ['isUniqTripName', 'Name must be unique'],
  'description:body': ['require', 'isLength(3)', 'Description can not be empty'],
	'createdAt:body': ['require', 'Invalid date'],
	'image:body': ['require', 'isURL', 'Image is not data url'],
  'title:body': ['require', 'isLength(3)', 'Title must have at least 3 characters'],
	'time': ['require', 'Duration can not be empty'],
	'color': ['require', 'Color can not be empty'],
});
