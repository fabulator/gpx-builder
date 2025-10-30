/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument */
import { create } from 'xmlbuilder2';
import { BaseBuilder } from '../builder/BaseBuilder';
import { Link, Route, Segment, Track } from '../builder/BaseBuilder/models';
import { StravaBuilder } from '../builder/StravaBuilder';

const getArrayOrNothing = (source: any): any[] | undefined => {
  if (Array.isArray(source)) {
    return source;
  }
  if (source) {
    return [source];
  }
  return undefined;
};

const getPoints = (source: any) => {
  return (
    getArrayOrNothing(source)?.map((item) => {
      return new StravaBuilder.MODELS.Point(
        Number(item['@lat']),
        Number(item['@lon']),
        {
          ageofdgpsdata:
            item.ageofdgpsdata != null ? Number(item.ageofdgpsdata) : undefined,
          cmt: item.cmt,
          desc: item.desc,
          dgpsid: item.dgpsid != null ? Number(item.dgpsid) : undefined,
          ele: item.ele != null ? Number(item.ele) : undefined,
          extensions: item.extensions,
          fix: item.fix != null ? Number(item.fix) : undefined,
          geoidheight:
            item.geoidheight != null ? Number(item.geoidheight) : undefined,
          hdop: item.hdop != null ? Number(item.hdop) : undefined,
          link: item.link ? new Link(item.link['@href']) : undefined,
          magvar: item.magvar != null ? Number(item.magvar) : undefined,
          name: item.name,
          pdop: item.pdop != null ? Number(item.pdop) : undefined,
          sat: item.sat != null ? Number(item.sat) : undefined,
          src: item.src,
          sym: item.sym,
          time: item.time ? new Date(item.time) : undefined,
          type: item.type,
          vdop: item.vdop != null ? Number(item.vdop) : undefined,
        },
      );
    }) || []
  );
};

const getRoutes = (source: any) => {
  return getArrayOrNothing(source)?.map((item) => {
    return new Route({
      name: item.name,
      rtept: getPoints(item.rtept),
    });
  });
};

const getSegments = (source: any) => {
  return getArrayOrNothing(source)?.map((item) => {
    return new Segment(getPoints(item.trkpt));
  });
};

const getTracks = (source: any) => {
  return getArrayOrNothing(source)?.map((item) => {
    return new Track(getSegments(item.trkseg), {
      name: item.name,
    });
  });
};

export const _experimentalParseGpx = (gpx: string): StravaBuilder => {
  const parsed = create(gpx).toObject() as any;

  if (!parsed.gpx) {
    throw new Error('Invalid format.');
  }

  const gpxData = new BaseBuilder();

  const routes = getRoutes(parsed.gpx.rte);

  if (routes) {
    gpxData.setRoutes(routes);
  }

  const waypoints = getPoints(parsed.gpx.wpt);

  if (waypoints.length) {
    gpxData.setWayPoints(waypoints);
  }

  const tracks = getTracks(parsed.gpx.trk);

  if (tracks) {
    gpxData.setTracks(tracks);
  }

  return gpxData;
};
