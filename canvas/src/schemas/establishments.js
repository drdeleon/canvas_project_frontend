import { schema } from 'normalizr';


export const establishment = new schema.Entity(
    'establishments',
);
export const establishments = new schema.Array(establishment);