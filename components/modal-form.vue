<template>
  <div class="modal-wrapper">
        <div class="body-overlay full-overlay" @click="$emit('close')"></div>
        <div class="form-modal" :class="formSize">
            <div class="form-modal__close" @click="$emit('close')">
                <img src="~assets/img/cross.svg" alt="Закрыть форму">
            </div>
            <div class="form-modal__content">
                <form action="" v-if="!formSubmitted">
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
                        >
                        <!-- v-show="!formValidation.phone.result" -->
                        <small class="invalid-message" :class="{'opened': !formValidation.phone.result}">
                            {{formValidation.phone.errorMessage}}
                        </small>
                    </div>
                    <div class="contact-form__form-group form-modal__form-group" v-if="showTextarea">
                        <label class="contact-form__label text6" for="">Сообщение (по желанию)</label>
                        <textarea v-model="form.message" class="light" type="text" placeholder="Напишите что-нибудь" />
                    </div>
                    <div class="contact-form__form-group">
                        <input v-model="policyAgree" type="checkbox" :name="`policy_${formAction}`" :id="`policy_${formAction}`">
                        <label class="label_checkbox text6" :for="`policy_${formAction}`">
                            <div>
                                Я согласен с <NuxtLink to="/politika" target="_blank">политикой конфиденциальности</NuxtLink>.
                               <div>
                                    <small class="invalid-message" 
                                        :class="{'opened': !formValidation.policy.result}"
                                    >
                                    {{formValidation.policy.errorMessage}}
                                    </small>
                               </div>
                            </div>
                        </label>
                    </div>
                    <button type="submit" @click.prevent="submitForm" class="btn large primary arrowed">
                        {{actionButtonText}}
                    </button>
                    <div class="form-modal__contacts" v-if="showContactQr">
                        <p class="text6">
                            Или свяжитесь с нами через любой удобный месседжер
                        </p>
                        <div class="form-modal__contacts--qrs">
                            <div><img src="~assets/img/telegram-qr.svg" alt="Контакт telegram"></div>
                            <div><img src="~assets/img/QR-wa.svg" alt="Контакт whatsapp"></div>
                        </div>
                    </div>
                </form>
                <div class="form-modal__thankyou" v-else>
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

    .invalid-message {
        min-height: 0;
        max-height: 0;
        overflow: hidden;
        &.opened {
            min-height: 32px;
            max-height: 200px;
        }
    }
}

.form-modal {
    background-color: $--main-white;
    border-radius: 30px;
    width: 100%;
    height: auto;
    z-index: 10013;
    position: relative;
    padding: 20px 134px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 700px;

    &.small {
        max-width: 536px;
    }
    &.medium {
        max-width: 670px;
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

        .btn {
            margin: auto;
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
        transform: translate(0, -100%);

        .subtitle {
            margin-bottom: 20px;
        }
    }

    &__form-group {
        margin-bottom: 10px;
    }

    @media screen and (max-width: $--screen-sm-min) {
        padding: 54px 38px 50px;
        min-height: 95vh;
        &.small, &.medium {
            max-width: calc(100% - 60px);
        }
        &__close {
            top: 22px;
            right: 22px;
        }
        &__contacts {
            margin-top: 30px;
        }
        &__thankyou {
            .subtitle {
                margin-bottom: 10px;
            }
        }
    }
    @media screen and (max-width: $--screen-xxs-min) {
        &.small, &.medium {
            max-width: calc(100% - 32px);
        }
    }
    @media screen and (max-width: 330px) {
        padding: 60px 22px 50px;
    }
}
</style>