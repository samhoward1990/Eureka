import axios from "axios";
export default {
  // Gets all users
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  registerUser: function (userObj) {
    return axios.post("/api/user", userObj);
  },
  verifyUser: function (userObj) {
    return axios.post("/api/user/login", userObj)
  }
};