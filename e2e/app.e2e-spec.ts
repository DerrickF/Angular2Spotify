import { AngualrSpotifyUpdatePage } from './app.po';

describe('angualr-spotify-update App', () => {
  let page: AngualrSpotifyUpdatePage;

  beforeEach(() => {
    page = new AngualrSpotifyUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
