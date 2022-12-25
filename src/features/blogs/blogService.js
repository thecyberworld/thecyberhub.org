import axios from "axios";

const API_URL = "/api/blogs/";

// Get All blogs
const getAllBlogs = async () => {
    try {
        const response = await axios.get(API_URL + "all");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Create new blog
const createBlog = async (blogData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, blogData, config);

    return response.data;
};

// Get user blogs
const getBlogs = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
};

// Delete user blog
const deleteBlog = async (blogId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(API_URL + blogId, config);

    return response.data;
};

const blogService = {
    getAllBlogs,
    createBlog,
    getBlogs,
    deleteBlog,
};

export default blogService;
