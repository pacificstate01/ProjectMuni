import React, { createContext, useContext, useState } from 'react';

// Create the context
const FormContext = createContext();

// Create the provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    yearNumber: '', 
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
}