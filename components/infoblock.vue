<template>
  <div class="grid-layout">
    <div class="infoblock">
        <div class="infoblock__text text4" v-html="text" />

        <a href="" 
            v-if="button_type" 
            @click.prevent="$store.commit('setShowModal', {key: 'showApplyForm', val: true})" 
            class="infoblock__button btn large" 
            :class="button_type"
        >{{button_text}}</a>
    </div>
</div>
</template>

<script>
export default {
    props: {
        button_type: String,
        button_text: String,
        text: String
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

    @media screen and (max-width: $--screen-sm-min) {
        max-width: 205px;
        width: 75%;
    }
}
</style>