import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

/**
 * Componente About
 *
 * Este componente exibe uma página "Sobre" com um título estilizado e o valor atual do contador.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 *
 * @returns {JSX.Element} Um elemento JSX representando a página "Sobre".
 *
 * @description
 * O componente utiliza dois contextos:
 * - `useCounterContext`: Fornece o valor atual do contador.
 * - `useTitleColorContext`: Fornece a cor dinâmica do título.
 *
 * @hook useCounterContext
 * @hook useTitleColorContext
 *
 * @see {@link ../hooks/useCounterContext} para mais detalhes sobre o contexto do contador.
 * @see {@link ../hooks/useTitleColorContext} para mais detalhes sobre o contexto de cor do título.
 */
const About = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div className="About">
      <h1 style={{ color }}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
