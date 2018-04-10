// @flow
import type { GPXBuildData } from '../types';

export interface CreatorInterface {
    toString(data: GPXBuildData): string
}
