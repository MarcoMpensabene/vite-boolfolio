<script >
    export default {

        data()
        {
            return
            {
            
            }
        }
    }
</script>

<template>
    <div class="project-card">
  <img src="https://via.placeholder.com/150" alt="Project Image" class="project-card-img">
  <div class="project-card-body">
    <h5 class="project-card-title">Project Title</h5>
    <p class="project-card-type">Project Type</p>
    <p class="project-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div class="project-card-tech">
      <span class="badge tech-badge">Tech 1</span>
      <span class="badge tech-badge">Tech 2</span>
      <span class="badge tech-badge">Tech 3</span>
    </div>
  </div>
</div>
</template>

<style scoped>
.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 1000px;
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

      .tech-badge {
        background-color: #f1f1f1;
        color: #555;
        border-radius: 20px;
        padding: 5px 10px;
        font-size: 0.75rem;
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
