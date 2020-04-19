<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a href="#" class="navbar-brand">Car Market</a>
        <button class="navbar-toggler" type="button">
          <a href="#" class="navbar-bar"><i class="fas fa-bars"></i></a>
        </button>
        <div class="collapse navbar-collapse w-100">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cars" class="nav-link">Cars</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 10px 0px;
  position: fixed;
  top: 0px;
  z-index: 1000;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}
/* Navbar */
.navbar-brand {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
}
.nav-link {
  font-weight: 500;
}
.nav-link,
.navbar-brand,
.navbar-bar {
  color: #fff;
  transition: color 0.1s linear;
}
.nav-link:hover,
.navbar-brand:hover,
.navbar-bar:hover {
  color: #ff5200;
}
</style>
