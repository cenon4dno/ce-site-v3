import {
    it,
    inject,
    describe,
    beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {About} from './about';

describe('About', () => {
    beforeAll(() => {
    });

    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        About
    ]);

    it('should log ngOnInit', inject([About], (about) => {
        about.ngOnInit();
    }));

});