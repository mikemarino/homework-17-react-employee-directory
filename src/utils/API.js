// import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?results=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//     search: function () {
//         return axios.get(BASEURL);
//     }
// };


import axios from "axios";

export default {
    getRandomEmployee: function () {
        return axios.get("https://randomuser.me/api/?results=20");
    }
};