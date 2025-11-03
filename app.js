const express = require("express");
const app = express();

const {
<<<<<<< HEAD
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require("./feedbackHandlers");
=======
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./tourHandlers"); 
>>>>>>> fe17221 (Complete Week 3 pair prgram Part2)

// Middleware to parse JSON
app.use(express.json());

// ROUTES

<<<<<<< HEAD
// GET /feedback
app.get("/feedback", getAllFeedbacks);

// POST /feedback
app.post("/feedback", createFeedback);

// GET /feedback/:feedbackId
app.get("/feedback/:feedbackId", getFeedbackById);

// PUT /feedback/:feedbackId
app.put("/feedback/:feedbackId", updateFeedback);

// DELETE /feedback/:feedbackId
app.delete("/feedback/:feedbackId", deleteFeedback);
=======
// GET /tours
app.get("/tours", getAllTours);

// POST /tours
app.post("/tours", createTour);

// GET /tours/:tourId
app.get("/tours/:tourId", getTourById);

// PUT /tours/:tourId
app.put("/tours/:tourId", updateTour);

// DELETE /tours/:tourId
app.delete("/tours/:tourId", deleteTour);
>>>>>>> fe17221 (Complete Week 3 pair prgram Part2)

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});