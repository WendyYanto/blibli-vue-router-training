<template>
    <div class="card-body">
        <h3 class="card-title">
        {{item.name}}
        </h3>
        <router-link 
            class="btn btn-warning" 
            :to="'/members/'+item.id">
            Details
        </router-link>
        
        <button
            class="btn btn-danger card-link" 
            @click="deleteData(item.id)">
                {{$t('app.content.Delete')}}
        </button>
    </div>
</template>

<script>
export default {
    name: "MemberItem",
    props: ['item'],
    methods: {
        deleteData (currId) {
            this.$store.dispatch('deleteMemberDetail',
            {
                id : currId
            })
            this.$emit('deleteCurrent')
        }
    },
}
</script>

<style>

</style>

