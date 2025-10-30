import { describe, it, expect } from 'vitest';
import { GarminBuilder } from '../src';

const { Point } = GarminBuilder.MODELS;

describe('test Point', () => {
  it('create basic point with lat and lon', () => {
    const point = new Point(1, 2);
    expect(point.toObject()).toEqual({
      attributes: {
        lat: 1,
        lon: 2,
      },
    });
  });

  it('generate extendsions with hr and cadence', () => {
    const point = new Point(1, 2, {
      cad: 10,
      hr: 5,
    });
    expect(point.toObject()).toEqual({
      attributes: {
        lat: 1,
        lon: 2,
      },
      extensions: {
        'gpxtpx:TrackPointExtension': {
          'gpxtpx:cad': 10,
          'gpxtpx:hr': 5,
        },
      },
    });
  });

  it('create point with custom extensions and predefined', () => {
    const point = new Point(1, 2, {
      cad: 10,
      extensions: {
        'new:TrackPointExtension': {
          'new:speed': 50,
        },
      },
    });
    expect(point.toObject()).toEqual({
      attributes: {
        lat: 1,
        lon: 2,
      },
      extensions: {
        'gpxtpx:TrackPointExtension': {
          'gpxtpx:cad': 10,
        },
        'new:TrackPointExtension': {
          'new:speed': 50,
        },
      },
    });
  });
});
