<template>
  <footer class="footer">
    <div class="footer-top">
        <div class="container grid-layout footer-top-container">
            <div class="footer-col-0">
                <YumaLogo theme="dark" />
                <div class="footer-description">
                    <div class="phone-hover">
                        <a href="tel:+7 (812) 605-98-08" class="subtitle">+7 (812) 605-98-08</a>
                    </div>
                    <p class="text4">Мы работаем по всей России</p>
                </div>
            </div>
            
            <div class="footer-col-1">
                <p class="text4" style="margin-bottom: 8px">YUMA-SMART в Санкт-Петербурге</p>
                <p class="text6 footer-top__contact-description text6">Выборгская набережная, д. 61, БЦ&nbsp;«АКВАТОРИЯ», 3 этаж, офис 303</p>
            </div>
            <div class="footer-col-1">
                <p class="text4" style="margin-bottom: 8px">YUMA-SMART в Москве</p>
                <p class="text6 footer-top__contact-description text6">Нововладыкинский проезд, 2 стр. 2, ст.&nbsp;м.&nbsp;Владыкино</p>
            </div>

            <div class="footer-col-2">
                <a href="mailto:pr@yumapos.ru" class="footer-top__link text6 external light">pr@yumapos.ru</a>
                <a href="mailto:sales@yumapos.ru" class="footer-top__link text6 external light">sales@yumapos.ru</a>
            </div>
            <div class="footer-col-2">
                <NuxtLink target="_blank" to="/public-offer" class="footer-top__link text6 external light">Публичная оферта</NuxtLink>
                <NuxtLink target="_blank" to="/terms" class="footer-top__link text6 external light">Пользовательское соглашение</NuxtLink>
                <NuxtLink target="_blank" to="/policy" class="footer-top__link text6 external light">Политика конфиденциальности</NuxtLink>
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
        padding: 151px 0;

        &-container {
            grid-auto-flow: column;
            grid-row-gap: 10px;
            grid-column-gap: 40px;
        }

        &__contact-description {
            max-width: 290px;
            color: $--gray-medium;
            font-size: 14px;
            margin: 8px 0;
        }
        &__link {
            display: inline-block;
            width: fit-content;

            &:not(:last-child) {
                margin-bottom: 16px;
            }

            &:not(.external) {
                transition: color .3s ease;
                &:hover {
                    color: $--yellow-primary;
                }
                &:active {
                    color: $--yellow-pressed;
                }
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
            }
        }
    }
    &-col {

        &-0 {
            grid-column: 1/6;
        }

        &-1 {
            grid-column: 6/10;
        }

        &-2 {
            grid-column: 10/13;
            display: flex;
            flex-direction: column;
        }

        &-2 {
            &:not(:last-child) {
                margin-bottom: 34px;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            &-0, &-1, &-2 {
                grid-column: 1/13;
                padding: 0 14px;
            }          

            &-2 {
                &:not(:last-child) {
                    margin-bottom: 0;
                }
            }
        }
        @media screen and (max-width: $--screen-md-min) and (min-width: calc($--screen-sm-min + 1px)) {
            &-2 {
                align-items: center;
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            &-0, &-1, &-2 {
                grid-column: 1/6;
            } 
        }
        @media screen and (max-width: 350px) {
            &-0, &-1, &-2 {
                padding: 0;
            } 
        }
    }
    &-description {
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-top: 62px;

        @media screen and (max-width: $--screen-sm-min) {
            margin-top: 54px;
            gap: 10px;

            p {
                color: $--gray-medium;
                font-size: 14px;
            }
        }
    }
}
</style>