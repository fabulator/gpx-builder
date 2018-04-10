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

class DefaultBuilder {

    constructor() {
        this.data = {};
        this.schemaLocation = ['http://www.topografix.com/GPX/1/1', 'http://www.topografix.com/GPX/1/1/gpx.xsd'];
    }

    setMetadata(metadata) {
        this.data.metadata = metadata;
        return this;
    }

    setWayPoints(waypoints) {
        this.data.wpt = waypoints;
        return this;
    }

    setRoutes(routes) {
        this.data.rte = routes;
        return this;
    }

    setTracks(tracks) {
        this.data.trk = tracks;
        return this;
    }

    setExtensions(extensions) {
        this.data.extensions = extensions;
        return this;
    }

    setTrackpointExtension() {
        this.schemaLocation = [...this.schemaLocation, 'http://www.garmin.com/xmlschemas/TrackPointExtension/v1', 'http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd'];

        this.data = _extends({}, this.data, {
            attributes: _extends({}, this.data.attributes, {
                'xmlns:gpxtpx': 'http://www.garmin.com/xmlschemas/TrackPointExtension/v1'
            })
        });
        return this;
    }

    setGarminExtension() {
        this.schemaLocation = [...this.schemaLocation, 'http://www.garmin.com/xmlschemas/GpxExtensions/v3', 'http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd'];

        this.data = _extends({}, this.data, {
            attributes: _extends({}, this.data.attributes, {
                'xmlns:gpxx': 'http://www.garmin.com/xmlschemas/GpxExtensions/v3'
            })
        });
        return this;
    }

    getData() {
        return _extends({}, this.data, {
            attributes: _extends({
                creator: 'MY',
                version: '1.1',
                xmlns: 'http://www.topografix.com/GPX/1/1',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xsi:schemaLocation': this.schemaLocation.join(' ')
            }, this.data.attributes)
        });
    }
}

export { DefaultBuilder };
