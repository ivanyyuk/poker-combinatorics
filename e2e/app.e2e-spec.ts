import { PokerCombinatoricsPage } from './app.po';

describe('poker-combinatorics App', () => {
  let page: PokerCombinatoricsPage;

  beforeEach(() => {
    page = new PokerCombinatoricsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
