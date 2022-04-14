<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="title-ladder">
          <h1 class="title1 grid-layout">
            <span>Наши</span>
            <span>продукты</span>
          </h1>
        </div>
        <Infoblock
          text="Мы позаботились об оптимальных решениях для вашего бизнеса и создали данную линейку продуктов." />
      </div>

    </header>

    <main class="main">
      <div class="container pb">
        <div class="block-offset grid-layout">
          <h2 class="title2 block-offset__title">торговое
            оборудование</h2>
          <div class="block-offset__content text-blocks hidden-mobile">
            <div class="text-blocks__col">
              <div class="text-blocks__item text-blocks__icon">
                <img src="../assets/img/fridge.svg" alt="Холодильник">
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Холодильники</h3>
                <p class="text4">Технология YUMA-SMART протестирована
                  и успешно работает с самыми разными популярными моделями холодильников.
                  Мы подберем оптимальный для вас вариант.</p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Стоимость<br>от 90 тыс. ₽</h3>
                <ApplicationFormTrigger />
              </div>
            </div>
            <div class="text-blocks__col">
              <div class="text-blocks__item--long text-blocks__icon">
                <img src="../assets/img/constr.svg" alt="Конструкция">
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Витрины</h3>
                <p class="text4">Мы организуем подбор или даже разработку конструкции витрины для оптимального
                  представления вашего ассортимента.</p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Комплексные конструкции</h3>
                <p class="text4">Холодильники, витрины, а также кофемашины, микроволновки и другую технику мы соберем в
                  единую продуманную конструкцию.</p>
              </div>
            </div>
          </div>
          <div class="block-offset__content text-blocks plain only-mobile">
            <div style="margin-bottom: 30px;">
              <img src="../assets/img/equipment-m.svg" alt="Оборудование">
            </div>
            <div class="text-blocks__col">
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Холодильники</h3>
                <p class="text4">Технология YUMA-SMART протестирована
                  и успешно работает с самыми разными популярными моделями холодильников.
                  Мы подберем оптимальный для вас вариант.</p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Витрины</h3>
                <p class="text4">Мы организуем подбор или даже разработку конструкции витрины для оптимального
                  представления вашего ассортимента.</p>
              </div>

            </div>
            <div class="text-blocks__col">

              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Комплексные конструкции</h3>
                <p class="text4">Холодильники, витрины, а также кофемашины, микроволновки и другую технику мы соберем в
                  единую продуманную конструкцию.</p>
              </div>
              <div class="text-blocks__item call-to-action">
                <h3 class="subtitle text-blocks__item-subtitle">Стоимость<br>от 90 тыс. ₽</h3>
                <ApplicationFormTrigger />
              </div>
            </div>
          </div>
        </div>
        <div class="block-offset grid-layout">
          <h2 class="title2 block-offset__title">Модуль управления
            <span class="no-word-break">yuma-smart</span></h2>
          <div class="block-offset__content offset-sm text-blocks only-mobile plain">

            <div class="text-blocks__item text-blocks__icon" style="margin: 0 auto 50px;">
              <img src="../assets/img/magic-module.svg" alt="Модуль">
            </div>

            <div class="text-blocks__col">
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Что он обеспечивает</h3>
                <p class="text4">Взаимосвязь программной платформы
                  и торгового оборудования.
                  Работу системы безопасности каждого микромаркета, включая встроенные в него электронный замок, датчики
                  и видеонаблюдение.</p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Как его установить</h3>
                <p class="text4">Мы бесплатно устанавливаем и настраиваем модуль управления со всеми его компонентами.
                  Независимо от того, запускается YUMA-SMART на вашем торговом оборудовании, или вы приобретаете его у
                  нас.</p>
              </div>

            </div>
            <div class="text-blocks__col">
              <div class="text-blocks__item call-to-action">
                <h3 class="subtitle text-blocks__item-subtitle">Стоимость<br>от 20 тыс. ₽</h3>
                <ApplicationFormTrigger />
              </div>
            </div>
          </div>
          <div class="block-offset__content offset-sm text-blocks hidden-mobile">
            <div class="text-blocks__col">
              <div class="text-blocks__item text-blocks__icon">
                <img src="../assets/img/magic-module.svg" alt="Модуль">
              </div>

            </div>
            <div class="text-blocks__col">
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Что он обеспечивает</h3>
                <p class="text4">Взаимосвязь программной платформы
                  и торгового оборудования.
                  Работу системы безопасности каждого микромаркета, включая встроенные в него электронный замок, датчики
                  и видеонаблюдение.</p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Как его установить</h3>
                <p class="text4">Мы бесплатно устанавливаем и настраиваем модуль управления со всеми его компонентами.
                  Независимо от того, запускается YUMA-SMART на вашем торговом оборудовании, или вы приобретаете его у
                  нас.</p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Стоимость<br>от 20 тыс. ₽</h3>
                <ApplicationFormTrigger />
              </div>
            </div>
          </div>
        </div>
        <div class="block-offset grid-layout pb">
          <h2 class="title2 block-offset__title">Программная платформа
            <span class="no-word-break">yuma-smart</span></h2>
          <div class="block-offset__content text-blocks platform">
            <div class="text-blocks__col">
              <div class="text-blocks__item text-blocks__icon">
                <div class="icon-xs">
                  <img src="../assets/img/man.svg" alt="Ваш личный кабинет с системой учета, инвентаризации и закупок">
                </div>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Ваш личный кабинет
                  с системой учета, инвентаризации и закупок</h3>
                <p class="text4">Решает все задачи управления ассортиментом ваших микромаркетов. От их автоматической
                  загрузки до полноценного учета.</p>
              </div>
              <div class="text-blocks__item desktop">
                <h3 class="subtitle text-blocks__item-subtitle">Стоимость<br>7% от оборота</h3>
                <ApplicationFormTrigger />
              </div>
            </div>
            <div class="text-blocks__col">
              <div class="text-blocks__item text-blocks__icon">
                <div class="icon-xl">
                  <img src="../assets/img/app.svg" alt="Мобильное приложение для покупателей">
                </div>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle text-blocks__item-subtitle">Мобильное приложение для покупателей</h3>
                <p class="text4">Покупатель открывает приложение, считывает QR-код вашего микромаркета
                  и получает к нему доступ. Далее он просто сканирует выбранные продукты, и они попадают в корзину, где
                  их легко оплатить. <br><br>
                  Кстати, мы сразу же настраиваем интернет-эквайринг, и ваше мобильное приложение после запуска
                  полностью готово к продажам.
                </p>
              </div>
              <div class="text-blocks__item call-to-action mobile">
                <h3 class="subtitle text-blocks__item-subtitle">Стоимость<br>7% от оборота</h3>
                <a 
                  class="btn large primary"
                  @click.prevent="$store.commit('setShowModal', {key: 'showApplyForm', val: true})"
                >Заказать</a>
              </div>
            </div>
          </div>
        </div>
        <div class="title-ladder" id="order_process">
          <h2 class="title1 grid-layout">
            <span>Процесс</span>
            <span>заказа</span>
          </h2>
        </div>
        <Infoblock
          text="Мы продумали простой процесс подключения, включающий всего 5 шагов к вашей прибыли." />
        <OrderProcess />
      </div>
      <LeadForm theme="light" title="Понравился наш продукт?" subtitle="Расскажем. Подключим. Обучим." />

    </main>
  </div>
</template>

<script>
import LeadForm from '@/components/contact-form'
import ApplicationFormTrigger from '@/components/call-to-action-btn'
import OrderProcess from '@/components/order-process'
export default {
  components: {
    LeadForm,
    ApplicationFormTrigger,
    OrderProcess
  },
}
</script>

<style lang="scss">

@import '@/assets/scss/_variables.scss';

.text-blocks__item {
  &.call-to-action {
    &.mobile {
      display: none;
    }
    @media screen and (max-width: $--screen-xs-min) {
      text-align: center;

      &.mobile {
        display: block;
      }

      .btn {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  @media screen and (max-width: $--screen-xs-min) {
    &.desktop {
      display: none;
    }
  }
}

</style>