import { FilmsContainer } from './containers/films/films.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider
  .state('films', {
    parent: 'app',
    url: '/films',
    component: FilmsContainer.selector
  });
};
