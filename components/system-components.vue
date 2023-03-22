<template>
    <div class="sys-components__container grid-layout">
        <div v-for="(item, i) in data" :key="i"
            class="sys-components__item"
            :class="[`col-${item.colspan}`, `row-${item.rowspan}`]"
            @click="openPopoverCard"
            :data-idx="i"
            :id="item.id"
        >
            <div class="sys-components__item--front">
                <h3 class="subtitle sys-components__item--front__title">{{item.title}}</h3>
            </div>
        </div>
        <div class="sys-components__popover" 
            :class="{'is_active': activeEl, 'is_visible': visibleEl, 'is_first': activeEl && activeEl == 0}"
            ref="popoverComponent"
        >
            <div class="sys-components__popover--content" :class="{'visible': contentVisible}">
                <div class="sys-components__popover--close" @click="hidePopoverCard"></div>
                <template v-if="activeEl==0">
                    <div ref="popoverCard" class="sys-components__popover--card" v-for="(tab, i) in activeElData.tabs" :key="tab.title">
                        <div class="sys-components__popover--heading__wrapper">
                            <div class="sys-components__popover--heading">
                                <h4 class="subtitle hidden-mobile">{{tab.title}}</h4>
                                <h4 class="subtitle hidden-desktop">Кассовая программа + бэк-офис</h4>
                                <p class="text6 hidden-mobile" v-html="tab.description"></p>
                                <!-- <p class="text6 hidden-desktop">{{activeElData.frontText}}</p> -->
                            </div>
                            <div class="sys-components__popover--subheading hidden-desktop container">
                                <h4 class="subtitle">{{activeCategoryCard}}</h4>
                            </div>
                        </div>
                        <template v-if="tab">
                            <SwiperWithPic
                                :i="activeEl"
                                :index-subprefix="String(i)"
                                image-folder-name="components"
                                :tab="tab"
                                :swiper-options="getSwiperConfiguration(tab.type, activeEl, pictureSize=tab.pictureSize, subprefix=String(i))"
                                :picture-bordered="true"
                            />
                        </template>
                    </div>
                </template>
                <template v-else>
                    <div class="sys-components__popover--heading__wrapper">
                        <div class="sys-components__popover--heading">
                            <h4 class="subtitle">{{activeElData.title}}</h4>
                            <p class="text6 hidden-mobile">{{activeElData.description}}</p>
                            <!-- <p class="text6 hidden-desktop">{{activeElData.frontText}}</p> -->
                        </div>
                    </div>
                    <template v-if="activeElData.tab">
                        <SwiperWithPic
                            :i="activeEl"
                            image-folder-name="components"
                            :tab="activeElData.tab"
                            :swiper-options="getSwiperConfiguration(activeElData.tab.type, activeEl, pictureSize=activeElData.tab.pictureSize)"
                            :picture-bordered="true"
                        />
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import {popoverMixin} from '@/mixins/mixins'
import SwiperWithPic from '@/components/swiper-with-pic'

export default {
    props: {
        data: {
            type: Array,
            default: () => []
        },
    },
    mixins: [popoverMixin],
    data: () => {
        return {
            activeCategoryCard: '',
            swiperOptionsBase: {
                spaceBetween: 40,
                breakpointsBase: 'container',
                on: {
                    init: function() {
                        const ctx = this
                        setTimeout(()=>{
                            ctx.update()
                            ctx.updateSize()
                        }, 310)
                        
                    }
                }
            },
            swiperOptionsHorizontal: {
                breakpoints: {
                    0: {
                        enabled: false,
                        allowTouchMove: false,
                        allowSlideChange: false,
                    },
                    768: {
                        enabled: true,
                        allowTouchMove: true,
                        allowSlideChange: true,
                        slidesPerView: 1.5,
                        slidesPerGroup: 1
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    }
                },
            },
            swiperOptionsVertical: {
                breakpoints: {
                    0: {
                        enabled: false,
                        allowTouchMove: false,
                        allowSlideChange: false,
                    },
                    768: {
                        enabled: true,
                        allowTouchMove: true,
                        allowSlideChange: true,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20
                    },
                },
            },
            swiperOptionsVerticalSmall: {
                breakpoints: {
                    0: {
                        enabled: false,
                        allowTouchMove: false,
                        allowSlideChange: false,
                    },
                    768: {
                        enabled: true,
                        allowTouchMove: true,
                        allowSlideChange: true,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20
                    },
                    1380: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 40
                    }
                },
            },
        }
    },
    async mounted() {
        if (this.$route.hash) {
            if (this.activeEl || this.visibleEl) {
                await this.hidePopoverCard()
            }
            document.querySelector(this.$route.hash).click()
        }
    },
    components: {SwiperWithPic},
    methods: {
        getSwiperConfiguration(type, idx, pictureSize=undefined, subprefix='') {
            let config = type == 'horizontal' ? this.swiperOptionsHorizontal : this.swiperOptionsVertical;
            if (pictureSize && pictureSize == 'small') {
                config = this.swiperOptionsVerticalSmall
            }
            return {
                ...this.swiperOptionsBase,
                ...config,
                navigation: {
                    prevEl: `.tabs-swiper__navigation--prev-${idx}${subprefix?'-'+subprefix:''}`,
                    nextEl: `.tabs-swiper__navigation--next-${idx}${subprefix?'-'+subprefix:''}`
                }
            }
        },
        openPopoverCard(e) {
            const el = e.target.closest('.sys-components__item')
            let popoverEl = this.$refs.popoverComponent
            let isMobile = window.innerWidth <= 767
            if (isMobile) {
                this.visibleEl = this.activeEl = el.dataset.idx
                this.setElProperty(popoverEl, 'zIndex', 10001)
                this.$store.commit('setShowModal', {key: 'otherModalsOpened', val: true})
                
                setTimeout(()=>{
                    this.setElProperty(popoverEl, 'maxHeight', window.innerHeight, 'px')
                    this.setElProperty(popoverEl, 'maxWidth', window.innerWidth, 'px')
                    this.setElProperty(popoverEl, 'top', 0, 'px')
                    this.setElProperty(popoverEl, 'left', 0, 'px')

                    this.setElProperty(popoverEl.firstElementChild, 'paddingTop', 
                        popoverEl.querySelector('.sys-components__popover--heading__wrapper').offsetHeight,
                        'px'
                    )

                    if (el.dataset.idx == 0) {
                        this.activeCategoryCard = this.activeElData.tabs[0].title
                        popoverEl.addEventListener('touchmove', this.handleMultipleCardsScroll)
                        popoverEl.addEventListener('scroll', this.handleMultipleCardsScroll)
                    }
                }, 100)

            } else {
                this.setElProperty(popoverEl, 'top', el.offsetTop, 'px')
                this.setElProperty(popoverEl, 'left', el.offsetLeft, 'px')
                this.setElProperty(popoverEl, 'maxWidth', el.clientWidth+2, 'px')
                this.setElProperty(popoverEl, 'maxHeight', el.clientHeight+2, 'px')
                this.setElProperty(popoverEl, 'zIndex', 9999)
                this.params = [el.offsetTop, el.offsetLeft, el.clientWidth+2, el.clientHeight+2]
    
                this.visibleEl = this.activeEl = el.dataset.idx
                
                setTimeout(()=>{
                    if (el.dataset.idx == 0) {
                        this.setElProperty(popoverEl, 'maxHeight', 300, 'vh')
                    } else {
                        this.setElProperty(popoverEl, 'maxHeight', el.parentElement.clientHeight+2, 'px')
                    }
                    this.setElProperty(popoverEl, 'maxWidth', el.parentElement.clientWidth+2, 'px')
                    this.setElProperty(popoverEl, 'top', 0, 'px')
                    this.setElProperty(popoverEl, 'left', 0, 'px')
                }, 100)
                if (el.dataset.idx == 0) {
                    setTimeout(()=>{
                        // containerHeight = sum of two cards + top and bottom container paddings + gap between cards
                        let containerHeight = this.$refs.popoverCard.reduce((prev, next)=>{
                            return prev += next.offsetHeight 
                        }, 80)
                        this.setElProperty(popoverEl.parentElement, 'minHeight', containerHeight, 'px')
                    }, 350)
                }
            }
            setTimeout(()=>{
                this.contentVisible = true
            }, 200)
        },
        hidePopoverCard() {
            let [top, left, width, height] = this.params
            let popoverEl = this.$refs.popoverComponent
            this.contentVisible = false
            this.setElProperty(popoverEl, 'top', top, 'px')
            this.setElProperty(popoverEl, 'left', left, 'px')
            this.setElProperty(popoverEl, 'maxWidth', width, 'px')
            this.setElProperty(popoverEl, 'maxHeight', height, 'px')
            if (this.activeEl == 0) {
                document.querySelector('.sys-components__container').style = {}
            }
            this.params = []
                        
            setTimeout(()=>{
                this.activeEl = null
                this.$store.commit('setShowModal', {key: 'otherModalsOpened', val: false})
                popoverEl.firstElementChild.style = null
            }, 200)
            setTimeout(()=>{
                this.visibleEl = null
                this.setElProperty(popoverEl, 'zIndex', -1)
            }, 250)
        },
        handleMultipleCardsScroll(){
            let cardIdx = (this.$refs.popoverCard[0].offsetHeight - 60) < this.$refs.popoverComponent.scrollTop ? 1 : 0
            this.activeCategoryCard = this.activeElData.tabs[cardIdx].title
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';
@import '@/assets/scss/_mixins';

.sys-components {
    &__container {

        @extend %popoverContainer;
        gap: 20px;
        grid-auto-flow: column dense;
        grid-template-rows: repeat(3, 240px);

        @media screen and (max-width: $--screen-md-min) {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(5, 150px);
            grid-auto-flow: row dense;
            gap: 16px;
        }
        @media screen and (max-width: $--screen-xxs-min) {
            gap: 12px;
            grid-template-rows: 168px 278px 168px 278px 168px;
        }
    }

    &__popover {
        @include popover;

        &--card {
            position: relative;
            padding-left: 40px;
            padding-right: 40px;
            &:not(:last-child) {
                padding-bottom: 72px;
                margin-bottom: 40px;
            }
            &:last-child {
                padding-bottom: 32px;
            }
            @media screen and (min-width: calc($--screen-sm-min + 1px)) {
                &:not(:last-child) {
                    border-bottom: 1px solid #E4E5E8;
                }
            }
            @media screen and (max-width: $--screen-md-min) {
                padding-left: 20px;
                padding-right: 20px;
                &:not(:last-child) {
                    padding-bottom: 56px;
                    margin-bottom: 20px;
                }
            }
        }

        &--subheading {
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }
    
    &__item {
        @extend %cardShadow;
        @include cardArrow(33px);
        border-radius: $--products-default-border-radius;
        // border: 1px solid $--gray-medium;
        padding: 36px;

        &.col-1 {
            grid-column: span 3;
        }
        &.col-2 {
            grid-column: span 6;
        }
        &.row-2 {
            grid-row: span 2;
        }
        
        &[data-idx="6"] {
            order: 10;
        }
        &--front {
            &__title {
                margin-bottom: 12px;
            }
        }

        @media screen and (max-width: $--screen-lg-min) {
            padding: 20px;   

            &::after {
                bottom: 20px;
                right: 20px;
            }
            &--front {
                .subtitle {
                    font-weight: 500;
                }
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            &.row-2 {
                grid-row: span 1;
            }
        }
        @media screen and (max-width: $--screen-xs-min) {
            &[data-idx="2"] {
                order: 9;
                grid-column: span 3;
            }
            &[data-idx="5"] {
                order: 8;
            }
            &[data-idx="4"] {
                order: 7;
                grid-column: span 6;
            }
        }
        @media screen and (max-width: 330px) {
            padding: 10px;

            &::after {
                bottom: 10px;
                right: 10px;
            }

            &--front {
                .subtitle {
                    font-size: 18px;
                }
            }
        }
    }

    .tab-picture--horizontal {
        margin-bottom: 32px;
        @media screen and (max-width: $--screen-sm-min) {
            margin-bottom: 24px;
            // height: 170px;
            height: 45vw;
        }
    }

    .tabs-swiper__navigation {
        width: auto;
        @media screen and (min-width: 1024px) {
            z-index: 3;
            position: absolute;
            margin-top: 10px;
            right: 40px;
            bottom: 40px;
        }
    }

    .tab-picture {
        picture, img {
            @extend %objectFitCover;
        }
    }
    .size-reverse-vertical {
        align-items: center;
        .tab-picture {
            &--vertical {
                flex: 1 0 31.25%;
                height: 560px;
            }
        }
    }
    .tab-content--vertical {
        @media screen and (max-width: $--screen-lg-min) {
            gap: 20px;
            .tabs-swiper {
                &__slide {
                    &--vertical {
                        gap: 20px;
                    }
                }
            }
            
        }
        @media screen and (max-width: $--screen-md-min) {
            flex-direction: row;
            .tab-picture {
                &--vertical {
                    height: 392px;
                }
            }
        }
        @media screen and (min-width: calc($--screen-sm-min + 1px)) and (max-width: $--screen-md-min) {
            .tabs-swiper {
                &__slide {
                    &--vertical {
                        flex-direction: column;
                    }
                    &--block {
                        flex: 1 1 100%;
                    }
                }
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            flex-direction: column;
            &, &:not(.size-reverse-vertical) {
                gap: 20px;
            }
            .tab-picture {
                &--vertical {
                    flex: 1 1 auto;
                    width: 100%;
                    height: 45vw;
                }
            }
            .tabs-swiper {
                &__slide {
                    &--vertical {
                        gap: 36px;
                    }
                }
            }


            &.size-reverse-vertical {
                .tab-picture {
                    &--vertical {
                        height: auto;
                    }
                }
            }
        }
        @media screen and (max-width: $--screen-xs-min) {
            .tab-picture {
                &--vertical {
                    height: auto;
                }
            }
        }
    }
}

</style>