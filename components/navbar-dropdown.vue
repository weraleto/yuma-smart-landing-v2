<template>
    <div class="navigation-link__dropdown" 
        @mouseenter="handleMouseEnter" 
        @mouseleave="handleMouseLeave" 
        :class="{'opened': dropdownOpened}"
    >
        <div class="dropdown__header"
            :class="{'active': dropdownOpened || isDropdownActive}"
             @click.stop="dropdownOpened=!dropdownOpened">
            <span class="dropdown__selected-title">
                <span class="dropdown__selected-title__text">{{title}}</span>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.99999 4.98288C3.9111 4.98288 3.8251 4.96621 3.74199 4.93288C3.65844 4.89954 3.58888 4.8551 3.53333 4.79954L0.466658 1.73288C0.344436 1.61066 0.283325 1.4551 0.283325 1.26621C0.283325 1.07732 0.344436 0.921766 0.466658 0.799544C0.588881 0.677322 0.744436 0.616211 0.933325 0.616211C1.12221 0.616211 1.27777 0.677322 1.39999 0.799544L3.99999 3.39954L6.59999 0.799544C6.72221 0.677322 6.87777 0.616211 7.06666 0.616211C7.25555 0.616211 7.4111 0.677322 7.53332 0.799544C7.65555 0.921766 7.71666 1.07732 7.71666 1.26621C7.71666 1.4551 7.65555 1.61066 7.53332 1.73288L4.46666 4.79954C4.39999 4.86621 4.32777 4.91332 4.24999 4.94088C4.17221 4.96888 4.08888 4.98288 3.99999 4.98288Z" fill="#111111"/>
                </svg>
            </span>
        </div>
        <div class="dropdown__items">
            <template v-if="showContacts">
                <div class="dropdown__item">
                    <h3 class="dropdown__items--description no-word-break" style="margin-bottom: 12px">YUMA-SMART</h3>
                    <a class="text4" href="tel:+7 (812) 605-98-08">+7 (812) 605-98-08</a>
                </div>
            </template>
            <template v-else>
                <p class="dropdown__items--description no-word-break">{{description}}</p>
                <div class="dropdown__items--block">
                <nuxt-link @click.native="$emit('closemenu')" :to="link.path" v-for="link in items" :key="link.name" class="dropdown__item"
                    :class="{'active': $route.path == link.path}"
                    ><span>{{link.name}}</span></nuxt-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: () => {}
        },
        menuOpened: {
            type: Boolean,
            default: false
        },
        showContacts: {
            type: Boolean,
            default: false
        },
    },
    data: () => {
        return {
            dropdownOpened: false,
            timer: null
        }
    },
    methods: {
        requestDropdownClose() {
            this.dropdownOpened = false
        },
        handleMouseEnter() {
            let isMobile = window.innerWidth <= 767
            if (!isMobile){
                if (this.timer) {
                    clearTimeout(this.timer)
                }
            }
        },
        handleMouseLeave() {
            let isMobile = window.innerWidth <= 767
            if (!isMobile){
                this.timer = setTimeout(() => {
                    this.requestDropdownClose()
                }, 1000)
            }
        }
    },
    computed: {
        isDropdownActive() {
            return this.items.some(it=>it.path == this.$route.path)
        }
    },
    watch: {
        menuOpened() {
            if (!this.menuOpened) {
                this.dropdownOpened = false
            }
        },
        dropdownOpened(val) {
            if (val) {
                this.$emit('open')
            }
        },
        $route() {
            this.dropdownOpened = false
        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/_variables.scss';

.navigation {
    &-link__dropdown {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;

        @media screen and (max-width: $--screen-sm-min) {
            min-width: 100%;
            flex-direction: column;
        }
    }
}

.dropdown__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 10000;
    min-height: 64px;
    background-color: white;
    width: 100%;
    font-size: 14px;
    &.active, &:hover {
        .dropdown__selected-title__text::after {
            opacity: 1;
        }
    }
    @media screen and (max-width: $--screen-sm-min) {
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
    &__text {
        position: relative;
        display: block;
        &::after {
            content: '';
            position: absolute;
            display: block;
            height: 3px;
            background-color: $--main-black;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            transform: translate(0, 8px);
            transition: opacity .3s ease;
        }
        @media screen and (max-width: $--screen-sm-min) {
            font-size: 18px;
        }
    }
}
.dropdown__items {
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    background-color: $--main-white;
    border-radius: 12px;
    padding: 40px;
    font-size: 14px;
    opacity: 0;
    white-space: pre-line;
    z-index: -1;
    visibility: hidden;
    transform: translate(0, -100px);
    transition: all .3s ease;

    &--block {
        display: flex;
        flex-direction: column;
        padding-top: 24px;
    }

    &--description {
        color: $--gray-medium-dark;
        font-weight: 400;
        font-size: 12px;
    }

    @media screen and (min-width: calc($--screen-sm-min + 1px)) {
        box-shadow: $--main-box-shadow;
    }
    @media screen and (max-width: $--screen-sm-min) {
        display: flex;
        flex-direction: column;
        position: static;
        max-height: 0;
        // overflow: hidden;
        transform: none;
        padding: 0;
        min-width: 100%;
        margin-bottom: 0;
        font-size: 18px;
        &--description {
            font-size: 14px;
        }
        &--block {
            padding-top: 28px;
        }
    }
}
.navigation-link__dropdown.opened {
    .dropdown__items {
        z-index: 9999;
        visibility: visible;
        opacity: 1;
        transform: translate(0, 12px);

        @media screen and (max-width: $--screen-sm-min) {
            max-height: 500px;
            padding-left: 12px;
            margin-bottom: 20px;
            padding-top: 30px;
            padding-bottom: 24px;
        }
    }
}
.dropdown__item {
    position: relative;
    display: inline-block;
    white-space: nowrap;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
    span::after {
        content: '';
        display: block;
        height: 2px;
        left: 0;
        right: 0;
        background-color: $--main-black;
        bottom: 0;
        transform: translate(0, 2px);
        opacity: 0;
        transition: opacity .3s ease;
    }
    span {
        position: relative;
        display: inline-block;
    }
    &.active, &:hover {
        span::after {
            opacity: 1;
        }
    }
}
</style>