<template>
    <div class="card-body">
        <h3 class="card-title">
        {{item.name}}
        </h3>
        <p class="card-text">               
        Email : {{item.email}}
        </p>
        <p class="card-text">
        Password : {{item.password}}
        </p>
        <router-link :to="'/members/'+item.id">Details</router-link>
        <!-- <button
            class="btn btn-danger card-link" 
            @click="deleteData(i.id,index)">
                Delete
        </button>
        <button
            class="btn btn-warning card-link"
            @click="updateData(i.id,index)">
                Edit
        </button> -->
    </div>
</template>

<script>
export default {
    name: "MemberItem",
    props: ['item']
}
</script>

<style>

</style>

