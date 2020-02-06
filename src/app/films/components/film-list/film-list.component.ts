class FilmListController {
  slug: string;
  title: string;
}

export class FilmList implements angular.IComponentOptions {
  static selector = 'filmList';
  static bindings = {
    films: '<',
    filmSelected: '&'
  };
  static controller = FilmListController;
  static template = `
  <div class="film-list" ng-repeat="film in $ctrl.films">
    <a href="https://drafthouse.com/show/{{ film.slug }}" target="_new">
      <span>{{ film.title }}</span>
      <i class="pull-right glyphicon glyphicon-shopping-cart"></i>
    </a>
  </div>
  `;
}
