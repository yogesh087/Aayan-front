import axios from "axios";
import { baseURL } from '../../constant'
import Cookies from "js-cookie";

const API = axios.create({ baseURL ,withCredentials: true, })

API.interceptors.request.use(req => {
    const tokenString = Cookies.get('iamnauman_profile')
    console.log("tokenString", tokenString)
    if (tokenString) {
        const parsedToken = JSON.parse(tokenString)
        req.headers.authtoken = parsedToken
    }
    return req
})

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.get(`${baseURL}/auth/refresh-token`, {
          withCredentials: true,
        });

        const newToken = res.data.token;
        // Save to same cookie so request interceptor can use it
        const oldData = JSON.parse(Cookies.get('iamnauman_profile') || '{}');
        const updatedData = JSON.stringify({ ...oldData, token: newToken });
        Cookies.set('iamnauman_profile', updatedData);

        originalRequest.headers.authToken = newToken;
        return API(originalRequest);
      } catch (err) {
        Cookies.remove('iamnauman_profile');
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
export default API;

// GENERAL
export const uploadImage = (formData) => API.post(`/upload_image`, formData)
export const deleteImage = (filename) => API.delete(`/delete_image/${filename}`)

// AUTH 
export const register = (userData) => API.post(`/auth/register`, userData)
export const login = (userData) => API.put(`/auth/login`, userData)
export const logout = () => API.put(`/logout`)
export const getUsers = () => API.get(`/user/get`)


// BLOG
export const getBlogs = () => API.get(`/blog/get`)
export const createBlog = (blogData) => API.post(`/blog/create`, blogData)
export const updateBlog = (blogId, blogData) => API.put(`/blog/update/${blogId}`, blogData)
export const deleteBlog = (blogId) => API.delete(`/blog/delete/${blogId}`)


// CONTACT
export const getContactUsers = () => API.get(`/contact/get`)
// export const formSubmit = (contactData) => API.post(`/contact/submit`, contactData)
export const formSubmit = (contactData) => API.post(`/contact/submit`, contactData)


// SERVICE
export const getServices = () => API.get(`/service/get`)
export const createService = (serviceData) => API.post(`/service/create`, serviceData)
export const updateService = (serviceId, serviceData) => API.put(`/service/update/${serviceId}`, serviceData)
export const deleteService = (serviceId) => API.delete(`/service/delete/${serviceId}`)



// TESTIMONIALS
export const getTestimonials = () => API.get(`/testimonial/get`)
export const createTestimonial = (testimonialData) => API.post(`/testimonial/create`, testimonialData)
export const updateTestimonial = (testimonialId, testimonialData) => API.put(`/testimonial/update/${testimonialId}`, testimonialData)
export const deleteTestimonial = (testimonialId) => API.delete(`/testimonial/delete/${testimonialId}`)