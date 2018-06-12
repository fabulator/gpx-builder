// @flow strict
import type { Track as TrackData, Extensions } from './../../../types';
import Link from './Link';
import Segment from './Segment';

export default class Track {
    name: ?string;
    cmt: ?string;
    desc: ?string;
    src: ?string;
    link: ?Link;
    number: ?number;
    type: ?string;
    extensions: ?Extensions;
    trkseg: ?Array<Segment>;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_trkType
     */
    constructor(trkseg: ?Array<Segment>, {
        name,
        cmt,
        desc,
        src,
        link,
        number,
        type,
        extensions,
    }: {
        name?: string,
        cmt?: string,
        desc?: string,
        src?: string,
        link?: Link,
        number?: number,
        type?: string,
        extensions?: Extensions,
    } = {}) {
        this.name = name;
        this.cmt = cmt;
        this.desc = desc;
        this.src = src;
        this.link = link;
        this.number = number;
        this.type = type;
        this.extensions = extensions;
        this.trkseg = trkseg;
    }

    setSegments(trkseg: ?Array<Segment>): this {
        this.trkseg = trkseg;
        return this;
    }

    // eslint-disable-next-line complexity
    toObject(): TrackData {
        const {
            name,
            cmt,
            desc,
            src,
            link,
            number,
            type,
            extensions,
            trkseg,
        } = this;

        return {
            ...(name ? { name } : {}),
            ...(cmt ? { cmt } : {}),
            ...(desc ? { desc } : {}),
            ...(src ? { src } : {}),
            ...(link ? { link: link.toObject() } : {}),
            ...(number ? { number } : {}),
            ...(type ? { type } : {}),
            ...(extensions ? { extensions } : {}),
            ...(trkseg ? { trkseg: trkseg.map(segment => segment.toObject()) } : {}),
        };
    }
}
