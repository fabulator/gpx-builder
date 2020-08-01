import { Extensions, WayPoint } from '../../../types';
import Link from './Link';

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

export default class Point {
    protected lat: number;

    protected lon: number;

    protected ele: number | null;

    protected time: Date | null;

    protected magvar: number | null;

    protected geoidheight: number | null;

    protected name: string | null;

    protected cmt: string | null;

    protected desc: string | null;

    protected src: string | null;

    protected link: Link | null;

    protected sym: string | null;

    protected type: string | null;

    protected fix: number | null;

    protected sat: number | null;

    protected hdop: number | null;

    protected vdop: number | null;

    protected pdop: number | null;

    protected ageofdgpsdata: number | null;

    protected dgpsid: number | null;

    protected extensions: Extensions | null;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_wptType
     */
    // eslint-disable-next-line complexity, sonarjs/cognitive-complexity
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
        this.ele = ele || null;
        this.time = time || null;
        this.magvar = magvar || null;
        this.geoidheight = geoidheight || null;
        this.name = name || null;
        this.cmt = cmt || null;
        this.desc = desc || null;
        this.src = src || null;
        this.link = link || null;
        this.sym = sym || null;
        this.type = type || null;
        this.fix = fix || null;
        this.sat = sat || null;
        this.hdop = hdop || null;
        this.vdop = vdop || null;
        this.pdop = pdop || null;
        this.ageofdgpsdata = ageofdgpsdata || null;
        this.dgpsid = dgpsid || null;
        this.extensions = extensions || null;
    }

    // eslint-disable-next-line complexity, sonarjs/cognitive-complexity
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
