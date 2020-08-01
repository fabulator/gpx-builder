import { Copyright as CopyrightData } from '../../../types';

export default class Copyright {
    private author: string;

    private year: number | null;

    private license: string | null;

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
        this.year = year || null;
        this.license = license || null;
    }

    public toObject(): CopyrightData {
        const { author, year, license } = this;

        return {
            attributes: { author },
            ...(year ? { year } : {}),
            ...(license ? { license } : {}),
        };
    }
}
