import { Extensions, Link, Route as RouteData } from '../../../types';
import Point from './Point';

export default class Route {
    private cmt?: string;

    private desc?: string;

    private extensions?: Extensions;

    private link?: Link;

    private name?: string;

    private number?: number;

    private rtept?: Point[];

    private src?: string;

    private type?: string;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_rteType
     */
    public constructor(data: Omit<RouteData, 'rtept'> & { rtept?: Point[] }) {
        this.cmt = data.cmt;
        this.desc = data.desc;
        this.extensions = data.extensions;
        this.link = data.link;
        this.name = data.name;
        this.number = data.number;
        this.rtept = data.rtept;
        this.src = data.src;
        this.type = data.type;
    }

    // eslint-disable-next-line complexity
    public toObject(): RouteData {
        const { cmt, desc, src, link, number, type, extensions, rtept, name } = this;

        return {
            ...(cmt ? { cmt } : {}),
            ...(desc ? { desc } : {}),
            ...(src ? { src } : {}),
            ...(link ? { link } : {}),
            ...(typeof number === 'number' ? { number } : {}),
            ...(type ? { type } : {}),
            ...(extensions ? { extensions } : {}),
            ...(rtept ? { rtept: rtept.map((item) => item.toObject()) } : {}),
            ...(name ? { name } : {}),
        };
    }
}
