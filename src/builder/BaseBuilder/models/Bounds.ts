import { Bounds as BoundsData } from '../../../types';

export default class Bounds {
    private minlat: number;

    private minlon: number;

    private maxlat: number;

    private maxlon: number;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_boundsType
     */
    public constructor(minlat: number, minlon: number, maxlat: number, maxlon: number) {
        this.minlat = minlat;
        this.minlon = minlon;
        this.maxlat = maxlat;
        this.maxlon = maxlon;
    }

    public toObject(): BoundsData {
        const { minlat, minlon, maxlat, maxlon } = this;

        return {
            attributes: {
                minlat,
                minlon,
                maxlat,
                maxlon,
            },
        };
    }
}
