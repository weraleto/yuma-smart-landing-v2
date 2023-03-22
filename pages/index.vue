<template>
  <div id="smart" @click="handleLayoutClick">
    <ProductsHeader
      title="YUMA-SMART"
      subtitle="Микромаркеты с вашим мобильным приложением для покупателей"
      button-text="Начать"
      :button-subtext="['Начните продавать свежую еду и напитки без персонала.', 'Комфорт для посетителей. Прибыль для вас.']"
      picture-alignment="center"
    >
      <div class="smart-header__banner">
        <div class="smart-header__banner--container">
          <div class="smart-header__banner--pic">
            <picture data-not-lazy>
              <source media="(min-width:1400px)" srcset="@/assets/img/smart/banner-p2x.png" data-not-lazy>
              <source media="(min-width:500px)" srcset="@/assets/img/smart/banner-p.png" data-not-lazy>
              <source media="(min-width:0px)" srcset="@/assets/img/smart/banner-m.png" data-not-lazy>
              <img src="@/assets/img/smart/banner-p.png" alt="Баннер микромаркеты" data-not-lazy>
            </picture>
          </div>
          <div class="smart-header__banner--smartphone desktop">
            <video src="@/static/video.mp4" 
              poster="@/static/video-poster.jpg"
              autoplay="autoplay" loop="loop" muted="true" defaultMuted playsinline
            ></video>
          </div>
        </div>
      </div>
      <div class="smart-header__banner--smartphone mobile">
        <video src="@/static/video.mp4" 
          poster="@/static/video-poster.jpg"
          autoplay="autoplay" loop="loop" muted="true" defaultMuted playsinline
        ></video>
      </div>
    </ProductsHeader>

    <main>
      <div class="container">

      <!-- что такое микромаркеты -->
        <section class="micromarket">
          <div class="micromarket__heading">
            <h3 class="title1">
              что такое микромаркеты
            </h3>
            <p class="subtitle">YUMA-SMART – это удобные точки продаж, которые мы полностью подготовим к работе по нашей технологии. Они состоят из трех компонентов.</p>
          </div>
          <!-- <div class="micromarket__cards" ref="cardItems"> -->
          <div class="micromarket__cards">
            <div class="micromarket__cards--item card" v-for="(c, idx) in cards" :key="idx"
              @click="activeCard = activeCard ? null : idx"
              @mouseenter="handleCardMouseEnter(idx)" 
              @mouseleave="handleCardMouseLeave" 
              :class="{'active': activeCard == idx}"
            >
              <div class="micromarket__cards--item__inner">
                  <div class="micromarket__cards--item__front">
                      <h4 class="title2" v-html="c.title"></h4>
                  </div>
                  <div class="micromarket__cards--item__back card-item__back">
                      <p class="text5">{{ c.description }}</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <!-- кому подходит yuma-smart -->
        <section class="block-offset grid-layout for-clients">
          <h2 class="title1 block-offset__title">Кому подходит <span class="no-word-break">YUMA-SMART</span></h2>
            <div class="tabs-wrapper">
              <el-tabs v-model="activeName" :id="id">
                  <el-tab-pane :label="tab.label" :name="String(i)" v-for="(tab, i) in yumaSmartClients" :key="tab.label">
                    <div class="for-clients__item--picture">
                      <picture>
                        <source media="(min-width:768px)" :srcset="require('@/assets/img/smart/'+tab.img)">
                        <source media="(min-width:0px)" :srcset="require('@/assets/img/smart/0.5'+tab.img)">
                        <img :src="require('@/assets/img/smart/'+tab.img)" alt="yuma pos" >
                      </picture>
                    </div>
                    <p class="text4 for-clients__item--text">{{tab.text}}</p>
                    <div class="for-clients__item--steps">
                      <div class="for-clients__item--steps__item" v-for="(it, i) in tab.steps" :key="i">
                        <span>{{i + 1}}</span><p class="text6">{{it}}</p>
                      </div>
                    </div>
                  </el-tab-pane>
              </el-tabs>
            </div>
        </section>

        <!-- оптимальные решения yuma-smart -->
        <section class="block-offset cata-preview">
          <h2 class="title1 block-offset__title">Оптимальные решения <span class="no-word-break">YUMA-SMART</span></h2>
          <div class="cata-preview__container">
            <nuxt-link :to="{name: 'slug', params: {slug: it.slug}}" class="cata-preview__item" v-for="(it, i) in yumaSmartTariffs" :key="it.n">
              <h4 class="cata-preview__item--title subtitle">Тариф №{{ it.n }}</h4>
              <h5 class="text6">{{it.subtitle}}</h5>
              <div class="cata-preview__item--img">
                <img :src="require('/assets/img/smart/tarif-'+(i + 1)+'.jpg')" :alt="`Тариф №${it.n}. ${it.subtitle}`">
              </div>
              <div>
                <h4 class="subtitle-bold">{{ it.price || it.cata_price }}</h4>
                <span class="text5">+ 7% от оборота</span>
              </div>
            </nuxt-link>
          </div>
        </section>

        <!-- YUMA-smart. все включено. -->
        <section class="block-offset all-in grid-layout">
          <h2 class="title1 block-offset__title">YUMA-smart. Все включено.</h2>
          <div class="block-offset__content all-in__container text-blocks plain">
            <div class="text-blocks__col">
              <div class="text-blocks__item">
                <h3 class="subtitle-bold text-blocks__item-subtitle">Мобильное приложение под вашим брендом</h3>
                <p class="text6">С вашей собственной маркетинговой платформой: аналитикой покупательских предпочтений, функциями таргетированной рекламы, системой лояльности с баллами и другими гибкими настройками. 
                </p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle-bold text-blocks__item-subtitle">Учет, склад, инвентаризация</h3>
                <p class="text6">В полном объеме и с управлением через ваш единый личный кабинет. Полноценный учет, инвентаризации и все функции управления складом и заказами, актуальные для сферы общественного питания.</p>
              </div>
            </div>
            <div class="text-blocks__col">
              <div class="text-blocks__item">
                <h3 class="subtitle-bold text-blocks__item-subtitle">Техподдержка 24/7. <br>
                  Выезд в день обращения
                </h3>
                <p class="text6">Мы решаем любые вопросы по торговому оборудованию и ПО, которые возникают у владельцев микромаркетов и покупателей. Дистанционно или с оперативным выездом.</p>
              </div>
              <div class="text-blocks__item">
                <h3 class="subtitle-bold text-blocks__item-subtitle">Оптимальное решение задач</h3>
                <p class="text6">Эквайринг, брендирование торгового оборудования - мы сделаем всё, что вам потребуется. Вы получите полноценный микромаркет, оформленный в вашем стиле и полностью готовый к работе.</p>
              </div>
            </div>
          </div>
        </section>
        
        <!-- FAQ -->
        <section class="faq-section">
          <h3 class="title1">Ответы на вопросы бизнеса</h3>
          <div class="faq-section__content">
            <Collapse :data="faq" />
          </div>
        </section>
      </div>

      <!-- Форма -->
      <LeadForm theme="light" title="НАЧНЕМ? ЭТО ЛЕГКО"
        subtitle="Расскажем. Подключим. Обучим." />
    </main>
  </div>
</template>

<script>
  import { tabsMixin, cardMixin } from '@/mixins/mixins'
  import { yumaSmartFAQ, yumaSmartTargetAudience, yumaSmartTariffs } from '@/assets/dataContent.js'
  import Collapse from '@/components/collapse'
  import ProductsHeader from '@/components/products-header'
  import LeadForm from '@/components/contact-form'
  export default {
    name: 'YumaSmartPage',
    props: {
      id: {
        type: String,
        default: 'smart_tabs'
      }
    },
    components: {
      Collapse,
      ProductsHeader,
      LeadForm
    },
    mixins: [tabsMixin, cardMixin],
    head() {
      return {
        meta: [
          {
            property: 'og:site_name',
            content: '',
            vmid: 'og:site_name',
            hid: 'og:site_name'
          },
          {
            property: 'og:locale',
            content: 'ru_RU',
            vmid: 'og:locale',
            hid: 'og:locale'
          },
          {
            property: 'og:locale:alternate',
            content: 'en_US',
            vmid: 'og:locale:alternate',
            hid: 'og:locale:alternate'
          },
        ]
      }
    },
    data: () => {
      return {
        faq: yumaSmartFAQ,
        yumaSmartClients: yumaSmartTargetAudience,
        yumaSmartTariffs,
        cards: [
          {title: 'торговое оборудование', description: 'Холодильник, витрина и другие варианты на ваш выбор. Мы можем предложить наши модели, или установить все необходимое на ваше торговое оборудование.'},
          {title: ' Модуль yuma<br>smart-box', description: 'Модуль управления YUMA-smartbox — это мини-компьютер, который превратит торговое оборудование в умный микромаркет.'},
          {title: 'программная платформа', description: 'Программная платформа — это мобильное приложение для покупателей и полноценная система учёта, которыми удобно управлять в едином личном кабинете.'},
        ],
        
      }
    },
  }
</script>

<style lang="scss">
  $--products-text-block-row-gap: 62px;

  @import '@/assets/scss/_variables';
  @import '@/assets/scss/_mixins';
  @import '@/assets/scss/components/block-offset';
  @import '@/assets/scss/components/tabs';

  #smart {

    @media screen and (max-width: $--screen-sm-min) {
      .header__promo--text {
        p {
          display: inline;
        }
      }
    }
  }

  .header__top {
    overflow: visible;

    @media screen and (max-width: $--screen-xs-min) {
      flex-direction: column;
      max-height: unset;
    }
  }

  .header__container {
    @media screen and (max-width: $--screen-xs-min) {
      padding-bottom: 151px;
    }
  }

  .smart-header__banner {
    background: url('@/assets/img/smart/banner.png') no-repeat center center;
    min-height: 579px;
    max-height: 579px;
    width: 100%;
    background-size: cover;
    position: relative;

    &--container {
      max-width: 941px;
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &--pic {
      width: 90.43%;
      height: 111.39%;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 5;
      img, picture {
        object-fit: unset;
        height: 100%;
      }
    }
    &--smartphone {
      position: absolute;
      height: 110.53%;
      width: 32.10%;
      border-radius: 40px;
      bottom: 0;
      right: 0;
      z-index: 6;
      transform: translate(0, 4.81%);
      overflow: hidden;
      background-color: #fff;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('@/assets/img/smart/smartphone.png') no-repeat center center;
        background-size: 100% 100%;
      }

      video {
        position: absolute;
        top: -3px;
        left: 50%;
        width: 95%;
        height: 95%;
        transform: translate(-50%, 0);
      }
      &.mobile {
        display: none;
      }
      @media screen and (max-width: $--screen-xs-min) {
        &.desktop {
          display: none;
        }
      }
    }
    @media screen and (max-width: 941px) {
      min-height: 61.53vw;
      max-height: 61.53vw;
      &--smartphone {
        right: 16px;
        border-radius: 4.25vw;

        video {
          top: -0.3vw;
        }
      }
    }
    @media screen and (max-width: $--screen-xs-min) {
      background: url('@/assets/img/smart/banner-bg-mob.png') no-repeat center center;
      background-size: cover;
      min-height: 120.8vw;
      max-height: 120.8vw;

      &--container {
        left: 0;
        transform: none;
      }
      &--pic {
        width: 100%;
        height: 111.39%;
      }
      &--smartphone {
        width: 210px;
        height: 442px;
        min-height: 442px;
        transform: none;
        margin: 32px 0 0;
        right: 0;
        &.mobile {
          border-radius: 29px;
          display: block;
          position: relative;
        }

        video {
          top: -.5vw;
        }
      }
    }
  }

  .all-in__container {
    margin-top: 30px;
  }

  .micromarket {
    margin-top: 100px;
    &__heading {
      text-align: center;
      max-width: 842px;
      margin: 0 auto;

      h3 {
        margin-bottom: 16px;
      }

      @media screen and (max-width: $--screen-sm-min) {
        .subtitle {
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
    &__cards {
      display: flex;
      gap: 40px;
      margin-top: 92px;

      &--item {
        width: 100%;
        min-height: 266px;
        position: relative;

        @include cardTranslate($colorHover: white);

        &__inner {
          position: static;
        }
      }

      @media screen and (max-width: $--screen-md-min) {
        gap: 20px;
      }

      @media screen and (min-width: 661px) and (max-width: $--screen-md-min) {
        .title2 {
          font-size: 22px;
        }
        .text5 {
          font-size: 15px;
        }
      }
      @media screen and (max-width: $--screen-sm-min) {
        margin-top: 32px;
      }
      @media screen and (max-width: 660px) {
        flex-direction: column;
        gap: 16px;
        &--item {
          min-height: 220px;
        }
      }
    }

    @media screen and (max-width: $--screen-sm-min) {
      margin-top: 60px;
    }
  }

  .for-clients {
    &__item {
      &--picture {
        width: 100%;

        img, picture {
          border-radius: 12px;
          @extend %objectFitCover;
        }

        @media screen and (max-width: $--screen-sm-min) {
          height: 48vw;
        }
        @media screen and (max-width: $--screen-xs-min) {
          height: 193px;
        }
      }
      &--text {
        margin: 32px 0;
        max-width: 779px;
      }
      &--steps {
        display: flex;
        gap: 40px;
        &__item {
          display: flex;
          align-items: center;
          gap: 20px;
          flex: 1 1 33%;        
        }
        span {
          @extend %stepNumber;
          display: inline-block;
          min-width: 48px;
          text-align: center;
        }

        @media screen and (max-width: $--screen-sm-min) {
          gap: 0px; 
          flex-direction: column;
        }
      }
    }
  }

  .cata-preview {
    &__container {
      margin-top: 52px;
      display: flex;
      gap: 40px;
      width: 100%;
    }
    &__item {
      @extend %cardArrowTopRight;
      @extend %cardShadow;
      width: 100%;
      padding: 32px 24px;
      text-align: center;
      display: flex;
      flex-direction: column;

      &--title {
        margin-bottom: 12px;
      }

      &--img {
        margin: 24px 0;
        flex: 1;
        img {
          height: 276px;
          object-fit: contain;
        }
      }
    }

    @media screen and (min-width: 671px) and (max-width: $--screen-sm-min) {
      &__item {
        &--img {
          img {
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    @media screen and (max-width: $--screen-sm-min) {
      &__container {
        gap: 20px;
      }
      &__item {
        &--img {
          margin: 8px 0;
        }
      }
    }
    @media screen and (max-width: 670px) {
      &__container {
        flex-direction: column;
      }
    }
  }

  .faq-section {
    padding-bottom: 150px;
    &__content {
      margin-top: 52px;;
      @media screen and (max-width: $--screen-sm-min) {
        margin-top: 24px;
      }
    }
  }
</style>