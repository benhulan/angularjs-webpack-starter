export const configuration = ($locationProvider: angular.ILocationProvider) => {
  'ngInject';
  // $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
};
