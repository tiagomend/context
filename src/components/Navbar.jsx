import { NavLink } from "react-router";

/**
 * Componente Navbar
 *
 * Renderiza uma barra de navegação com links para as páginas principais do aplicativo.
 *
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 *
 * @returns {JSX.Element} Um elemento JSX representando a barra de navegação.
 */
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Produtos</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
