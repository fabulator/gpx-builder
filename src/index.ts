import { XMLCreator } from './creators';
import { BaseBuilder, GarminBuilder } from './builder';
import { CreatorInterface } from './creators/CreatorInterface';

import {
    GPXBuildData,
} from './types';

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

export { BaseBuilder, GarminBuilder, buildGPX };
