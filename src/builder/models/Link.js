// @flow
import type { Link as LinkData } from './../../types';

export default class Link {
    href: string;
    text: ?string;
    type: ?string;

    constructor(href: string, {
        text,
        type,
    }: {
        text?: string,
        type?: string,
    }) {
        this.href = href;
        this.text = text;
        this.type = type;
    }

    toObject(): LinkData {
        const {
            href,
            text,
            type,
        } = this;

        return {
            attributes: { href },
            ...(text ? { text } : {}),
            ...(type ? { type } : {}),
        };
    }
}
