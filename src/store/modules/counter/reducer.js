const ReducerCount = (state = 0, action) => {
  switch (action.type) {
    case "@counter/ADD":
      return (state += 1);
    case "@counter/SUB":
      return (state -= 1);
    default:
      return state;
  }
};
export default ReducerCount;
