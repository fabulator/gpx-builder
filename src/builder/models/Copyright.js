// @flow
import type { Copyright as CopyrightData } from './../../types';

export default class Copyright {
    author: string;
    year: ?number;
    license: ?string;

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
