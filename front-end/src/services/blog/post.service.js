/**
 * This is a service for interacting with the post API.
 * It contains methods for getting all posts, getting a post by id, creating a new post, updating an existing post, and deleting a post.
 */
import axios from "axios";
import authHeader from "../auth/auth-header";

const API_DOMAIN = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_DOMAIN : process.env.REACT_APP_LOCAL_API_DOMAIN;

const API_URL = "/api/post";

const getAll = () => {
    return axios.get(API_URL, {headers: authHeader()});
};

const get = id => {
    return axios.get(`${API_URL}/${id}`, {headers: authHeader()});
};

const create = data => {
    return axios.post(API_URL, data, {headers: authHeader()});
};

const update = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data, {headers: authHeader()});
};

const remove = id => {
    return axios.delete(`${API_URL}/${id}`);
};

const removeAll = () => {
    return axios.delete(`${API_URL}`);
};

const PostService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default PostService;