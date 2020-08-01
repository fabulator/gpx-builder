import GarminBuilder from '../GarminBuilder/GarminBuilder';
import StravaPoint from './models/StravaPoint';

export default class StravaBuilder extends GarminBuilder {
    public static MODELS = {
        ...GarminBuilder.MODELS,
        Point: StravaPoint,
    };
}
