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
                        {{$t('app.header.menus.Register')}} <span class="sr-only">(current)</span>
                    </a>
                </router-link>
                <router-link tag="li" class="nav-item" active-class="active" to="/members">
                    <a class="nav-link">
                        {{$t('app.header.menus.Member')}}
                    </a>
                </router-link>        
            </ul>
            <div class="nav-item lang" style="float:right;">
                <a @click="changeLang('id')" :class="{current_active: isActive('id')}" class="nav-link">
                    <span>Indonesia</span>
                </a>
            </div>    
            <div class="nav-item lang" style="float:right;">
                <a @click="changeLang('en')" :class="{current_active: isActive('en')}" class="nav-link">
                    <span>English</span>
                </a>
            </div>  
            <div class="nav-item" style="float:right;">
                <a class="nav-link">
                {{ userData.name }}
                </a>
            </div>   
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

const LANGS = ['en','id']

export default {
    name: "Navbar",
    data () {
        return {
            LANGS
        }
    },
    computed: {
        ...mapGetters(['userData'])
    },
    methods: {
        changeLang(id) {
            this.$i18n.locale = id
        },
        isActive(id){
            return this.$i18n.locale === id
        }
    },
}
</script>

<style>
    .body-wrapper{
        max-width: 500px;
        margin: 0 auto;
    }

    .lang{
        font-size: 13px;
    }

    .current_active{
        color: red !important;
    }
</style>
