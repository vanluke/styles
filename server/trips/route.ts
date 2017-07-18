import * as co from 'co-body';
import {constructResponse} from '../middleware/response';
import {
	handlePost,
	handlePut,
	handleDelete,
	handleGet,
} from './trips.service';

export const createTrip = async (ctx: any) => {
	try {
		const tr = ctx && ctx.request && ctx.request.body;
		const response = await handlePost(tr);
		return constructResponse(201)(ctx, response);
	} catch (e) {
		console.log(e);
		ctx.throw(500, 'Internal server error');
	}
};

export const updateTrip = async (ctx: any) => {
	try {
		const tr = ctx && ctx.request && ctx.request.body;
		const response = await handlePut(tr);
		return constructResponse(201)(ctx, response);
	} catch (e) {
		console.log(e);
		ctx.throw(500, 'Internal server error');
	}
};

export const deleteTrip = async (ctx: any) => {
	try {
		const response = await handleDelete(ctx.params.id);
		return constructResponse(204)(ctx, response);
	} catch (e) {
		console.log(e);
		ctx.throw(500, 'Internal server error');
	}
};

export const getTrips = async (ctx: any) => {
	try {
		const response = await handleGet(ctx.params.id);
		return constructResponse(200)(ctx, response);
	} catch (e) {
		console.log(e);
		ctx.throw(500, 'Internal server error');
	}
};
