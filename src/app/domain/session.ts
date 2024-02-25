import { MartialArtist } from "./martial-artist";
import { MartialArt } from "./martial-arts";

export interface Session{
    id: number,
        session_date: Date,
        session_duration_min: number,
        martial_art: MartialArt,
        punches: number,
        kicks: number,
        knees: number,
        elbows: number,
        standup_grappling: number,
        ground_grappling: number,
        ground_n_pound: number,
        trapping: number,
        weapon_manipulation: number,
        weapon_defense: number,
        martial_artists: MartialArtist[]
}