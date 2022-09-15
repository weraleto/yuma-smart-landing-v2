<template>
  <div class="order-process">
      <template>
        <div 
            class="grid-layout order-process__container"
        >
            <div class="step__number step-1" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
                1
            </div>
            <div class="separator separator-horizontal separator-1"></div>
        </div>
        <div 
            class="grid-layout order-process__container border-top-right"
        >
          <div class="step step-1" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
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
            class="grid-layout order-process__container border-bottom-right"
        >
            <div class="step__number step-2" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
                2
            </div>
            <div class="separator separator-horizontal separator-2"></div>
        </div>

        <div 
            class="grid-layout order-process__container border-top-left"
        >
          <div class="step step-2" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
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
            <div class="step__number step-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
                3
            </div>
            <div class="separator separator-horizontal separator-3"></div>
        </div>
        <div 
            class="grid-layout order-process__container border-top-right"
        >
          <div class="step step-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
              <h4 class="subtitle">
                  Готовим и брендируем ваши микромаркеты
              </h4>
              <p class="text4">
                  Мы подготавливаем торговое оборудование. Апгрейдим ваше или брендируем новое, запускаем для вас программную платформу YUMA-SMART, подключаем всю необходимую технику и сервисы.
              </p>
          </div>
        </div>
        <div 
            class="grid-layout order-process__container border-bottom-right"
        >
            <div class="step__number step-4" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
                4
            </div>
            <div class="separator separator-horizontal separator-4"></div>
        </div>
        <div 
            class="grid-layout order-process__container border-top-left-offset"
        >
          <div class="step step-4" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
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
            <div class="step__number step-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
                5
            </div>
        </div>
        <div 
            class="grid-layout order-process__container"
        >
          <div class="step step-5" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
              <h4 class="subtitle">
                  Запускаем ваши микромаркеты
              </h4>
              <p class="text4">
                В Санкт-Петербурге и Москве мы доставляем их до мест торговли, устанавливаем, подключаем и тестируем. В других городах - согласовываем с вами доставку и дистанционное подключение и необходимую настройку нашими специалистами. Вы готовы получать прибыль!
              </p>
          </div>
        </div>
  </div>
</template>

<script>
import AOS from 'aos';
export default {
    data: () => {
        return {

        }
    },
    mounted() {
        AOS.init()
    }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/aos/src/sass/aos.scss';
@import '@/assets/scss/_variables.scss';

.separator {
    background-color: $--main-gray;

    &-horizontal {
        height: 2px;
        &.w-100 {
            width: calc(100% - 30px);
        }
        // margin: auto;
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
        grid-column: 3/10;
        width: calc(100% - 30px);
    }
    &-2 {
        grid-column: 2/10;
        width: calc(100% - 60px);
        margin: auto;
    }
    &-3 {
        grid-column: 2/10;
        width: calc(100% - 30px);
    }
    &-4 {
        grid-column: 3/10;
        width: calc(100% - 60px);
        margin: auto;
    }

    @media screen and (max-width: $--screen-sm-min) {
        &-1, &-2, &-3, &-4 {
            grid-column: 1/6;
        }
    }
}

.order-process {
    margin-top: 70px;

    &__container {
        grid-auto-flow: column;
        position: relative;

        &.border-top-right {
            &::before {
                content: '';
                position: absolute;
                top: -2px;
                border-radius: 0 20px 0 0;
                bottom: 0;
                right: 10%;
                width: 30px;
                border-top: 2px solid $--main-gray;
                border-right: 2px solid $--main-gray;
                @media screen and (max-width: $--screen-sm-min) {
                    right: 0;
                }
            }
        }
        &.border-bottom-right {
            &::before {
                content: '';
                position: absolute;
                top: 0;
                border-radius: 0 0 20px 0;
                bottom: -20x;
                right: 10%;
                width: 30px;
                height: 100%;
                border-bottom: 2px solid $--main-gray;
                border-right: 2px solid $--main-gray;
                @media screen and (max-width: $--screen-sm-min) {
                    right: 0;
                }
            }
        }

        &.border-top-left, &.border-top-left-offset {
            &::before {
                content: '';
                position: absolute;
                top: -2px;
                border-radius: 20px 0 0 0;
                bottom: 0;
                left: 10%;
                width: 30px;
                border-top: 2px solid $--main-gray;
                border-left: 2px solid $--main-gray;
                @media screen and (max-width: $--screen-sm-min) {
                    left: 0;
                }
            }
        }
        &.border-top-left-offset {
            &::before {
                left: 20%;
                @media screen and (max-width: $--screen-sm-min) {
                    left: 0;
                }
            }
        }
        &.border-bottom-left {
            &::before {
                content: '';
                position: absolute;
                top: 0;
                border-radius: 0 0 20px 0;
                bottom: -20x;
                left: 10%;
                width: 30px;
                height: 100%;
                border-bottom: 2px solid $--main-gray;
                border-left: 2px solid $--main-gray;
                @media screen and (max-width: $--screen-sm-min) {
                    left: 0;
                }
            }
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

    @media screen and (max-width: $--screen-sm-min) {
        &-1, &-3, &-5 {
            grid-column: 1/4;
            padding-right: 30px;
        }
        &-2, &-4 {
            grid-column: 3/6;
            padding-right: 5px;

            &.step__number {
                padding-top: 38px;
            }
        }
        &-2.step {
            padding-bottom: 64px;
        }
        &-4.step {
            padding-bottom: 19px;
        }
        .subtitle {
            font-size: 1.125rem;
        }
    }
    @media screen and (max-width: $--screen-xs-min) {
        &-1, &-3, &-5 {
            grid-column: 1/6;
        }
        &-2, &-4 {
            grid-column: 2/6;
        }
    }
}



</style>