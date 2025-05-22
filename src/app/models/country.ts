export class Country {
    name: string;
    isoCode: string;
    flag: string;
    phonecode: number;
    currency: string;
    latitude: string;
    longitude: string;

    constructor(name: string = "", isoCode: string = "", flag: string = "", phonecode: number = 0, currency
        : string = "", latitude: string = "", longitude: string = "") {
        this.name = name;
        this.isoCode = isoCode;
        this.flag = flag;
        this.phonecode = phonecode;
        this.currency = currency;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    
}
