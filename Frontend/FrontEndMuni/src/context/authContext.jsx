import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock login function - now checks for registered users
  // In AuthContext.js - update the login function
const login = async (userrut, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // Try to find user by complete RUT (RUT + DV), email, or passport
      const existingUser = storedUsers.find(user => {
        // Check if login matches complete RUT (e.g., "209730283")
        if (user.rutCompleto === userrut) return true;
        
        // Check if login matches email
        if (user.email === userrut) return true;
        
        // Check if login matches passport
        if (user.passport === userrut) return true;
        
        // For backwards compatibility, also check individual RUT field
        if (user.rut === userrut) return true;
        
        return false;
      });

      if (!existingUser) {
        reject(new Error("Usuario no encontrado. Por favor regístrate primero."));
        return;
      }

      const mockUser = {
        id: existingUser.id,
        nombre: existingUser.primerNombre || 'Usuario',
        apellidos: `${existingUser.primerApellido} ${existingUser.segundoApellido}`,
        email: existingUser.email,
        tipoPersona: existingUser.personType || 'natural',
        ...existingUser
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', 'mock-jwt-token-12345');
      resolve(mockUser);
    }, 1000);
  });
};

  // Mock register function - saves user to registered users list
  const register = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const newUser = {
            id: Date.now(),
            ...userData,
            nombre: userData.primerNombre,
            apellidos: `${userData.primerApellido} ${userData.segundoApellido}`,
          };
          
          // Save to registered users list
          const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
          
          // Check if user already exists (by email or RUT)
          const userExists = storedUsers.some(user => 
            user.email === userData.email || 
            (userData.rut && user.rut === userData.rut) ||
            (userData.passport && user.passport === userData.passport)
          );
          
          if (userExists) {
            reject(new Error("El usuario ya está registrado"));
            return;
          }
          
          storedUsers.push(newUser);
          localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));
          
          // Also set as current user
          setUser(newUser);
          localStorage.setItem('user', JSON.stringify(newUser));
          localStorage.setItem('token', 'mock-jwt-token-12345');
          resolve(newUser);
        } catch (error) {
          reject(new Error("Error en el registro"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };
  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem('user', JSON.stringify(updatedUserData));
  };
  // Check for existing session on app start
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout,
      updateUser,
      loading,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};