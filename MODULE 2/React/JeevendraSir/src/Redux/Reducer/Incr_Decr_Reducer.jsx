function Incr_Decr_Reducer(state = 0,action) {
  switch (action.type) {
    case 'INCREMENT':
        return state + 1;
  
    case 'DECREMENT':
        return state - 1;

    default:
        return state;
  }
}

export default Incr_Decr_Reducer;