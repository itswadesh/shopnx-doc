import { ShopnxDocPage } from './app.po';

describe('shopnx-doc App', () => {
  let page: ShopnxDocPage;

  beforeEach(() => {
    page = new ShopnxDocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
