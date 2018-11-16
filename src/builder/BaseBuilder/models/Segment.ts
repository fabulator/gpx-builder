import { Extensions, TrackSegment } from '../../../types';
import Point from './Point';

export default class Segment {
    private trkpt: Array<Point>;

    private extensions: Extensions | null;


    /**
     * @see http://www.topografix.com/gpx/1/1/#type_trksegType
     */
    public constructor(trkpt: Array<Point>, extensions: Extensions | null = null) {
        this.trkpt = trkpt;
        this.extensions = extensions || null;
    }

    public setPoints(trkpt: Array<Point>): this {
        this.trkpt = trkpt;
        return this;
    }

    public toObject(): TrackSegment {
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
