import { Country } from "./country";

export class State {
    private _id!: number;
    name!: string;
    isoCode!: string;
    countryCode!: string;
    latitude!: string;
    longitude!: string;
    country!: Country
    
    set id(id: number) {
        this._id = id + 100;
    }

    get id() {
        return this._id;
    }
}
