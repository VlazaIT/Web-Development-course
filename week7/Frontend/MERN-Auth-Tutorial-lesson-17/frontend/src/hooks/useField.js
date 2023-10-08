// useField.js

import { useState } from 'react';

export const useField = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};
