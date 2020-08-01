import { Person as PersonData } from '../../../types';
import Link from './Link';

export default class Person {
    private name: string | null;

    private email: string | null;

    private link: Link | null;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_personType
     */
    public constructor({ name, email, link }: { email?: string; link?: Link; name?: string }) {
        this.name = name || null;
        this.email = email || null;
        this.link = link || null;
    }

    public toObject(): PersonData {
        const { name, email, link } = this;

        return {
            ...(name ? { name } : {}),
            ...(email ? { email } : {}),
            ...(link ? { link: link.toObject() } : {}),
        };
    }
}
