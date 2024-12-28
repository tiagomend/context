import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

/**
 * Hook useTitleColorContext
 * 
 * Um hook personalizado para acessar o contexto de cor do título.
 * 
 * @hook
 * @example
 * const { color, dispatch } = useTitleColorContext();
 * 
 * @returns {Object} Um objeto contendo a cor atual do título e a função dispatch para alterar o estado.
 * 
 * @throws {Error} Lança um erro no console se o contexto não for encontrado.
 */
export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);
  if (!context) {
    console.error("Contexto não encontrado!");
  }

  return context;
}