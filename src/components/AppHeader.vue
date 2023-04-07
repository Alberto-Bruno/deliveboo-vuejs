<script>
export default {
    name: 'AppHeader',
};
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" id="navbar" href="{{ url('/') }}">
                <figure>
                    <img class="logo-nav"
                        src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Boolean/original.png?1623187562" alt="">
                </figure>
                <span class="green-title fw-bold">Delive</span><span class="blue-title fw-bold">Boo</span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                </ul>

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
        color: $primary-color;
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
}
</style>