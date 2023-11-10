<template>
  <div>
  <main class="main pb smart-tariff">
    <div class="container">
      <Breadcrumbs
        :links="[
          {name: 'YUMA Smart', to: {name: 'index'}}, 
          {name: tariffData.name, to: {name: 'yuma-smart-slug', params: {slug: tariffData.slug}}}
          ]"
      ></Breadcrumbs>

      <div class="smart-tariff__container">
        <div class="smart-tariff__picture hidden-mobile" v-if="tariffData.img">
          <img :src="require('/assets/img/smart/'+tariffData.img)" :alt="`Тариф №${tariffData.n}. ${tariffData.subtitle}`">
        </div>
        <div class="smart-tariff__text">
          <h1 class="title1">Тариф №{{ tariffData.n }}</h1>
          <div class="smart-tariff__picture only-mobile" v-if="tariffData.img">
            <img :src="require('/assets/img/smart/'+tariffData.img)" :alt="`Тариф №${tariffData.n}. ${tariffData.subtitle}`">
          </div>
          <h2 class="subtitle">{{ tariffData.subtitle }}</h2>
          <p class="text6">{{ tariffData.description }}</p>

          <div class="smart-tariff__text--group" v-show="tariffData.price">
            <div class="smart-tariff__text--pricing">
              <div class="subtitle-bold">{{ tariffData.price }}</div>
              <span class="text5">+ 7% от оборота</span>
            </div>
            <button class="smart-tariff__text--btn btn primary text4" 
                  @click.prevent="$store.commit('setShowModal', {key: 'showApplyForm', val: true})"
          >Заказать</button>
          </div>
        </div>
      </div>
      <div class="smart-tariff__items" v-if="tariffData.items">
        <h2 class="title1">Готовые варианты</h2>
        <div class="smart-tariff__items--container">
          <nuxt-link :to="{name: 'integrated-micromarkets-slug', params: {slug: it.slug}}" v-for="it in tariffData.items" :key="it.slug"
            class="smart-tariff__items--item"
          >
            <div class="smart-tariff__items--item__top">
              <img :src="require(`@/assets/img/smart/cata/thumbs/${it.img}${it.is_frost ? 'ls' : 'lw'}.png`)" alt="Холодильник">
            </div>
            <div class="smart-tariff__items--item__bottom">
              <h4 class="subtitle-bold">
                {{it.name}}
              </h4>
              <div class="specs text6">
                <p>Тип: {{ it.type }}</p>
                <p>Литраж: {{ it.litres }} л</p>
              </div>
              <div class="actions">
                <div>
                  <div class="subtitle-bold">
                    от {{it.prices[0]}} ₽
                  <span class="text5">+ 7% от оборота</span>  
                  </div>
                </div>
                <button class="smart-tariff__items--btn large btn primary text4" 
                        @click.prevent="$store.commit('setShowModal', {key: 'showApplyForm', val: true})"
                >Заказать</button>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>

    </div>
  </main>
  <LeadForm  v-if="tariffData.items" theme="light" title="Не можете определиться?"
    subtitle="Наши специалисты помогут вам подобрать лучшее решение" />
  </div>
</template>

<script>
import { yumaSmartTariffs } from '@/assets/dataContent'
import Breadcrumbs from '@/components/breadcrumbs'
import LeadForm from '@/components/contact-form'
export default {
  data: () => {
    return {
      tariffData: {}
    }
  },
  components: { Breadcrumbs, LeadForm },
  asyncData({ params, error }) {
    console.log(params)
    const tariffData = yumaSmartTariffs.reduce((prev, next) => {
      return next.slug === params.slug ? next : prev
    }, {})
    if (!Object.keys(tariffData).length) {
      error({ statusCode: 404, message: 'Страница не найдена' })
    }

    return { tariffData }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
@import '@/assets/scss/_mixins';

.smart-tariff {
  &__container {
    padding-top: 56px;
    display: flex;
    justify-content: center;
    width: 58.33%;
    gap: 10%;
    margin: auto;
  }

  &__text {
    width: 100%;
    max-width: 400px;
    
    h2 {
      margin: 40px 0 20px;
    }

    &--group {
      display: flex;
      align-items: center;
      gap: 70px;
      margin-top: 40px;
    }
    &--pricing {
      flex: 0 1 152px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &--btn {
      flex: 0 1 157px;
      min-height: 60px;
    }
  }

  &__picture {
    width: 100%;
    max-width: 218px;
  }

  &__items {
    margin-top: 100px;

    &--container {
      margin-top: 52px;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
    }

    &--item {
      @extend %cardArrowTopRight;
      width: 100%;
      flex: 1 1 calc(33.333% - 40px);
      max-width: calc(33.333% - 40px);
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #FFFFFF;
      box-shadow: $--main-box-shadow;
      border-radius: 16px;
      padding: 36px;

      &__top {
        width: 70.8%;
        height: 300px;
        // margin-bottom: 16px;

        img, picture {
          height: 100%;
          object-fit: contain;
        }
      }
      &__bottom {
        width: 100%;
        
        .specs {
          margin: 12px 0 32px;
        }
        .actions {
          display: flex;
          justify-content: space-between;
          gap: 5px;
          align-items: center;

          div:first-child {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }
        }
      }
    }

    &--btn {
      flex: 0 1 157px;
    }

    @media screen and (max-width: $--screen-lg-min) {
      &--item {
        padding: 16px;
      }
    }
    @media screen and (max-width: 1180px) {
      &--container {
        gap: 20px;
        margin-top: 44px;
      }
      &--item {
        max-width: calc(50% - 20px);
        flex: 1 0 50%;
      }
    }
    @media screen and (max-width: $--screen-sm-min) {
      margin-top: 56px;
      &--item {
        flex: 1 0 100%;
        max-width: 100%;
      }
    }
    @media screen and (max-width: 360px) {
      &--item {
        &__top {
          height: 253px;
        }
        &__bottom {
          .actions {
            gap: 0;
            div:first-child {
              min-width: 140px;
              transform: scale(.9) translateX(-5%);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: $--screen-md-min) {
    &__container {
      gap: 20px;
      width: 100%;
    }
  }
  @media screen and (max-width: $--screen-sm-min) {
    &__container {
      padding-top: 36px;
    }
    &__text {
      max-width: unset;
      h2 {
        margin-top: 24px;
      }
    }
    &__picture {
      margin: 20px auto 0;
    }
  }
  @media screen and (max-width: $--screen-xs-min) {
    &__picture {
      max-width: 124px;
    }
    &__text {
      &--group {
        gap: 34px;
        justify-content: space-between;
      }
      &--btn {
        min-width: 157px;
      }
    }
  }
  @media screen and (max-width: 330px) {
    &__text {
      &--group {
        gap: 16px;
        .subtitle {
          font-size: 18px;
        }
      }
    }
  }
}
</style>