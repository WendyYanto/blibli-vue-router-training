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
                    <div 
                        class="alert alert-danger" 
                        role="alert" 
                        v-if="!isEmailValid">
                        Email Not Valid
                    </div>
                </div>
                <div class="card-text form-group">
                    Password :
                    <input type="text" v-model="memberDetail.password" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-success" @click="updateData()">Save</button>
                </div>  
            </div>
        </div>

        <Modal
            ref="successModal"
            title="Information" 
            content="Data Inserted Successfully"
            type="success">
        </Modal>

        <Modal
            ref="dangerModal"
            title="Warning"
            content="Data Error"
            type="warning">
        </Modal>
    </div>
</template>

<script>
import membersApi from '@/api/members'
import {mapGetters} from 'vuex'
import Modal from '@/components/Modal'

export default {
    name: "MemberDetail",
    components: {
        Modal
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        isNew(){    
            return this.$route.query.newProduct === 'true'
        },
        validate(){
            const data = this.memberDetail
            if(!data.name || 
              !data.email || 
              !data.age ||
              !data.password ||
              !this.isEmailValid){
              return false
            }
            return true
        },
        isEmailValid(){
            return this.memberDetail.email.indexOf('@') > 0
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
        updateData () {
            if(!this.validate){
                this.$refs.dangerModal.showModal()
                return false
            }

            this.$store.dispatch('updateMemberDetail',{
                data: this.memberDetail
            })

            this.$refs.successModal.showModal()
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

    .alert {
        padding: .3rem 1.25rem;
    }
</style>

