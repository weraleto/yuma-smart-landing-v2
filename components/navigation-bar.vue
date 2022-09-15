<template>
    <div>
        <nav class="navigation bar" :class="{'opened': mobileMenuOpened}">
            <div class="container navigation-container grid-layout">
                <YumaLogo />
                <div class="navigation-inner" :class="{'opened': mobileMenuOpened}">
                    <div class="navigation-part left">
                        <NuxtLink @click.native="mobileMenuOpened=false" to="/" class="navigation-link__item text5"><span>Главная</span></NuxtLink>
                        <NuxtLink @click.native="mobileMenuOpened=false" to="/products" class="navigation-link__item text5"><span>Наши продукты</span></NuxtLink>
                    </div>
                    <div class="navigation-part right">
                        <!-- <div class="navigation-tel__item text5" v-for="p in cities" :key="p.name">
                            <span class="only-desktop">{{p.name}}</span>
                            <div class="hidden-desktop">{{p.nameFull}}</div>
                            <a class="navigation-tel__link text-bold" :href="`tel:${p.phone}`">{{p.phone}}</a>
                        </div> -->
                        <div class="navigation-tel__item text5">
                            <a class="navigation-tel__link text-bold" href="tel:+78126059808">+7 (812) 605 98 08</a>
                        </div>


                        <div class="navigation-btn">
                            <a href="#" 
                                @click.prevent="mobileMenuOpened=false; $store.commit('setShowModal', {key: 'showContactForm', val: true})"
                            class="btn medium outlined">связаться с нами</a>
                        </div>
                    </div>

                </div>
                <div class="navigation-burger hidden-desktop" @click="mobileMenuOpened=!mobileMenuOpened">
                    <img v-if="mobileMenuOpened" src="../assets/img/cross.svg" alt="Закрыть меню">
                    <img v-else src="../assets/img/menu.svg" alt="Открыть меню">
                </div>
            </div>
        </nav>
        <div class="body-overlay" v-if="mobileMenuOpened" @click="mobileMenuOpened=false"></div>
    </div>
</template>

<script>
import YumaLogo from '@/components/logo'
export default {
    components: {YumaLogo},
    data: () => {
        return {
            cities: [
                {name: 'Спб', nameFull: 'Санкт-Петербург', phone: '+7 (812) 309 50 32'},
                {name: 'Мск', nameFull: 'Москва', phone: '+7 (495) 108 11 78'},
            ],
            mobileMenuOpened: false
        }
    }

}
</script>

<style lang="scss">

@import '@/assets/scss/_variables.scss';

.navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-bottom: 2px solid $--main-gray;
    z-index: 10000;

    &.opened {
        border-color: transparent;
    }

    &-container {
        align-items: center;

        @media screen and (max-width: $--screen-md-min) {
            &.grid-layout {
                display: flex;
                justify-content: space-between;
            }
        }
    }

    &-part {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        
        &.left {
            grid-column: 1/3;
        }
        &.right {
            grid-column: 4/9;
            padding-left: 2.84vw;
            gap: 2.84vw;
            justify-content: flex-end;

            @media screen and (min-width: 1025px) and (max-width: 1180px) {
                grid-column: 3/9;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;

            &.right {
                padding-left: 0;
                margin-top: 10px;
            }
        }
    }

    &-inner {
        grid-column: 3/11;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: center;

        @media screen and (max-width: $--screen-md-min) {
            position: absolute;
            display: flex;
            flex-wrap: wrap;
            
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: #fff;
            border-radius: 0 0 20px 20px;
            right: 50px;
            top: calc(100% - 1px);
            min-width: 222px;
            padding: 20px;

            z-index: -1;
            visibility: hidden;
            transform: translate(0, -150%);
            transition: all .3s ease;

            &.opened {
                z-index: 9999;
                visibility: visible;
                transform: none;
            }
        }
        @media screen and (min-width: 1025px) and (max-width: 1280px) {
            .text5 {
                font-size: 14px;
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            right: 30px;
        }
        @media screen and (max-width: $--screen-xxs-min) {
            transform: translate(100%, 0);
            right: 0;
            border-bottom-right-radius: 0;
        }
    }

    &-link__item {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 70px;

        span {
            position: relative;
            // display: inline-block;

            &::after {
                content: '';
                position: absolute;
                display: block;
                height: 3px;
                background-color: $--yellow-primary;
                bottom: 0;
                left: 0;
                right: 0;
                transform: translate(0, 8px);
                opacity: 0;
                transition: opacity .3s ease;
            }
        }

        &:hover, &.nuxt-link-exact-active {
            span::after {
                opacity: 1;
            }
        }
        &:active, &.nuxt-link-exact-active {
            span::after {
                background-color: $--main-black;
            }
        }        

        @media screen and (max-width: $--screen-md-min) {
            min-height: unset;
            margin-bottom: 20px;
        }
    }

    &-burger {
        width: 24px;
        height: 24px;
        grid-column: 10/11;
        margin-right: 16px;

        @media screen and (max-width: $--screen-xxs-min) {
            margin-right: 0;
        }
    }

    &-btn {
        width: 100%;
        @media screen and (min-width: $--screen-md-min) {
            max-width: 180px;
        }
        @media screen and (max-width: $--screen-md-min) {
            flex-grow: 1;
            display: flex;
            align-items: flex-end;
            // margin-top: 37px;

            .btn {
                max-height: 48px;
            }
        }
    }

    &-tel {
        &__link {
            display: inline-block;
            margin-left: 15px;
            transition: color .3s ease;
            &:hover {
                color: $--yellow-hover;
            }

            @media screen and (min-width: 1025px) and (max-width: 1280px) {
                margin-left: 8px;
            }
            @media screen and (max-width: $--screen-md-min) {
                margin-left: 0;
                margin-top: 5px;
            }
        }
        // &__item {
        //     @media screen and (max-width: $--screen-md-min) {
        //         &:first-child {
        //             margin-bottom: 20px;
        //         }
        //     }
        // }
    }
}


</style>