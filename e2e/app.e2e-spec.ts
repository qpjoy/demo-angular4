import { Http08Page } from './app.po';

describe('http08 App', () => {
  let page: Http08Page;

  beforeEach(() => {
    page = new Http08Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
