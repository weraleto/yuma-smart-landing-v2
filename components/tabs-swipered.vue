<template>
    <div class="tabs-wrapper tabs-swipered">
        <el-tabs v-model="activeName" :id="id">
            <el-tab-pane :label="tab.label" :name="String(i)" v-for="(tab, i) in tabsContent" :key="tab.label">
                <SwiperWithPic 
                    :i="String(i)" 
                    :tab="tab" 
                    :image-folder-name="imageFolderName" 
                    :swiper-options="getSwiperConfiguration(tab.type, String(i))"
                    :picture-bordered="true"
                />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import { tabsMixin } from '@/mixins/mixins'
    
    import SwiperWithPic from '@/components/swiper-with-pic'
    export default {
        mixins: [tabsMixin],
        props: {
            imageFolderName: String,
            tabsContent: {
                type: Array,
                default: () => []
            },
        },
        components: {
            SwiperWithPic
        },
        data: () => {
            return {
                swiperOptionsBase : {
                    spaceBetween: 40,
                    breakpointsBase: 'container',
                    breakpoints: {
                        0: {
                            enabled: false,
                            allowTouchMove: false,
                            allowSlideChange: false,
                        },
                        768: {
                            enabled: true,
                            allowTouchMove: true,
                            allowSlideChange: true
                        }
                    }
                },
                swiperOptionsHorizontal: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                swiperOptionsVertical: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            }
        },
        methods: {
            getSwiperConfiguration(type, idx) {
                let config = type == 'horizontal' ? this.swiperOptionsHorizontal : this.swiperOptionsVertical;
                return {
                    ...this.swiperOptionsBase,
                    ...config,
                    navigation: {
                        prevEl: `.tabs-swiper__navigation--prev-${idx}`,
                        nextEl: `.tabs-swiper__navigation--next-${idx}`
                    }
                }
            },
        }
    }
</script>

<style lang="scss">
@import '@/assets/scss/components/tabs';

.tabs-swipered {
    .el-tabs__header {
        @include container;
        max-width: $--container-width-default;
    }

    .tabs-swiper {
        &__container {
            &--horizontal, &--vertical {
                
                @include container;
                max-width: $--container-width-default;
            }
        }
    }
    .tab-content {
        &--vertical {
            @include container;
            max-width: $--container-width-default;
        }
    }
    .tab-picture {
        @include container;
        max-width: $--container-width-default;

        &--horizontal {
            margin-bottom: 40px;
            @media screen and (max-width: $--screen-lg-min) {
                &.tab-picture.has-border-radius  {
                    picture, img {
                        border-radius: 0;
                    }
                }
            }
        }


        @media screen and (max-width: $--screen-md-min) {
            height: 35vw;
            width: 100vw;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;

            &--vertical {
                position: relative;
                left: -16px;

                &.tab-picture.has-border-radius  {
                    picture, img {
                        border-radius: 0;
                    }
                }
            }

            img, picture, source {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        @media screen and (max-width: $--screen-xs-min) {
            height: 51.73vw;

            &--horizontal {
                img, picture, source {
                    height: 100%;
                    width: auto;
                }
            }
        }
    }
}
</style>