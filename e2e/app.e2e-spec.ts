import { MCSE70410Page } from './app.po';

describe('mcse70410 App', () => {
  let page: MCSE70410Page;

  beforeEach(() => {
    page = new MCSE70410Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
