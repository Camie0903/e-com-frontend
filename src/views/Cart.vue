<template>
    <b-modal id="auth-modal">
        <login-form v-if="showLoginForm" @success="success"></login-form>    
        <register-form v-else @success="success"></register-form>
    </b-modal>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("AuthModule");

export default{
    computed:{
        ...mapState({
            visibility: (state) => state.authModal.visibility,
            callbackAction: (state) => state.authModal.callbackAction
        })
    },
    watch: {
        visibility(newVal){
            newVal ? this.$bvModal.show("auth-modal") : this.$bvModal.hide("auth-modal");
        },
    },
    methods: {
        ...mapActions(['hideAuthModal']),
        callback(){
            this.$store.dispatch(this.callbackAction.name, this.callbackAction.payload);
        },
        success(){
            this.callback();
            this.hideAuthModal();
        }
    },
}
</script>