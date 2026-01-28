// services/api.js

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const apiClient = {
    get: async (endpoint) => {
        // Implementation placeholder
        console.log(`GET ${API_BASE_URL}${endpoint}`);
        return Promise.resolve({});
    },
    post: async (endpoint, data) => {
        // Implementation placeholder
        console.log(`POST ${API_BASE_URL}${endpoint}`, data);
        return Promise.resolve({});
    },
    // Add other methods as needed
};
