<template>
    <div class="container body-wrapper">
        <h3 class="text-center">
            Register    
        </h3>

        <div class="form-group">
            <label for="name">
                Name :
            </label>
            <input
                class="form-control"
                id="name" 
                v-model="formData.name" 
                type="text" 
                placeholder="Input Your Name"
                required />
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
        <div class="wrapper">
            <button class="btn submit"
                @click="submitData">
                    Submit        
            </button>
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

export default {
    name: 'ContactUsPage',
    components: {
        Modal
    },
    data() {
        return {
            formData:{
                name : "",
                email: "",
                password: "",
                age: ""
            }
        }
    },
    methods: {
        submitData () {
            if(!this.validate){
                this.$refs.dangerModal.showModal()
                return
            }
            
            axios.post('/api/members',this.formData).then(resp => {
                this.$refs.successModal.showModal()
            })
            
            setTimeout( () => {
                this.$router.push({path : '/members'})
            },2000)
        }
    },
    computed: {
        getData(){
            this.count++
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
    }
}
</script>

<style scope>
    .submit{
        background-color: #078ed3;
        color: #ffffff;
        font-size: 13px;
        line-height: 13px;
        padding: 12px 15px;
    }

    .alert{
        padding: 0.3rem 1.25rem;
        margin-top: 5px;
    }
    
</style>
