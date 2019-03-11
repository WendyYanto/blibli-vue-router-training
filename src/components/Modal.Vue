<template>
    <transition name="fade">
        <div v-if="isShow()">
            <div class="modal show" style="display:block" aria-hidden="true" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content text-center">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ title }}</h5>
                            <button type="button" class="close" data-dismiss="modal" @click="closeModal()" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5>{{ content }}</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal()">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Modal',
        props: ['title','content','type'],
        data() {
            return {
                show : false,
                modalHeader : 'modal-header'
            }
        },
        methods: {
            isShow(){
                return this.show
            },
            closeModal(){
                this.show = false
            },
            showModal(){
                this.show = true
            }
        },

    }
</script>

<style scoped>
   .fade-enter-active{
        transition: opacity 0.4s;
    }

    .fade-leave-active {
        opacity: 0;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .red-bg{
        background-color: #ee5253;
        color: #ffffff;
    }

</style>
