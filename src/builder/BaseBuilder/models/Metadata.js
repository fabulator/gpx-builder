// @flow strict
import type { Meta, Extensions } from './../../../types';
import Person from './Person';
import Copyright from './Copyright';
import Bounds from './Bounds';
import Link from './Link';

export default class Metadata {
    name: ?string;
    desc: ?string;
    author: ?Person;
    copyright: ?Copyright;
    link: ?Link;
    time: ?Date;
    keywords: ?string;
    bounds: ?Bounds;
    extensions: ?Extensions;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_metadataType
     */
    constructor({
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
        name?: string;
        desc?: string;
        author?: Person;
        copyright?: Copyright;
        link?: Link;
        time?: Date;
        keywords?: string;
        bounds?: Bounds;
        extensions?: Extensions;
    }) {
        this.name = name;
        this.desc = desc;
        this.author = author;
        this.copyright = copyright;
        this.link = link;
        this.time = time;
        this.keywords = keywords;
        this.bounds = bounds;
        this.extensions = extensions;
    }

    // eslint-disable-next-line complexity
    toObject(): Meta {
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
