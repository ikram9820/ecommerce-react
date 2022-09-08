import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "auth/users/";

export function register(user) {
  console.log("user created");
  return http.post(apiEndpoint, {
    email: user.email,
    username: user.username,
    password: user.password,
  });


}

export default {
  register
};