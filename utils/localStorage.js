const LOCALSTORAGE_KEY_PREFIX = "Painted-Pallete";

const LocalStorageUtil = {
  get(item) {
    try {
      return window.localStorage.getItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`);
    } catch (e) {
      console.error(e);
      return null;
    }
  },
  set(item, value) {
    try {
      window.localStorage.setItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`, value);
    } catch (e) {
      console.error(e);
    }
  },
};

export default LocalStorageUtil;
