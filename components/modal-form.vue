<template>
  <div class="modal-wrapper">
        <div class="body-overlay full-overlay" @click="$emit('close')"></div>
        <div class="form-modal" :class="formSize">
            <div class="form-modal__close" @click="$emit('close')">
                <img src="~assets/img/cross.svg" alt="Закрыть форму">
            </div>
            <div class="form-modal__content" :style="formSubmitted ? 'overflow: visible' : ''">
                <form style="width: 100%">
                    <script data-b24-form="inline/20/julahc" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b16224776/crm/form/loader_20.js');</script>
                </form>
                <!-- <form action="" v-if="!formSubmitted">
                    <div class="contact-form__form-group form-modal__form-group">
                        <label class="contact-form__label text6" for="">Ваше Имя</label>
                        <input v-model="form.name" class="light"
                            :class="{'invalid': !formValidation.name.result}"
                            type="text" placeholder="Иван Иванов"
                            @change="formValidation.name = nameValid"
                            >
                        <small class="invalid-message" :class="{'opened': !formValidation.name.result}">
                            {{formValidation.name.errorMessage}}
                        </small>
                    </div>
                    <div class="contact-form__form-group form-modal__form-group">
                        <label class="contact-form__label text6" for="">Ваш телефон</label>
                        <input 
                            v-model="form.phone" 
                            type="text" 
                            class="light"
                            :class="{'invalid': !formValidation.phone.result}"
                            placeholder="+7 (ХХХ) ХХХ ХХ ХХ"
                            v-maska="phoneMask"
                            @change="formValidation.phone = phoneValid"
                        > -->
                        <!-- v-show="!formValidation.phone.result" -->
                        <!-- <small class="invalid-message" :class="{'opened': !formValidation.phone.result}">
                            {{formValidation.phone.errorMessage}}
                        </small>
                    </div>
                    <div class="contact-form__form-group form-modal__form-group" v-if="showTextarea">
                        <label class="contact-form__label text6" for="">Сообщение (по желанию)</label>
                        <textarea v-model="form.message" class="light" type="text" placeholder="Напишите что-нибудь" />
                    </div>
                    <button type="submit" @click.prevent="submitForm" class="btn large primary text4">
                        {{actionButtonText}}
                    </button>
                    <div class="contact-form__form-group policy-argreement">
                        <div class="text6">
                            <div>
                                Заполняя форму, я соглашаюсь с <NuxtLink to="/policy" target="_blank">политикой конфиденциальности</NuxtLink>.
                            </div>
                        </div>
                    </div>
                </form>
                <div class="form-modal__thankyou" v-else>
                    <div class="title3">заявка Отправлена</div>
                    <p class="text6">Наш менеджер свяжется с вами в ближайшее время</p>
                    <div style="margin-top:24px">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9998 43.7503C35.355 43.7503 43.7498 35.3555 43.7498 25.0003C43.7498 14.6451 35.355 6.25033 24.9998 6.25033C14.6446 6.25033 6.24984 14.6451 6.24984 25.0003C6.24984 35.3555 14.6446 43.7503 24.9998 43.7503ZM24.9998 45.8337C36.5061 45.8337 45.8332 36.5066 45.8332 25.0003C45.8332 13.4941 36.5061 4.16699 24.9998 4.16699C13.4936 4.16699 4.1665 13.4941 4.1665 25.0003C4.1665 36.5066 13.4936 45.8337 24.9998 45.8337Z" fill="#59C406"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.1145 16.9367C36.3194 17.1219 36.4425 17.3808 36.4565 17.6566C36.4706 17.9324 36.3745 18.2025 36.1895 18.4076L22.277 33.7836L13.8645 25.7534C13.6756 25.5604 13.5691 25.3015 13.5674 25.0314C13.5657 24.7613 13.669 24.5011 13.8555 24.3057C14.042 24.1103 14.297 23.995 14.5669 23.9841C14.8368 23.9731 15.1004 24.0675 15.302 24.2472L22.1666 30.7992L34.6447 17.0107C34.7365 16.9092 34.8475 16.8268 34.9712 16.7682C35.0948 16.7097 35.2289 16.676 35.3655 16.6692C35.5022 16.6625 35.6389 16.6827 35.7678 16.7288C35.8967 16.7749 36.0152 16.8459 36.1166 16.9378L36.1145 16.9367Z" fill="#59C406"/>
                        </svg>

                    </div>
                </div> -->
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
        formSize: {
            type: String,
            default: 'small'
        },
        formAction: String,
        showContactQr: {
            type: Boolean,
            default: false
        },
        showTextarea: {
            type: Boolean,
            default: false
        },
        actionButtonText: {
            type: String,
            default: 'Отправить'
        }
    },
}
</script>

<style lang="scss">

@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_bitrix-form.scss';

.modal-wrapper {
    z-index: 10010;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: $--screen-sm-min) {
        padding-top: 70px;
    }
    @media screen and (max-width: $--screen-xs-min) {
        align-items: flex-start;
    }
}

.form-modal {
    background-color: $--main-white;
    border-radius: 30px;
    width: 100%;
    height: auto;
    z-index: 10013;
    position: relative;
    padding: 20px 123px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 560px;

    &.small {
        max-width: 536px;
    }
    &.medium {
        max-width: 670px;
        padding-top: 12vh;
        padding-bottom: 12vh;
    }

    &__close {
        position: absolute;
        width: 24px;
        top: 40px;
        right: 40px;
        cursor: pointer;
    }

    &__content {
        width: 100%;
        display: flex;

        .btn {
            margin: auto;
        }

        @media screen and (max-width: $--screen-sm-min) {
            max-height: calc(100vh - 180px);
            overflow-y: scroll;
            height: 100%;   
        }
    }

    &__contacts {
        margin-top: 50px;
        width: 100%;
        text-align: center;
        &--qrs {
            display: flex;
            justify-content: space-between;

            div {
                max-width: calc(50% - 14px);
            }
        }
        p {
            margin-bottom: 20px;
        }
    }

    &__thankyou {
        text-align: center;
        position: relative;
        align-self: center;
        width: 100%;
        max-width: 289px;
        margin: auto;

        .title3 {
            margin-bottom: 16px;
        }
    }

    @media screen and (max-width: $--screen-sm-min) {
        padding: 54px 20% 50px;
        height: auto;
        min-height: 50vh;
        max-height: calc(100vh - 100px);
        &.small, &.medium {
            // max-width: calc(80% - 60px);
            margin: 0 30px;
        }
        &.medium {
            padding-top: 54px;
            padding-bottom: 50px;
        }
        &__close {
            top: 22px;
            right: 22px;
        }
        &__contacts {
            margin-top: 30px;
        }
    }
    @media screen and (max-width: $--screen-xs-min) {
        padding: 54px 26px 50px;
        height: 100%;
        max-height: 84vh;
    }
    @media screen and (max-width: $--screen-xxs-min) {
        &.small, &.medium {
            // max-width: calc(100% - 32px);
            margin: 0 16px;
        }
    }
    @media screen and (max-width: 330px) {
        padding: 60px 22px 50px;
    }
}
</style>