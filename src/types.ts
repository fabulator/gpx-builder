export interface Link {
    attributes: {
        href: string;
    };
    text?: string;
    type?: string;
}

export interface Person {
    email?: string;
    link?: Link;
    name?: string;
}

export interface Copyright {
    attributes: {
        author: string;
    };
    license?: string;
    year?: number;
}

export interface Bounds {
    attributes: {
        maxlat: number;
        maxlon: number;
        minlat: number;
        minlon: number;
    };
}

export interface Extensions {
    [key: string]: { [key: string]: string | number };
}

export interface Meta {
    author?: Person;
    bounds?: Bounds;
    copyright?: Copyright;
    desc?: string;
    extensions?: Extensions;
    keywords?: string;
    link?: Link;
    name?: string;
    time?: Date;
}

export interface WayPoint {
    ageofdgpsdata?: number;
    attributes: {
        lat: number;
        lon: number;
    };
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

export interface Route {
    cmt?: string;
    desc?: string;
    extensions?: Extensions;
    link?: Link;
    name?: string;
    number?: number;
    rtept?: WayPoint[];
    src?: string;
    type?: string;
}

export interface TrackSegment {
    extensions?: Extensions;
    trkpt: WayPoint[];
}

export interface Track {
    cmt?: string;
    desc?: string;
    extensions?: Extensions;
    link?: Link;
    name?: string;
    number?: number;
    src?: string;
    trkseg?: TrackSegment[];
    type?: string;
}

export interface GPXBuildData {
    attributes?: {
        [key: string]: string;
    };
    extensions?: Extensions;
    metadata?: Meta;
    rte?: Route[];
    trk?: Track[];
    wpt?: WayPoint[];
}
