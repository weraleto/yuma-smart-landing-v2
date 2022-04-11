<template>
    <div class="collapsible__blocks js-collapsible">
        <div
            v-for="(item, idx) in data" :key="idx"
            class="collapsible__item"
            :class="{
                'opened': activeItem > -1 && activeItem == idx,
                extra_class: extra_class && extra_class.length
            }"
            @click="handleTabChange(idx)"
            >
            <div class="collapsible__item--header">
                <div class="collapsible__item--header__inner">
                    <h4 class="subtitle">
                        {{item.title}}
                    </h4>
                </div>
                <div class="collapsible__item--arrow">
                    <img src="../assets/img/arrow.svg">
                </div>
            </div>
            <div class="collapsible__item--content">
                <div class="collapsible__item--content__inner">
                    <div class="collapsible__item--content__text">
                        <p class="text4">{{item.text}}</p>
                    </div>
                    <div v-if="item.steps" class="collapsible__item--content__steps">
                        <div v-for="(step, idx1) in item.steps" :key="step" class="collapsible__item--content__step">
                            <div class="collapsible__item--content__step--num">
                                {{idx1 + 1}}
                            </div>
                            <p class="collapsible__item--content__step--text">
                                {{step}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        },
        extra_class: String,
        active_default: {
            type: Number,
            default: undefined
        }
    },
    data: () => {
        return {
            activeItem: undefined
        }
    },
    beforeMount() {
        this.activeItem = this.active_default
    },
    methods: {
        handleTabChange(idx) {
            if (idx === this.activeItem) {
                this.activeItem = undefined
                return
            }
            this.activeItem = idx
        }
    }

}
</script>

<style lang="scss">

@import '@/assets/scss/_variables.scss';

.collapsible__item {
    border-bottom: 2px solid;

    &--header {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        cursor: pointer;

        &__inner {
            max-width: 78.75%;
        }

        @media screen and (max-width: $--screen-md-min) {
            padding: 10px 0;
        }
    }

    &--content {
        max-height: 0;
        overflow: hidden;
        transition: all .5s ease-out;

        &__text {
            max-width: 62.5%;
            @media screen and (max-width: $--screen-md-min) {
                max-width: 77.777%;
            }
            @media screen and (max-width: $--screen-sm-min) {
                max-width: 80%;
            }
        }

        &__inner {
            padding-bottom: 20px;
        }

        &__steps {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;

            @media screen and (max-width: $--screen-md-min) {
                margin-top: 23px;
            }
            @media screen and (max-width: $--screen-sm-min) {
                flex-direction: column;
                margin-top: 20px;
            }
        }

        &__step {
            width: 100%;
            max-width: 25%;
            display: flex;
            align-items: center;

            &--num {
                font-size: 4.375rem;
                line-height: 1;
                font-variation-settings: 'wght' 900;
                margin-right: 20px;
            }

            @media screen and (max-width: $--screen-md-min) {
                max-width: 33.333%;
                padding-right: 10px;

                &:not(:last-child) {
                    margin-bottom: 20px;
                }
            }
            @media screen and (max-width: $--screen-sm-min) {
                max-width: 100%;
                padding: 0 10vw;
            }
        }

    }

    &--arrow {
        transition: transform .5s ease-in ;
        @media screen and (max-width: $--screen-md-min) {
            width: 19px;
            height: 19px;
        }
    }

    &.opened {
        .collapsible__item--arrow {
            transform: rotate(45deg) translate(-30%, 30%);
        }
        .collapsible__item--content {
            max-height: 1000px;
        }
    }
}

</style>