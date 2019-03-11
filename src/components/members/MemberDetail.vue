<template>
    <div class="container">
        <div class="card" style="margin-top:40px;">
            <div class="card-body">
                <div class="card-title form-group">
                <h3>Member Detail : {{id}}</h3>
                <span class="red" v-if="isNew">
                    New !
                </span>
                </div>
                <div class="card-text form-group">
                    Name : 
                    <input type="text" v-model="memberDetail.name" class="form-control">
                </div>
                <div class="card-text form-group">
                    Email :
                    <input type="email" v-model="memberDetail.email" class="form-control"> 
                </div>
                <div class="card-text form-group">
                    Password :
                    <input type="text" v-model="memberDetail.password" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-success" @click="save">Save</button>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import membersApi from '@/api/members'
import {mapGetters} from 'vuex'

export default {
    name: "MemberDetail",
    computed: {
        id() {
            return this.$route.params.id
        },
        isNew(){    
            return this.$route.query.newProduct === 'true'
        },
        ...mapGetters(['memberDetail'])
    },
    created(){
        this.$store.dispatch('getMemberDetail',
        {
            id: this.id
        })
    },
    watch: {
        memberDetail (value) {
            this.memberDetail = {...value}
        }
    },
    methods: {
        save() {
            alert("Saved")
        }
    },
}
</script>

<style scope>
    .container{
        max-width: 500px;
        margin: 0 auto;
    }

    .red {
        color: red;
    }
</style>

