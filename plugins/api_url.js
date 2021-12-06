import axios from 'axios';

export default {
  install: function (Vue, options) {
    const BASE_URL = "http://localhost:3001/";
    Vue.get = async (url) => {
      return await axios.get(BASE_URL + url);
    };
  },
};
