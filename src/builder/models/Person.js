// @flow
import type { Person as PersonData } from './../../types';
import Link from './Link';

export default class Person {
    name: ?string;
    email: ?string;
    link: ?Link;

    constructor({
        name,
        email,
        link,
    }: {
        name?: string,
        email?: string,
        link?: Link,
    }) {
        this.name = name;
        this.email = email;
        this.link = link;
    }

    toObject(): PersonData {
        const {
            name,
            email,
            link,
        } = this;

        return {
            ...(name ? { name } : {}),
            ...(email ? { email } : {}),
            ...(link ? { link: link.toObject() } : {}),
        };
    }
}
