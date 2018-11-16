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
            hr: 5,
            cad: 10,
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
            extensions: {
                'new:TrackPointExtension': {
                    'new:speed': 50,
                },
            },
            cad: 10,
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
