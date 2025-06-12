import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:500/api', // your backend base URL
    withCredentials: true, // Required to send cookies (for refresh token)
});

// Request interceptor to add access token to headers
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['authToken'] = token;
    }
    return config;
}, (error) => Promise.reject(error));

// Response interceptor to handle expired token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const res = await axios.get('http://localhost:5000/api/auth/refresh-token', {
                    withCredentials: true,
                });

                const newToken = res.data.token;
                localStorage.setItem('token', newToken);

                originalRequest.headers['authToken'] = newToken;
                return axiosInstance(originalRequest);
            } catch (err) {
                console.log('Refresh token failed. Logging out...');
                localStorage.removeItem('token');
                window.location.href = '/login';
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
