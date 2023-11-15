import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;
  state.currentPage += 1;
  state.users = users;
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

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
};
