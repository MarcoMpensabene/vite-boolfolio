<script >
    export default {

        data()
        {
            return{
            
            }
        },
        props:{
            title: {
                typeof : String,
                required : true
            },
            author:{
                typeof : String,
                required : true
            },
            description: {
                typeof : String,
                required : true
            },
            type : {
                typeof : String,
                required : true
            },
            image : {
                typeof : String,
                required : false 
            },
            technologies : {
                typeof : Array,
                required : true
            }
        }
    }
</script>

<template>
    <div class="project-card">
  <img src="https://via.placeholder.com/150" alt="Project Image" class="project-card-img">
  <div class="project-card-body">
    <h3 class="project-card-title">{{ author }}</h3>
    <h5 class="project-card-title">{{ title }}</h5>
    <p class="project-card-type">{{ type }}</p>
    <p class="project-card-description">{{ description }}</p>
    <div class="project-card-tech">
      <span class="badge text-bg-success" v-for="technology in technologies">{{ technology.name }}</span>
      
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 700px;
  margin: 20px;
  background-color: #fff;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &-img {
    width: 100%;
    height: auto;
  }

  &-body {
    padding: 15px;

    &-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: #333;
    }

    &-type {
      font-size: 0.875rem;
      font-weight: 500;
      color: #777;
      margin-bottom: 10px;
    }

    &-description {
      font-size: 1rem;
      color: #555;
      margin-bottom: 15px;
    }

    &-tech {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
