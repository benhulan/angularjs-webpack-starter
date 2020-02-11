import * as angular from 'angular';
import 'angular-mocks';
import { FilmsContainer } from './films.container';

describe('Films container', () => {
    let _filmsService = {
        getCinemas: jasmine.createSpy('getCinemas')
    };

    let _$state = {
        go: jasmine.createSpy('go')
    };

    beforeEach(() => {
        angular
            .module('app', [])
            .component(FilmsContainer.selector, FilmsContainer)
            .value('filmsService', _filmsService);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(FilmsContainer.selector, {}, {});

        expect(component).toBeDefined();
    }));

    it('should call `filmsService.getCinemas` on init', angular.mock.inject((
        $componentController: any,
        filmsService: any,
        $q: angular.IQService) => {
        const component = $componentController(FilmsContainer.selector, {}, {});
        _filmsService.getCinemas.and.returnValue($q.resolve());
        component.$onInit();

        expect(filmsService.getCinemas).toHaveBeenCalled();
    }));
});
