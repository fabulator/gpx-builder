// @flow
import { XMLCreator } from './creators';
import { DefaultBuilder } from './builders';
import type { CreatorInterface } from './creators/CreatorInterface';

import type {
    Link,
    Person,
    Copyright,
    Bounds,
    Extensions,
    Meta,
    WayPoint,
    Route,
    TrackSegment,
    Track,
    GPXBuildData,
} from './types';

function buildGPX(data: GPXBuildData, creator: ?CreatorInterface): string {
    const gpxCreator = creator || new XMLCreator();
    return gpxCreator.toString(data);
}

export type {
    Link,
    Person,
    Copyright,
    Bounds,
    Extensions,
    Meta,
    WayPoint,
    Route,
    TrackSegment,
    Track,
    GPXBuildData,
};

export { DefaultBuilder, buildGPX };
