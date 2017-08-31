const todos = [
    {
        id: 1,
        text: 'Do this'
    },
    {
        id: 2,
        text: 'Not to do anything'
    },
    {
        id: 3,
        text: 'Call somebody'
    }
];

export default (state = todos, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return state.concat([{
                id: action.id,
                text: action.text
            }])
        }

        default: return state;
    }
}
