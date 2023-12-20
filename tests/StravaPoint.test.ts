import { StravaBuilder } from '../src';

const { Point } = StravaBuilder.MODELS;

describe('test Strava Point', () => {
  it('create point with power', () => {
    const point = new Point(1, 2, { power: 200 });
    expect(point.toObject()).toEqual({
      attributes: {
        lat: 1,
        lon: 2,
      },
      extensions: {
        power: 200,
      },
    });
  });
});
