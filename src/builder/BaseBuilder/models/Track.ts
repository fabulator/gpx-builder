import { Extensions, Track as TrackData } from '../../../types';
import { Link } from './Link';
import { Segment } from './Segment';

export class Track {
  private name?: string;

  private cmt?: string;

  private desc?: string;

  private src?: string;

  private link?: Link;

  private number?: number;

  private type?: string;

  private extensions?: Extensions;

  private trkseg?: Segment[];

  /**
   * @see http://www.topografix.com/gpx/1/1/#type_trkType
   */

  public constructor(
    trkseg?: Segment[],
    {
      name,
      cmt,
      desc,
      src,
      link,
      number,
      type,
      extensions,
    }: {
      cmt?: string;
      desc?: string;
      extensions?: Extensions;
      link?: Link;
      name?: string;
      number?: number;
      src?: string;
      type?: string;
    } = {},
  ) {
    this.name = name;
    this.cmt = cmt;
    this.desc = desc;
    this.src = src;
    this.link = link;
    this.number = number;
    this.type = type;
    this.extensions = extensions;
    this.trkseg = trkseg;
  }

  public setSegments(trkseg?: Segment[]): this {
    this.trkseg = trkseg;
    return this;
  }

  public toObject(): TrackData {
    const { name, cmt, desc, src, link, number, type, extensions, trkseg } =
      this;

    return {
      ...(name ? { name } : {}),
      ...(cmt ? { cmt } : {}),
      ...(desc ? { desc } : {}),
      ...(src ? { src } : {}),
      ...(link ? { link: link.toObject() } : {}),
      ...(typeof number === 'number' ? { number } : {}),
      ...(type ? { type } : {}),
      ...(extensions ? { extensions } : {}),
      ...(trkseg
        ? { trkseg: trkseg.map((segment) => segment.toObject()) }
        : {}),
    };
  }
}
