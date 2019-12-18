class NavBar {
  constructor() {}

  build() {
    return `<div style="margin-bottom: 2rem;">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="assets/brand.png" width="50" height="50" alt="" />
      </a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <!-- <a class="navbar-brand" href="#">Hidden brand</a> -->
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Artista
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="form-artista.html">Novo</a>
              <a class="dropdown-item" href="#">Artistas</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Música
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="form-musica.html">Novo</a>
              <a class="dropdown-item" href="#">Músicas</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Álbum
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="form-album.html">Novo</a>
              <a class="dropdown-item" href="#">Álbuns</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  </div>;`;
  }
}
