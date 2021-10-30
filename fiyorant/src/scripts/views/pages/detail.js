import XSS from 'xss';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-source';
import { restaurantsDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReview from '../../utils/post-review';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"> </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContent = document.querySelector('#restaurant');

    try {
      const resto = await RestaurantSource.detailRestaurant(url.id);
      restaurantContent.innerHTML = restaurantsDetailTemplate(resto.restaurant);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant: {
          id: resto.restaurant.id,
          name: resto.restaurant.name,
          pictureId: resto.restaurant.pictureId,
          city: resto.restaurant.city,
          address: resto.restaurant.address,
          rating: resto.restaurant.rating,
          description: resto.restaurant.description,
          categories: resto.restaurant.categories.name,
          menus_foods: resto.restaurant.menus.foods,
          menus_drinks: resto.restaurant.menus.drinks,
          customer_reviews: resto.restaurant.customerReviews,
        },
      });
    } catch (error) {
      restaurantContent.innerHTML = `<h3 style="text-align: center; grid-column-start: 1; grid-column-end: 3;">Whoopsie! There's an error: ${error}, try to refresh!</h3>`;
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    const formSubmit = btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Column cannot be empty, please complete again!');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });

    const html = () => XSS(formSubmit, {
      whiteList: [],
      stripIgnoreTag: true,
      stripIgnoreTagBody: ['script'],
    });

    html();
  },
};

export default Detail;
