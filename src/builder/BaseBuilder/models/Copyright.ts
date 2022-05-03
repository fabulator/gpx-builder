import { Copyright as CopyrightData } from '../../../types';

export default class Copyright {
    private author: string;

    private year?: number;

    private license?: string;

    /**
     * @param author - Owner of licence
     * @param year - Year of licence
     * @param license - Type of licence
     * @see http://www.topografix.com/gpx/1/1/#type_copyrightType
     */
    public constructor(
        author: string,
        {
            year,
            license,
        }: {
            license?: string;
            year?: number;
        },
    ) {
        this.author = author;
        this.year = year;
        this.license = license;
    }

    public toObject(): CopyrightData {
        const { author, year, license } = this;

        return {
            attributes: { author },
            ...(typeof year === 'number' ? { year } : {}),
            ...(license ? { license } : {}),
        };
    }
}
