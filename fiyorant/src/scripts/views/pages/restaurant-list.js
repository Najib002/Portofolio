import RestaurantSource from '../../data/restaurants-source';
import { restaurantsItemTemplate } from '../templates/template-creator';
import Loading from '../templates/loading';

const RestList = {
  async render() {
    return `
      <section class="content">
        <div id="loading" style="text-align: center; grid-column-start: 1; grid-column-end: 4;"></div>
          <div class="latest">
              <h1 class="latest-label">Explore Restaurants</h1>
              <div class="posts"></div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.latest');
    loading.innerHTML = Loading();
    main.style.display = 'none';
    const restaurantsContainer = document.querySelector('.posts');
    restaurantsContainer.innerHTML = '';

    try {
      const rest = await RestaurantSource.restaurantList();
      rest.forEach((restaurant) => {
        restaurantsContainer.innerHTML += restaurantsItemTemplate(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      main.style.display = 'block';
      loading.style.display = 'none';
      restaurantsContainer.innerHTML = `<h3>Whoopsie! There's an error: ${error}, try to refresh!</h3>`;
    }
  },
};

export default RestList;
