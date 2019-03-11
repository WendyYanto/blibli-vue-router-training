<template>
    <div class="container">
        <h3 class="title">Edit</h3>
        <div class="form-group">
            <label for="name">
                Name :
            </label>
            <input
                class="form-control"
                id="name"
                v-model="formData.name"
                type="text" 
                placeholder="Input Your Name" />
        </div>
        <div class="form-group">
            <label for="email">
                Email :
            </label>

            <input
                class="form-control"
                id="email" 
                v-model="formData.email"
                type="email" 
                placeholder="Input Your Email" />
            <div 
                class="alert alert-danger" 
                role="alert" 
                v-if="!isEmailValid">
                Email Not Valid
            </div>
        </div>
        <div class="form-group">
            <label for="password">
                Password :
            </label>
            <input
                class="form-control"
                id="password" 
                v-model="formData.password" 
                type="password" 
                placeholder="Input Your Password" />
        </div>
        <div class="form-group">
            <label for="age">
                Age :
            </label>
            <input
                class="form-control"
                type="number"
                id="age" 
                v-model="formData.age" 
                placeholder="Input Your Number" />
        </div>
        <div class="form-group">
            <button class="btn submit" @click="submitData">Submit</button>
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
import axios from 'axios'
import Modal from '@/components/Modal'
import {mapGetters} from 'vuex'

export default {
    name: 'UpdateMemberPage',
    components: {
        Modal
    },
    data() {
        return {
            formData:{
                id : "",
                name : "",
                email: "",
                password: "",
                age: ""
            }
        }
    },
    created(){
        axios.get(`/api/members/${$route.params.id}`).then(resp => {
            this.formData = resp.data
        })
    },
    methods: {
        submitData () {
            if(!this.validate){
                this.$refs.dangerModal.showModal()
                return false
            }

            axios.put(`/api/members/edit/${this.formData.id}`,this.formData).then(resp => {
                this.$refs.successModal.showModal()
            })
            
            setTimeout( () => {
                this.$router.push({path : '/members'})
            },1000)

        }
    },
    computed: {
        getData(){
            return JSON.stringify(this.formData)
        },
        validate(){
            const data = this.formData
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
            return this.formData.email.indexOf('@') > 0
        }
    },
    watch: {
        productDetail (data) {

        }
    },
}
</script>

<style scope>
    .container{
        max-width: 500px;
        margin: 0 auto;
    }

    .submit{
        background-color: #078ed3;
        color: #ffffff;
    }

    h3.title{
        margin: 20px 0;
    }
</style>
