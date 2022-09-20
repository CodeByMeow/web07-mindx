const storage = {
  set: function (key, value) {
    return localStorage.setItem(key, value);
  },
  get: function (key) {
    return localStorage.getItem(key);
  },
  remove: function (key) {
    return localStorage.removeItem(key);
  },
  clear: function () {
    return localStorage.clear();
  },
};

export default storage;
