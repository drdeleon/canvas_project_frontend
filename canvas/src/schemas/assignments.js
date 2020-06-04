import { schema } from 'normalizr';


export const assignment = new schema.Entity(
    'assignments',
);
export const assignments = new schema.Array(assignment);