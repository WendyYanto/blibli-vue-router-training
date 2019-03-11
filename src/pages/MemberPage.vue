<template>
    <div class="container body-wrapper">
        <h3>
            List Of Members
        </h3>
        
        <div class="card">
            <div
                class="card-body" 
                v-if="members.length == 0">
                No Members
            </div>

            <MemberItem
                :item="i"
                v-for="(i) in members"
                v-on:deleteCurrent="deleteData()"
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
import {mapGetters} from 'vuex'

export default {
    name: "MemberPage",
    components: {
        Modal,
        MemberItem
    },
    created() {
        this.$store.dispatch('getMembers')
    },
    computed: {
        ...mapGetters(['members'])
    },
    methods: {
        deleteData() {
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
