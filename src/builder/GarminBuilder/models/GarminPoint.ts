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

  public constructor(
    lat: number,
    lon: number,
    options: GarminPointOptions = {},
  ) {
    super(lat, lon, options);
    const { hr, cad, speed, atemp, wtemp, depth, course, bearing } = options;

    const extensionPrefix = 'gpxtpx';
    const trackPointExtension = `${extensionPrefix}:TrackPointExtension`;
    const data = {
      ...(typeof hr === 'number' ? { [`${extensionPrefix}:hr`]: hr } : {}),
      ...(typeof cad === 'number' ? { [`${extensionPrefix}:cad`]: cad } : {}),
      ...(typeof speed === 'number'
        ? { [`${extensionPrefix}:speed`]: speed }
        : {}),
      ...(typeof atemp === 'number'
        ? { [`${extensionPrefix}:atemp`]: atemp }
        : {}),
      ...(typeof wtemp === 'number'
        ? { [`${extensionPrefix}:wtemp`]: wtemp }
        : {}),
      ...(typeof depth === 'number'
        ? { [`${extensionPrefix}:depth`]: depth }
        : {}),
      ...(typeof course === 'number'
        ? { [`${extensionPrefix}:course`]: course }
        : {}),
      ...(typeof bearing === 'number'
        ? { [`${extensionPrefix}:bearing`]: bearing }
        : {}),
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
