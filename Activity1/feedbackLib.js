/* {
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
}
 */
let feedbackList = [];
let nextID = 1;

const addOne = (sender,message,rating) =>
  {
    if(!sender || !message || !rating)
      return false;
    const feedback = 
    {
      id:nextID++,
      sender,
      message,
      rating
    }
    feedbackList.push(feedback);
    return feedback;
  }

const getAll = () =>
  {
    return feedbackList;
  }
const findById = (id) =>
  {
    numericID = Number(id);
    const feedback = feedbackList.find(task => task.id === numericID);
    return feedback || false;
  }

const updateOnebyID = (id,updateData) =>
  {
    let feedback = findById(id);
    if (feedback)
      {
        if(updateData.sender){feedback.sender = updateData.sender;}
        if(updateData.message){feedback.message = updateData.message;}
        if(updateData.rating){feedback.rating = updateData.rating;}
        return feedback
      }
    return false;
  }

const deleteOnebyID = (id) =>
  {
    let feedbackdel = findById(id);
    if (feedbackdel)
      {
        const initialLength = feedbackList.length;
        feedbackList = feedbackList.filter(feedback => feedback.id !== feedbackdel.id);
        return initialLength > feedbackList.length;
      }
    return false;
  }


if (require.main === module) {
  console.log("addOne called:",addOne("Gregory","eh","3"));
  console.log("addOne called:",addOne("Bob","mid","2"));

  console.log("getAll called:", getAll());

  console.log("findbyID called:",findById(1));
  console.log("findbyID called:",findById(2));
  console.log("findbyID called:",findById(3));

  console.log("updateOnebyID called:",updateOnebyID(1,{sender : "Marianne"}));
  console.log("updateOnebyID called:",updateOnebyID(3,{task: "Get faked",completed : true}));
  
  console.log("deleteOnebyID:",deleteOnebyID(1));
  console.log("findbyID called:",findById(1));
  console.log("deleteOnebyID:",deleteOnebyID(3));
  console.log("getAll called:", getAll());
}


module.exports = 
{
  addOne,
  getAll,
  findById,
  updateOnebyID,
  deleteOnebyID
}