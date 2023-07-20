import { createContext } from 'react';

export const contextObject = {
  context: '',
  setContext(str: string) {
    this.context = str;
  },
};

const Context = createContext(contextObject);

export default Context;
