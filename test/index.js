/*global describe, it*/
/*jshint expr: true, unused: false */
'use strict';

var expect = require('chai').expect,
    merge = require('../index');

describe('immutable-merge', function() {
    it('creates a new object', function () {
        expect(merge({bar: 1})).to.deep.equal({bar: 1});
        expect(merge({bar: 1}, {baz: 2})).to.deep.equal({bar: 1, baz: 2});
        expect(merge(null, undefined)).to.deep.equal({});
        expect(merge(null, undefined, {bar: 1}, null)).to.deep.equal({bar: 1});
    });

    it('does not mutate the original objects', function () {
        var a = {bar: 1},
            b = {baz: 2},
            newObject = merge({bar: 1}, {baz: 2});

        expect(a).to.deep.equal({bar: 1});
        expect(b).to.deep.equal({baz: 2});
    });
});