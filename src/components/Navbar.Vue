<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">
            <img src="@/assets/blibli-logo.png" alt="blibli-logo" />
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link tag="li" class="nav-item" active-class="active" to="/register">
                    <a class="nav-link">
                        Register <span class="sr-only">(current)</span>
                    </a>
                </router-link>
                <router-link tag="li" class="nav-item" active-class="active" to="/members">
                    <a class="nav-link">
                        Member
                    </a>
                </router-link>          
            </ul>
            <div class="nav-item" style="float:right;">
                <a class="nav-link">
                {{userData.name}}
                </a>
            </div>   
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "Navbar",
        computed: {
            ...mapGetters(['userData'])
        }
    }
</script>

<style>
    .body-wrapper{
        max-width: 500px;
        margin: 0 auto;
    }
</style>
