import * as _ from 'lodash';

export class FilmsService {
  static selector = 'filmsService';

  // default data
  cinemas: { id: string, name: string }[] = [
    { id: '0002', name: 'Ritz' }
  ];

  films: { slug: string, title: string }[] = [
    { slug: 'birds-of-prey', title: 'Birds of Prey' }
  ];

  sessions: { filmSlug: string, cinemaId: string }[] = [
    { filmSlug: 'birds-of-prey', cinemaId: '0002' }
  ];

  constructor(
    private $q: angular.IQService,
    private $http: any,
    // private $scope: any
  ) {
    'ngInject';

    // this.$scope.$on('setListTo', (ev: any, cinemaId: string) => {
    //   this.setListTo(cinemaId);
    // });
  }

  setListTo(cinemaId: string) {
    // this.films = [];
    this.getFilms(cinemaId);
  }

  getCinemas() {
    let deferred: any = this.$q.defer();

    this.$http({
      url: 'https://drafthouse.com/s/mother/v1/page/market/main/austin',
      method: 'GET'
    }).then((res: any) => {
      return deferred.resolve(res.data.data.market.cinemas);
    });

    return deferred.promise;
  }

  getFilms(cinemaId: string) {
    let deferred: any = this.$q.defer();

    this.$http({
      url: 'https://drafthouse.com/s/mother/v1/page/market/main/austin',
      method: 'GET'
    }).then((res: any) => {
      let currentFilms: any = res.data.data.films;

      let currentSessions: any = res.data.data.sessions;

      let filteredSessions: any = _.filter(currentSessions, (session: any) => {
        return session.cinemaId === cinemaId;
      });

      let lookup: any = _.keyBy(filteredSessions, (session: any) => {
        return session.filmSlug;
      });

      let filteredFilms: any = _.filter(currentFilms, (film: any) => {
        return lookup[film.slug];
      });

      return deferred.resolve(filteredFilms);
    });

    return deferred.promise;
  }

}
