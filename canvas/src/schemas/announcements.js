import { schema } from 'normalizr';


export const announcement = new schema.Entity(
    'announcements',
);
export const announcements = new schema.Array(announcement);