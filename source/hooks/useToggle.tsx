/* eslint-disable prettier/prettier */
import { useState } from 'react';

export default function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue));
  }

  return [value, toggleValue];
}
