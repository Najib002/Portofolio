const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('You do not have any restaurant yet.', '.restaurant_not_found');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('You do not have any restaurant yet.', '.restaurant_not_found');

  I.amOnPage('/');

  I.seeElement('.post-item_title a');

  const firstRestaurant = locate('.post-item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('You do not have any restaurant yet.', '.restaurant_not_found');

  I.amOnPage('/');

  I.seeElement('.post-item_title a');
  const firstRestaurant = locate('.post-item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item_title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant_not_found');
  const noFavoriteRestaurant = await I.grabTextFrom('.restaurant_not_found');

  assert.strictEqual(noFavoriteRestaurant, 'You do not have any restaurant yet.');
});
