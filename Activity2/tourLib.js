/*
// The data model for a tour is as follows:
{
  "title": "7 Days Tour",
  "description": "Join us for the Best of Helsinki!",
  "image": "https://www.course-api.com/images/tours/tour-x.jpeg",
  "price": "1,495"
}
*/

let tourArray = [];
let nextId = 1;

// Get all tours
function getAll() {
  return tourArray;
}

// Add one tour
function addOne(title, description, image, price) {
  if (!title || !description || !image || !price) {
    return false; 
  }

  const newTour = {
    id: nextId++,
    title,
    description,
    image,
    price,
  };

  tourArray.push(newTour);
  return newTour;
}

// Find a tour by ID
function findById(id) {
  const tour = tourArray.find((item) => item.id == id);
  return tour || false;
}

// Update tour by ID
function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    if (updatedData.title) tour.title = updatedData.title;
    if (updatedData.description) tour.description = updatedData.description;
    if (updatedData.image) tour.image = updatedData.image;
    if (updatedData.price) tour.price = updatedData.price;
    return tour;
  }
  return false;
}

// Delete tour by ID
function deleteOneById(id) {
  const tour = findById(id);
  if (tour) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((t) => t.id != id);
    return tourArray.length < initialLength; 
  }
  return false;
}

// Testing 
if (require.main === module) {
  console.log("🧪 Running tourLib.js tests...");

  let result = addOne(
    "7 Days Tour",
    "Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495"
  );
  console.log("Added tour:", result);

  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));

  // Add another
  result = addOne(
    "Lapland Adventure",
    "Experience the Northern Lights and reindeer safari!",
    "https://www.course-api.com/images/tours/tour-y.jpeg",
    "2,100"
  );
  console.log("Added second tour:", result);
  console.log("All tours:", getAll());

  // Update one
  console.log(
    "updateOneById called:",
    updateOneById(1, {
      price: "1,550",
      description: "Updated - Best of Helsinki and nearby islands!",
    })
  );

  // Delete one
  console.log("deleteOneById called:", deleteOneById(2));
  console.log("All tours after deletion:", getAll());
}

// Export functions
Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;
