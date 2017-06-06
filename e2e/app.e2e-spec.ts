import { AngularObserverPatternPage } from './app.po';

describe('angular-observer-pattern App', () => {
  let page: AngularObserverPatternPage;

  beforeEach(() => {
    page = new AngularObserverPatternPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
