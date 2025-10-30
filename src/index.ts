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

export { BaseBuilder } from './builder/BaseBuilder';
export * from './parser/parser';
export { StravaBuilder } from './builder/StravaBuilder';
export { GarminBuilder } from './builder/GarminBuilder';
