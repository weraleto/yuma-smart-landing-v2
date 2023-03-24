<template>
    <el-collapse v-model="activeItem" class="collapsible__blocks" :accordion="accordion">
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
                        <p class="text6" :class="{'price-text-bottom-margin': item.prices}" v-html="item.text"></p>

                        <div v-if="item.prices" class="collapsible__item--price">
                            <div class="collapsible__item--price__line text6" v-for="p in item.prices" :key="p.label+p.price">
                                <p>{{p.label}}</p>
                                <div class="collapsible__item--price__el">
                                    <span class="text4 no-word-break">{{p.price}}</span>
                                    <span v-if="p.price_comment" v-html="p.price_comment"></span>
                                </div>
                            </div>
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
        },
        accordion: {
            type: Boolean,
            default: true
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
@import '@/assets/scss/_variables.scss';
$--collapse-header-background-color: unset;
$--collapse-content-background-color: unset;
$--collapse-border-color: transparent;
$--color-primary: $--main-black;
$--collapse-header-font-size: 22px;
$--collapse-header-height: 1.2;

@import "~element-ui/packages/theme-chalk/src/collapse";
@import "~element-ui/packages/theme-chalk/src/collapse-item";

.el-collapse {
    border: none;
}

.collapsible__item {
    margin-bottom: 32px;
    padding-bottom: 20px;
    border-radius: 12px;
    background-color: $--gray-medium-light;

    .el-collapse-item__header {
        display: flex;
        justify-content: space-between;
        padding: 40px 80px 20px 40px;
        font-weight: 400;
        height: auto;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 19px;
            height: 19px;
            background: url('../assets/img/arrow.svg') no-repeat center center;
            background-size: cover;
            right: 40px;
            top: 40px;
            transition: transform .3s ease;
        }
        &.is-active {
            &::after {
                transform: rotate(45deg) translate(-2px, 2px);
            }
        }


    }
    .el-collapse-item__content {
        line-height: 1.2;
        padding: 0 40px 20px;

        .price-text-bottom-margin {
            margin-bottom: 32px;
        }
    }

    &--price {
        padding-top: 32px;
        border-top: 1px solid $--main-black;
        &__line {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1em;

            &:not(:last-child) {
                margin-bottom: 24px;
            }
            & > *{
                max-width: 50%;
            }
        }

        &__el {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            text-align: right;
            justify-content: flex-end;
            gap: 0;
        }
    }

    @media screen and (max-width: $--screen-sm-min) {
        padding-bottom: 4px;
        margin-bottom: 12px;

        .el-collapse-item__header {
            padding: 28px 35px 24px 16px;
            font-size: 18px;
            &::after {
                right: 16px;
                top: 28px;
            }
        }
        .el-collapse-item__content {
            padding: 0 16px 24px;
        }

        &--price {
            &__line {
                &:not(:last-child) {
                    margin-bottom: 30px;
                }
            }
        }
    }
}

</style>