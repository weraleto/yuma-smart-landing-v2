<template>
  <header class="header">
      <div class="container header__container">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
        <div class="header__promo">
          <div class="header__promo--text">
            <p v-for="(line, i) in buttonSubtext"
                :key="i"
                class="text4"
            >
                {{line}}
            </p>
          </div>
          <button class="btn primary large text4" 
                  @click.prevent="$store.commit('setShowModal', {key: 'showApplyForm', val: true})"
          >{{buttonText}}</button>
        </div>
      </div>
      <div class="header__top" :style="{'alignItems': pictureAlignment}">
        <slot />
      </div>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        buttonSubtext: {
            type: Array,
            default: () => []
        },
        buttonText: {
            type: String,
            default: ''
        },
        pictureAlignment: {
          type: String,
          default: 'flex-end'
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';

.header {
    margin-top: 118px;
    margin-bottom: 50px;

    &__top {
      display: flex;
      justify-content: center;
    }
    h1 {
      font-size: 134px;
      text-transform: uppercase;
      font-weight: 800;
      margin-bottom: 24px;

      @media screen and (max-width: $--screen-lg-min) {
        font-size: 12.5vw;
      }
      @media screen and (max-width: $--screen-xs-min) {
        margin-top: calc(32px - .2em);
        margin-bottom: 12px;
      }
    }

    h2 {
      font-weight: 500;
      font-size: 56px;
      text-transform: uppercase;

      @media screen and (max-width: $--screen-md-min) {
        font-size: 7.46vw;
        line-height: 1.42em;
      }
    }

    &__container {
      padding-bottom: 150px;
      @media screen and (max-width: $--screen-sm-min) {
        padding-bottom: 72px;
      }
    }

    &__promo {
      margin: 60px auto 0;
      text-align: center;

      &--text {
        margin-bottom: 28px;
      }

      .btn {
        margin: auto;
      }
    }

    @media screen and (max-width: $--screen-sm-min) {
      margin-top: 53px;
    }
    @media screen and (max-width: $--screen-xs-min) {
      margin-bottom: 32px;
    }
  }
</style>