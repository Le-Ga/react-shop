function Header() {
  return (
    <div>
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/Le-Ga/react-shop"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export { Header };
