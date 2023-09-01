import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes


const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});


  const updateFormData = (newData) => {
    setFormData(newData);
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

FormDataProvider.propTypes = {
  children: PropTypes.node, // PropTypes for the 'children' prop
};

export const useFormData = () => {
  return useContext(FormDataContext);
};

export { FormDataContext, FormDataProvider };
