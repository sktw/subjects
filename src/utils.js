var LOCATION = {
    "title": "Location",
    "type": "header"
};

var PRESSURE = {
    "title": "Pressure",
    "type": "pressure"
};

var TEMPERATURE = {
    "title": "Temp.",
    "type": "temperature"
};

var RAINFALL = {
    "title": "Rainfall",
    "type": "rainfall"
};

var IGNORE = {
    "title": "[ignore]",
    "ignore": true
};

var MIN = {
    "title": "Min",
    "type": "temperature"
};

var MAX = {
    "title": "Max",
    "type": "temperature"
};

var DRY = {
    "title": "Dry",
    "type": "temperature"
};

var WET = {
    "title": "Wet",
    "type": "temperature"
};

function getColumnsTitle(columns) {
    return columns.reduce(function(acc, attrs) {
        if (attrs.type !== 'header' && !attrs.ignore) {
            acc.push(attrs.title);
        }

        return acc;
    }, []).join(' ');
}

function addColumnsTitle(columnSets) {
    return columnSets.map(function(columns) {
        return {
            title: getColumnsTitle(columns),
            columns: columns
        };
    });
}

function createManifests(year, locationSets, columnSets) {
    var manifests = [];

    locationSets.forEach(function(locationAttrs) {
        var locations = locationAttrs.locations;
        var dateTitle = year;

        // use first and last locations to form title if locationsTitle not provided
        var locationsTitle = locationAttrs.locationsTitle || locations[0] + ' - ' + locations[locations.length - 1];
        var titleBase = dateTitle + ' ' + locationsTitle;

        columnSets.forEach(function(columnAttrs) {
            var id = titleBase + ' ' + columnAttrs.title;
            var manifest = {
                id: id,
                year: year,
                locationsTitle: locationsTitle,
                columnsTitle: columnAttrs.title,
                locations: locations,
                blocks: locationAttrs.blocks,
                columns: columnAttrs.columns
            };

            manifests.push(manifest);
        });
    });

    return manifests;
}

exports.LOCATION = LOCATION;
exports.PRESSURE = PRESSURE;
exports.TEMPERATURE = TEMPERATURE;
exports.RAINFALL = RAINFALL;
exports.IGNORE = IGNORE;
exports.MIN = MIN;
exports.MAX = MAX;
exports.DRY = DRY;
exports.WET = WET;
exports.addColumnsTitle = addColumnsTitle;
exports.createManifests = createManifests;
