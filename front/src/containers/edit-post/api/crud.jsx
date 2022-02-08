import { apiClient } from "../../../config/axios";

export const editPost = (id, data) => {
    return apiClient.put(`/blogs/${id}`, data);
}

export const getSinglePost = (id) => {
    return apiClient.get(`/blogs/${id}`);
}
