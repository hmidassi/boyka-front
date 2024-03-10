import { MartialArt } from "./martial-arts";

export interface Experience{
        club_name: string;
        starting_date: Date;
        end_date?: Date;
        //one club may offer several martial arts at once
        martial_arts: MartialArt[];
        //find a smarter way to associate each martial art and its average duration per
}