import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restaurantsItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
            <div class="latest">
                <h1 class="latest-label">🖤Your Favorite Restaurants</h1>
                <div id="restaurants" class="posts">
                
                </div>
            </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContent = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContent.innerHTML = `
          <h3 class="restaurant_not_found" style="text-align: center; grid-column-start: 1; grid-column-end: 3;">
            You do not have any restaurant yet.
          </h3>
        `;
    }
    restaurants.forEach((resto) => {
      restaurantsContent.innerHTML += restaurantsItemTemplate(resto);
    });
  },
};

export default Favorite;
