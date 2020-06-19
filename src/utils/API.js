import axios from "axios";
export default {
    // Gets all users data and returns as JSON data
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=300&nat=us");
    }
};