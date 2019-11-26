export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.score;
        case 'DECREMENT':
            return state - action.score;
        case 'MULTIPLY':
            return state * action.score;
        case 'DEVIDE':
            return state / action.score;
        default:
            return state;
    }
}