<template>
    <div>
        <nav class="navigation bar" :class="{'opened': mobileMenuOpened}">
            <div class="container navigation-container grid-layout">
                <div class="navigation-burger only-mobile" @click="mobileMenuOpened=!mobileMenuOpened; activePopup='contacts'">
                    <img src="../assets/img/nav-phone.svg" alt="Контакты">
                </div>
                <YumaLogo />
                <div class="navigation-inner right" :class="{'opened': mobileMenuOpened && activePopup=='menu'}">
                    <div class="navigation-mobile-close">
                        <img @click="mobileMenuOpened=false" src="../assets/img/cross.svg" alt="Закрыть меню">
                    </div>
                    <YumaLogo custom-class="navigation-inner__logo only-mobile" />

                    <div class="navigation-part left">
                        <template v-for="(it, idx) in navItems">
                            <template v-if="it.is_dropdown">
                                <NavDropdown :title="it.title" 
                                :description="it.description"
                                :key="idx"
                                :items="it.items || []" 
                                :menu-opened="mobileMenuOpened" 
                                :show-contacts="it.showContacts"
                                :class="it.class || ''"
                                :ref="`navDropdown-${idx}`"
                                @open="changeDropdownStatus(idx)"
                                @closemenu="mobileMenuOpened=false"
                                @click.stop
                            />
                            </template>
                            <template v-else>
                                <a :href="it.path" 
                                    :key="idx"
                                    class="navigation-link__item"
                                    :class="{'active': $route.path == it.path, 'external dark': it.external}"
                                    :target="it.external ? '_blank': '_self'"
                                ><span>{{it.title}}</span></a>
                            </template>
                        </template>
                    </div>
                    <div class="navigation-part contact only-desktop phone-hover">
                        <a href="tel:+7 (812) 214-17-70">+7 (812) 214-17-70</a>
                    </div>

                </div>
                <div class="navigation-inner left only-mobile" :class="{'opened': mobileMenuOpened && activePopup=='contacts'}">
                    <img class="navigation-mobile-close" @click="mobileMenuOpened=false" src="../assets/img/cross.svg" alt="Закрыть меню">

                    <YumaLogo custom-class="navigation-inner__logo" />

                    <div style="margin: 6.32vh 0 5.95vh">
                        <a class="subtitle phone-hover" href="tel:+7 (812) 214-17-70">+7 (812) 214-17-70</a>
                        <h3 style="margin-top: 10px" class="contact-description">Мы работаем по всей России</h3>
                    </div>
                    <div style="margin-bottom: 5.95vh">
                        <h3 class="text5">YUMA Smart в Санкт-Петербурге</h3>
                        <p class="contact-description" style="margin-top: 8px">
                            Выборгская набережная, д. 61, БЦ&nbsp;«АКВАТОРИЯ», 3 этаж, офис 303
                        </p>
                    </div>
                </div>

                <div class="navigation-burger only-mobile" @click="mobileMenuOpened=!mobileMenuOpened; activePopup='menu'">
                    <img src="../assets/img/menu.svg" alt="Открыть меню">
                </div>
            </div>
        </nav>
        <div class="body-overlay" v-if="mobileMenuOpened" @click="mobileMenuOpened=false"></div>
    </div>
</template>

<script>
import YumaLogo from '@/components/logo'
import NavDropdown from '@/components/navbar-dropdown'
export default {
    components: {YumaLogo, NavDropdown},
    data: () => {
        return {
            mobileMenuOpened: false,
            activePopup: 'menu',
            navItems: [
                {
                    is_dropdown: false,
                    title: 'YUMA Smart',
                    path: '/'
                },
                {
                    is_dropdown: false,
                    title: 'Готовые микромаркеты',
                    path: '/tariff3-integrated-micromarkets'
                },
                // {
                //     is_dropdown: false,
                //     title: 'О компании',
                //     path: '/about'
                // },
                {
                    is_dropdown: false,
                    external: true,
                    title: 'YUMA-POS',
                    path: 'https://yumapos.ru/'
                },
                {
                    is_dropdown: false,
                    external: true,
                    title: 'Техподдержка',
                    path: 'https://support.yumapos.ru/'
                },
            ],
            dropdownStatuses: {}
        }
    },
    mounted() {
        this.navItems.forEach((it, idx)=>{
            if (it.is_dropdown){
                this.dropdownStatuses[idx] = false
            }
        })
        window.addEventListener('resize', () => {
            if (this.mobileMenuOpened) {
                this.mobileMenuOpened=false
                this.activePopup='menu'
            }
        })
    },
    methods: {
        changeDropdownStatus(idx) {
            this.dropdownStatuses[idx] = true
            let activeDropdowns = Object.keys(this.dropdownStatuses).filter(
                key=>key != idx && this.dropdownStatuses[key]
            )
            if (activeDropdowns.length) {
                this.closeDropdowns(activeDropdowns)
            }
        },
        closeAllDropdowns() {
            this.closeDropdowns(Object.keys(this.dropdownStatuses))
        },
        closeDropdowns(idxes) {
            idxes.forEach(it=>{
                this.$refs['navDropdown-'+it][0].requestDropdownClose()
            })
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
    z-index: 10000;
    box-shadow: $--main-box-shadow;

    &.opened {
        border-color: transparent;
    }

    &-mobile-close {
        position: absolute;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 8px;
        top: calc(8.18vh - 9px);
        img {
            width: 20px;
            height: 20px;
        }
        @media screen and (min-width: calc($--screen-xs-min + 1px)) {
            display: none;
        }
    }

    &-container {
        align-items: center;

        @media screen and (max-width: $--screen-sm-min) {
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
        
        &.left {
            flex-grow: 1;
            gap: 56.28px;
        }
        &.right {
            flex-shrink: 1;
            max-width: 123px;
        }
        &.contact {
            flex-shrink: 1;
            max-width: 138px;
        }
        @media screen and (max-width: 1200px) {
            &.left {
                gap: 30px;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            &.left {
                gap: 3.9vw;
            }
        }
        @media screen and (max-width: $--screen-sm-min) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;

            &.left {
                gap: 32px;
                & > div {
                    width: 100%;
                }
            }

            &.right {
                padding-left: 0;
                margin-top: 10px;
            }
        }
        
    }

    &-inner {
        grid-column: 3/13;
        display: flex;
        align-items: center;
        gap: 6.46vw;

        .contact-description {
            margin-bottom: 20px; 
            font-size: 14px; 
            color: $--gray-medium-dark; 
            font-weight: 400
        }

        &__logo {
            width: 95px;
        }

        @media screen and (max-width: $--screen-sm-min) {
            position: absolute;
            flex-wrap: wrap;
            
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: #fff;
            top: calc(100% - 1px);
            min-width: 222px;
            padding: 20px;
            padding-right: 60px;
            z-index: -1;
            visibility: hidden;
            
            transition: all .3s ease;

            &.left {
                right: auto;
                left: 0;
                transform: translate(-150%, 0%);
                border-radius: 0 0 20px 0;
            }

            &.right {
                left: auto;
                right: 0;
                transform: translate(150%, 0%);
                border-radius: 0 0 0 20px;
            }

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
        @media screen and (max-width: $--screen-xs-min) {
            &.left, &.right {
                left: 0;
                right: 0;
                top: 0;
                border-radius: 0;
                gap: 6.69vh;
            }
            min-height: 100vh;
            padding-top: 8.18vh;
        }
        @media screen and (max-width: $--screen-xxs-min) {
            .subtitle {
                font-size: 18px;
            }
        }
    }

    &-link__item {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 64px;
        font-size: 14px;

        span {
            position: relative;
            // display: inline-block;

            &::after {
                content: '';
                position: absolute;
                display: block;
                height: 2px;
                background-color: $--main-black;
                bottom: 0;
                left: 0;
                right: 0;
                transform: translate(0, 7px);
                opacity: 0;
                transition: opacity .3s ease;
            }
        }

        &:hover, &.nuxt-link-exact-active {
            &:not(.external) {
                span::after {
                    opacity: 1;
                }
            }
        }
        &:active, &.nuxt-link-exact-active, &.active {
            span::after {
                opacity: 1;
            }
        }        

        @media screen and (max-width: $--screen-sm-min) {
            min-height: unset;
            margin-bottom: 8px;
            font-size: 18px;
        }
    }

    &-burger {
        width: 50px;
        height: 50px;
        align-items: center;

        &:last-of-type {
            justify-content: flex-end;
        }

        img {
            width: 24px;
            height: 24px;
        }

        @media screen and (max-width: $--screen-sm-min) {
            display: flex !important;
        }
        @media screen and (max-width: $--screen-xxs-min) {
            margin-right: 0;
        }
    }

    &-btn {
        width: 100%;
        .btn {
            font-size: 18px;
        }

        @media screen and (max-width: $--screen-sm-min) {
            flex-grow: 1;
            display: flex;
            align-items: flex-end;

            .btn {
                max-height: 48px;
            }
        }
    }

    .logo {
        width: 72px;

        @media screen and (max-width: $--screen-sm-min) {
            width: 69px;
        }
    }
}


</style>