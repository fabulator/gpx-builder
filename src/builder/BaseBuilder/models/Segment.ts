import { Extensions, TrackSegment } from '../../../types';
import { Point } from './Point';

export class Segment {
  private trkpt: Point[];

  private extensions?: Extensions;

  /**
   * @see http://www.topografix.com/gpx/1/1/#type_trksegType
   */
  public constructor(trkpt: Point[], extensions?: Extensions) {
    this.trkpt = trkpt;
    this.extensions = extensions;
  }

  public setPoints(trkpt: Point[]): this {
    this.trkpt = trkpt;
    return this;
  }

  public toObject(): TrackSegment {
    const { trkpt, extensions } = this;

    return {
      trkpt: trkpt.map((point) => point.toObject()),
      ...(extensions ? { extensions } : {}),
    };
  }
}
