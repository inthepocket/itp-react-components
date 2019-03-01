import { schema } from 'normalizr';

export const featureSchema = new schema.Entity('features');
export const featureListSchema = new schema.Array(featureSchema); // tslint:disable-line
