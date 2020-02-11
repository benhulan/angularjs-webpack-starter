/**
 * Import the Component styles
 */
import './cinema-list.component.scss';
import { FilmsService } from '../../services/films.service';

class CinemaListController {
  cinema: { name: string, id: string };
  cinemas: { name: string, id: string }[];
  cinemaSelected: ($event: { $event: { id: string }}) => { name: string, id: string };
  films: { slug: string, title: string }[];

  constructor(
    private filmsService: FilmsService,
    // private $scope: any,
  ) {
    'ngInject';
  }

  select(cinemaId: string) {
    // this.$scope.$broadcast('setListTo', cinemaId);
    this.filmsService.getFilms(cinemaId)
      .then((films: any) => {
        this.films = films;
      });
  }
}

export class CinemaList implements angular.IComponentOptions {
  static selector = 'cinemaList';
  static bindings = {
    cinemas: '<',
    cinemaSelected: '&'
  };
  static controller = CinemaListController;
  static template = `
  <div class="section cinema-list">
    <h4>Select Theater</h4>
    <div class="cinema-button-container">
      <button ng-repeat="cinema in $ctrl.cinemas" ng-click="$ctrl.select(cinema.id)">{{ cinema.name }}</button>
    </div>
  </div>
  <br />
  <div class="section film-list">
    <h4 ng-if="$ctrl.films.length">Films Playing at <span class="selected"></span></h4>
    <h4 ng-if="!$ctrl.films.length">Please Select a Theater Above</h4>
    <ul>
      <div ng-repeat="film in $ctrl.films">
        <a href="https://drafthouse.com/show/{{ film.slug }}" target="_new">
          <li>
            {{ film.title }} <img src="./img/cart.svg" width="24" height="24" class="cart">
          </li>
        </a>
      </div>
    </ul>
  </div>
  `;
}
