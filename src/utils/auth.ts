
// Mock authentication utility - in a real app, this would connect to a backend
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  name: string;
}

// Mock function for login
export const login = async (credentials: LoginCredentials): Promise<User | null> => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock validation - in a real app, this would check against a database
  if (credentials.email && credentials.password) {
    // Mock successful login
    const user: User = {
      id: '123',
      name: 'Test User',
      email: credentials.email,
      role: 'student'
    };
    
    // Store in localStorage to persist across page refreshes
    localStorage.setItem('user', JSON.stringify(user));
    
    toast.success('Login successful');
    return user;
  }
  
  // Mock failed login
  toast.error('Invalid credentials');
  return null;
};

// Mock function for registration
export const register = async (data: RegisterData): Promise<User | null> => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock validation - in a real app, this would create a new user in a database
  if (data.email && data.password && data.name) {
    // Mock successful registration
    const user: User = {
      id: '123',
      name: data.name,
      email: data.email,
      role: 'student'
    };
    
    // Store in localStorage to persist across page refreshes
    localStorage.setItem('user', JSON.stringify(user));
    
    toast.success('Registration successful');
    return user;
  }
  
  // Mock failed registration
  toast.error('Registration failed');
  return null;
};

// Mock function for logout
export const logout = (): void => {
  localStorage.removeItem('user');
  toast.success('Logged out successfully');
};

// Mock function to get current user
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('user');
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
};

// Mock function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};
