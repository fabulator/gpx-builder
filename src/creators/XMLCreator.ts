/* eslint-disable @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-explicit-any */
import { create } from 'xmlbuilder2';
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';
import { GPXBuildData } from '../types';
import { CreatorInterface } from './CreatorInterface';

interface Settings {
  [key: string]: string | boolean;
}

export default class XMLCreator implements CreatorInterface {
  private settings: Settings;

  public constructor(settings: Settings = {}) {
    this.settings = settings;
  }

  private processXmlItem(dir: XMLBuilder, key: string, value: any) {
    if (key === 'attributes') {
      Object.keys(value).forEach((attribute) => {
        dir.att(attribute, value[attribute]);
      });
      return;
    }

    if (key === 'email') {
      const email = value.split('@');
      dir.ele(key, {
        domain: email[1],
        id: email[0],
      });
      return;
    }

    if (value instanceof Date) {
      dir.ele(key).txt(value.toISOString());
      return;
    }

    if (Array.isArray(value) && typeof value[0] === 'object') {
      value.forEach((item) => {
        this.generateXmlData(dir.ele(key), item);
      });
      return;
    }

    if (Array.isArray(value)) {
      dir.ele(key).txt(value.join(','));
      return;
    }

    if (typeof value === 'object') {
      this.generateXmlData(dir.ele(key), value);
      return;
    }

    dir.ele(key).txt(value);
  }

  private generateXmlData(dir: XMLBuilder, object: any) {
    Object.keys(object)
      .map((key) => {
        return { key, value: object[key] };
      })
      .forEach(({ key, value }) => {
        this.processXmlItem(dir, key, value);
      });
  }

  public toString(data: GPXBuildData): string {
    const root = create({ encoding: 'UTF-8' }, 'gpx');

    this.generateXmlData(root.first(), data);

    return root.end({
      allowEmptyTags: true,
      indent: '  ',
      newline: '\n',
      prettyPrint: true,
      ...this.settings,
    });
  }
}
