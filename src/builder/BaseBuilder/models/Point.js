// @flow strict
import type { Extensions, WayPoint } from './../../../types';
import Link from './Link';

export type PointOptions = {
    ele?: number,
    time?: Date,
    magvar?: number,
    geoidheight?: number,
    name?: string,
    cmt?: string,
    desc?: string,
    src?: string,
    link?: Link,
    sym?: string,
    type?: string,
    fix?: number,
    sat?: number,
    hdop?: number,
    vdop?: number,
    pdop?: number,
    ageofdgpsdata?: number,
    dgpsid?: number,
    extensions?: Extensions,
}

export default class Point {
    lat: number;
    lon: number;
    ele: ?number;
    time: ?Date;
    magvar: ?number;
    geoidheight: ?number;
    name: ?string;
    cmt: ?string;
    desc: ?string;
    src: ?string;
    link: ?Link;
    sym: ?string;
    type: ?string;
    fix: ?number;
    sat: ?number;
    hdop: ?number;
    vdop: ?number;
    pdop: ?number;
    ageofdgpsdata: ?number;
    dgpsid: ?number;
    extensions: ?Extensions;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_wptType
     */
    constructor(lat: number, lon: number, {
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
    }: PointOptions = {}) {
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

    // eslint-disable-next-line complexity
    toObject(): WayPoint {
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
            ...(ele ? { ele } : {}),
            ...(time ? { time } : {}),
            ...(magvar ? { magvar } : {}),
            ...(geoidheight ? { geoidheight } : {}),
            ...(name ? { name } : {}),
            ...(cmt ? { cmt } : {}),
            ...(desc ? { desc } : {}),
            ...(src ? { src } : {}),
            ...(link ? { link: link.toObject() } : {}),
            ...(sym ? { sym } : {}),
            ...(type ? { type } : {}),
            ...(fix ? { fix } : {}),
            ...(sat ? { sat } : {}),
            ...(hdop ? { hdop } : {}),
            ...(vdop ? { vdop } : {}),
            ...(pdop ? { pdop } : {}),
            ...(ageofdgpsdata ? { ageofdgpsdata } : {}),
            ...(dgpsid ? { dgpsid } : {}),
            ...(extensions && Object.keys(extensions).length > 0 ? { extensions } : {}),
        };
    }
}
