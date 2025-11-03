const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const allFeedback = Feedback.getAll();
  res.json(allFeedback);
};

const createFeedback = (req, res) => {
  const {sender,message,rating} = req.body;
  const newFeedback = Feedback.addOne(sender,message,rating);
  if (newFeedback)
    {
      res.json(newFeedback);
    }
  else
  {
    res.status(500).json({message: "Failed to create feedback"});
  }
};

const getFeedbackById = (req, res) => {
  const id = req.params.feedbackId;
  const findFeedback = Feedback.findById(id);
  if(findFeedback)
    {
      res.json(findFeedback);
    }
  else
  {
    res.status(404).json({message:"Feedback not found"});
  }
};

const updateFeedback = (req, res) => {
  const id = req.params.feedbackId;
  const updatedData = req.body;
  const updatedFeedback = Feedback.updateOnebyID(id,updatedData);
  if(updatedFeedback)
    {
      res.json(updatedFeedback);
    }
  else
  {
    res.status(404).json({message:"Feedback not found"});
  }
};

const deleteFeedback = (req, res) => {
  const id = req.params.feedbackId;
  const deletedFeedback = Feedback.deleteOnebyID(id);
  if(deletedFeedback)
    {
      res.json({message: "Feedback deleted succesfully"});
    }
  else
  {
    res.status(404).json({message:"Feedback not found"});
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};