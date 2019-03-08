<template>
    <div class="member-wrapper">
        <h3>
            List Of Members
        </h3>
        <h4 v-if="items.length == 0">No Members</h4>
        <div 
          class="form-group"
          v-for="(i,index) in items"
          :key="i.id">
            name: {{i.name}} <br/>
            email : {{i.email}} <br/>
            password : {{i.password}} <br/>
            <button @click="deleteData(i.id,index)">Delete</button>
            <button @click="updateData(i.id,index)">Update</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "ProductPage",
    data() {
        return {
            items:[]
        }
    },
    created() {
        axios.get("/api/members").then((resp) =>
            this.items = resp.data
        )
    },
    methods: {
        deleteData(id,index) {
            this.items.splice(index,1)
            axios.delete(`/api/members/${id}`).then(resp => {
                alert("Deleted")
            })
        },
        updateData(id) {
            this.$router.push({path: `/member/edit/${id}`})
        }
    },
}
</script>

<style scope>
    .member-wrapper{
        max-width: 500px;
        padding: 20px;
        margin: 0 auto;
    }

    .form-group {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: solid 1px #eee;
        padding: 10px;
    }

    h3{
        margin-top: 0;
    }
</style>
