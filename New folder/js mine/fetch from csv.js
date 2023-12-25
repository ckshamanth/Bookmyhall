// Fetch and parse the CSV file
fetch('hotels.csv')
  .then(response => response.text())
  .then(csvData => {
    // Parse the CSV data
    const parsedData = Papa.parse(csvData, { header: true }).data;

    // Get the hotels grid container element
    const hotelsGrid = document.getElementById('hotelsGrid');

    // Create hotel cards using the parsed data
    parsedData.forEach(hotel => {
      const hotelCard = createHotelCard(hotel);
      hotelsGrid.appendChild(hotelCard);
    });
  })
  .catch(error => {
    console.error('Error loading hotel data:', error);
  });

// Function to create a hotel card
// Function to create a hotel card
function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-xl-4';
  
    const cardInner = document.createElement('div');
    cardInner.className = 'card shadow p-2 pb-0 h-100';
  
    const image = document.createElement('img');
    image.src = hotel.Image;
    image.className = 'rounded-2';
    image.alt = 'Card image';
    cardInner.appendChild(image);
  
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body px-3 pb-0';
  
    const ratingCart = document.createElement('div');
    ratingCart.className = 'd-flex justify-content-between mb-3';
  
    const rating = document.createElement('a');
    rating.href = '#';
    rating.className = 'badge bg-dark text-white';
    rating.innerHTML = `<i class="bi fa-fw bi-star-fill me-2 text-warning"></i>${hotel.Rating}`;
    ratingCart.appendChild(rating);
  
    const bookmark = document.createElement('a');
    bookmark.href = '#';
    bookmark.className = 'h6 mb-0 z-index-2';
    bookmark.innerHTML = '<i class="bi fa-fw bi-bookmark"></i>';
    ratingCart.appendChild(bookmark);
  
    cardBody.appendChild(ratingCart);
  
    const title = document.createElement('h5');
    title.className = 'card-title';
    const titleLink = document.createElement('a');
    titleLink.href = 'hotel-detail.html';
    titleLink.textContent = hotel.Name;
    title.appendChild(titleLink);
    cardBody.appendChild(title);
  
    const amenityList = document.createElement('ul');
    amenityList.className = 'nav nav-divider mb-2 mb-sm-3';
    hotel.Amenities.split(',').forEach(amenity => {
      const amenityItem = document.createElement('li');
      amenityItem.className = 'nav-item';
      amenityItem.textContent = amenity.trim();
      amenityList.appendChild(amenityItem);
    });
    cardBody.appendChild(amenityList);
  
    cardInner.appendChild(cardBody);
  
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer pt-0';
  
    const priceButton = document.createElement('div');
    priceButton.className = 'd-sm-flex justify-content-sm-between align-items-center';
  
    const priceContainer = document.createElement('div');
    priceContainer.className = 'd-flex align-items-center';
    const price = document.createElement('h5');
    price.className = 'fw-normal text-success mb-0 me-1';
    price.textContent = `₹${hotel.Price}`;
    const priceUnit = document.createElement('span');
    priceUnit.className = 'mb-0 me-2';
    priceUnit.textContent = '/day';
    priceContainer.appendChild(price);
    priceContainer.appendChild(priceUnit);
    priceButton.appendChild(priceContainer);
  
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'mt-2 mt-sm-0 z-index-2';
    const button = document.createElement('a');
    button.href = 'hotel-detail.html';
    button.className = 'btn btn-sm btn-primary-soft mb-0 w-100';
    button.innerHTML = 'View Detail<i class="bi bi-arrow-right ms-2"></i>';
    buttonContainer.appendChild(button);
    priceButton.appendChild(buttonContainer);
  
    cardFooter.appendChild(priceButton);
  
    cardInner.appendChild(cardFooter);
  
    card.appendChild(cardInner);
  
    return card;
  }
  
  // Function to parse the CSV data and generate hotel cards
  function generateHotelCards(data) {
    const hotelsContainer = document.getElementById('hotels-container');
  
    data.forEach(hotelData => {
      const hotel = {
        Image: hotelData[0],
        Rating: hotelData[1],
        Name: hotelData[2],
        Amenities: hotelData[3],
        Price: hotelData[4]
      };
  
      const hotelCard = createHotelCard(hotel);
      hotelsContainer.appendChild(hotelCard);
    });
  }
  
  // Fetch the CSV file and generate hotel cards
  fetch('hotels.csv')
    .then(response => response.text())
    .then(csvData => {
      const parsedData = Papa.parse(csvData, { header: true });
      const hotels = parsedData.data;
      generateHotelCards(hotels);
    });
  

  return card;
}
