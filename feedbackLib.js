/*
{
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
}
*/
let feedbackList = [];
let nextId = 1;

const getAll = () => { 
    return feedbackList;
};

const findbyId = (id) => {
    numericID = Number(id);
    const feedback = feedbackList.find(item => item.id === numericID);
    return feedback || false;
};

const addOne = (sender, message, rating ) => {
    if(!sender || !message || !rating) 
        return false;
    const feedback = {
        id:nextId++,
        sender,
        message,
        rating,
    };
    feedbackList.push(feedback);
    return feedback;
};

function updateOnebyId(id, updatedData) {
    const feedback = findbyId(id);
    if(feedback) {
        if(updatedData.sender) feedback.sender = updatedData.sender;
        if(updatedData.message) feedback.message = updatedData.message;
        if(updatedData.rating) feedback.rating = updatedData.rating;
        return feedback;
    }
    return false;
}

function deleteOnebyId(id) {
    const feedback = findbyId(id);
    if(feedback) {
       const initialLength = feedbackList.length;
       feedbackList = feedbackList.filter(item => item.id !== id);
       return initialLength > feedbackList.length;
    }
    return false;
}

if (require.main === module) {
 let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
 console.log(result);
 console.log("getAll called:", getAll());
 console.log("findById called:", findById(1));
}

const feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = feedback;