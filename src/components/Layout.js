import NavbarComponent from "./Navbar";
import "../css/card.css"

export const Layout = ({ children }) => {
  return (
    <main>
      <NavbarComponent />
      <section>{children}</section>
    </main>
  );
};
