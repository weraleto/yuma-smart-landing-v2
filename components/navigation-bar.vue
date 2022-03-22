<template>
    <div>
        <nav class="navigation bar">
            <div class="container navigation-container grid-layout">
                <YumaLogo />
                <div class="navigation-inner">
                    <NuxtLink to="/" class="navigation-link__item text5"><span>Главная</span></NuxtLink>
                    <NuxtLink to="/produkty" class="navigation-link__item text5"><span>Наши продукты</span></NuxtLink>

                    <div class="navigation-link__dropdown text5" :class="{'opened': dropdownOpened}">
                        <div class="dropdown__header" @click="dropdownOpened=!dropdownOpened">
                            <span class="dropdown__selected-title">{{citySelected.name}}</span>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 0.5L5.66666 5.5L0.666656 0.5" stroke="#2A2A2A" />
                            </svg>
                        </div>
                        <div class="dropdown__items">
                            <a href="" v-for="city in cities" :key="city.name" class="dropdown__item"
                                :class="{'active': citySelected.name == city.name}"
                                @click.prevent="citySelected=city; dropdownOpened=false">{{city.name}}</a>
                        </div>
                    </div>
                    <a :href="`tel:${citySelected.phone}`"
                        class="text5 text-bold navigation-link__tel">{{citySelected.phone}}</a>
                    <a href="#" class="btn medium outlined">связаться с нами</a>
                </div>
            </div>
        </nav>
        <div class="body-overlay" v-if="dropdownOpened" @click="dropdownOpened=false"></div>
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
                {name: 'Москва', phone: '+7 495 108 11 78'},
            ],
            dropdownOpened: false,
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

    &-container {
        align-items: center;
    }

    &-inner {
        grid-column: 4/11;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-link__item {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 70px;

        span {
            position: relative;
            display: inline-block;

            &::after {
                content: '';
                position: absolute;
                display: block;
                height: 3px;
                background-color: $--main-black;
                bottom: 0;
                left: 0;
                right: 0;
                transform: translate(0, 8px);
                opacity: 0;
                transition: opacity .3s ease;
            }
        }

        &:hover, &.active {
            span::after {
                opacity: 1;
            }
        }
    }

    &-link__dropdown {
        cursor: pointer;
        position: relative;
        min-width: 225px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
    }

    &-link__tel {
        min-width: 140px;
    }
}

.dropdown__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10000;
    padding: 0 35px;
    min-height: 68px;
    background-color: white;
    width: 100%;
}
.dropdown__selected-title {
    display: inline-block;
    margin-right: 8px;
}

.dropdown__items {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: $--main-white;
    border-radius: 0 0 20px 20px;
    padding: 8px 35px 25px;
    min-width: 180px;
    z-index: -1;
    visibility: hidden;
    transform: translate(0, -100px);
    transition: all .3s ease;
}

.navigation-link__dropdown.opened {
    .dropdown__header {
        color: $--main-gray;
    }

    .dropdown__items {
        z-index: 9999;
        visibility: visible;
        transform: none;
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