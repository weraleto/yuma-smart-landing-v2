<template>
  <div>
    <main class="main">
        <div class="container pb item-page">
            <div class="block-offset grid-layout">
            <a href="" @click.prevent="$router.go(-1)" class="link-back"><img src="~assets/img/arrow.svg" alt="Назад"></a>
            <h1 class="title2 block-offset__title" v-html="currentItem.name+' '+materialName"></h1>
            <div class="block-offset__content text-blocks only-mobile plain">

                <div class="text-blocks__item text-blocks__icon" style="margin: 0 auto 50px;">
                <img :src="require('../../assets/img/fridges/'+imageName+'.png')" :alt="currentItem.slug">
                </div>

                <div class="text-blocks__col">
                <div class="text-blocks__item">
                    <h3 class="subtitle text-blocks__item-subtitle">Литраж: 500л</h3>
                    <p class="text4" v-if="!currentItem.is_frost">
                        <el-radio-group v-model="material">
                        <el-radio :label="0">белый</el-radio>
                        <el-radio :label="1">нерж. сталь</el-radio>
                        </el-radio-group>
                    </p>
                </div>
                <div class="text-blocks__item call-to-action">
                    <h3 class="subtitle text-blocks__item-subtitle">Цена:<br>от 109 000 ₽</h3>
                    <ApplicationFormTrigger />
                </div>

                </div>
            </div>
            <div class="block-offset__content text-blocks hidden-mobile">
                <div class="text-blocks__col">
                <div class="text-blocks__item text-blocks__icon" v-if="currentItem.img">
                    <img :src="require('../../assets/img/fridges/'+imageName+'.png')" :alt="currentItem.slug">
                </div>

                </div>
                <div class="text-blocks__col">
                <div class="text-blocks__item">
                    <h3 class="subtitle text-blocks__item-subtitle">Литраж: {{currentItem.litres}}л</h3>
                    <p v-if="!currentItem.is_frost">
                        <el-radio-group v-model="material">
                        <el-radio :label="0">белый</el-radio>
                        <el-radio :label="1">нерж. сталь</el-radio>
                        </el-radio-group>
                    </p>
                </div>
                <div class="text-blocks__item">
                    <h3 class="subtitle text-blocks__item-subtitle">Цена:<br>{{currentItem.prices[material]}} ₽</h3>
                    <ApplicationFormTrigger />
                </div>
                </div>
            </div>
            </div>

            <div class="block-offset grid-layout pt0">
                <div class="block-offset__content">
                 <el-table
                    :data="currentItem.features"
                    stripe
                    :highlight-current-row="false"
                    :fit="false"
                    >
                    <el-table-column
                    prop="prop_name"
                    label="Характеристики"
                    class-name="text-bold"
                    min-width="250"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="prop_val"
                    label=""
                    min-width="350"
                    >
                    </el-table-column>
                </el-table>
            </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import ApplicationFormTrigger from '@/components/call-to-action-btn'
import ElTable from 'element-ui/lib/table'
import ElTableColumn from 'element-ui/lib/table-column'
import ElRadioGroup from 'element-ui/lib/radio-group'
import ElRadio from 'element-ui/lib/radio'
export default {
    components: {
        ApplicationFormTrigger,
        ElTable,
        ElTableColumn,
        ElRadioGroup,
        ElRadio
    },
    data() {
      return {
        material: 0,
      }
    },
    computed: {
        currentItem() {
            const slug = this.$route.params.slug
            let data = this.$store.state.fridgeCatalog.reduce((prev, next) => {
                if (next.slug == slug) {
                    return next
                }
                return prev
            }, {})
                return data
        },
        materialName() {
            if (this.currentItem.is_frost) {
                return 'LS'
            }
            return this.material == 0 ? 'LW' : 'LS'
        },
        imageName() {
            return this.currentItem.img + this.materialName.toLowerCase()
        }

    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

$--radio-checked-font-color: $--main-black;
$--color-text-regular: $--main-black;
$--radio-checked-input-border-color: $--yellow-hover;
$--radio-checked-icon-color: $--yellow-hover;
$--font-size-base: 1.125rem;


@import "~element-ui/packages/theme-chalk/src/table";
@import "~element-ui/packages/theme-chalk/src/table-column";
@import "~element-ui/packages/theme-chalk/src/radio";
@import "~element-ui/packages/theme-chalk/src/radio-group";


.el-table .cell {
    word-break: normal;
}

.item-page {
    .block-offset__title {
        grid-column: 3/13;

        @media screen and (max-width: $--screen-md-min) {
            grid-column: 2/13;
        }
        @media screen and (max-width: $--screen-sm-min) {
            grid-column: 1/6;
        }
    }
    .link-back {
        width: 50px;
        transform: rotate(135deg) translate(-70%,20%);
        grid-column: 2/3;
        @media screen and (max-width: $--screen-md-min) {
            grid-column: 1/2;
            width: 30px;
            transform: rotate(135deg) translate(-50%, 40%);
        }
        @media screen and (max-width: $--screen-sm-min) {
            display: none;
        }
    }
}
</style>