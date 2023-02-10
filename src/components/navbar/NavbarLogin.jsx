import style from './navbarLogin.module.css';

const NavbarLogin = () => {
  return (
    <>
      <header>
        <nav className={`${style.navbar} navbar navbar-expand-lg fixed-top`}>
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src={require('../../assets/img/Vector.png')} alt="Logo" className={`${style.logo} me-2 logo`} />
              <strong className={style.textBlanja}>Blanja</strong>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarNav">
              <form className={`${style.searchForm} d-flex ms-auto my-3 search-form`} role="search">
                <input className={`${style.search} form-control`} type="search" placeholder="  Search" aria-label="Search" />
                <button className={style.searchBtn} type="submit">
                  <i className="bi bi-search" />
                </button>
              </form>
              <button className={`${style.btnFilter} btn btn-filter`} type="submit">
                <i className="bi bi-funnel" />
              </button>
              <ul className={`${style.navbarNav} navbar-nav ms-auto`}>
                <li className={`${style.navItem} nav-item`}>
                  <a className={`${style.navLink} nav-link active`} aria-current="page" href="mybag.html">
                    <i className={`${style.bi} bi bi-cart2 fs-5`} />
                  </a>
                </li>
                <li className={`${style.navItem} nav-item`}>
                  <a className={`${style.navLink} nav-link active`} aria-current="page" href="#">
                    <i className={`${style.bi} bi bi-bell fs-5`} />
                  </a>
                </li>
                <li className={`${style.navItem} nav-item`}>
                  <a className={`${style.navLink} nav-link active`} aria-current="page" href="#">
                    <i className={`${style.bi} bi bi-envelope`} />
                  </a>
                </li>
                <li className={`${style.navItem} nav-item`}>
                  <a className={`${style.navLink} nav-link active`} aria-current="page" href="#">
                    <img src={require('../../assets/img/profile-img.png')} className={style.profileImg} alt="foto profile" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarLogin;
