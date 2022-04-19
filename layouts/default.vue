<template>
  <div class="app">
    <Navbar />
    <nuxt />
    <Footer />

    <FormModal 
        form-action="contact"
        action-button-text="Заказать звонок"
        v-if="$store.state.showContactForm"
        @close="$store.commit('setShowModal', {key: 'showContactForm', val: false})" />
    <FormModal 
        form-action="application"
        form-size="medium"
        action-button-text="Отправить заявку"
        :show-textarea="true"
        v-if="$store.state.showApplyForm"
        @close="$store.commit('setShowModal', {key: 'showApplyForm', val: false})" />


    <div class="up-button" @click="scrollToTop" v-if="showUpButton">
        <img src="~assets/img/arrow.svg" alt="Наверх страницы">
    </div>
  </div>
  
</template>

<script>
import Navbar from '@/components/navigation-bar'
import Footer from '@/components/footer'
import FormModal from '@/components/modal-form'
import {mapState} from 'vuex'
export default {
    components: {Navbar, Footer, FormModal},
    data: () => {
        return {
            showUpButton: false
        }
    },
    mounted() {
        let ctx = this
        window.addEventListener('scroll', function(){
            ctx.showUpButton = window.pageYOffset > 5450
        })
    },
    computed: {
        ...mapState([
            'showContactForm',
            'showApplyForm'
        ]),
        isModalOpened() {
            return this.showContactForm || this.showApplyForm
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    },
    watch: {
        isModalOpened(val) {
            if (val) {
                document.body.classList.add('body-scroll-lock')
            } else {
                document.body.classList.remove('body-scroll-lock')
            }
        }
    }

}
</script>

<style lang="scss" >

@import '@/assets/scss/_variables.scss';

.app {
    display: flex;
    flex-direction: column;
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