// @flow strict
import builder from 'xmlbuilder';
import type { GPXBuildData } from '../types';
import type { CreatorInterface } from './CreatorInterface';

type Settings = {[string]: string | boolean};

export default class XMLCreator implements CreatorInterface {
    settings: Settings;

    constructor(settings: Settings = {}) {
        this.settings = settings;
    }

    // eslint-disable-next-line complexity
    processXmlItem(dir: *, key: string, value: *) {
        if (key === 'attributes') {
            Object.keys(value).forEach((attribute) => {
                dir.attribute(attribute, value[attribute]);
            });
            return;
        }

        if (key === 'email') {
            const email = value.split('@');
            dir.ele(key, {
                id: email[0],
                domain: email[1],
            });
            return;
        }

        if (value instanceof Date) {
            dir.ele(key, value.toISOString());
            return;
        }

        if (Array.isArray(value) && typeof value[0] === 'object') {
            value.forEach((item) => {
                this.generateXmlData(dir.ele(key), item);
            });
            return;
        }

        if (Array.isArray(value)) {
            dir.ele(key, value.join(','));
            return;
        }

        if (typeof value === 'object') {
            this.generateXmlData(dir.ele(key), value);
            return;
        }

        dir.ele(key, value);
    }

    generateXmlData(dir: *, object: *) {
        Object.keys(object).map((key) => {
            return { key, value: object[key] };
        }).forEach(({ key, value }) => {
            this.processXmlItem(dir, key, value);
        });
    }

    toString(data: GPXBuildData): string {
        const root = builder.create('gpx', { encoding: 'UTF-8' });

        this.generateXmlData(root, data);

        return root.end({
            allowEmpty: true,
            indent: '  ',
            newline: '\n',
            pretty: true,
            ...this.settings,
        });
    }
}