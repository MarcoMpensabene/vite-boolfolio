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
   <ul>
    <ProjectCard v-for="project in projects" :title="project.title" :author="project.user.name" :description="project.description" :type="project.type.name" :image="project.image_url" :technologies="project.technologies">

    </ProjectCard>
   </ul>
   

</template>

<style lang="scss">
 
</style>
