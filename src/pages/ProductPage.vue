<template>
    <div class="body-wrapper">
        <div>
            List Of Products
        </div>
        <div 
          v-for="i in items"
          :key="i.id">
            name: {{i.name}} <br/>
            email : {{i.email}} <br/>
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
}
</script>

<style scope>

</style>
