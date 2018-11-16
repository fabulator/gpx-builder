import { Meta, Extensions } from '../../../types';
import Person from './Person';
import Copyright from './Copyright';
import Bounds from './Bounds';
import Link from './Link';

export default class Metadata {
    private name: string | null;

    private desc: string | null;

    private author: Person | null;

    private copyright: Copyright | null;

    private link: Link | null;

    private time: Date | null;

    private keywords: string | null;

    private bounds: Bounds | null;

    private extensions: Extensions | null;


    /**
     * @see http://www.topografix.com/gpx/1/1/#type_metadataType
     */
    // eslint-disable-next-line
    public constructor({
        name,
        desc,
        author,
        copyright,
        link,
        time,
        keywords,
        bounds,
        extensions,
    }: {
        name?: string,
        desc?: string,
        author?: Person,
        copyright?: Copyright,
        link?: Link,
        time?: Date,
        keywords?: string,
        bounds?: Bounds,
        extensions?: Extensions,
    }) {
        this.name = name || null;
        this.desc = desc || null;
        this.author = author || null;
        this.copyright = copyright || null;
        this.link = link || null;
        this.time = time || null;
        this.keywords = keywords || null;
        this.bounds = bounds || null;
        this.extensions = extensions || null;
    }

    // eslint-disable-next-line complexity
    public toObject(): Meta {
        const {
            name,
            desc,
            author,
            copyright,
            link,
            time,
            keywords,
            bounds,
            extensions,
        } = this;

        return {
            ...(name ? { name } : {}),
            ...(desc ? { desc } : {}),
            ...(author ? { author: author.toObject() } : {}),
            ...(copyright ? { copyright: copyright.toObject() } : {}),
            ...(link ? { link: link.toObject() } : {}),
            ...(time ? { time } : {}),
            ...(keywords ? { keywords } : {}),
            ...(bounds ? { bounds: bounds.toObject() } : {}),
            ...(extensions ? { extensions } : {}),
        };
    }
}
