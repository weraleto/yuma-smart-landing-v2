<template>
  <main class="main">
    <div class="container pb item-page">
      <Breadcrumbs
        :links="[
          {name: 'YUMA Smart', to: {name: 'yuma-smart'}}, 
          {name: 'Тариф №3 Готовый микромаркет', to: {name: 'yuma-smart-slug', params: {slug: 'tariff3-integrated-micromarkets'}}},
          {name: itemData.name, to: {name: 'yuma-smart-integrated-micromarkets-slug', params: {slug: itemData.slug}}}
          ]"
      ></Breadcrumbs>
      <div class="item-page__wrapper">
        <div class="item-page__col">
          <div class="item-page__title--wrapper">
            <h1 class="item-page__title title1 block-offset__title"><span>{{itemData.name}}</span>
            <Hint placement="right-start" trigger-size="24" :content="popoverData" />  
            </h1> 
            
          </div>
          <div class="item-page__pic only-mobile">
            <img :src="require('/assets/img/smart/cata/'+imageName+'.png')" :alt="itemData.slug">
          </div>
          <div class="item-page__main-specs">
            <p class="text6">Тип: {{ itemData.type }}</p>
            <p class="text6">Литраж: {{ itemData.litres }} л</p>

            <div class="item-page__radio">
              <el-radio-group v-model="material">
                <el-radio :label="0">белый</el-radio>
                <el-radio :label="1">нерж. сталь</el-radio>
              </el-radio-group>
            </div>
            <div class="item-page__action">
              <div class="item-page__action--price">
                <h3 class="subtitle-bold">{{itemData.prices[material]}} ₽</h3>
                <span class="text5">+ 7% от оборота</span>
              </div>
              <button class="btn primary text4"
                @click.prevent="$store.commit('setShowModal', {key: 'showApplyForm', val: true})">Заказать</button>
            </div>
          </div>
          <div>
            <div class="table-header" @click="showExtraInfo=!showExtraInfo">
              <span>Характеристики</span>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99999 4.98385C3.9111 4.98385 3.8251 4.96719 3.74199 4.93385C3.65844 4.90052 3.58888 4.85608 3.53333 4.80052L0.466658 1.73385C0.344436 1.61163 0.283325 1.45608 0.283325 1.26719C0.283325 1.0783 0.344436 0.922743 0.466658 0.800521C0.588881 0.678298 0.744436 0.617188 0.933325 0.617188C1.12221 0.617188 1.27777 0.678298 1.39999 0.800521L3.99999 3.40052L6.59999 0.800521C6.72221 0.678298 6.87777 0.617188 7.06666 0.617188C7.25555 0.617188 7.4111 0.678298 7.53332 0.800521C7.65555 0.922743 7.71666 1.0783 7.71666 1.26719C7.71666 1.45608 7.65555 1.61163 7.53332 1.73385L4.46666 4.80052C4.39999 4.86719 4.32777 4.9143 4.24999 4.94185C4.17221 4.96985 4.08888 4.98385 3.99999 4.98385Z" fill="#111111"/>
              </svg>
            </div>
            <el-table v-if="showExtraInfo" :data="itemData.features" stripe :highlight-current-row="false" :fit="true">
              <el-table-column prop="prop_name" label="" class-name="text-bold">
              </el-table-column>
              <el-table-column prop="prop_val" label="" >
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="item-page__col hidden-mobile">
          <img :src="require('/assets/img/smart/cata/'+imageName+'.png')" :alt="itemData.slug">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { yumaSmartCatalogue } from '@/assets/dataContent'
import ElTable from 'element-ui/lib/table'
import ElTableColumn from 'element-ui/lib/table-column'
import ElRadioGroup from 'element-ui/lib/radio-group'
import ElRadio from 'element-ui/lib/radio'
import Breadcrumbs from '@/components/breadcrumbs'
import Hint from '@/components/popover'
export default {
    components: {
        ElTable,
        ElTableColumn,
        ElRadioGroup,
        ElRadio,
        Breadcrumbs,
        Hint
    },
  data: () => {
    return {
      itemData: {},
      material: 0,
      showExtraInfo: false
    }
  },
  asyncData({ params, error }) {
    const itemData = yumaSmartCatalogue.reduce((prev, next, i) => {
      return next.slug === params.slug ? next : prev
    }, {})
    if (!Object.keys(itemData).length) {
      error({ statusCode: 404, message: 'Страница не найдена' })
    }

    return { itemData }
  },
  computed: {
    materialName() {
      return this.material == 0 ? 'LW' : 'LS'
    },
    imageName() {
      let materialName = this.materialName
      if (this.itemData.is_frost) {
          materialName = 'LS'
      }
      return this.itemData.img + materialName.toLowerCase()
    },
    popoverData() {
      return `<div class="text4">В комплекте с оборудованием вы получите:</div>
      <ul>
        <li>Программная платформа YUMA Smart</li>
        <li>Модуль управления YUMA-smartbox</li>
        <li>Сопутствующие компоненты (видеокамера, подсветка, электронный замок и все необходимые датчики, полностью подключенные и готовые к работе)</li>
        <li>Брендирование боковых стен и светового короба - по вашему желанию</li>
      </ul>`
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

$--radio-checked-font-color: $--main-black;
$--radio-input-border: 1px solid #999999;
$--color-text-regular: $--main-black;
$--radio-checked-input-border-color: $--yellow-primary;
$--radio-checked-icon-color: $--yellow-primary;
$--font-size-base: 15px;
$--table-header-font-color: $--main-black;


@import "~element-ui/packages/theme-chalk/src/table";
@import "~element-ui/packages/theme-chalk/src/table-column";
@import "~element-ui/packages/theme-chalk/src/radio";
@import "~element-ui/packages/theme-chalk/src/radio-group";


.el-table .cell {
    word-break: normal;
}

.item-page {

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10.9vw;
    margin-top: 56px;
    @media screen and (max-width: $--screen-md-min) {
      gap: 30px;
    }
    @media screen and (max-width: $--screen-sm-min) {
      display: flex;
    }
  }

  &__title {
    &--wrapper {
      display: flex;
      gap: 11px;
    }
  }

  &__col {
    &:nth-child(2) {
      width: 70%;
    }
    @media screen and (max-width: $--screen-sm-min) {
      width: 100%;
    }
  }

  &__pic {
    width: 100%;
    max-width: 250px;
    margin-top: 8px;
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 4.51vw;

    &--price {
      display: flex;
      flex-direction: column;
      gap: 8px;
       @media screen and (max-width: 360px) {
        min-width: 140px;
        transform: scale(.9) translateX(-5%);
       }
    }

    .btn {
      min-height: 60px;
      max-width: 157px;
    }

    @media screen and (max-width: $--screen-xs-min) {
      justify-content: space-between;
    }
  }

  &__radio {
    margin-top: 8px;
    margin-bottom: 32px;

    label {
      display: block;
      line-height: 28px;
      font-weight: normal;
    }
  }

  &__main-specs {
    margin: 24px 0 18px;
  }

  .table-header {
    padding: 24px 0;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8.28px;
  }

  .el-table th.el-table__cell {
    display: none;
  }
}
</style>