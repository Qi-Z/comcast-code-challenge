import { ComcastCodeChallengePage } from './app.po';

describe('comcast-code-challenge App', () => {
  let page: ComcastCodeChallengePage;

  beforeEach(() => {
    page = new ComcastCodeChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
