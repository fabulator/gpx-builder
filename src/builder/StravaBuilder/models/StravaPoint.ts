import { Extensions } from '../../../types';
import GarminPoint, { GarminPointOptions } from '../../GarminBuilder/models/GarminPoint';

interface StravaPointOptions extends GarminPointOptions {
    distance?: number;
    power?: number;
}

export default class StravaPoint extends GarminPoint {
    public constructor(lat: number, lon: number, options: StravaPointOptions = {}) {
        super(lat, lon, options);
        const { power, cad, distance } = options;

        this.extensions = {
            ...this.extensions,
            ...(power != null ? { power } : {}),
            ...(cad != null ? { cadence: cad } : {}),
            ...(distance != null ? { distance } : {}),
        } as Extensions;
    }
}
