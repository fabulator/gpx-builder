import { Extensions, Track as TrackData } from '../../../types';
import Link from './Link';
import Segment from './Segment';

export default class Track {
    private name: string | null;

    private cmt: string | null;

    private desc: string | null;

    private src: string | null;

    private link: Link | null;

    private number: number | null;

    private type: string | null;

    private extensions: Extensions | null;

    private trkseg: Segment[] | null;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_trkType
     */
    // eslint-disable-next-line complexity
    public constructor(
        trkseg: Segment[] | null,
        {
            name,
            cmt,
            desc,
            src,
            link,
            number,
            type,
            extensions,
        }: {
            cmt?: string;
            desc?: string;
            extensions?: Extensions;
            link?: Link;
            name?: string;
            number?: number;
            src?: string;
            type?: string;
        } = {},
    ) {
        this.name = name || null;
        this.cmt = cmt || null;
        this.desc = desc || null;
        this.src = src || null;
        this.link = link || null;
        this.number = number || null;
        this.type = type || null;
        this.extensions = extensions || null;
        this.trkseg = trkseg || null;
    }

    public setSegments(trkseg: Segment[] | null): this {
        this.trkseg = trkseg;
        return this;
    }

    // eslint-disable-next-line complexity
    public toObject(): TrackData {
        const { name, cmt, desc, src, link, number, type, extensions, trkseg } = this;

        return {
            ...(name ? { name } : {}),
            ...(cmt ? { cmt } : {}),
            ...(desc ? { desc } : {}),
            ...(src ? { src } : {}),
            ...(link ? { link: link.toObject() } : {}),
            ...(number ? { number } : {}),
            ...(type ? { type } : {}),
            ...(extensions ? { extensions } : {}),
            ...(trkseg ? { trkseg: trkseg.map((segment) => segment.toObject()) } : {}),
        };
    }
}
