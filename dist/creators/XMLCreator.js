'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var builder = _interopDefault(require('xmlbuilder'));

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

class XMLCreator {

    constructor(settings = {}) {
        this.settings = settings;
    }

    // eslint-disable-next-line complexity
    processXmlItem(dir, key, value) {
        if (key === 'attributes') {
            Object.keys(value).forEach(attribute => {
                dir.attribute(attribute, value[attribute]);
            });
            return;
        }

        if (key === 'email') {
            const email = value.split('@');
            dir.ele(key, {
                id: email[0],
                domain: email[1]
            });
            return;
        }

        if (value instanceof Date) {
            dir.ele(key, value.toISOString());
            return;
        }

        if (value instanceof Array && typeof value[0] === 'object') {
            value.forEach(item => {
                this.generateXmlData(dir.ele(key), item);
            });
            return;
        }

        if (value instanceof Array) {
            dir.ele(key, value.join(','));
            return;
        }

        if (typeof value === 'object') {
            this.generateXmlData(dir.ele(key), value);
            return;
        }

        dir.ele(key, value);
    }

    generateXmlData(dir, object) {
        Object.keys(object).map(key => {
            return { key, value: object[key] };
        }).forEach(({ key, value }) => {
            this.processXmlItem(dir, key, value);
        });
    }

    toString(data) {
        const root = builder.create('gpx', { encoding: 'UTF-8' });

        this.generateXmlData(root, data);

        return root.end(_extends({
            allowEmpty: true,
            indent: '  ',
            newline: '\n',
            pretty: true
        }, this.settings));
    }
}

module.exports = XMLCreator;
