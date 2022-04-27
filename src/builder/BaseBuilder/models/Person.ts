import { Person as PersonData } from '../../../types';
import Link from './Link';

export default class Person {
    private name?: string;

    private email?: string;

    private link?: Link;

    /**
     * @see http://www.topografix.com/gpx/1/1/#type_personType
     */
    public constructor({ name, email, link }: { email?: string; link?: Link; name?: string }) {
        this.name = name;
        this.email = email;
        this.link = link;
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
