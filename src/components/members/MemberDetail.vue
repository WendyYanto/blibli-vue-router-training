<template>
    <div class="container">
        <div class="card" style="margin-top:40px;">
            <div class="card-body">
                <div class="card-title">
                <h3>Member Detail : {{id}}</h3>
                <span class="red" v-if="isNew">
                    New !
                </span>
                </div>
                <div class="card-text">
                Name : {{item.name}}
                </div>
                <div class="card-text">
                Email : {{item.email}}
                </div>
                <div class="card-text">
                Password : {{item.password}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import membersApi from '@/api/members'

export default {
    name: "MemberDetail",
    data(){
        return{
            item: {}
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        isNew(){    
            return this.$route.query.newProduct === 'true'
        }
    },
    created(){
        membersApi.getMemberByID(this.id).then(resp => {
            this.item = resp.data
        })
    }
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

