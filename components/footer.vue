<template>
  <footer class="footer">
    <div class="footer-top">
        <div class="container grid-layout footer-top-container">
            <div class="footer-col-1">
                <a class="footer-top__link footer-top__link--phone" href="tel:+7 (812) 309 50 32">+7 (812) 309 50 32</a>
                <p class="text6 footer-top__contact-description">Санкт-Петербург, наб. реки Смоленки, 5-7, Технопарк, офис 337, метро Василеостровская</p>
            </div>
            <div class="footer-col-1">
                <a class="footer-top__link footer-top__link--phone" href="tel:+7 (495) 108 11 78">+7 (495) 108 11 78</a>
                <p class="text6 footer-top__contact-description">Москва, Нововладыкинский проезд, 2с1, метро Владыкино</p>
            </div>
            <div class="footer-col-2">
                <NuxtLink to="/" class="footer-top__link text6">Главная</NuxtLink>
                <NuxtLink to="/produkty" class="footer-top__link text6">Наши продукты</NuxtLink>
                <NuxtLink to="/produkty#order_process" class="footer-top__link text6">Как заказать</NuxtLink>
            </div>
            <div class="footer-col-2">
                <NuxtLink target="_blank" to="/polzovatelskoe-soglashenie" class="footer-top__link text6">Пользовательское соглашение</NuxtLink>
                <NuxtLink target="_blank" to="/politika" class="footer-top__link text6">Политика конфиденциальности</NuxtLink>
                <!-- <a href="#" class="footer-top__link text6">Стать партнером</a>
                <a href="#" class="footer-top__link text6">О корпорации YUMA</a> -->
            </div>
            <div class="footer-col-3 only-desktop">
                <div class="footer-socials">
                    <a class="social-icon-link" href="#">
                        <WhLogo />
                    </a>
                    <a class="social-icon-link" href="#">
                        <TGLogo />
                    </a>
                </div>
            </div>
            <div class="footer-col-3">
                <a href="mailto:pr@yuma.biz" class="footer-top__link text6">pr@yuma.biz</a>
                <a href="mailto:sales@yuma.biz" class="footer-top__link text6">sales@yuma.biz</a>
            </div>
        </div>
    </div>
    <div class="footer-bottom bar">
        <div class="container footer-bottom-layout grid-layout">

            <p class="footer-disclaimer text6">
                <span>Сайт носит исключительно ознакомительный характер и не является публичной офертой.</span>
            </p>
            <YumaLogo theme="dark" />

            <div class="footer-socials mobile">
                <a class="social-icon-link" href="#">
                    <WhLogo />
                </a>
                <a class="social-icon-link" href="#">
                    <TGLogo />
                </a>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import YumaLogo from '@/components/logo'
import WhLogo from '@/components/svg/wh'
import YoutubeLogo from '@/components/svg/youtube'
import TGLogo from '@/components/svg/tg'

export default {
    components: {
        YumaLogo, 
        WhLogo, 
        YoutubeLogo, 
        TGLogo
    },

}
</script>

<style lang="scss">

@import '@/assets/scss/_variables.scss';

.footer {
    background-color: $--main-black;
    color: white;
    flex: 0 0 auto;

    &-top {
        padding: 110px 0;

        &-container {
            grid-auto-flow: column;
            grid-row-gap: 50px;
        }

        &__contact-description {
            max-width: 218px;
        }
        &__link {
            margin-bottom: 12px;
            display: block;

            transition: color .3s ease;
            &:hover {
                color: $--yellow-primary;
            }
            &:active {
                color: $--yellow-pressed;
            }
            &:disabled {
                color: $--main-gray;
            }

            &--phone {
                font-size: 20px;
                font-variation-settings: 'wght' 700;
            }
        }

        @media screen and (max-width: $--screen-md-min) {
            padding: 80px 0;
        }
        @media screen and (max-width: $--screen-sm-min) {
            padding: 50px 0 40px;
            &-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                text-align: center;
                grid-row-gap: 40px;
            }
            &__contact-description {
                margin: auto;
            }
            &__link {
                margin-bottom: 10px;
                &--phone {
                    display: block;
                    max-width: 218px;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        }
    }
    &-col {
        &-1 {
            grid-column: 3/5;
        }
        &-2 {
            grid-column: 6/8;
        }
        &-3 {
            grid-column: 8/10;
        }
        @media screen and (max-width: 1250px) {
            &-1 {
                grid-column: 2/5;
            }
            &-2 {
                grid-column: 5/8;
            }
            &-3 {
                grid-column: 8/11;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            &-1 {
                grid-column: 2/5;
            }
            &-2 {
                grid-column: 6/9;
            }
            &-3 {
                grid-column: 9/11;
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            &-1, &-2, &-3 {
                width: 100%;
                &:first-of-type {
                    margin-bottom: 10px;
                }
            }
            &-1 {
                text-align: left;
            }
        }
    }
    &-bottom {
        border-top: 2px solid $--main-gray-light;

        &-layout {
            grid-template-columns: auto 100px;
            align-items: center;
        }
        @media screen and (max-width: $--screen-md-min) {
            &-layout {
                grid-column-gap: 30px;
                grid-template-columns: 73px auto 100px;
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            padding-top: 20px;
            padding-bottom: 17px;
            &-layout {
                grid-row-gap: 15px;
                grid-column-gap: 0px;
            }
            .logo {
                grid-column: 3/4;
            }
        }
    }
    &-disclaimer {
        // grid-column: 3/9;

        @media screen and (max-width: $--screen-md-min) {
            grid-column: 2/3;
        }
        @media screen and (max-width: $--screen-sm-min) {
            grid-column: 1/4;
            grid-row: 2/3;
            text-align: center;
        }
    }
    &-socials {
        grid-column: 10/11;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        &.mobile {
            display: none;
        }
        @media screen and (max-width: $--screen-md-min) {
            grid-column: 1/2;
            grid-row: 1/2;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            &.desktop {
                display: none;
            }
            &.mobile {
                display: flex;
            }
        }
    }
}

.social-icon-link {
    position: relative;

    svg {
        position: relative;
        z-index: 2;
        height: 22px;
    }

    path {
        transition: fill .3s ease-out;
    }
    &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background-color: $--yellow-primary;
        top: 0;
        left: 0;
        width: 44px;
        height: 44px;
        transform: translate(-25%, -25%);
        opacity: 0;

        transition: all .3s ease-out;
    }

    &:hover {
        &::after {
            opacity: 1;
        }

        path {
            fill: $--main-black;
        }
    }
}


</style>