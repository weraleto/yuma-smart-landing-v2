<template>
  <nav class="navigation bar">
    <div class="container navigation-container grid-layout">
        <YumaLogo />
        <div class="navigation-inner">
            <NuxtLink to="/" class="navigation-link__item text5"><span>Главная</span></NuxtLink>
            <NuxtLink to="/produkty" class="navigation-link__item text5"><span>Наши продукты</span></NuxtLink>
            <div class="navigation-link__dropdown js-dropdown text5">
                <div class="dropdown__header">
                    <span class="dropdown__selected-title">Санкт-Петербург</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6667 0.5L5.66666 5.5L0.666656 0.5" stroke="#2A2A2A"/>
                    </svg>                        
                </div>
                <div class="dropdown__items js-city-dropdown-items">
                    <div class="dropdown__item js-city-dropdown-el active" data-city-phone="+7 (812) 309 50 32">Санкт-Петербург</div>
                    <div class="dropdown__item js-city-dropdown-el" data-city-phone="+7 (495) 999 99 99">Москва</div>
                </div>
            </div>
            <a href="tel:+7 (812) 309 50 32" class="js-city-tel text5 text-bold">+7 (812) 309 50 32</a>
            <a href="#" class="btn medium outlined">связаться с нами</a>
        </div>
    </div>
</nav>
</template>

<script>
import YumaLogo from '@/components/logo'
export default {
    components: {YumaLogo}

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
        min-width: 220px;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
    }
}

</style>