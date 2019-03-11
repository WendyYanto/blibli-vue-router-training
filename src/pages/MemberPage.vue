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

            <MemberItem
                :item="i"
                v-for="i in items"
                :key="i.id">
            </MemberItem>
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
import membersApi from '@/api/members'
import Modal from '@/components/Modal'
import MemberItem from '@/components/members/MemberItem'

export default {
    name: "MemberPage",
    components: {
        Modal,
        MemberItem
    },
    data() {
        return {
            items:[]
        }
    },
    created() {
        membersApi.getMembers().then((resp) =>
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
