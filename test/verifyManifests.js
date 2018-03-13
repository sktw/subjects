var expect = require('chai').expect;
var manifests = require('../src/manifests');

function verify(manifest) {
    expect(manifest).to.be.an('object');

    expect(manifest).to.have.property('id');
    expect(manifest.id).to.be.a('string');

    expect(manifest).to.have.property('year');
    expect(manifest.id).to.be.a('string');

    expect(manifest).to.have.property('locationsTitle');
    expect(manifest.id).to.be.a('string');

    expect(manifest).to.have.property('columnsTitle');
    expect(manifest.id).to.be.a('string');

    expect(manifest).to.have.property('locations');
    var locations = manifest.locations;
    expect(locations).to.be.an('array');
    expect(locations).not.to.be.empty;
    locations.forEach(loc => expect(loc).to.be.a('string'));

    expect(manifest).to.have.property('blocks');
    var blocks = manifest.blocks;
    expect(blocks).not.to.be.empty;
    blocks.forEach(block => expect(block).to.be.a('number'));
    expect(blocks.reduce((count, block) => count + block, 0)).to.equal(locations.length);

    expect(manifest).to.have.property('columns');
    var columns = manifest.columns;
    expect(columns).not.to.be.empty;

    columns.forEach(function(column) {
        expect(column).to.be.an('object');

        expect(column).to.have.property('title');
        expect(column.title).to.be.a('string');

        if (column.hasOwnProperty('type')) {
            expect(column.type).to.be.oneOf(['header', 'pressure', 'temperature', 'rainfall']);
        }
        else {
            expect(column).to.have.property('ignore');
            expect(column.ignore).to.equal(true);
        }
    });
}

describe('assets manifests', function() {
    it('all manifests should have different ids', function() {
        var set = {};
        manifests.forEach(function(manifest) {
            set[manifest.id] = true;
        });

        expect(Object.keys(set).length).to.equal(manifests.length);
    });

    it('each manifest should have correct form', function() {
        manifests.forEach(function(manifest) {
            console.log(manifest.id);
            verify(manifest);
        });
    });
});
