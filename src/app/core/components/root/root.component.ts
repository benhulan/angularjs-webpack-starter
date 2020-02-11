export class Root implements angular.IComponentOptions {
    static selector = 'root';
    static template = `
    <header>
      <div class="header-bg"></div>
      <img ng-src="images/arrow.svg" width="260" height="84" class="arrow" alt="Welcome Banner Art" />
    </header>
    <main>
      <img ng-src="images/logo.svg" width="644" height="320" class="logo" alt="Alamo Drafthouse Logo" />
      <div ui-view class="main-content"></div>
    </main>
    `;
}
