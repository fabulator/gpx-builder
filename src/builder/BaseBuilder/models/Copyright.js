// @flow strict
import type { Copyright as CopyrightData } from './../../../types';

export default class Copyright {
    author: string;
    year: ?number;
    license: ?string;

    /**
     * @param author - Owner of licence
     * @param year - Year of licence
     * @param license - Type of licence
     * @see http://www.topografix.com/gpx/1/1/#type_copyrightType
     */
    constructor(author: string, {
        year,
        license,
    }: {
        year?: number,
        license?: string,
    }) {
        this.author = author;
        this.year = year;
        this.license = license;
    }

    toObject(): CopyrightData {
        const {
            author,
            year,
            license,
        } = this;

        return {
            attributes: { author },
            ...(year ? { year } : {}),
            ...(license ? { license } : {}),
        };
    }
}
