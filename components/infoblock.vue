<template>
  <div class="grid-layout">
    <div class="infoblock">
        <div class="infoblock__text text4" v-html="text" />

    </div>
    <a href="" 
        v-if="button_type" 
        @click.prevent="dispatchButtonAction" 
        class="infoblock__button btn large" 
        :class="button_type"
    >{{button_text}}</a>
</div>
</template>

<script>
export default {
    props: {
        is_button_link: {
            type: Boolean,
            default: false
        },
        button_page_link: {
            type: String,
            default: null
        },
        button_type: String,
        button_text: String,
        text: String
    },
    methods: {
        dispatchButtonAction() {
            if (this.is_button_link) {
                this.$router.push(this.button_page_link)
                return
            }
            this.$store.commit('setShowModal', {key: 'showApplyForm', val: true})
        }
    }

}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/_variables.scss';

.infoblock {
    grid-column: 3/6;
    position: relative;
    &::before {
        content: '';
        display: block;
        position: absolute;
        right: 100%;
        top: 0;
        min-width: 48.5px;
        height: 48.5px;
        background: url('@/assets/img/arr-infoblock.svg') no-repeat;
        background-size: cover;
        transform: translate(-90%, 4px);
    }

    @media screen and (max-width: $--screen-md-min) {
        grid-column: 3/7;
        max-width: 300px;
    }

    @media screen and (max-width: $--screen-sm-min) {
        display: flex;
        align-items: center;
        grid-column: 1/6;
        max-width: 390px;
        &::before {
            position: static;
            margin-right: 19px;
            // transform: translate(-30%, 8px);
            transform: none;
        }
    }
}


.btn.infoblock__button {
    border-radius: $--border-radius-default;
    max-width: unset;
    width: max-content;
    padding: 0 36px;
    margin-top: 30px;
    grid-row: 2/3;
    grid-column: 3/10;

    @media screen and (max-width: $--screen-sm-min) {
        margin-left: 67.5px;
        grid-column: 1/6;
        width: 100%;
        max-width: 205px;
        width: 75%;
    }
}
</style>