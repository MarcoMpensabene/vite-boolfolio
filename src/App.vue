<script >
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectCard from './components/ProjectCard.vue';
import axios from "axios";
  export default {
      name: "",
      components:{
        AppHeader,
        ProjectCard,
        AppFooter,
      },
      data(){
            return{
                projects : [],
            }
        },
      methods : {
            getProjects(){
                axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  

            }
        },
        created(){
            this.getProjects();
        }
    }

</script>

<template>
      <AppHeader  />
      <ProjectCard  />
      <AppFooter  />

</template>

<style lang="scss">
  @use "./styles/general.scss";
</style>
