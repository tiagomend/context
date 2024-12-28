import { createContext, useState } from "react";

/**
 * Contexto CounterContext
 *
 * Fornece o estado global para o contador e uma função para atualizá-lo.
 *
 * @context
 * @example
 * import { useContext } from 'react';
 * import CounterContext from '../context/CounterContext';
 *
 * const { counter, setCounter } = useContext(CounterContext);
 *
 * @returns {Object} Um objeto contendo o valor atual do contador e uma função para atualizá-lo.
 */
const CounterContext = createContext();

/**
 * Provedor CounterContextProvider
 *
 * Provedor de contexto para gerenciar o estado global do contador.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Componentes filhos que terão acesso ao contexto.
 *
 * @example
 * return (
 *   <CounterContextProvider>
 *     <App />
 *   </CounterContextProvider>
 * )
 *
 * @returns {JSX.Element} Um provedor de contexto para gerenciar o contador.
 */
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
