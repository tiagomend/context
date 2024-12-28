import { useContext } from "react";
import CounterContext from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

/**
 * Componente Home
 *
 * Este componente exibe a página inicial com um título estilizado, o valor atual do contador
 * e botões para incrementar o contador e alterar a cor do título.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 *
 * @returns {JSX.Element} Um elemento JSX representando a página inicial.
 *
 * @description
 * O componente utiliza dois contextos:
 * - `CounterContext`: Fornece o valor atual do contador e a função para atualizá-lo.
 * - `useTitleColorContext`: Fornece a cor atual do título e uma função para alterar a cor.
 *
 * @hook useContext
 * @hook useTitleColorContext
 *
 * @see {@link ../context/CounterContext} para mais detalhes sobre o contexto do contador.
 * @see {@link ../hooks/useTitleColorContext} para mais detalhes sobre o contexto de cor do título.
 */
const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const { color, dispatch } = useTitleColorContext();

  /**
   * Altera a cor do título.
   *
   * @param {string} color - A nova cor para o título.
   */
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div className="Home">
      <h1 style={{ color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <button className="button" onClick={() => setCounter(counter + 1)}>
        Incrementar
      </button>
      <button className="button" onClick={() => setTitleColor("RED")}>
        Vermelho
      </button>
      <button className="button" onClick={() => setTitleColor("BLUE")}>
        Azul
      </button>
    </div>
  );
};

export default Home;
