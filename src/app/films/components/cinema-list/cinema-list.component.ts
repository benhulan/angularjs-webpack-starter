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
    private $scope: any,
  ) {
    'ngInject';
    this.$scope.selectedCinema = '';
  }

  select(cinemaId: string, cinemaName: string) {
    this.$scope.selectedCinema = cinemaName;
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
      <a href="" ng-repeat="cinema in $ctrl.cinemas" ng-click="$ctrl.select(cinema.id, cinema.name)">{{ cinema.name }}</a>
    </div>
  </div>
  <br />
  <div class="section film-list">
    <h4 ng-if="$ctrl.films.length">Films Playing at <span class="selected">{{ selectedCinema }}</span></h4>
    <h4 ng-if="!$ctrl.films.length">Please Select a Theater Above</h4>
    <ul>
      <div ng-repeat="film in $ctrl.films">
        <a ng-href="https://drafthouse.com/show/{{ film.slug }}" target="_new">
          <li>
            <span>{{ film.title }} <img ng-src="images/cart.svg" width="24" height="24" class="cart" alt="cart" /></span>
          </li>
        </a>
      </div>
    </ul>
  </div>
  `;
}
