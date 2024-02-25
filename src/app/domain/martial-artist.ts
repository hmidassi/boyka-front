import { Experience } from "./experience";

export interface MartialArtist{
    first_name: string;
    last_name: string;
    id: number;
    experiences: Experience[]
}