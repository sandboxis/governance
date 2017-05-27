import { Oursandbox.IsPage } from './app.po';

describe('oursandbox.is App', () => {
  let page: Oursandbox.IsPage;

  beforeEach(() => {
    page = new Oursandbox.IsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
