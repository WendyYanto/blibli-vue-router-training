<template>
    <div class="container">
        <div class="wrapper">
            <label for="name">
                Name :
            </label>
            <input 
                id="name" 
                v-model="formData.name" 
                type="text" 
                placeholder="Input Your Name" />
        </div>
        <div class="wrapper">
            <label for="email">
                Email :
            </label>
            <input 
                id="email" 
                v-model="formData.email" 
                type="email" 
                placeholder="Input Your Email" />
            <div class="error" v-if="!isEmailValid">
                Email Not Valid
            </div>
        </div>
        <div class="wrapper">
            <label for="password">
                Password :
            </label>
            <input 
                id="password" 
                v-model="formData.password" 
                type="password" 
                placeholder="Input Your Password" />
        </div>
        <div class="wrapper">
            <label for="age">
                Age :
            </label>
            <input
                type="number"
                id="age" 
                v-model="formData.age" 
                placeholder="Input Your Number" />
        </div>
        <div class="wrapper">
            <button class="submit" @click="submitData">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ContactUsPage',
    data() {
        return {
            formData:{
                name : "",
                email: "",
                password: "",
                age: ""
            },
            count : 0
        }
    },
    methods: {
        submitData () {
            if(!this.validate){
                alert("please fix data")
                return
            }
            axios.post('/api/members',this.formData).then(resp => {
                alert("Data Inserted")
                this.$router.push({path : '/members'})
            })
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
    .container{
        max-width: 500px;
        margin: 0 auto;
        background-image: url('../assets/logo.png');
        background-size: cover;
        background-repeat: no-repeat;
    }

    label{
        float: left;
        display: block;
        margin-bottom: 5px;   
    }

    .wrapper{
        margin: 10px;
    }

    .error{
        padding-top:10px;
        text-align: left;
        color: red;
    }

    input[type=text],input[type=password],input[type=email],input[type=number]{
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
    }

    .submit{
        background-color: #078ed3;
        border: none;
        outline: 0;
        color: #ffffff;
        font-size: 13px;
        line-height: 13px;
        padding: 12px 15px;
        text-transform: uppercase;
        border-radius: 2px;
        vertical-align: top;
        background-image: none;
    }
</style>
