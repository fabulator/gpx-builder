import BaseBuilder from '../BaseBuilder';
import GarminPoint from './models/GarminPoint';

export default class GarminBuilder extends BaseBuilder {
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
            ...this.schemaLocation,
            'http://www.garmin.com/xmlschemas/TrackPointExtension/v2',
            'https://www8.garmin.com/xmlschemas/TrackPointExtensionv2.xsd',
            'http://www.garmin.com/xmlschemas/GpxExtensions/v3',
            'https://www8.garmin.com/xmlschemas/GpxExtensions/v3/GpxExtensionsv3.xsd',
        ];
        this.data = {
            ...this.data,
            attributes: {
                ...this.data.attributes,
                'xmlns:gpxtpx': 'http://www.garmin.com/xmlschemas/TrackPointExtension/v2',
                'xmlns:gpxx': 'http://www.garmin.com/xmlschemas/GpxExtensions/v3',
            },
        };
    }
}
