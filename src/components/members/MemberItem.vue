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
            @click="deleteData()">
                {{$t('app.content.Delete')}}
        </button>
        <button
            class="btn btn-primary card-link"
            @click="updateData(i.id,index)">
                {{$t('app.content.Edit')}}
        </button>
    </div>
</template>

<script>
export default {
    name: "MemberItem",
    props: ['item'],
    methods: {
        deleteData () {
            this.$emit('deleteCurrent')
        }
    },
}
</script>

<style>

</style>

