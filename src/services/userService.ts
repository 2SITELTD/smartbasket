import api from './api';
import { API_CONFIG } from '../config/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface AuthResponse {
  data: {
    user: {
      phone: string;
      id: string;
      email: string;
      name: string;
    };
    token: string;
  };
}

const userService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post(API_CONFIG.ENDPOINTS.LOGIN, credentials);
    return response.data;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post(API_CONFIG.ENDPOINTS.REGISTER, data);
    console.log(response.data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default userService;
