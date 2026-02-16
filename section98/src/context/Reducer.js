export default function Reducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, [action.field]: action.value };

    case "CREATE":
      const newItem = {
        id: action.id,
        createDate: new Date().toLocaleDateString(),
        author: state.author,
        title: state.title,
        content: state.content,
      };
      return {
        ...state,
        posts: [newItem, ...state.posts],
        author: "",
        title: "",
        content: "",
      };

    default:
      return state;
  }
}
