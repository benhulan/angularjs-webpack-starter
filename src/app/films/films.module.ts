// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { CinemaList } from './components/cinema-list/cinema-list.component';
import { FilmList } from './components/film-list/film-list.component';

/**
 * Import Module Containers
 */
import { FilmsContainer } from './containers/films/films.container';

/**
 * Import Module Services
 */
import { FilmsService } from './services/films.service';

/**
 * Import Module Routing
 */
import { routing } from './films.routes';

export const moduleName =
  angular.module('application.films', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(FilmList.selector, FilmList)
  .component(CinemaList.selector, CinemaList)

  /**
   * Register Module Containers
   */
  .component(FilmsContainer.selector, FilmsContainer)

  /**
   * Register Module Services
   */
  .service(FilmsService.selector, FilmsService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
