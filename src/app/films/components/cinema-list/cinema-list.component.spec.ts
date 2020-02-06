import * as angular from 'angular';
import 'angular-mocks';
import { CinemaList } from './cinema-list.component';

describe('CinemaList component', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component(CinemaList.selector, CinemaList);
    angular.mock.module('app');
  });

  it('should exist', angular.mock.inject(($componentController: any) => {
    const component = $componentController(CinemaList.selector, {}, {});

    expect(component).toBeDefined();
  }));

  // it('should pass `cinema` to `cinemaSelected` binding when removing', angular.mock.inject(($componentController: any) => {
  //   const bindings = {
  //     cinemaSelected: jasmine.createSpy('cinemaSelected')
  //   };
  //   const component = $componentController(CinemaList.selector, {}, bindings);
  //   component.select({ id: '0001' });
  //
  //   expect(bindings.cinemaSelected).toHaveBeenCalledWith({ $event: { id: '0001' }});
  // }));
});
