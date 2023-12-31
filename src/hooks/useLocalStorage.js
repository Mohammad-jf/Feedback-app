import  { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    // set the state base on what this function returns
    getLocalStorageItem(key, initialValue)
  );

  // check if there is any item with similar key in local storage
  function getLocalStorageItem(key, initialValue) {
    const itemFromStorage = localStorage.getItem(key);
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
  }

  // set the local storage value and update state with given parameter
  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

export default useLocalStorage;
