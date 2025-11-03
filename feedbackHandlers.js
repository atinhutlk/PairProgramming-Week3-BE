const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const allFeedback = Feedback.getAll();
    res.json( allFeedback );
};

const createFeedback = (req, res) => {
    const { sender, message, rating } = req.body;
    const newFeedback = Feedback.addOne(sender, message, rating)
    if (newFeedback) {
        res.json({'New Feedback added': newFeedback });
    } else {
        res.status(500).json({ error: "Failed to add feedback" });
    }
};

const getFeedbackById = (req, res) => {
    const id = req.params.feedbackId;
    const findFeedback = Feedback.findbyId(id);
    if (findFeedback) {
    res.json(findFeedback);
    } else {
        res.status(404).json({ error: "Feedback not found" });
    }
};


const updateFeedback = (req, res) => {
    const id = req.params.feedbackId;
    const updatedData = req.body;
    const updatedFeedback = Feedback.updateOnebyId(id, updatedData);
    if (updatedFeedback) {
        res.json({ message: "Feedback updated successfully", updatedFeedback });
    } else {
        res.status(404).json({ error: "Feedback not found" });
    }
};

const deleteFeedback = (req, res) => {
    const id = req.params.feedbackId;
    const deletedFeedback = Feedback.deleteOnebyId(id);
    if (deletedFeedback) {
        res.json({ message: "Feedback deleted successfully"});
    } else {
        res.status(404).json({ error: "Feedback not found" });
    }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};