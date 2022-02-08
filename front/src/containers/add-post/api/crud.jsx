import { apiClient } from "../../../config/axios";

export const addPost = (data) => {
    return apiClient.post("/blogs", data);
}
