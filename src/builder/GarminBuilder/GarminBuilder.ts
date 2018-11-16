import { GPXBuildData } from '../../types';
import BaseBuilder from '../BaseBuilder';
import GarminPoint from './models/GarminPoint';

export default class GarminBuilder extends BaseBuilder {
    protected data: GPXBuildData;

    protected schemaLocation: Array<string>;

    public static MODELS = {
        ...BaseBuilder.MODELS,
        Point: GarminPoint,
    };

    /**
     * Garmin builder include extension for speed, hear rate, cadence, ...
     */
    public constructor() {
        super();
        this.schemaLocation = [
            // @ts-ignore
            ...this.schemaLocation,
            'http://www.garmin.com/xmlschemas/TrackPointExtension/v1',
            'http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd',
            'http://www.garmin.com/xmlschemas/GpxExtensions/v3',
            'http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd',
        ];
        this.data = {
            // @ts-ignore
            ...this.data,
            attributes: {
                // @ts-ignore
                ...this.data.attributes,
                'xmlns:gpxtpx': 'http://www.garmin.com/xmlschemas/TrackPointExtension/v1',
                'xmlns:gpxx': 'http://www.garmin.com/xmlschemas/GpxExtensions/v3',
            },
        };
    }
}
