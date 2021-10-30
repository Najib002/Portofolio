const assert = require('assert');

Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post a review of restaurant', async ({ I }) => {
  I.seeElement('.post-item_title a');

  const firstRestaurant = locate('.post-item_title a').first();
  I.click(firstRestaurant);

  I.seeElement('.form-review form');
  const textReview = 'Testing post review';
  I.fillField('inputName', 'John');
  I.fillField('inputReview', textReview);

  I.click('#submit-review');

  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
