<template>
  <div>
    <main class="error-main">
        <div class="container error-main__container">
            <div class="title-ladder">
                <h1 class="title1 grid-layout">
                    <span>Мы не можем</span>
                    <span>найти страницу</span>
                </h1>
            </div>
            <Infoblock
                text="Возможно, ее больше не существует на сайте, или адрес указан неправильно. Вы можете попробовать вернуться обратно."
                button_type="large outlined"
                button_text="На главную"
                :is_button_link="true"
                button_page_link="/"
             />
        </div>
    </main>
  </div>
</template>

<script>
export default {
    name: 'Error',
    head: {
        title: 'Ошибка'
    },

}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/_variables.scss';

.error-main {
    margin-top: 72px;
    min-height: 650px;
    background: url('~assets/img/404_bg.jpg') no-repeat center center;
    background-size: cover;
    padding-top: 100px;
    padding-bottom: 137px;

    &__container {
        width: 100%;
    }

    @media screen and (max-width: $--screen-md-min) {
        margin-top: 50px;
        padding-top: 70px;
    }

    @media screen and (max-width: $--screen-sm-min) {
        padding-top: 30px;
        min-height: 80vh;
        padding-bottom: 10vh;
    }
}
</style>