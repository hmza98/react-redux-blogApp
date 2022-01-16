const getData = () => {
  return {
    type: "GET",
  };
};

const postData = (payload) => {
  return {
    type: "POST",
    payload: payload,
  };
};

const postList = (payload) => {
  return {
    type: "PUSH-LIST",
    payload: payload,
  };
};

const editPostById = (payload) => {
  return {
    type: "Edit",
    payload: payload,
  };
};

export const actions = {
  get: getData,
  post: postData,
  postList: postList,
  editById: editPostById,
};
