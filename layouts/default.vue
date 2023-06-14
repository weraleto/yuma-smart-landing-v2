<template>
  <div class="app">
    <Navbar ref="navbar" />

    <div @click="handleLayoutClick">
        <nuxt />
        <Footer />
    </div>

    <!-- <FormModal 
        form-action="contact"
        action-button-text="Заказать звонок"
        v-if="$store.state.showContactForm"
        @close="$store.commit('setShowModal', {key: 'showContactForm', val: false})" /> -->
    <FormModal 
        form-action="application"
        action-button-text="Отправить заявку"
        :show-textarea="false"
        v-if="$store.state.showApplyForm"
        @close="$store.commit('setShowModal', {key: 'showApplyForm', val: false})" />


    <!-- <div class="up-button" @click="scrollToTop" v-if="showUpButton">
        <img src="~assets/img/arrow.svg" alt="Наверх страницы">
    </div> -->
  </div>
  
</template>

<script>
import Navbar from '@/components/navigation-bar'
import Footer from '@/components/footer'
import FormModal from '@/components/modal-form'
import {mapState} from 'vuex'
import {layoutMixin} from '@/mixins/mixins'
export default {
    components: {Navbar, Footer, FormModal},
    mixins: [layoutMixin],
    data: () => {
        return {
            // showUpButton: false,
            lastScrollTop: 0
        }
    },
    computed: {
        ...mapState([
            'showContactForm',
            'showApplyForm',
            'otherModalsOpened'
        ]),
        isModalOpened() {
            return this.showContactForm || this.showApplyForm || this.otherModalsOpened
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        },
        handleLayoutClick() {
            this.$refs.navbar.closeAllDropdowns()
        }
    },

}
</script>

<style lang="scss" >
@import "~element-ui/packages/theme-chalk/src/message";
@import '@/assets/scss/_variables';

.app {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    max-width: 100vw;
    margin-top: 64px;

    @media screen and (max-width: $--screen-sm-min) {
        margin-top: 50px;
    }
}

.el-message.el-message--error {
    z-index: 20000 !important;
}

.main {
    flex: 1 0 auto;

    max-width: 100vw;
    overflow: hidden;
}

.up-button {
    width: 60px;
    height: 60px;
    position: fixed;
    background-color: $--main-white;
    bottom: 60px;
    right: 50%;
    transform: translate(50%, 0);
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $--main-gray;

    img {
        width: 36%;
        transform: rotate(-135deg);
    }

    @media screen and (max-width: $--screen-sm-min) {
        width: 40px;
        height: 40px;
        right: 30px;
        transform: none;
    }
    @media screen and (max-width: $--screen-xxs-min) {
        right: 16px;
    }
}

</style>
