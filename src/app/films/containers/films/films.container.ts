import { FilmsService } from './../../services/films.service';

/**
 * Import the Component styles
 */
import './films.container.scss';

class FilmsController {
  films: { slug: string, title: string }[];
  cinemas: { id: string, name: string }[];

  constructor(private filmsService: FilmsService) {
    'ngInject';
  }

  $onInit() {
    this.fetchData();
  }

  private fetchData() {
    this.filmsService.getCinemas()
      .then((cinemas: any) => {
        this.cinemas = cinemas;
      });

    // this.filmsService.getFilms(cinemaId)
    //   .then((films: any) => {
    //     this.films = films;
    //   });
  }
}

export class FilmsContainer implements angular.IComponentOptions {
  static selector = 'films';
  static controller = FilmsController;
  static template = `
    <div class="films">
      <h1>Find a Movie</h1>
      <cinema-list cinemas="$ctrl.cinemas"></cinema-list>
    </div>
  `;
}
