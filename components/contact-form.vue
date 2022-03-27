<template>
  <div class="contact-form" :class="`theme-${theme}`">
    <div class="grid-layout container">
        <div class="contact-form__container">
            <div class="contact-form__text">
                <h3 class="title2">{{title}}</h3>
                <h4 class="subtitle">{{subtitle}}</h4>
                <small v-if="small" class="text6">{{small}}</small>
            </div>
            <form action="#" class="contact-form__form">
                <div class="contact-form__form-group">
                    <label class="contact-form__label text6" for="">Ваше Имя</label>
                    <input type="text" placeholder="Иван Иванов">
                </div>
                <div class="contact-form__form-group">
                    <label class="contact-form__label text6" for="">Ваш телефон</label>
                    <input type="text" placeholder="+7 (ХХХ) ХХХ ХХ ХХ">
                </div>
                <div class="contact-form__form-group">
                    <label class="label_checkbox text6" :for="`policy_${theme}`">
                        <input type="checkbox" name="policy" :id="`policy_${theme}`">
                        Я согласен с политикой обработки персональных данных.
                    </label>
                </div>
                <button type="submit" class="btn large" 
                    :class="theme == 'dark' ? 'primary' : 'outlined'"
                >отправить</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
    }
}
</script>

<style lang="scss" >

@import '@/assets/scss/_variables.scss';

.contact-form {
    padding: 100px 0;

    &__container {
        grid-column: 3/9;
        display: flex;
        justify-content: space-between;
        
        @media screen and (max-width: $--screen-md-min) {
            grid-column: 2/10;
        }
        @media screen and (max-width: $--screen-sm-min) {
            grid-column: 1/6;
            flex-direction: column;
            align-items: center;
            text-align: center;
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
            max-width: 61.1%;
            margin-bottom: 30px;
        }
    }

    &__form {
        max-width: 33.333%;
        width: 100%;

        &-group {
            margin-bottom: 10px;
        }

        @media screen and (max-width: $--screen-md-min) {
            max-width: 37.5%;
        }

        @media screen and (max-width: $--screen-sm-min) {
            max-width: 78%;
            .btn {
                margin: auto;
            }
        }
    }

    &__label {
        display: block;
        margin-bottom: 5px;

        @media screen and (max-width: $--screen-sm-min) {
            text-align: left;
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