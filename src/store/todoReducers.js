const initialState = {
    todos: [],
};

const todosReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        
        default:
            return state;
    }
};

export default todosReducer;
