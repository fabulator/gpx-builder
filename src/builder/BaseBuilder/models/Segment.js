// @flow strict
import type { Extensions, TrackSegment } from './../../../types';
import Point from './Point';

export default class Segment {
    trkpt: Array<Point>;
    extensions: ?Extensions;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_trksegType
     */
    constructor(trkpt: Array<Point>, extensions: ?Extensions) {
        this.trkpt = trkpt;
        this.extensions = extensions;
    }

    setPoints(trkpt: Array<Point>): this {
        this.trkpt = trkpt;
        return this;
    }

    toObject(): TrackSegment {
        const {
            trkpt,
            extensions,
        } = this;

        return {
            trkpt: trkpt.map(point => point.toObject()),
            ...(extensions ? { extensions } : {}),
        };
    }
}
