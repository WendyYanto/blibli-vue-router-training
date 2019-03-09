<template>
    <div class="container body-wrapper">
        <h3>
            List Of Members
        </h3>
        
        <div class="card">

            <div
                class="card-body" 
                v-if="items.length == 0">
                No Members
            </div>

            <div 
                class="card-body"
                v-for="(i,index) in items"
                :key="i.id">
                    <h3 class="card-title">
                    {{i.name}}
                    </h3>
                    <p class="card-text">               
                    Email : {{i.email}}
                    </p>
                    <p class="card-text">
                    Password : {{i.password}}
                    </p>
                    <button
                        class="btn btn-danger card-link" 
                        @click="deleteData(i.id,index)">
                            Delete
                    </button>
                    <button
                        class="btn btn-warning card-link"
                        @click="updateData(i.id,index)">
                            Edit
                    </button>
            </div>
        </div>

        <Modal
            ref="deleteModal"
            title="Information" 
            content="Data Deleted Successfully"
            type="delete">
        </Modal>

    </div>
</template>

<script>
import axios from 'axios'
import Modal from '@/components/Modal'

export default {
    name: "MemberPage",
    components: {
        Modal
    },
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
            axios.delete(`/api/members/${id}`)
            this.$refs.deleteModal.showModal()
        },
        updateData(id) {
            this.$router.push({path: `/member/edit/${id}`})
        }
    },
}
</script>

<style scope>
    .body-wrapper > h3 {
        margin : 20px 0;
    }
</style>
