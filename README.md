# GPX builder

[![codecov](https://img.shields.io/npm/v/gpx-builder.svg)](https://www.npmjs.com/package/gpx-builder) [![codecov](https://codecov.io/gh/fabulator/gpx-builder/branch/master/graph/badge.svg)](https://codecov.io/gh/fabulator/gpx-builder)  [![codecov](https://travis-ci.org/fabulator/gpx-builder.svg?branch=master)](https://travis-ci.org/fabulator/gpx-builder) [![Maintainability](https://api.codeclimate.com/v1/badges/7ab35417954388460660/maintainability)](https://codeclimate.com/github/fabulator/gpx-builder/maintainability)

This library creates GPX files based on version 1.1. I recommend you to check full [documentation on topografix](http://www.topografix.com/gpx/1/1/). Library have also option to use Garmin extensions so you can add cadence, heart rate, speed and other data to your points.

## How to use

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

You can use Strava format that support power and distance on top of Garmin standard properties.


```typescript
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

### How library works

Library contain two types of classes:

- Creators - They create xml string from defined Object structure
- Builders - They offer user friendly way to create data for creators

Library contain two Builders:

- BaseBuilder - To create GPX 1.1 valid files
- GarminBuilder - To use [TrackPointExtensionv2 schema](https://www8.garmin.com/xmlschemas/TrackPointExtensionv2.xsd) from Garmin.
