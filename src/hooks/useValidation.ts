import { useEffect, useState } from 'react';

export const useValidation = (value: string, validations: any) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLength, setMinLenght] = useState(false);
  const [maxLength, setMaxLenght] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLenght(true) : setMinLenght(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLenght(true) : setMaxLenght(false);
          break;
        case 'emailError':
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (isEmpty || minLength || maxLength || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [emailError, isEmpty, maxLength, minLength]);

  return {
    isEmpty,
    minLength,
    maxLength,
    emailError,
    inputValid,
  };
};

export const useInput = (initialState: string, validations: any) => {
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(initialState, validations);

  const onChange = () => {
    if (initialState === '') {
      setIsDirty(true);
    }
  };

  return {
    isDirty,
    onChange,
    ...valid,
  };
};
