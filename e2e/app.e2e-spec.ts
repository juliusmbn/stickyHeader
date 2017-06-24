import { StickyTableHeaderPage } from './app.po';

describe('sticky-table-header App', () => {
  let page: StickyTableHeaderPage;

  beforeEach(() => {
    page = new StickyTableHeaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
