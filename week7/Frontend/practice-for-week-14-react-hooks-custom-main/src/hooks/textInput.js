// textInput.js
import { useState } from 'react';

export const useTextInput = ({ validations = [], defaultValue = '' }) => {
  const [value, setValue] = useState(defaultValue);

  const validatorResults = validations.map((validator) => validator(value));
  const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
  const errors = failedValidators.map((validationObj) => validationObj.msg);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleOnChange, errors];
};

// Form.js
import { textInputValidators } from '../utils/validations';
import { useTextInput } from '../hooks/textInput';

const Form = () => {
  const [name, handleNameChange, nameErrors] = useTextInput({
    validations: textInputValidators
  });

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <ul>
          {nameErrors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
