<template>
    <main>
        <div class="header container-fluid">
            <div class="row">
                <div class="col-sm header-content">
                    <h2 class="text-center">Welcome To My Home Page</h2>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <h2 class="recommended-title">Recommended</h2>
            <div class="row">
                <div class="col text-center">
                    <h4></h4>
                    <img src="@/assets/sepatu.jpg" width="200" class="img-responsive">
                </div>
                <div class="col text-center">
                    <img src="@/assets/sepatu.jpg" width="200" class="img-responsive">
                </div>
                <div class="col text-center">
                    <img src="@/assets/sepatu.jpg" width="200" class="img-responsive">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style scoped>
    .header{
        min-height: 600px;
        background-image: url('../assets/background-header.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }

    .recommended-title{
        text-align: center;
        margin-top: 20px;
    }

    .header-content h2{
        margin-top:100px;
        color: #ffffff;
    }
</style>
