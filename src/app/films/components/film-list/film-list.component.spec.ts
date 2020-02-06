import * as angular from 'angular';
import 'angular-mocks';
import { FilmList } from './film-list.component';

describe('FilmList component', () => {
    beforeEach(() => {
        angular
          .module('app', [])
          .component(FilmList.selector, FilmList);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(FilmList.selector, {}, {});

        expect(component).toBeDefined();
    }));

    // it('should call `contactAdded` binding when submitting', angular.mock.inject(($componentController: any) => {
    //     const bindings = {
    //         contactAdded: jasmine.createSpy('contactAdded')
    //     };
    //     const component = $componentController(FilmList.selector, {}, bindings);
    //     component.submit();
    //
    //     expect(bindings.contactAdded).toHaveBeenCalled();
    // }));
    //
    // it('should pass `contact` to `contactAdded` binding when submitting', angular.mock.inject(($componentController: any) => {
    //     const bindings = {
    //         contactAdded: jasmine.createSpy('contactAdded')
    //     };
    //     const component = $componentController(FilmList.selector, {}, bindings);
    //     component.firstName = 'John';
    //     component.lastName = 'Doe';
    //     component.submit();
    //
    //     expect(bindings.contactAdded).toHaveBeenCalledWith({ $event: { contact: { firstName: 'John', lastName: 'Doe' }}});
    // }));
    //
    // it('should clear `firstName` and `lastName` when submitting', angular.mock.inject(($componentController: any) => {
    //     const bindings = {
    //         contactAdded: jasmine.createSpy('contactAdded')
    //     };
    //     const component = $componentController(FilmList.selector, {}, bindings);
    //     component.firstName = 'John';
    //     component.lastName = 'Doe';
    //     component.submit();
    //
    //     expect(component.firstName).toBe('');
    //     expect(component.lastName).toBe('');
    // }));
});
