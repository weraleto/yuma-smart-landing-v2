<template>
  <div class="contact-form" :class="`theme-${theme}`">
    <div class="grid-layout container">
        <div class="contact-form__container">
            <div class="contact-form__text">
                <h3 class="title2" v-html="title"></h3>
                <h4 class="subtitle">{{subtitle}}</h4>
                <small v-if="small" class="text6">{{small}}</small>
            </div>
            <form action="#" class="contact-form__form" :class="{'hidden': formSubmitted}">
                <div class="contact-form__form-group">
                    <label class="contact-form__label text6" for="">Ваше Имя</label>
                    <input v-model="form.name" 
                        :class="{'invalid': !formValidation.name.result}" 
                        type="text" 
                        placeholder="Иван Иванов"
                        @change="formValidation.name = nameValid"
                    >
                    <small class="invalid-message"
                        :class="{'opened': !formValidation.name.result}"
                    >
                        {{formValidation.name.errorMessage}}
                    </small>
                </div>
                <div class="contact-form__form-group">
                    <label class="contact-form__label text6" for="">Ваш телефон</label>
                    <input 
                        v-model="form.phone" 
                        type="text" 
                        :class="{'invalid': !formValidation.phone.result}"
                        placeholder="+7 (ХХХ) ХХХ ХХ ХХ"
                        v-maska="phoneMask"
                        @change="formValidation.phone = phoneValid"
                    >
                    <small class="invalid-message"
                        :class="{'opened': !formValidation.phone.result}"
                    >
                        {{formValidation.phone.errorMessage}}
                    </small>
                </div>
                <div class="contact-form__form-group">
                    <div class="label_checkbox text6">
                        <div>
                            Заполняя форму, я соглашаюсь с <NuxtLink to="/policy" target="_blank">политикой конфиденциальности</NuxtLink>.
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn large" 
                    :class="theme == 'dark' ? 'primary' : 'outlined'"
                    @click.prevent="submitForm"
                >{{actionButtonText}}</button>
            </form>
            <div v-if="formSubmitted" class="contact-form__thankyou">
                <div class="contact-form__thankyou--close"
                    @click="formSubmitted=false"
                >
                    <img src="~assets/img/cross.svg" alt="Закрыть форму">
                </div>
                <div class="subtitle">Отправлено!</div>
                <p class="text6">Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { maska } from 'maska'
import {formMixin} from '@/mixins/mixins'

export default {
    mixins: [formMixin],
    directives: { maska },
    props: {
        theme: {
            type: String,
            default: 'primary'
        },
        title: String,
        subtitle: String,
        small: String,
        actionButtonText: {
            type: String,
            default: 'Отправить'
        },
    },
}
</script>

<style lang="scss" >

@import '@/assets/scss/_variables.scss';

.contact-form {
    padding: 100px 0;

    &.submitted {
        padding: 89px 0;
    }

    &__container {
        position: relative;
        grid-column: 3/9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        @media screen and (max-width: 1180px) {
            grid-column: 2/10;
        }
        @media screen and (max-width: $--screen-sm-min) {
            grid-column: 1/6;
            flex-direction: column;
            align-items: center;
        }
    }

    &__text {
        max-width: 50%;

        h3 {
            margin-bottom: 20px;
        }
        small {
            display: block;
            margin-top: 10px;
        }

        @media screen and (max-width: $--screen-sm-min) {
            max-width: 75.137%;
            margin-bottom: 30px;
            text-align: center;
        }
    }

    &__form {
        max-width: 33.333%;
        width: 100%;

        &.hidden {
            opacity: 0;
        }

        @media screen and (max-width: $--screen-md-min) {
            max-width: 37.5%;
        }

        @media screen and (max-width: $--screen-sm-min) {
            max-width: 268px;
            margin: auto;
        }
    }

    &__label {
        display: block;
        margin-bottom: 5px;

        @media screen and (max-width: $--screen-sm-min) {
            text-align: left;
        }
    }

    &__thankyou {
        position: absolute;
        background-color: $--main-white;
        width: 360px;
        height: 322px;
        border-radius: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 69px;
        right: 0;
        color: $--main-black;
        transform: translate(3.20vw, 0);


        &--close {
            position: absolute;
            width: 24px;
            top: 30px;
            right: 30px;
            cursor: pointer;
        }

        .subtitle {
            margin-bottom: 20px;
            @media screen and (max-width: $--screen-sm-min) {
                margin-bottom: 10px;
            }
        }
        @media screen and (max-width: $--screen-md-min) {
            height: 100%;
            width: 35vw;
        }
        @media screen and (max-width: $--screen-sm-min) {
            height: 279.391px;
            width: 100%;
            bottom: 0;
            transform: none;
        }
        @media screen and (max-width: 595px) {
            height: 296.188px;
        }
        @media screen and (max-width: 355px) {
            height: 312.984px;
        }
        
    }

    &.theme-light {
        background-color: $--yellow-primary;
    }


    &.theme-dark {
        background-color: $--main-black;
        color: $--main-white;
    }

    @media screen and (max-width: $--screen-md-min) {
        padding: 58px 0;
    }
    @media screen and (max-width: $--screen-sm-min) {
        padding: 53px 0;
    }
}
</style>