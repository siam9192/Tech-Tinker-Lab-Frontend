import React, { useEffect, useState } from 'react';

const Debounce = <T>(value: string, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debounceValue;
};

export default Debounce;
