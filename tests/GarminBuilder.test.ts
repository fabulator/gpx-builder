import { GarminBuilder } from '../src';

describe('Test Garmin builder', () => {
    it('create an object', () => {
        const builder = new GarminBuilder();
        expect(builder).toBeInstanceOf(GarminBuilder);
    });
});
