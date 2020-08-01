import Point, { PointOptions } from '../../BaseBuilder/models/Point';

export interface GarminPointOptions extends PointOptions {
    atemp?: number;
    bearing?: number;
    cad?: number;
    course?: number;
    depth?: number;
    hr?: number;
    speed?: number;
    wtemp?: number;
}

export default class GarminPoint extends Point {
    /**
     * Extended garmin point.
     *
     * @see https://www8.garmin.com/xmlschemas/TrackPointExtensionv2.xsd
     */
    // eslint-disable-next-line complexity
    public constructor(lat: number, lon: number, options: GarminPointOptions = {}) {
        super(lat, lon, options);
        const { hr, cad, speed, atemp, wtemp, depth, course, bearing } = options;

        const extensionPrefix = 'gpxtpx';
        const trackPointExtension = `${extensionPrefix}:TrackPointExtension`;
        const data = {
            ...(hr ? { [`${extensionPrefix}:hr`]: hr } : {}),
            ...(cad ? { [`${extensionPrefix}:cad`]: cad } : {}),
            ...(speed ? { [`${extensionPrefix}:speed`]: speed } : {}),
            ...(atemp ? { [`${extensionPrefix}:atemp`]: atemp } : {}),
            ...(wtemp ? { [`${extensionPrefix}:wtemp`]: wtemp } : {}),
            ...(depth ? { [`${extensionPrefix}:depth`]: depth } : {}),
            ...(course ? { [`${extensionPrefix}:course`]: course } : {}),
            ...(bearing ? { [`${extensionPrefix}:bearing`]: bearing } : {}),
        };

        this.extensions = {
            ...this.extensions,
            ...(Object.keys(data).length > 0
                ? {
                      [trackPointExtension]: data,
                  }
                : {}),
        };
    }
}
