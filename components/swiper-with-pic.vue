<template>
    <div>
        <div :class="['tab-content', `tab-content--${tab.type}`, {'size-reverse-vertical': tab.pictureSize == 'small'}]">
            <div 
                :class="['tab-picture', `tab-picture--${tab.type}`, {'has-border-radius': pictureBordered}]"
            >
                <!-- <picture v-lazy-load>
                    <source media="(min-width:1440px)"
                        :data-srcset="require(`../assets/img/${imageFolderName}/${tab.img}.jpg`)">
                    <source media="(min-width:990px)"
                        :data-srcset="require(`../assets/img/${imageFolderName}/${tab.img}0.75.jpg`)">
                    <source media="(min-width:0px)"
                        :data-srcset="require(`../assets/img/${imageFolderName}/${tab.img}0.5.jpg`)">
                    <img :data-src="require(`../assets/img/${imageFolderName}/${tab.img}.jpg`)" :alt="tab.label">
                </picture> -->
                <picture data-not-lazy>
                    <source media="(min-width:1440px)"
                        :srcset="require(`../assets/img/${imageFolderName}/${tab.img}.jpg`)">
                    <source media="(min-width:990px)"
                        :srcset="require(`../assets/img/${imageFolderName}/${tab.img}0.75.jpg`)">
                    <source media="(min-width:0px)"
                        :srcset="require(`../assets/img/${imageFolderName}/${tab.img}0.5.jpg`)">
                    <img :src="require(`../assets/img/${imageFolderName}/${tab.img}.jpg`)" :alt="tab.label">
                </picture>
            </div>
            <div :class="`tabs-swiper__container--${tab.type}`">
                <client-only>
                    <swiper ref="tabsSwiper" class="swiper tabs-swiper"
                        :options="swiperOptions">
                        <swiper-slide v-for="(slide, idx) in tab.slides" :key="idx"
                            class="swiper-slide tabs-swiper__slide" :class="`tabs-swiper__slide--${tab.type}`">
                            <template v-if="tab.type == 'horizontal'">
                                <h3 class="text4">{{slide.title}}</h3>
                                <p class="text6">{{slide.text}}</p>
                            </template>
                            <template v-else>
                                <div v-for="block in slide" :key="block.title" class="tabs-swiper__slide--block">
                                    <h3 class="text4">{{block.title}}</h3>
                                    <p class="text6">{{block.text}}</p>
                                </div>
                            </template>
                        </swiper-slide>
                    </swiper>
                </client-only>
            </div>
        </div>
        <div class="container" :class="`tabs-swiper__navigation tabs-swiper__navigation--${tab.type}`">
            <div class="tabs-swiper__navigation--item" :class="`tabs-swiper__navigation--prev-${i}${indexSubprefix?'-'+indexSubprefix:''}`">
                <img src="~assets/img/swiper-arrow-prev.svg" alt="previous slide">
            </div>
            <div class="tabs-swiper__navigation--item animate" :class="`tabs-swiper__navigation--next-${i}${indexSubprefix?'-'+indexSubprefix:''}`"
                @click="handleSlideFirstChange">
                <img src="~assets/img/swiper-arrow-next.svg" alt="next slide">
            </div>
        </div>
    </div>

</template>

<script>
    import {
        Swiper,
        SwiperSlide
    } from 'vue-awesome-swiper'

    export default {
        props: {
            imageFolderName: String,
            tab: {
                type: Object,
                default: () => {}
            },
            i: {
                type: String,
                default: '0'
            },
            indexSubprefix: {
                type: String,
                default: ''
            },
            swiperOptions: {
                type: Object,
                default: () => {}
            },
            pictureBordered: {
                type: Boolean,
                default: false
            }
        },
        components: {
            Swiper,
            SwiperSlide
        },
        methods: {
            handleSlideFirstChange(e) {
                let el = e.target.closest('.tabs-swiper__navigation--item')
                if (el.classList.contains('animate')) {
                    el.classList.remove('animate')
                }
            },
        }
    }
</script>

<style lang="scss">
@import "~swiper/swiper";
@import '@/assets/scss/_mixins';
@import '@/assets/scss/_variables';

@keyframes arrowNextFullTiming {
    0%, 33%, 49.5%, 66% {
        transform: translateX(0);
    }

    41.25%, 57.75% {
        transform: translateX(30%);
    }
}

.tab-picture {
    
    position: relative;
    padding: 0 !important;

    &.has-border-radius {
        img, picture {
            border-radius: $--products-default-border-radius;
        }
    }

    &--vertical {
        flex: 1 0 65.63%;
       
        @media screen and (max-width: $--screen-md-min) {
            flex: 1 1 auto;
        }
    }

}

.tab-content {
    &--vertical {
        display: flex;
        gap: 40px;

        &:not(.size-reverse-vertical) {
            @media screen and (max-width: $--screen-md-min) {
                flex-direction: column;
                align-items: center;
                padding: 0;
            }
            @media screen and (max-width: $--screen-sm-min) {
                gap: 0;
            }
        }

    }
}

.tabs-swiper {
    min-height: 100%;
    // display: flex;
    &__slide {
        h3 {
            margin-bottom: 20px;
            @media screen and (max-width: $--screen-sm-min) {
                margin-bottom: 16px;
            }
        }
        &--vertical {
            display: flex;
            height: 100%;
            flex-direction: column;
            gap: 3.89vw;

            @media screen and (min-width: calc($--screen-sm-min + 1px)) and (max-width: $--screen-md-min) {
                flex-direction: row;
                gap: 0;
            }
            @media screen and (max-width: $--screen-sm-min) {
                gap: 40px;
            }
        }
        &--horizontal {
            @media screen and (max-width: $--screen-sm-min) {
                min-width: 100%;
            }
        }

        &--block {
            @media screen and (min-width: calc($--screen-sm-min + 1px)) and (max-width: $--screen-md-min) {
                flex: 1 0 33.333333%;
                &:not(:last-child) {
                    padding-right: 40px;
                }
            }
        }
    }
    &__container {
        &--horizontal, &--vertical {

            @media screen and (max-width: $--screen-sm-min) {
                .swiper-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }
            }
        }
        &--vertical {           
            width: 100%;
            overflow: hidden;
            &, .swiper-wrapper {
                min-height: 100%;
                flex-grow: 1;
                height: auto;
            }
            
            @media screen and (min-width: calc($--screen-md-min + 1px)) {
                padding-left: 0 !important;
                padding-right: 0 !important;
            }
            @media screen and (max-width: $--screen-sm-min) {
                &, .swiper-wrapper {
                    height: 100%;
                }
            }
        }
    }
    &__navigation {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 19px;
        gap: 24px;
        &--item {
            cursor: pointer;
            &.swiper-button-disabled {
                display: none;
            }
            &.animate {
                animation-name: arrowNextFullTiming;
                animation-duration: 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
        }

        @media screen and (max-width: $--screen-sm-min) {
            display: none;
        }
    }
}
</style>