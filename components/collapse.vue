<template>
    <el-collapse v-model="activeItem" class="collapsible__blocks" accordion>
        <el-collapse-item
            v-for="(item, idx) in data" :key="idx"
            class="collapsible__item"
            :class="`${extra_class ? extra_class : ''}`"
            :name="idx"
            :title="item.title"
            >
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
                            <p class="collapsible__item--content__step--text text5">
                                {{step}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
    props: {
        extra_class: {
            type: String,
            default: null
        },
        data: {
            type: Array,
            default: () => []
        },
        active_default: {
            type: Number,
            default: undefined
        }
    },
    data: () => {
        return {
            activeItem: null
        }
    },
    mounted() {
        this.activeItem = this.active_default
    },

}
</script>

<style lang="scss">
@import "~element-ui/packages/theme-chalk/src/collapse";
@import "~element-ui/packages/theme-chalk/src/collapse-item";
@import '@/assets/scss/_variables.scss';

.el-collapse {
    border: none;
}

.collapsible__item {
    border-bottom: 2px solid;

    &.small {
        .el-collapse-item__header {
            padding: 10px 21.25% 10px 0;
        }
    }

    .el-collapse-item__header {
        display: flex;
        justify-content: space-between;
        padding: 20px 21.25% 20px 0;
        font-size: 1.875rem;
        font-variation-settings: "wght" 600;
        height: auto;
        line-height: 1.2;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 19px;
            height: 19px;
            background: url('../assets/img/arrow.svg') no-repeat center center;
            background-size: cover;
            right: 0;
            top: 20px;
            transition: transform .3s ease;
        }
        &.is-active {
            &::after {
                transform: rotate(45deg) translate(-2px, 2px);
            }
        }

        @media screen and (max-width: $--screen-md-min) {
            padding: 10px 21.25% 10px 0;
            font-size: 1.375rem;
            &::after {
                top: 10px;
            }
        }
    }
    .el-collapse-item__content {
        line-height: 1.2;
    }

    &--content {

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
}

</style>