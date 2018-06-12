// @flow strict
import type { GPXBuildData } from './../../types';
import BaseBuilder from './../BaseBuilder';
import GarminPoint from './models/GarminPoint';

export default class GarminBuilder extends BaseBuilder {
    data: GPXBuildData;
    schemaLocation: Array<string>;

    static MODELS = {
        ...BaseBuilder.MODELS,
        Point: GarminPoint,
    };

    /**
     * Garmin builder include extension for speed, hear rate, cadence, ...
     */
    constructor() {
        super();
        this.schemaLocation = [
            ...this.schemaLocation,
            'http://www.garmin.com/xmlschemas/TrackPointExtension/v2',
            'http://www.garmin.com/xmlschemas/TrackPointExtensionv2.xsd',
        ];
        this.data = {
            ...this.data,
            attributes: {
                ...this.data.attributes,
                'xmlns:gpxtpx': 'http://www.garmin.com/xmlschemas/TrackPointExtension/v2',
            },
        };
    }
}
