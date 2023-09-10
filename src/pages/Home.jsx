import { NavLink } from "../components/NavLink";
import "../styles/pages/home.css";

export const Home = () => {
  return (
    <main className="home">
      <h1 className="home__title">Final Project</h1>
      <section className="home__links">
        <NavLink to="/posts" className="home__links--button">
          Ver Posts
        </NavLink>
        <NavLink to="/comments" className="home__links--button">
          Ver Comentarios
        </NavLink>
        <NavLink to="/albums" className="home__links--button">
          Ver Álbumes
        </NavLink>
        <NavLink to="/users" className="home__links--button">
          Ver Usuarios
        </NavLink>
        <NavLink to="/photos" className="home__links--button">
          Ver Fotos
        </NavLink>
        <NavLink to="/todos" className="home__links--button">
          Ver Tareas
        </NavLink>
      </section>
    </main>
  );
};
