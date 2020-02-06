import * as angular from 'angular';
import 'angular-mocks';
import { FilmsService } from './films.service';

describe('Contacts container', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .service('filmsService', FilmsService);
    angular.mock.module('app');
  });

  it('should exist', angular.mock.inject((filmsService: FilmsService) => {
    expect(filmsService).toBeDefined();
  }));

  // it('should generate an id when adding a new film', angular.mock.inject((filmsService: FilmsService) => {
  //   const film = {
  //     title: 'Hello Kitty',
  //     slug: 'hello-kitty'
  //   };
  //
  //   filmsService.add(film);
  //
  //   expect(filmsService.films[1].id).toBe(2);
  // }));
  //
  // it('should remove a film by id', angular.mock.inject((filmsService: FilmsService) => {
  //   filmsService.remove(1);
  //   expect(filmsService.films.length).toBe(0);
  // }));
});
