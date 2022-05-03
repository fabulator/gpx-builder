/* eslint-disable max-len */
import { buildGPX, GarminBuilder } from '../src';
import { Bounds, Copyright, Link, Metadata, Person } from '../src/builder/BaseBuilder/models';
import GarminPoint from '../src/builder/GarminBuilder/models/GarminPoint';

describe('Test Garmin builder', () => {
    it('create an object', () => {
        const builder = new GarminBuilder();
        expect(builder).toBeInstanceOf(GarminBuilder);
    });

    it('creates valid gpx output for points', () => {
        const builder = new GarminBuilder();
        builder.setSegmentPoints([new GarminPoint(0, 0, { atemp: 1, bearing: 1, cad: 1, course: 1, depth: 1, hr: 1, speed: 1, wtemp: 1 })]);
        const gpxString = buildGPX(builder.toObject());
        expect(gpxString).toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="fabulator:gpx-builder" version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3">
  <trk>
    <trkseg>
      <trkpt lat="0" lon="0">
        <extensions>
          <gpxtpx:TrackPointExtension>
            <gpxtpx:hr>1</gpxtpx:hr>
            <gpxtpx:cad>1</gpxtpx:cad>
            <gpxtpx:speed>1</gpxtpx:speed>
            <gpxtpx:atemp>1</gpxtpx:atemp>
            <gpxtpx:wtemp>1</gpxtpx:wtemp>
            <gpxtpx:depth>1</gpxtpx:depth>
            <gpxtpx:course>1</gpxtpx:course>
            <gpxtpx:bearing>1</gpxtpx:bearing>
          </gpxtpx:TrackPointExtension>
        </extensions>
      </trkpt>
    </trkseg>
  </trk>
</gpx>`);
    });

    it('creates valid gpx output for metadata', () => {
        const builder = new GarminBuilder();
        builder.setMetadata(
            new Metadata({
                author: new Person({
                    name: 'testName',
                    email: 'test@email.com',
                    link: new Link('https://test.com', { text: 'linkText', type: 'href' }),
                }),
                bounds: new Bounds(0, 0, 0, 0),
                copyright: new Copyright('testAuthor', { year: 2022, license: 'MIT' }),
                desc: 'description',
                keywords: 'keyword1,keyword2',
                link: new Link('https://test.com', { text: 'linkText', type: 'href' }),
                name: 'testName',
                time: new Date(0),
            }),
        );
        const gpxString = buildGPX(builder.toObject());
        expect(gpxString).toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="fabulator:gpx-builder" version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3">
  <metadata>
    <name>testName</name>
    <desc>description</desc>
    <author>
      <name>testName</name>
      <email id="test" domain="email.com"></email>
      <link href="https://test.com">
        <text>linkText</text>
        <type>href</type>
      </link>
    </author>
    <copyright author="testAuthor">
      <year>2022</year>
      <license>MIT</license>
    </copyright>
    <link href="https://test.com">
      <text>linkText</text>
      <type>href</type>
    </link>
    <time>1970-01-01T00:00:00.000Z</time>
    <keywords>keyword1,keyword2</keywords>
    <bounds minlat="0" minlon="0" maxlat="0" maxlon="0"></bounds>
  </metadata>
</gpx>`);
    });
});
