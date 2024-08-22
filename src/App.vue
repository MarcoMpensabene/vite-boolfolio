<script >
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectsList from './components/ProjectsList.vue';

  export default {
      name: "",
      components:{
        AppHeader,
        ProjectsList,
        AppFooter,
      }
    }

</script>

<template>
      <AppHeader  />
      <ProjectsList  />
      <router-view></router-view>
      <AppFooter  />

</template>

<style lang="scss">
  @use "./styles/general.scss";
</style>
