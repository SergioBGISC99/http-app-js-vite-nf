const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  throw new Error("No implementado");
};

const loadPreviousPage = async () => {
  throw new Error("No implementado");
};

const onUserChanger = () => {
  throw new Error("No implementado");
};

const reloadPage = () => {
  throw new Error("No implementado");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanger,
  reloadPage,

  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
