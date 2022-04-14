<template>
    <div>
        <nav class="navigation bar" :class="{'opened': mobileMenuOpened || dropdownOpened}">
            <div class="container navigation-container grid-layout">
                <YumaLogo />
                <div class="navigation-inner" :class="{'opened': mobileMenuOpened}">
                    <div class="navigation-part left">
                        <NuxtLink @click.native="mobileMenuOpened=false" to="/" class="navigation-link__item text5"><span>Главная</span></NuxtLink>
                        <NuxtLink @click.native="mobileMenuOpened=false" to="/produkty" class="navigation-link__item text5"><span>Наши продукты</span></NuxtLink>
                    </div>
                    <div class="navigation-part right">

                        <div class="navigation-link__dropdown text5" :class="{'opened': dropdownOpened}">
                            <div class="dropdown__header navigation-link__item" @click="dropdownOpened=!dropdownOpened">
                                <span class="dropdown__selected-title">{{citySelected.name}}

                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6667 0.5L5.66666 5.5L0.666656 0.5" stroke="#2A2A2A" />
                                    </svg>
                                </span>
                                
                            </div>
                            <div class="dropdown__items">
                                <a href="" v-for="city in cities" :key="city.name" class="dropdown__item"
                                    :class="{'active': citySelected.name == city.name}"
                                    @click.prevent="citySelected=city; dropdownOpened=mobileMenuOpened=false">{{city.name}}</a>
                            </div>
                        </div>
                        <a :href="`tel:${citySelected.phone}`"
                            class="text5 text-bold navigation-link__tel navigation-link__item">
                            <span>{{citySelected.phone}}</span></a>
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
        <div class="body-overlay" v-if="dropdownOpened || mobileMenuOpened" @click="dropdownOpened=mobileMenuOpened=false"></div>
    </div>
</template>

<script>
import YumaLogo from '@/components/logo'
export default {
    components: {YumaLogo},
    data: () => {
        return {
            cities: [
                {name: 'Санкт-Петербург', phone: '+7 (812) 309 50 32'},
                {name: 'Москва', phone: '+7 (495) 108 11 78'},
            ],
            dropdownOpened: false,
            mobileMenuOpened: false,
            citySelected: {name: 'Санкт-Петербург', phone: '+7 (812) 309 50 32'}
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
        align-items: center;
        justify-content: space-between;
        &.left {
            width: 25%;
            @media screen and (max-width: $--screen-lg-min) {
                width: 30%;
            }
        }
        &.right {
            width: 50%;

            @media screen and (max-width: $--screen-lg-min) {
                width: 70%;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            &.left, &.right {
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
            }
            &.right {
                flex-grow: 1;
            }
        }
    }

    &-inner {
        grid-column: 3/11;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: $--screen-md-min) {
            position: absolute;
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
        @media screen and (max-width: $--screen-sm-min) {
            min-width: unset;
            // width: 59.2%;
            max-width: 222px;
            right: 30px;
        }
        @media screen and (max-width: $--screen-xxs-min) {
            min-height: 45vh;
            transform: translate(100%, 0);
            right: 0;
            border-bottom-right-radius: 0;
        }
    }

    &-link__item {
        position: relative;
        // display: inline-block;
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
        @media screen and (max-width: $--screen-xxs-min) {
            margin-bottom: 20px;
        }
    }

    &-link__dropdown {
        cursor: pointer;
        position: relative;
        // min-width: 220px;
        min-width: 180px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        // @media screen and (max-width: $--screen-lg-min) {
        //     min-width: 205px;
        // }
        @media screen and (max-width: $--screen-md-min) {
            min-width: 100%;
            flex-direction: column;
        }
    }

    &-link__tel {
        min-width: 138px;
        margin-left: 2.08vw;
        margin-right: 2.5vw;
        @media screen and (max-width: $--screen-md-min) {
            margin: 0 0 20px;
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

            .btn {
                max-height: 48px;
            }
        }
    }
}

.dropdown__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 10000;
    min-height: 68px;
    background-color: white;
    width: 100%;

    @media screen and (max-width: $--screen-md-min) {
        padding: 0;
        min-height: unset;
        justify-content: flex-start;
    }
}
.dropdown__selected-title {
    display: flex;
    align-items: center;
    svg {
        margin-left: 8px;
    }
}

.dropdown__items {
    position: absolute;
    top: calc(100% - 1px);
    right: -30px;
    background-color: $--main-white;
    border-radius: 0 0 20px 20px;
    padding: 8px 30px 25px;
    min-width: 217px;
    z-index: -1;
    visibility: hidden;
    transform: translate(0, -100px);
    transition: all .3s ease;

    @media screen and (max-width: $--screen-md-min) {
        display: flex;
        flex-direction: column;
        position: static;
        max-height: 0;
        overflow: hidden;
        transform: none;
        padding: 0;
        border: 2px solid;
        border-radius: 10px;
        min-width: 100%;
        margin-bottom: 0;
    }
}

.navigation-link__dropdown.opened {
    .dropdown__header {
        color: $--main-gray;
    }

    .dropdown__items {
        z-index: 9999;
        visibility: visible;
        // transform: none;
        transform: translate(0, 0px);

        @media screen and (max-width: $--screen-md-min) {
            max-height: 500px;
            padding: 15px;
            margin-bottom: 20px;
        }
    }
}

.dropdown__item {
    position: relative;
    display: inline-block;

    &:not(:last-child) {
        margin-bottom: 18px;
    }

    &::after {
        content: '';
        display: block;
        height: 3px;
        left: 0;
        right: 0;
        background-color: $--yellow-primary;
        bottom: 0;
        transform: translate(0, 8px);
        opacity: 0;
        transition: opacity .3s ease;
    }

    &.active, &:hover {
        &::after {
            opacity: 1;
        }
    }
}

</style>