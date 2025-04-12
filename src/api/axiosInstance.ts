import axios from 'axios';
import useAuthStore from '../store/useAuthStore';

const API_BASE_URL = 'https://8884-1-4-182-175.ngrok-free.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor to add JWT token from store
api.interceptors.request.use(
  async (config) => {
    const token = useAuthStore.getState().userToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for token refresh logic
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Check if error response indicates an expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Call your refresh token endpoint here
      try {
        const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh`, {
          // You may need to send a refresh token stored elsewhere
        });
        // Update the token in the state
        const newToken = refreshResponse.data.token;
        useAuthStore.getState().setAuth(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // Optionally handle failed refresh (logout the user, etc.)
        useAuthStore.getState().setAuth(null);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
