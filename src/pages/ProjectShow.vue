<script >
    import ProjectCard from '../components/ProjectCard.vue';
    import axios from 'axios';
export default {
    components:{
      ProjectCard,
   
    },
    data(){
        return{
            project : null ,
            }
        },
        methods : {
            getProject(id){
                axios.get(`http://127.0.0.1:8000/api/projects/${id}` , {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.project = response.data.results;
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
            this.getProject(this.$route.params.id);
        },
  }

</script>

<template>
    
    <ProjectCard v-if="project != null"  :title="project.title" :author="project.user.name" :description="project.description" :type="project.type.name" :image="project.image_url" :technologies="project.technologies"/>

</template>

<style scoped>

</style>
