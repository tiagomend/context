import { createContext, useReducer } from "react";

/**
 * Contexto TitleColorContext
 *
 * Fornece o estado global para a cor do título e uma função para despachar ações que alteram esse estado.
 *
 * @context
 * @example
 * import { useContext } from 'react';
 * import { TitleColorContext } from '../context/TitleColorContext';
 *
 * const { color, dispatch } = useContext(TitleColorContext);
 *
 * @returns {Object} Um objeto contendo a cor atual do título e a função dispatch.
 */
export const TitleColorContext = createContext();

/**
 * Redutor titleColorReducer
 *
 * Gerencia as ações relacionadas à cor do título.
 *
 * @param {Object} state - O estado atual.
 * @param {Object} action - A ação despachada.
 * @param {string} action.type - O tipo de ação.
 *
 * @returns {Object} O novo estado com a cor atualizada.
 */
export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

/**
 * Provedor TitleColorContextProvider
 *
 * Provedor de contexto para gerenciar o estado global da cor do título.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Componentes filhos que terão acesso ao contexto.
 *
 * @example
 * return (
 *   <TitleColorContextProvider>
 *     <App />
 *   </TitleColorContextProvider>
 * )
 *
 * @returns {JSX.Element} Um provedor de contexto para gerenciar a cor do título.
 */
export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
