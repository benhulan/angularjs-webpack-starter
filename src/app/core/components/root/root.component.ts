export class Root implements angular.IComponentOptions {
    static selector = 'root';
    static template = `
    <header>
      <div class="header-bg"></div>
      <img src="/img/arrow.svg" width="260" height="84" class="arrow">
    </header>
    <main>
      <img src="/img/logo.svg" width="644" height="320" class="logo">
      <div ui-view class="main-content"></div>
    </main>
    `;
}
