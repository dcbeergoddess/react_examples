import axios from "axios";

// this is not a dumb or class component
//this is JUST JAVASCRIOT

//we just need this to be something we can import

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
