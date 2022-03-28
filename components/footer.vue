<template>
  <footer class="footer">
    <div class="footer-top">
        <div class="container grid-layout footer-top-container">
            <div class="footer-col-1">
                <a class="subtitle footer-top__link" href="tel:+7 (812) 309 50 32">+7 (812) 309 50 32</a>
                <p class="text6 footer-top__contact-description">Санкт-Петербург, наб. реки Смоленки, 5-7, Технопарк, офис 337, метро Василеостровская</p>
            </div>
            <div class="footer-col-1">
                <a class="subtitle footer-top__link" href="tel:+7 (495) 108 11 78">+7 (495) 108 11 78</a>
                <p class="text6 footer-top__contact-description">Москва, Нововладыкинский проезд, 2с1, метро Владыкино</p>
            </div>
            <div class="footer-col-2">
                <NuxtLink to="/produkty" class="footer-top__link text6">Наши продукты</NuxtLink>
                <a href="#" class="footer-top__link text6">Как заказать</a>
            </div>
            <div class="footer-col-2">
                <a href="#" class="footer-top__link text6">Стать партнером</a>
                <a href="#" class="footer-top__link text6">О корпорации YUMA</a>
            </div>
            <div class="footer-col-3">
                <a href="mailto:pr@yuma.biz" class="footer-top__link text6">pr@yuma.biz</a>
                <a href="mailto:sales@yuma.biz" class="footer-top__link text6">sales@yuma.biz</a>
            </div>
            <div class="footer-col-3">
                <NuxtLink to="/polzovatelskoe-soglashenie" class="footer-top__link text6">Пользовательское соглашение</NuxtLink>
                <NuxtLink to="/politika" class="footer-top__link text6">Политика конфиденциальности</NuxtLink>
            </div>
        </div>
    </div>
    <div class="footer-bottom bar">
        <div class="container footer-bottom-layout grid-layout">
            <YumaLogo theme="dark" />

            <p class="footer-disclaimer text6">
                <span>Сайт носит исключительно ознакомительный характер и не является публичной офертой.</span>
            </p>

            <div class="footer-socials">
                <a class="social-icon-link" href="#">
                    <YoutubeLogo />
                </a>
                <a class="social-icon-link" href="#">
                    <InstaLogo />
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
import InstaLogo from '@/components/svg/instagram'
import YoutubeLogo from '@/components/svg/youtube'
import TGLogo from '@/components/svg/tg'

export default {
    components: {
        YumaLogo, 
        InstaLogo, 
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
            grid-row-gap: 35px;
        }

        &__contact-description {
            max-width: 250px;
        }
        &__link {
            margin-bottom: 10px;
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
        }

        @media screen and (max-width: $--screen-md-min) {
            padding: 80px 0;
        }
        @media screen and (max-width: $--screen-sm-min) {
            padding: 40px 0;
            &-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                text-align: center;
                grid-row-gap: 20px;
            }
            &__contact-description {
                margin: auto;
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
        @media screen and (max-width: $--screen-md-min) {
            &-1 {
                grid-column: 2/5;
            }
            &-3 {
                grid-column: 8/11;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            &-1, &-2, &-3 {
                width: 100%;
            }
            &-1 {
                order: 5;
                &:first-of-type {
                    margin-top: 10px;
                }
            }
        }
    }
    &-bottom {
        border-top: 2px solid $--main-gray-light;

        &-layout {
            align-items: center;
        }
        @media screen and (max-width: $--screen-md-min) {
            &-layout {
                grid-column-gap: 30px;
                grid-template-columns: 100px auto 134px;
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            padding-top: 20px;
            padding-bottom: 30px;
            &-layout {
                grid-row-gap: 20px;
                grid-column-gap: 0px;
            }
        }
    }
    &-disclaimer {
        grid-column: 3/9;

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
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: $--screen-md-min) {
            grid-column: 3/4;
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