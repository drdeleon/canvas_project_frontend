import { schema } from 'normalizr';


export const course = new schema.Entity(
    'courses',
);
export const courses = new schema.Array(course);