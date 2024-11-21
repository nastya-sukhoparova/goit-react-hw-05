import { Link } from "react-router-dom";
import "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; 2024 MovieApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
