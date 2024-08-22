<script >
    export default {
        data()
        {
            return{
            
            }
        }
    }
</script>

<template>
   
   <div class="container my-5">
        <h1 class="text-center mb-5">About Our Projects</h1>
        
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <p class="lead text-center mb-5">
                    Our projects represent our commitment to innovation and excellence. 
                    Each one is designed to make a positive impact in its respective field.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="project-card">
                    <h3>Project Alpha</h3>
                    <p>A groundbreaking initiative in sustainable energy, Project Alpha aims to revolutionize how we harness solar power.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="project-card">
                    <h3>Project Beta</h3>
                    <p>Focusing on AI-driven healthcare solutions, Project Beta is set to transform patient care and diagnosis.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="project-card">
                    <h3>Project Gamma</h3>
                    <p>An innovative approach to urban planning, Project Gamma is designing the sustainable cities of tomorrow.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-lg-8 mx-auto">
                <div class="cta-section text-center">
                    <h2>Interested in collaborating?</h2>
                    <p>We're always looking for partners who share our vision for a better future.</p>
                    <a href="#" class="btn btn-lg btn-success">Contact Us</a>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
$primary-color: #007bff;
$secondary-color: #6c757d;
$success-color: #28a745;
.project-card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 100%;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        color: $primary-color;
        margin-bottom: 15px;
    }

    p {
        margin-bottom: 20px;
    }

    .btn-primary {
        background-color: $primary-color;
        border-color: $primary-color;

        &:hover {
            background-color: darken($primary-color, 10%);
            border-color: darken($primary-color, 10%);
        }
    }
}

.cta-section {
    background-color: lighten($secondary-color, 40%);
    border-radius: 8px;
    padding: 30px;

    h2 {
        color: $secondary-color;
        margin-bottom: 15px;
    }

    .btn-success {
        background-color: $success-color;
        border-color: $success-color;

        &:hover {
            background-color: darken($success-color, 10%);
            border-color: darken($success-color, 10%);
        }
    }
}
</style>
