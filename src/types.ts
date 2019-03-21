export interface Link {
    attributes: {
        href: string,
    },
    text?: string,
    type?: string,
}

export interface Person {
    name?: string,
    email?: string,
    link?: Link,
}

export interface Copyright {
    attributes: {
        author: string,
    },
    year?: number,
    license?: string,
}

export interface Bounds {
    attributes: {
        minlat: number,
        minlon: number,
        maxlat: number,
        maxlon: number,
    },
}

export interface Extensions {
    [key: string]: {[key: string]: string | number},
}

export interface Meta {
    name?: string,
    desc?: string,
    author?: Person,
    copyright?: Copyright,
    link?: Link,
    time?: Date,
    keywords?: string,
    bounds?: Bounds,
    extensions?: Extensions,
}

export interface WayPoint {
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
}

export interface Route {
    name?: string,
    cmt?: string,
    desc?: string,
    src?: string,
    link?: Link,
    number?: number,
    type?: string,
    extensions?: Extensions,
    rtept?: WayPoint[],
}

export interface TrackSegment {
    trkpt: WayPoint[],
    extensions?: Extensions,
}

export interface Track {
    name?: string,
    cmt?: string,
    desc?: string,
    src?: string,
    link?: Link,
    number?: number,
    type?: string,
    extensions?: Extensions,
    trkseg?: TrackSegment[],
}

export interface GPXBuildData {
    attributes?: {
        [key: string]: string,
    },
    metadata?: Meta,
    wpt?: WayPoint[],
    rte?: Route[],
    trk?: Track[],
    extensions?: Extensions,
}
