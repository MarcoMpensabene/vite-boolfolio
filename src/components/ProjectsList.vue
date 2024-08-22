<script >
import ProjectCard from './ProjectCard.vue';
import axios from "axios";
  export default {
      name: "",
      components:{
        
        ProjectCard,
      },
      data(){
            return{
                projects : [],
                currentPage: 1,
            }
        },
      methods : {
            getProjects(page = 1){
                axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: page
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects.push(...response.data.results.data);
                this.currentPage = response.data.results.current_page;
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
    <main>
        <router-link v-for="project in projects" :to="{name: 'show' , params: {id: project.id }}" >
            <ProjectCard   :title="project.title" :author="project.user.name" :description="project.description" :type="project.type.name" :image="project.image_url" :technologies="project.technologies"/>
        </router-link>
        <div class="d-flex justify-content-center allign-items-center">
            <a href="" class="btn btn-secondary btn-lg" @click.prevent="getProjects(currentPage + 1)">
                Load...
            </a>
        </div>
    </main>

</template>

<style lang="scss">
 
</style>
