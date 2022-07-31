const initialState = {
    remainders:[]
};

const remainderReducer =(state = initialState, action)=>{
    switch(action.type){
        case "ADD_REMINDER":
            return {
                ...state,
                reminders:[...state.remainders, action.payload]
            };
            case "DELETE_REMINDER":
                return {
                    reminders:[
                        ...reminders.filter(reminder => reminder !== action.payload)
                    ]
                };
                default:
                     state;
    }
};