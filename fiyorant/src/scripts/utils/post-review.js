import RestaurantSource from '../data/restaurants-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.review-content');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
      <tr>
          <td>${name}</td>
          <td class="review-body">${review}</td>
          <td>${date}</td>
      </tr>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
