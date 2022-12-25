import { buildGPX } from '../dist';
import { _experimentalParseGpx } from '../src/parser/parser';

describe('parser', () => {
    it('parses routes', () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="fabulator:gpx-builder" version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <rte>
    <rtept lat="51.02832496166229" lon="15.515156626701355">
      <ele>314.715</ele>
      <time>2018-06-10T17:29:35.000Z</time>
    </rtept>
    <rtept lat="51.02832496166229" lon="15.515156626701355">
      <ele>314.715</ele>
      <time>2018-06-10T17:29:35.000Z</time>
    </rtept>
    <name>x</name>
  </rte>
</gpx>`;
        expect(buildGPX(_experimentalParseGpx(xml).toObject())).toEqual(xml);
    });
});
