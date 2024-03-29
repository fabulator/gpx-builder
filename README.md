# GPX builder

[![npm](https://img.shields.io/npm/v/gpx-builder.svg)](https://www.npmjs.com/package/gpx-builder) 

This library creates GPX version 1.1 files. I recommend you to check full [documentation on topografix](http://www.topografix.com/gpx/1/1/). The library has option to use Garmin extensions, so you can add cadence, heart rate, speed and other fitness data to your points.

Integration for Strava allows to use some non-standard metric as power. That XML is not valid by standard, but it's the way that Strava use it.

## How to use it

Install:

```nodedaemon
npm install gpx-builder
```

Create your first GPX file:

```javascript
const { buildGPX, GarminBuilder } = require('gpx-builder');

const { Point } = GarminBuilder.MODELS;

const points = [
    new Point(51.02832496166229, 15.515156626701355, {
        ele: 314.715,
        time: new Date('2018-06-10T17:29:35Z'),
        hr: 120,
    }),
    new Point(51.12832496166229, 15.615156626701355, {
        ele: 314.715,
        time: new Date('2018-06-10T17:39:35Z'),
        hr: 121,
    }),
];

const gpxData = new GarminBuilder();

gpxData.setSegmentPoints(points);

console.log(buildGPX(gpxData.toObject()));

```

Use Strava format that supports power and distance on top of Garmin standard properties.

```javascript
const { StravaBuilder } = require('gpx-builder');
const { Point } = StravaBuilder.MODELS;

const points = [
    new Point(51.02832496166229, 15.515156626701355, {
        ele: 314.715,
        time: new Date('2018-06-10T17:29:35Z'),
        hr: 120,
        power: 5,
        distance: 1,
    }),
];
```

### How the library works

Library contains two types of classes:

- `Creators` - They create xml string from defined Object structure
- `Builders` - They offer user friendly way to create data for creators

Library contains three Builders:

- BaseBuilder - To create GPX 1.1 valid files. [Check all the properties you can add to GPX](https://github.com/fabulator/gpx-builder/blob/master/src/builder/BaseBuilder/BaseBuilder.ts).
- GarminBuilder - To use [TrackPointExtensionv2 schema](https://www8.garmin.com/xmlschemas/TrackPointExtensionv2.xsd) from Garmin.
- StravaBuilder - To extends GPX by data that uses Strava.

Types

What you find in [type file](https://github.com/fabulator/gpx-builder/blob/master/src/types.ts) are types that are used as object for builders. Eg. you can create object based on `WayPoint` and use it directly to creator. You can also use `Point` class in builder section that has more developer friendly constructor. It will convert you data to `WayPoint` type.   
