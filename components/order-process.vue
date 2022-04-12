<template>
  <div class="order-process">
      <template>
        <div 
            class="grid-layout order-process__container"
        >
            <div class="step__number step-1">
                1
            </div>
            <div class="separator separator-horizontal separator-1"></div>
        </div>
        <div 
            class="grid-layout order-process__container border-right"
        >
          <div class="step step-1">
              <h4 class="subtitle">
                  Получаем заявку и консультируем вас
              </h4>
              <p class="text4">
                  Мы принимаем вашу заявку, наш менеджер отдела развития консультирует вас и помогает выбрать оптимальное решение.
              </p>
          </div>
        </div>
        </template>
        <div 
            class="grid-layout order-process__container border-right"
        >
            <div class="step__number step-2">
                2
            </div>
            <div class="separator separator-horizontal separator-2"></div>
        </div>

        <div 
            class="grid-layout order-process__container border-left"
        >
          <div class="step step-2">
             <h4 class="subtitle">
                  Оформляем официальные документы
              </h4>
              <p class="text4">
                 Мы готовим и согласовываем с вами договор, передаем счет для оплаты выбранного вами решения и запускаем нашу работу над ним.
              </p>
          </div>
        </div>

        <div 
            class="grid-layout order-process__container"
        >
            <div class="step__number step-3">
                3
            </div>
            <div class="separator separator-horizontal separator-2"></div>
        </div>
        <div 
            class="grid-layout order-process__container border-right"
        >
          <div class="step step-3">
              <h4 class="subtitle">
                  Готовим и брендируем ваши микромаркеты
              </h4>
              <p class="text4">
                  Мы подготавливаем торговое оборудование. Апгрейдим ваше или брендируем новое, запускаем для вас программную платформу YUMA-SMART, подключаем всю необходимую технику и сервисы.
              </p>
          </div>
        </div>
        <div 
            class="grid-layout order-process__container"
        >
            <div class="step__number step-4">
                4
            </div>
            <!-- <div class="separator separator-horizontal separator-2"></div> -->
        </div>
        <div 
            class="grid-layout order-process__container"
        >
          <div class="step step-4">
              <h4 class="subtitle">
                  Проводим бесплатное обучение
              </h4>
              <p class="text4">
                  Мы обучаем вас управлению микромаркетами и продвижению с помощью мобильного приложения.
              </p>
          </div>
        </div>

        <div 
            class="grid-layout order-process__container"
        >
            <div class="step__number step-5">
                5
            </div>
            <!-- <div class="separator separator-horizontal separator-2"></div> -->
        </div>
        <div 
            class="grid-layout order-process__container"
        >
          <div class="step step-5">
              <h4 class="subtitle">
                  Запускаем ваши микромаркеты
              </h4>
              <p class="text4">
                  Мы доставляем ваши микромаркеты до мест торговли, устанавливаем, подключаем и тестируем их. <br>
                Вы готовы получать прибыль!
              </p>
          </div>
        </div>
  </div>
</template>

<script>

export default {
    data: () => {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.separator {
    background-color: $--main-gray;

    &-horizontal {
        height: 2px;
        width: 100%;
    }



    &-right {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 2px;
        height: 100%;
        right: 0;
    }
    &-1 {
        grid-column: 3/11;
    }
    &-2 {
        grid-column: 2/11;
    }
}

.order-process {
    margin-top: 70px;

    &__container {
        grid-auto-flow: column;
        position: relative;
        // border-radius: 20px;

        &.border-right {
            border-right: 2px solid $--main-gray;
        }
    }
}

.step {
    padding-top: 10px;
    &-1, &-5 {
        grid-column: 3/6;
    }
    &-2, &-4 {
        grid-column: 7/10;
    }
    &-3 {
        grid-column: 2/5;
    }

    &__number {
        font-size: 4.375rem;
        line-height: 1;
        font-variation-settings: 'wght' 900;
        padding-bottom: 10px;
    }

    .subtitle {
        margin-bottom: 20px;
    }
}



</style>