const initState = {
  posts: [
    {
      id: "1",
      title: "Post 1",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "2",
      title: "Post 2",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "3",
      title: "Post 3",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
  ],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      state.posts.splice(action.payload, 1);

      return { ...state, posts: [...state.posts] };
    default:
      return state;
  }
};
