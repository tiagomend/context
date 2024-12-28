import { useContext } from "react";
import CounterContext from "../context/CounterContext";

/**
 * Hook useCounterContext
 * 
 * Um hook personalizado para acessar o contexto do contador.
 * 
 * @hook
 * @example
 * const { counter, setCounter } = useCounterContext();
 * 
 * @returns {Object} Um objeto contendo o valor atual do contador e a função para atualizá-lo.
 * 
 * @throws {Error} Lança um erro no console se o contexto não for encontrado.
 */
export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.error("Contexto não encontrado!");
  }

  return context;
}