import { MomentumclonePage } from './app.po';

describe('momentumclone App', () => {
  let page: MomentumclonePage;

  beforeEach(() => {
    page = new MomentumclonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
