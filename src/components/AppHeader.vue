<script >
    export default {
        data()
        {
            return{
                navLinks : [
                    {
                        label : "ProjectsHome",
                        name : "home"
                    },
                    {
                        label : "ProjectsAbout",
                        name : "about"
                    },
                    
                ]
            }
        }
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Boolfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="navLink in navLinks">
          <router-link class="nav-link " :to="{name : navLink.name}" >{{ navLink.label}}</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </header>
</template>

<style scoped>

</style>
