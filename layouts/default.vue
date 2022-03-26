<template>
  <div class="app"
    :class="{'body-scroll-lock': isModalOpened}"
  >
    <Navbar />
    <nuxt />
    <Footer />

    <FormModal 
        form-action="contact"
        :show-contact-qr="true"
        v-if="$store.state.showContactForm"
        @close="$store.commit('setShowModal', {key: 'showContactForm', val: false})" />
    <FormModal 
        form-action="application"
        form-size="medium"
        :show-textarea="true"
        v-if="$store.state.showApplyForm"
        @close="$store.commit('setShowModal', {key: 'showApplyForm', val: false})" />
  </div>
  
</template>

<script>
import Navbar from '@/components/navigation-bar'
import Footer from '@/components/footer'
import FormModal from '@/components/modal-form'
import {mapState} from 'vuex'
export default {
    components: {Navbar, Footer, FormModal},
    computed: {
        ...mapState([
            'showContactForm',
            'showApplyForm'
        ]),
        isModalOpened() {
            return this.showContactForm || this.showApplyForm
        }
    }

}
</script>

<style lang="scss" >

.app {
    display: flex;
    flex-direction: column;
}

.main {
    flex: 1 0 auto;

    max-width: 100vw;
    overflow: hidden;
}

</style>