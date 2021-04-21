const intialState = {
    number: 0,
}
const counterReduce = (state = intialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "increment_by_1":
            newState.number++;
            return newState;

        case "increment_by_10":
            newState.number += 10;
            return newState;

        case "increment_by_10":
            newState.number -= 10;
            return newState;

        case "increment_by_2":
            newState.number *= 10;
            return newState;

        case "increment_by_2":
            newState.number /= 10;
            return newState;

      

        default:
            break;
    }
    return state;
}
export default counterReduce