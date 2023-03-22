<template>
  <footer class="footer">
    <div class="footer-top">
        <div class="container grid-layout footer-top-container">
            <div class="footer-col-0">
                <YumaLogo theme="dark" />
                <p class="hidden-desktop subtitle" style="margin-top: 24px">Мы работаем по всей России</p>
            </div>
            <div class="footer-col-0 emails hidden-desktop">
                <a href="mailto:pr@yuma.biz" class="footer-top__link text6">pr@yuma.biz</a>
                <a href="mailto:sales@yuma.biz" class="footer-top__link text6">sales@yuma.biz</a>
            </div>
            <div class="footer-col-1 subtitle only-desktop">
                <p style="margin-bottom: 32px">Мы работаем по всей России</p>

                <a href="mailto:pr@yuma.biz" class="footer-top__link text6">pr@yuma.biz</a>
                <a href="mailto:sales@yuma.biz" class="footer-top__link text6">sales@yuma.biz</a>

            </div>
            <div class="footer-col-1 links">
                <NuxtLink target="_blank" to="/public-offer" class="footer-top__link text6">Публичная оферта</NuxtLink>
                <NuxtLink target="_blank" to="/terms" class="footer-top__link text6">Пользовательское соглашение</NuxtLink>
                <NuxtLink target="_blank" to="/policy" class="footer-top__link text6">Политика конфиденциальности</NuxtLink>
            </div>
            <div class="footer-col-2">
                <p class="text4" style="margin-bottom: 8px">YUMA-POS в Санкт-Петербурге</p>
                <p class="text6 footer-top__contact-description text6">Наб. реки Смоленки, 5-7, Технопарк, офис 337, ст.м. Василеостровская</p>
                <a class="footer-top__link footer-top__link--phone title3" href="tel:+7 (812) 309 50 32">+7 (812) 309 50 32</a>
            </div>
            <div class="footer-col-2 smart">
                <p class="text4" style="margin-bottom: 8px">YUMA-SMART</p>
                <p class="text6 footer-top__contact-description text6"></p>
                <a class="footer-top__link footer-top__link--phone title3" href="tel:+7 (812) 605 98 08">+7 (812) 605 98 08</a>
            </div>
            <div class="footer-col-3">
                <p class="text4" style="margin-bottom: 8px">YUMA-POS в Москве</p>
                <p class="text6 footer-top__contact-description text6">Нововладыкинский проезд, 2 стр. 2, ст.м. Владыкино</p>
                <a class="footer-top__link footer-top__link--phone title3" href="tel:+7 (495) 108 11 78">+7 (495) 108 11 78</a>
            </div>
        </div>
    </div>
    <div class="footer-bottom bar">
        <div class="container footer-bottom-layout grid-layout">

            <p class="footer-disclaimer text6">
                <span>Сайт носит исключительно ознакомительный характер и не является публичной офертой.</span>
            </p>

            <!-- <div class="footer-socials mobile">
                <a class="social-icon-link" href="#">
                    <WhLogo />
                </a>
                <a class="social-icon-link" href="#">
                    <TGLogo />
                </a>
            </div> -->
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
        padding: 151px 0;

        &-container {
            grid-auto-flow: column;
            grid-row-gap: 10px;
            grid-column-gap: 40px;
        }

        &__contact-description {
            max-width: 290px;
            color: $--gray-medium-dark;
            font-size: 14px;
            margin: 8px 0;
        }
        &__link {
            display: block;

            transition: color .3s ease;
            &:hover {
                color: $--yellow-primary;
            }
            &:active {
                color: $--yellow-pressed;
            }
            &:not(:last-child) {
                margin-bottom: 16px;
            }

        }

        @media screen and (min-width: calc($--screen-sm-min + 1px)) and (max-width: $--screen-md-min) {
            text-align: center;
            &__contact-description, .logo {
                margin-left: auto;
                margin-right: auto;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            padding: 80px 0;
            &-container {
                grid-row-gap: 52px;
            }            
        }
        @media screen and (max-width: $--screen-sm-min) {
            padding: 50px 0 40px;
            
            &__link {
                margin-bottom: 10px;
                // &--phone {
                //     display: block;
                //     max-width: 218px;
                //     margin-left: auto;
                //     margin-right: auto;
                // }
            }
        }
    }
    &-col {

        &-0 {
            grid-column: 1/3;
        }

        &-1 {
            grid-column: 3/7;
        }

        &-2 {
            grid-column: 7/10;
        }

        &-3 {
            grid-column: 10/13;
        }

        &-2, &-3 {
            &:not(:last-child) {
                margin-bottom: 34px;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            &-0, &-1, &-2, &-3 {
                grid-column: 1/13;
            } 

            &-2.smart {
                grid-row: 4/5;
            }

            &-0.emails {
                grid-row: 5/6;
                
            }
            &-1.links {
                grid-row: 6/7;
            }
            

            &-2, &-3 {
                &:not(:last-child) {
                    margin-bottom: 0;
                }
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            &-0, &-1, &-2, &-3 {
                grid-column: 1/6;
            } 
        }
    }
    &-bottom {
        border-top: 2px solid $--main-gray-light;

        &-layout {
            grid-template-columns: auto;
            align-items: center;
            padding-top: 23px;
            padding-bottom: 23px;
        }
        @media screen and (max-width: $--screen-md-min) {
            &-layout {
                grid-template-columns: auto;
            }
        }
    }
    &-disclaimer {
        color: $--gray-medium-dark;
        font-size: 12px;

        @media screen and (max-width: $--screen-md-min) {
            grid-column: 1/2;
        }
        @media screen and (max-width: $--screen-sm-min) {
            grid-column: 1/4;
            grid-row: 2/3;
        }
    }
    &-socials {
        display: flex;
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