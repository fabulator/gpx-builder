import { Extensions, WayPoint } from '../../../types';
import { Link } from './Link';

export interface PointOptions {
  ageofdgpsdata?: number;
  cmt?: string;
  desc?: string;
  dgpsid?: number;
  ele?: number;
  extensions?: Extensions;
  fix?: number;
  geoidheight?: number;
  hdop?: number;
  link?: Link;
  magvar?: number;
  name?: string;
  pdop?: number;
  sat?: number;
  src?: string;
  sym?: string;
  time?: Date;
  type?: string;
  vdop?: number;
}

export class Point {
  protected lat: number;

  protected lon: number;

  protected ele?: number;

  protected time?: Date;

  protected magvar?: number;

  protected geoidheight?: number;

  protected name?: string;

  protected cmt?: string;

  protected desc?: string;

  protected src?: string;

  protected link?: Link;

  protected sym?: string;

  protected type?: string;

  protected fix?: number;

  protected sat?: number;

  protected hdop?: number;

  protected vdop?: number;

  protected pdop?: number;

  protected ageofdgpsdata?: number;

  protected dgpsid?: number;

  protected extensions?: Extensions;

  /**
   * @see http://www.topografix.com/gpx/1/1/#type_wptType
   */
  public constructor(
    lat: number,
    lon: number,
    {
      ele,
      time,
      magvar,
      geoidheight,
      name,
      cmt,
      desc,
      src,
      link,
      sym,
      type,
      fix,
      sat,
      hdop,
      vdop,
      pdop,
      ageofdgpsdata,
      dgpsid,
      extensions,
    }: PointOptions = {},
  ) {
    this.lat = lat;
    this.lon = lon;
    this.ele = ele;
    this.time = time;
    this.magvar = magvar;
    this.geoidheight = geoidheight;
    this.name = name;
    this.cmt = cmt;
    this.desc = desc;
    this.src = src;
    this.link = link;
    this.sym = sym;
    this.type = type;
    this.fix = fix;
    this.sat = sat;
    this.hdop = hdop;
    this.vdop = vdop;
    this.pdop = pdop;
    this.ageofdgpsdata = ageofdgpsdata;
    this.dgpsid = dgpsid;
    this.extensions = extensions;
  }

  public toObject(): WayPoint {
    const {
      lat,
      lon,
      ele,
      time,
      magvar,
      geoidheight,
      name,
      cmt,
      desc,
      src,
      link,
      sym,
      type,
      fix,
      sat,
      hdop,
      vdop,
      pdop,
      ageofdgpsdata,
      dgpsid,
      extensions,
    } = this;

    return {
      attributes: {
        lat,
        lon,
      },
      ...(typeof ele === 'number' ? { ele } : {}),
      ...(time instanceof Date ? { time } : {}),
      ...(typeof magvar === 'number' ? { magvar } : {}),
      ...(typeof geoidheight === 'number' ? { geoidheight } : {}),
      ...(name ? { name } : {}),
      ...(cmt ? { cmt } : {}),
      ...(desc ? { desc } : {}),
      ...(src ? { src } : {}),
      ...(link ? { link: link.toObject() } : {}),
      ...(sym ? { sym } : {}),
      ...(type ? { type } : {}),
      ...(typeof fix === 'number' ? { fix } : {}),
      ...(typeof sat === 'number' ? { sat } : {}),
      ...(typeof hdop === 'number' ? { hdop } : {}),
      ...(typeof vdop === 'number' ? { vdop } : {}),
      ...(typeof pdop === 'number' ? { pdop } : {}),
      ...(typeof ageofdgpsdata === 'number' ? { ageofdgpsdata } : {}),
      ...(typeof dgpsid === 'number' ? { dgpsid } : {}),
      ...(extensions && Object.keys(extensions).length > 0
        ? { extensions }
        : {}),
    };
  }
}
