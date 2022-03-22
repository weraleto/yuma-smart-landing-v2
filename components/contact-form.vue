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
                <button type="submit" class="btn large {% if theme == 'dark' %} primary {% else %} outlined {% endif %}">отправить</button>
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
    }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/_variables.scss';

.contact-form {
    padding: 100px 0;

    &__container {
        grid-column: 3/9;
        display: flex;
        justify-content: space-between;
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
    }

    &__form {
        max-width: 33.333%;
        width: 100%;

        &-group {
            margin-bottom: 10px;
        }
    }

    &__label {
        display: block;
        margin-bottom: 5px;
    }

    &.theme-light {
        background-color: $--yellow-primary;
    }


    &.theme-dark {
        background-color: $--main-black;
        color: $--main-white;
    }
}
</style>