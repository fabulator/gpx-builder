// @flow
import type { GPXBuildData, Meta, WayPoint, Track, Route, Extensions } from '../types';

export default class DefaultBuilder {
    data: GPXBuildData;
    schemaLocation: Array<string>;

    constructor() {
        this.data = {};
        this.schemaLocation = ['http://www.topografix.com/GPX/1/1', 'http://www.topografix.com/GPX/1/1/gpx.xsd'];
    }

    setMetadata(metadata: Meta): this {
        this.data.metadata = metadata;
        return this;
    }

    setWayPoints(waypoints: Array<WayPoint>): this {
        this.data.wpt = waypoints;
        return this;
    }

    setRoutes(routes: Array<Route>): this {
        this.data.rte = routes;
        return this;
    }

    setTracks(tracks: Array<Track>): this {
        this.data.trk = tracks;
        return this;
    }

    setExtensions(extensions: Extensions): this {
        this.data.extensions = extensions;
        return this;
    }

    setTrackpointExtension(): this {
        this.schemaLocation = [
            ...this.schemaLocation,
            'http://www.garmin.com/xmlschemas/TrackPointExtension/v1',
            'http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd',
        ];

        this.data = {
            ...this.data,
            attributes: {
                ...this.data.attributes,
                'xmlns:gpxtpx': 'http://www.garmin.com/xmlschemas/TrackPointExtension/v1',
            },
        };
        return this;
    }

    setGarminExtension(): this {
        this.schemaLocation = [
            ...this.schemaLocation,
            'http://www.garmin.com/xmlschemas/GpxExtensions/v3',
            'http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd',
        ];

        this.data = {
            ...this.data,
            attributes: {
                ...this.data.attributes,
                'xmlns:gpxx': 'http://www.garmin.com/xmlschemas/GpxExtensions/v3',
            },
        };
        return this;
    }

    getData() {
        return {
            ...this.data,
            attributes: {
                creator: 'MY',
                version: '1.1',
                xmlns: 'http://www.topografix.com/GPX/1/1',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:schemaLocation': this.schemaLocation.join(' '),
                ...this.data.attributes,
            },
        };
    }
}
