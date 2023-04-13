<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <RouterLink
        class="navbar-brand d-flex align-items-center"
        id="navbar"
        :to="{ name: 'home' }"
      >
        <figure class="m-0">
          <img
            class="logo-nav position-static"
            src="../assets/img/icon-logo.jpg"
            alt=""
          />
        </figure>
        <span class="green-title fw-bold">Delive</span
        ><span class="blue-title fw-bold">Boo</span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="{{ __('Toggle navigation') }}"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" class="nav-link">
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://127.0.0.1:8000/dashboard"
              >Dashboard</a
            >
          </li>
        </ul>

        <a
          class="btn btn-success log-btn py-1 px-3"
          href="http://127.0.0.1:8000/login"
          >Login | Registrati</a
        >
        <!-- Right Side Of Navbar -->
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

#navbar {
  font-size: 25px;

  .green-title {
    color: $bg-primary;
  }

  .blue-title {
    color: $secondary-color;
  }

  .logo-nav {
    height: 50px;
    position: relative;
    top: 8px;
    // margin-top: 15px;
  }

  .log-btn {
    font-size: 17px;
  }
}
</style>
