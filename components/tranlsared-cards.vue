<template>
    <swiper ref="cardsSwiper" class="translated-cards swiper" :options="swiperOptions">
        <swiper-slide v-for="(i, idx) in data" :key="idx" 
            class="card translated-card__item swiper-slide" 
            :class="{
                'active': activeCard == idx, 
                'hovered': hoveredCard == idx, 
                'inactive': ![activeCard, hoveredCard].includes(idx)
            }"
        >
            <div style="height: 100%" @mouseenter="debounce(idx)" @mouseleave="cardLeave(idx)"
                itemscope itemtype="http://schema.org/Product"
                :class="{'sale-active': i.is_sale}"
            >
                <div v-show="i.is_sale" class="translated-card__item--sale btn">Спецпредложение</div>
                <div class="translated-card__item--front">
                    <h5 class="subtitle">{{i.title}}</h5>
                    <div class="translated-card__item--icon">
                        <img itemprop="image" :src="require('../assets/img/'+i.img+'.svg')" :alt="i.title">
                    </div>
                    <div class="translated-card__item--bottom">
                        <small>Вам подойдет</small>
                        <p class="subtitle">
                            <span itemprop="name">{{i.name}}</span>
                        <br>
                            <span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                            <meta itemprop="price" :content="i.price">
                            <meta itemprop="priceCurrency" content="RUB">
                            {{i.price}}
                            </span>
                        </p>

                        <small>{{i.subtext}}</small>
                    </div>
                </div>
                <div class="translated-card__item--overlay">
                    <div class="translated-card__item--description"  itemprop="description">
                        <div v-for="d in i.description" :key="d.title" class="translated-card__item--description-group">
                            <h4 class="subtitle" v-html="d.title">
                            </h4>
                            <p v-html="d.text"></p>
                        </div>
                    </div>
                    <ApplicationFormTrigger />
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>

import ApplicationFormTrigger from '@/components/call-to-action-btn'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    components: {
        ApplicationFormTrigger,
         Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    props: {
        data: {
            default: Array,
            default: () => []
        }
    },
    data() {
        return {
            activeCard: null,
            hoveredCard: 0,
            activeCardDefault: 0,
            timer: null,
            swiper: null,
            spaceBetween: 0,
            swiperOptions: {
                breakpoints: {
                    0: {
                        spaceBetween: 16,
                        slidesPerView: 1.1,  
                        slideToClickedSlide: true,
                        centeredSlides: true
                    },
                    480: {
                        spaceBetween: 16,
                        slidesPerView: 1.3,  
                        slideToClickedSlide: true,
                        centeredSlides: false
                    },
                    600: {
                        spaceBetween: 16,
                        slidesPerView: 2,
                        slideToClickedSlide: true
                    },
                    768: {
                        slidesPerView: 3,
                        enabled: false,
                        allowTouchMove: false,
                        allowSlideChange: false
                    },
                    1024: {
                        slidesPerView: 3,
                        allowTouchMove: false,
                        allowSlideChange: false
                    }
                }
            }
        }
    },
    methods: {
        debounce(idx){
            if(this.timer){
                clearInterval(this.timer)
            }
            this.timer = setTimeout(() => {
                this.activeCard = idx;
                this.hoveredCard = null
            }, 100)
        },
        cardLeave(idx) {
            this.activeCard = null;
            this.hoveredCard = idx;
        },
    }
}
</script>

<style lang="scss">

@import '@/assets/scss/_variables.scss';

.translated-cards {
    grid-column: 1/11;
    min-height: 40vh;
    overflow: visible !important;
    width: 100%;

    .swiper-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: $--screen-lg-min) {
        min-height: 40.42vw;
    }
    @media screen and (max-width: $--screen-sm-min) {
        margin: 0;
        grid-column: 1/6;
        min-height: 460px;
    }
    @media screen and (max-width: 320px) {
        min-height: 500px;
    }
}

.translated-card__item {
    min-height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all .25s ease .2s;
    position: relative;
    padding: 50px 31px 40px;
    border-radius: calc($--border-radius-default) * 2;
    overflow: hidden;

    &.active,
    &.hovered {
        flex-grow: 1;
        max-width: calc(40% - 56px);
        min-width: calc(40% - 56px);
        border-color: $--main-black;
        min-height: 114%;
        align-items: center;
    }

    &.active {
        .translated-card__item--front {
            opacity: 0;
        }
    }

    &.hovered {
        .translated-card__item--overlay {
            opacity: 0;
        }
    }

    &.inactive {
        max-width: 30%;
        min-width: 30%;
    }

    @media screen and (max-width: $--screen-lg-min) {
        padding: 30px 22px;
    }

    @media screen and (min-width: $--screen-sm-min) and (max-width: $--screen-md-min) {

        &.active,
        &.hovered {
            max-width: calc(40% - 40px);
            min-width: calc(40% - 40px);
        }

        .subtitle {
            font-size: 16px;
        }
    }
    @media screen and (max-width: $--screen-sm-min) {

        &.active,
        &.hovered {
            min-height: 100%;
        }

        &.active,
        &.hovered,
        &.inactive {
            flex-shrink: 0;
            min-width: unset;
            max-width: unset;
        }
        .subtitle {
            font-size: 18px;
        }
    }
}

.sale-active {
    margin-top: 40px;
    border-radius: calc($--border-radius-default) * 2 calc($--border-radius-default) * 2 0 0;
}

.translated-card__item--front {
    max-width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
}
.translated-card__item--sale {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: $--yellow-primary;
    padding: 10px;
    min-height: 60px;
    justify-content: center;
    z-index: 3;
}

.translated-card__item--icon {
    width: 78%;
    margin: 50px auto 45px;

    @media screen and (max-width: $--screen-md-min) {
        margin: 20px auto;
    }
    @media screen and (max-width: $--screen-sm-min) {
        width: 100%;
    }
}

.translated-card__item--bottom { 
    .subtitle {
        margin: 10px 0;
    }
}

.translated-card__item--overlay {

    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $--main-white;
    border-radius: calc($--border-radius-default) * 2;
    text-align: left;
    padding: 60px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .subtitle {
        margin-bottom: 10px;
    }

    @media screen and (max-width: $--screen-lg-min) {
        padding: 30px 25px;
    }
    @media screen and (min-width: $--screen-sm-min) and (max-width: $--screen-md-min) {
        .subtitle {
            margin-bottom: 0;
        }
    }
    @media screen and (max-width: $--screen-md-min) {
        padding: 17px;
    }
    @media screen and (max-width: $--screen-sm-min) {
        padding: 20px;
    }
}

.translated-card__item--description {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;

    &-group {
        width: 100%;
        max-width: 380px;
        flex: 0.2 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: $--screen-lg-min) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: $--screen-sm-min) and (max-width: $--screen-md-min) {
        margin-bottom: 10px;
        p {
            font-size: 12px;
            margin-top: 5px;
        }
    }
    @media screen and (max-width: $--screen-sm-min) {
        p {
            font-size: 14px;
        }
    }
}


.translated-card__item.active {
    .translated-card__item--overlay {
        animation: fadein ease-in .4s forwards .4s;
        z-index: 2;
    }

    .translated-card__item--front {
        animation: fadeout ease-out .35s forwards;
    }
}

.translated-card__item.hovered {
    .translated-card__item--overlay {
        animation: fadeout ease-out .35s forwards;
    }

    .translated-card__item--front {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        animation: fadein ease-in .4s forwards;
    }
}
</style>