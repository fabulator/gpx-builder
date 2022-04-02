import { XMLCreator } from './creators';
import { CreatorInterface } from './creators/CreatorInterface';
import { GPXBuildData } from './types';

/**
 * Function that create XML string with GPX data.
 *
 * @param data - Formated data
 * @param creator - Creator that converts data to XML string
 * @returns XML string
 */
function buildGPX(data: GPXBuildData, creator?: CreatorInterface): string {
    const gpxCreator = creator || new XMLCreator();
    return gpxCreator.toString(data);
}

export { buildGPX };

export { default as BaseBuilder } from './builder/BaseBuilder';
export { default as StravaBuilder } from './builder/StravaBuilder';
export { default as GarminBuilder } from './builder/GarminBuilder';
