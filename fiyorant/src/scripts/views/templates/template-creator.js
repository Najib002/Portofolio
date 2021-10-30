import CONFIG from '../../globals/config';

const restaurantsItemTemplate = (restaurant) => `
    <article class="post-item">
        <img class="post-item_thumbnail lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photo/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous" />
        <p class="text-thumb">Kota ${restaurant.city}</p>
        <div class="post-item_contents">
            <p>⭐️ Rating: ${restaurant.rating}</p>
            <h1 class="post-item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
            <p class="post-item_desc">${restaurant.description}</p>
        </div>
    </article>
`;

const restaurantsDetailTemplate = (restaurant) => `<h2 class="restaurant-title">${restaurant.name}</h2>
    <img class="restaurant-poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL_DETAIL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />

    <div class="restaurant-info">
        <h3>Information</h3>
            <h4>City</h4>
                <p>${restaurant.city}</p>
            <h4>Address Date</h4>
                <p>${restaurant.address}</p>
            <h4>Rating</h4>
                <p>${restaurant.rating}</p>
            <h4>Categories</h4>
                <p>${restaurant.categories.map((cat) => `<li>${cat.name}</li>`).join('')}</p>
    </div>

    <div class="restaurant-menus">
        <h3>🍴Menus</h3>
            <dl class="foods">
                <dt><h4>🥗Foods</h4></dt>
                    <ul>
                        ${restaurant.menus.foods.map((food) => `<li style="list-style: none;">${food.name}</li>`).join('')}
                    </ul>
            </dl>
            <dl class="drinks">
                <dt><h4>☕Drinks</h4></dt>
                    <ul>
                        ${restaurant.menus.drinks.map((drink) => `<li style="list-style: none;">${drink.name}</li>`).join('')}
                    </ul>
            </dl>
    </div>
    
    <div class="restaurant-overviews">
        <h3>Overviews</h3>
        <p>${restaurant.description}</p>
    </div>

    <div class="restaurant-reviews">
        <h3>Customer Reviews</h3>
            <table class="review-content">
                <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Date</th>
                </tr>
                ${restaurant.customerReviews.map((item) => `<tr>
                        <td>${item.name}</td>
                        <td class="review-body">${item.review}</td>
                        <td>${item.date}</td>
                    </tr>`).join('')}
            </table>
    </div>

    <div class="form-review">
        <form>
        <h3>Write us something! 😊</h3>
            <div class="form-margin">
                <label for="inputName" class="form-label">Name</label> : <br/>
                <input name="inputName" type="text" class="form-control" id="inputName">
            </div>                    
            <div class="form-margin">
                <label for="inputReview" class="form-label">Review</label> : <br/>
                <textarea name="inputReview" class="form-control" id="inputReview"></textarea>
            </div>    
            <button id="submit-review" type="submit" class="btn">Submit</button>
        </form>
    </div>

`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  restaurantsItemTemplate,
  restaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
