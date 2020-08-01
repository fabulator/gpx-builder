import { Link as LinkData } from '../../../types';

export default class Link {
    private href: string;

    private text: string | null;

    private type: string | null;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_linkType
     */
    public constructor(
        href: string,
        {
            text,
            type,
        }: {
            text?: string;
            type?: string;
        },
    ) {
        this.href = href;
        this.text = text || null;
        this.type = type || null;
    }

    public toObject(): LinkData {
        const { href, text, type } = this;

        return {
            attributes: { href },
            ...(text ? { text } : {}),
            ...(type ? { type } : {}),
        };
    }
}
