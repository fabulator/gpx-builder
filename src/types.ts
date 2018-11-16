export type Link = {
    attributes: {
        href: string,
    },
    text?: string,
    type?: string,
};

export type Person = {
    name?: string,
    email?: string,
    link?: Link,
};

export type Copyright = {
    attributes: {
        author: string,
    },
    year?: number,
    license?: string,
};

export type Bounds = {
    attributes: {
        minlat: number,
        minlon: number,
        maxlat: number,
        maxlon: number,
    },
};

export type Extensions = {
    [key: string]: {[key: string]: string | number},
};

export type Meta = {
    name?: string,
    desc?: string,
    author?: Person,
    copyright?: Copyright,
    link?: Link,
    time?: Date,
    keywords?: string,
    bounds?: Bounds,
    extensions?: Extensions,
};

export type WayPoint = {
    attributes: {
        lat: number,
        lon: number,
    },
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
};

export type Route = {
    name?: string,
    cmt?: string,
    desc?: string,
    src?: string,
    link?: Link,
    number?: number,
    type?: string,
    extensions?: Extensions,
    rtept?: Array<WayPoint>,
};

export type TrackSegment = {
    trkpt: Array<WayPoint>,
    extensions?: Extensions,
};

export type Track = {
    name?: string,
    cmt?: string,
    desc?: string,
    src?: string,
    link?: Link,
    number?: number,
    type?: string,
    extensions?: Extensions,
    trkseg?: Array<TrackSegment>,
};

export type GPXBuildData = {
    attributes?: {
        [key: string]: string,
    },
    metadata?: Meta,
    wpt?: Array<WayPoint>,
    rte?: Array<Route>,
    trk?: Array<Track>,
    extensions?: Extensions,
};
