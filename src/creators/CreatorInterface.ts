import { GPXBuildData } from '../types';

export interface CreatorInterface {
    toString(data: GPXBuildData): string;
}
