<template>
      <main class="main about" @click="handleAboutLayoutClick">
            <section class="section stages">
                <div class="container">
                    <div class="section-title about-title">
                        <h1 class="title1">
                            YUMA. Этапы развития.
                        </h1>
                        <p class="section-subtitle subtitle">
                            YUMA - это экосистема автоматизации ресторанного бизнеса. Мы построили её, опираясь на наш опыт и ваши потребности. С её помощью каждое заведение или целая сеть получит полный набор решений для развития и роста.
                        </p>
                    </div>
                </div>
                <div class="stages__wrapper">
                    <div class="stages__container grid-layout">
                        <div class="stages__item">
                            <div class="stages__item--year title1">
                                <div class="inner">
                                    <span>2003</span>
                                </div>
                            </div>
                            <div class="inner stages__item--inner">
                                <h3 class="subtitle-bold">Начало проектной работы</h3>
                                <p class="text6">Запуск отдельных проектов автоматизации бизнес-процессов для сферы торговли и услуг на международном рынке.</p>
                            </div>
                        </div>
                    </div>
                    <div class="stages__container grid-layout">
                        <div class="stages__item">
                            <div class="stages__item--year title1">
                                <span>2009</span>
                            </div>
                            <div class="inner stages__item--inner">
                                <h3 class="subtitle-bold">Определение ниши</h3>
                                <p class="text6">Концентрация на задачах ресторанного бизнеса и смежной торговли.</p>
                            </div>
                        </div>
                    </div>
                    <div class="stages__container grid-layout">
                        <div class="stages__item">
                            <div class="stages__item--year title1">
                                <div class="inner">
                                    <span>2015</span>
                                </div>
                            </div>
                            <div class="inner stages__item--inner">
                                <h3 class="subtitle-bold">Разработка комплексной системы YUMA</h3>
                                <p class="text6">Начало работы с отдельными российскими предприятиями, готовыми к внедрению инноваций.</p>
                            </div>
                        </div>
                    </div>
                    <div class="stages__container grid-layout">
                        <div class="stages__item">
                            <div class="stages__item--year title1">
                                <span>2018</span>
                            </div>
                            <div class="inner stages__item--inner">
                                <h3 class="subtitle-bold">Фокус развития на российском рынке</h3>
                                <p class="text6">Начат поэтапный выход YUMA на широкий российский рынок.</p>
                            </div>
                        </div>
                    </div>
                    <div class="stages__container grid-layout">
                        <div class="stages__item">
                            <div class="stages__item--year title1">
                                <div class="inner">
                                    <span>2022</span>
                                </div>
                            </div>
                            <div class="inner stages__item--inner">
                                <h3 class="subtitle-bold">Запуск направления бескассовой торговли</h3>
                                <p class="text6">Выпущен новый продукт — микромаркеты YUMA-SMART</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <div class="container">
            <section class="section reliability">
                <div class="section-title about-title">
                    <h2 class="title1">
                        Надёжность<br>
                        технологии YUMA
                    </h2>
                </div>
                <div class="grid-layout">
                        <div class="flip-card__items card-items" ref="cardItems">
                        <div v-for="(item, idx) in reliability" :key="idx" class="card flip-card card-item" 
                            :style="`top: ${ -(60 * idx) }px`"
                            @click="activeCard = activeCard ? null : idx"
                            @mouseenter="handleCardMouseEnter(idx)" 
                            @mouseleave="handleCardMouseLeave" 
                            :class="{'active': activeCard == idx}"
                        >
                            <div class="flip-card-inner card-item__inner">
                                <div class="flip-card-front card-item__front">
                                    <small class="text5">{{item.small}}</small>
                                    <h4 class="title1">{{item.num}}</h4>
                                </div>
                                <div class="flip-card-back card-item__back">
                                    <p class="text5">{{item.back}}</p>
                                </div>
                            </div>
                        </div>
            </div>
                </div>
            </section>
            <section class="section sertification">
                <div class="section-title about-title">
                    <h2 class="title1">
                        Сертификация
                    </h2>
                </div>
                <div class="sertification__container grid-layout">
                    <div class="sertification__card" @click="sertIdx=0">
                        <img src="/sert/9001-thumb.jpg" alt="ISO 9001">
                    </div>
                    <div class="sertification__card" @click="sertIdx=1">
                        <img src="/sert/27001-thumb.jpg" alt="ISO 27001">
                    </div>
                </div>
                <client-only>
                    <div @click="handleGalleryClick">
                        <LightGallery
                            :images="['/sert/iso-9001.png', '/sert/iso-27001.png']"
                            :index="sertIdx"
                            :disable-scroll="true"
                            background="rgba(42, 42, 42, 0.9)"
                            @close="sertIdx = null"
                            ref="sertGallery"
                            />
                    </div>
                </client-only>
            </section>
        </div>
        <section class="block-offset grid-layout">
          <h2 class="title1 container block-offset__title">Наши партнеры</h2>
          <Partners directory-name="partners" file-format="svg" :length="7" />
        </section>
        <div class="container">
            <section class="section expos">
                <div class="section-title about-title">
                    <h2 class="title1">
                        Наше участие в отрасли
                    </h2>
                </div>
                <div class="expos__container" ref="popoverContainer">
                    <div class="expos__card" v-for="(e, i) in data" 
                        :key="e.title"
                        @click="openPopoverCard"
                        :data-idx="i"
                    >
                        <div class="expos__card--img">
                            <img class="hidden-mobile" :src="require(`../assets/img/expos/${e.img}`)" :alt="`${e.title}. ${e.sub}`">
                            <img class="only-mobile" :src="require(`../assets/img/expos/full-${e.img}`)" :alt="`${e.title}. ${e.sub}`">
                        </div>
                        <div class="expos__card--text">
                            <h3 class="title1">
                                {{e.title}}
                            </h3>
                            <h4 class="subtitle">
                                {{e.sub}}
                            </h4>
                            <p class="text6">
                                {{e.text}}
                            </p>
                        </div>
                    </div>
                    <div class="expos__popover" 
                        :class="{'is_active': activeEl, 'is_visible': visibleEl}"
                        ref="popoverComponent"
                    >
                        <div class="expos__popover--content" :class="{'visible': contentVisible}">
                            <div class="expos__popover--close" @click="hidePopoverCard"></div>
                            <div ref="popoverCard" class="expos__popover--heading__wrapper">
                                <div class="expos__popover--heading">
                                    <h4 class="subtitle">{{activeElData.sub}}</h4>
                                    <p class="text6 hidden-mobile" v-html="activeElData.textFull"></p>
                                </div>
                            </div>
                            <div ref="popoverCard1" class="expos__popover--text">
                                <div class="only-mobile">
                                    <p v-html="activeElData.textFull"></p>
                                </div>
                                <template v-if="activeElData.hasVideo">
                                    <div class="video">
                                        <iframe src="https://player.vimeo.com/video/772491934?h=c2a309f624&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="video">
                                        <iframe src="https://player.vimeo.com/video/772390935?h=fbd8cdf38b&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </template>
                                <template v-else>
                                    <div>
                                        <img src="~assets/img/expos/nov-1.jpg" :alt="activeElData.sub">
                                    </div>
                                    <div>
                                        <img src="~assets/img/expos/nov-2.jpg" :alt="activeElData.sub">
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </main>
</template>

<script>
import {popoverMixin, cardMixin} from '@/mixins/mixins'
import Partners from '@/components/partners'

export default {
    head() {
        return {
            title: 'Экосистема автоматизации ресторанного и торгового бизнеса YUMA',
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Индивидуальные решения для запуска и развития бизнеса, роста доходов и продвижения вашего заведения или целой сети. Российский разработчик с успешным международным опытом. Сервисная поддержка и маркетинговая платформа в комплекте любого решения.'
                },
                {
                    property: 'og:title',
                    content: 'Экосистема автоматизации ресторанного и торгового бизнеса YUMA',
                    vmid: 'og:title',
                    hid: 'og:title'
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    vmid: 'og:description',
                    content: 'Индивидуальные решения для запуска и развития бизнеса, роста доходов и продвижения вашего заведения или целой сети. Российский разработчик с успешным международным опытом. Сервисная поддержка и маркетинговая платформа в комплекте любого решения.'
                },
            ]
        }
    },
    mixins: [popoverMixin, cardMixin],
    components: {Partners},
    data: () => {
        return {
            reliability: [{
                'num': '1 миллион',
                'small': 'Скачиваний мобильных приложений наших клиентов',
                'back': 'Мы запускаем мобильные приложения, которыми покупатели действительно активно пользуются.'
                },
                {
                'num': '150 тысяч',
                'small': 'Операций покупок у наших клиентов каждый день',
                'back': 'Мы работаем на платформе Яндекс.Облако, способной стабильно и без перебоев поддерживать постоянно высокую нагрузку.'
                },
                {
                'num': '3 ТЫСЯЧИ',
                'small': 'Автоматизированных заведений по всей России',
                'back': 'На платформе YUMA успешно работают предприятия сферы общественного питания всех типов, форматов и масштабов.'
                },
                {
                'num': 'более 12',
                'small': 'Стран мира, где работает технология YUMA',
                'back': 'Россия, Беларусь, Казахстан, Великобритания, Ирландия, Швейцария, Нидерланды, Индия, ОАЭ, ЮАР, США, Австралия и другие.'
                },
            ],
            data: [
                {
                    title: 'Октябрь 2022',
                    img: 'okt-22.png',
                    sub: 'Международная выставка "ПИР Экспо - 2022"',
                    text: 'Делегаты YUMA представили экосистему автоматизации в пространстве Digital Hub',
                    hasVideo: true,
                    textFull: 'Наши специалисты наглядно продемонстрировали гостям, как с помощью комплексной системы автоматизации YUMA-POS эффективно настроить работу заведения. От кассы и кухни до мобильного приложения и доставки.</br></br>А также показали на практике новый формат торговли и продвижения — умные микромаркеты YUMA-SMART.'
                },
                {
                    title: 'Ноябрь 2022',
                    img: 'nov-22.png',
                    sub: 'Конференция "INTEKPROM HORECA 2022"',
                    text: 'Специалисты YUMA делились решениями ключевых вопросов развития бизнеса',
                    textFull: 'Отраслевое меропориятие, на котором участники из YUMA делились решениями ключевых задач развития ресторанного бизнеса в актуальных реалиях.</br></br>Собеседниками  наших специалистов стали представители гостинично-ресторанной сферы России и стран ближнего зарубежья, представители научно-исследовательских центров, консалтинговых компаний и отраслевых ассоциаций.'
                },
            ],
            sertIdx: null,
            activeEl: null,
            visibleEl: null,
            contentVisible: false
        }
    },
    methods: {
        handleGalleryClick(e) {
            if (e.target.tagName.toLowerCase() != 'img') {
                this.$refs.sertGallery.close()
            }
        },
        openPopoverCard(e) {
            const el = e.target.closest('.expos__card')
            let popoverEl = this.$refs.popoverComponent
            const windowWidth = window.innerWidth
            let isMobile = windowWidth <= 767
            if (isMobile) {
                this.visibleEl = this.activeEl = el.dataset.idx
                this.setElProperty(popoverEl, 'zIndex', 10001)
                this.$store.commit('setShowModal', {key: 'otherModalsOpened', val: true})
                
                setTimeout(()=>{
                    this.setElProperty(popoverEl, 'maxHeight', window.innerHeight, 'px')
                    this.setElProperty(popoverEl, 'maxWidth', windowWidth, 'px')
                    this.setElProperty(popoverEl, 'top', 0, 'px')
                    this.setElProperty(popoverEl, 'left', 0, 'px')

                    this.setElProperty(popoverEl.firstElementChild, 'paddingTop', 
                        popoverEl.querySelector('.expos__popover--heading__wrapper').offsetHeight,
                        'px'
                    )

                    this.activeCategoryCard = this.activeElData.tabs[0].title
                    popoverEl.addEventListener('touchmove', this.handleMultipleCardsScroll)
                    popoverEl.addEventListener('scroll', this.handleMultipleCardsScroll)

                }, 100)

            } else {
                this.setElProperty(popoverEl, 'top', el.offsetTop, 'px')
                this.setElProperty(popoverEl, 'left', el.offsetLeft, 'px')
                this.setElProperty(popoverEl, 'maxWidth', el.clientWidth+2, 'px')
                this.setElProperty(popoverEl, 'maxHeight', el.clientHeight+2, 'px')
                this.setElProperty(popoverEl, 'zIndex', 9999)
                this.params = [el.offsetTop, el.offsetLeft, el.clientWidth+2, el.clientHeight+2]
    
                this.visibleEl = this.activeEl = el.dataset.idx
                
                setTimeout(()=>{
                    this.setElProperty(popoverEl, 'maxHeight', 300, 'vh')
                    this.setElProperty(popoverEl, 'maxWidth', el.parentElement.clientWidth+2, 'px')
                    this.setElProperty(popoverEl, 'top', 0, 'px')
                    this.setElProperty(popoverEl, 'left', 0, 'px')
                }, 100)
                setTimeout(()=>{
                    // containerHeight = sum of two cards + top and bottom container paddings + gap between cards
                    let containerHeight = [this.$refs.popoverCard, this.$refs.popoverCard1].map((it)=>{
                        return it.offsetHeight 
                    })
                    containerHeight = Math.max(...containerHeight) + (windowWidth <= 1024 ? 40 : 80)
                    this.setElProperty(popoverEl.parentElement, 'minHeight', containerHeight, 'px')
                }, 350)
            }
            setTimeout(()=>{
                this.contentVisible = true
            }, 200)
        },
        hidePopoverCard(e) {
            let [top, left, width, height] = this.params
            let popoverEl = this.$refs.popoverComponent
            this.contentVisible = false
            this.setElProperty(popoverEl, 'top', top, 'px')
            this.setElProperty(popoverEl, 'left', left, 'px')
            this.setElProperty(popoverEl, 'maxWidth', width, 'px')
            this.setElProperty(popoverEl, 'maxHeight', height, 'px')
            document.querySelector('.expos__container').style = {}

            this.params = []
                        
            setTimeout(()=>{
                this.activeEl = null
                this.$store.commit('setShowModal', {key: 'otherModalsOpened', val: false})
                popoverEl.firstElementChild.style = null
            }, 200)
            setTimeout(()=>{
                this.visibleEl = null
                this.setElProperty(popoverEl, 'zIndex', -1)
            }, 250)
        },
        handleAboutLayoutClick(e){
            this.handleLayoutClick(e)
            if (!this.$refs.popoverContainer.contains(e.target)) {
                this.hidePopoverCard()
            }
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/scss/_variables.scss';
    @import '@/assets/scss/_mixins.scss';

    .about {
        &-title {
            margin-bottom: 90px;
            @media screen and (max-width: $--screen-md-min) {
                margin-bottom: 50px;
            }
        }
    }

    .stages {
        padding-top: 100px;
        &__container {
            gap: 0 40px;
            // justify-items: center;
            display: grid;

            &:nth-child(2n-1) {
                
                .stages__item {
                    grid-column: 1/8;
                    align-items: flex-end;
                }
                .stages__item--year {
                    justify-content: flex-end;

                    &::after {
                        width: calc(100% - 290px);
                    }
                    span::after {
                        width: 100%;
                    }
                }
            }
            &:nth-child(2n) {
                .stages__item {
                    grid-column: 9/13;
                }
                .stages__item--year {

                    &::after {
                        width: 100%;
                    }
                }
            }
            @media screen and (max-width: $--screen-sm-min) {
                margin-bottom: 32px;
                padding-left: 16px;
                padding-right: 16px;
                &:nth-child(2n-1) {
                    .stages__item {
                        grid-column: 1/4;
                    }
                    .stages__item--year {
                        &::after {
                            width: 100%;
                            transform: translateX(-90%);
                        }
                    }
                }
                &:nth-child(2n) {
                    .stages__item {
                        grid-column: 3/6;
                    }
                    .stages__item--year {
                        &::after {
                            width: calc(100% + 16px);
                        }
                    }
                }
            }
            @media screen and (max-width: $--screen-xs-min) {
                &:nth-child(2n-1) {
                    .stages__item {
                        grid-column: 1/5;
                    }
                }
                &:nth-child(2n) {
                    .stages__item {
                        grid-column: 2/6;
                    }
                }
            }
        }
        &__item {
            display: flex;
            flex-direction: column;
            width: 100%;

            &--year {
                position: relative;
                width: 100%;
                display: flex;
                margin-bottom: 12px;

                span {
                    display: inline-block;
                    position: relative;
                }
                span::after, &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: 1px;
                    background-color: $--gray-medium;
                }
            }
            &--inner {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .inner {
                max-width: 290px;
                width: 100%;
                @media screen and (max-width: $--screen-sm-min) {
                    max-width: unset;
                }
            }

            @media screen and (max-width: $--screen-xs-min) {
                .subtitle {
                    font-size: 16px;
                }
            }
        }

        @media screen and (max-width: $--screen-sm-min) {
            padding-top: 50px;
        }
    }

    .reliability {
        @media screen and (min-width: calc($--screen-xs-min + 1px)) {
            padding-bottom: 0;
        }
    }

    .sertification {
        &__container {
            gap: 40px;

            @media screen and (max-width: $--screen-sm-min) {
                gap: 10px;
                grid-template-columns: repeat(6, 1fr);
            }

        }
        &__card {
            min-height: 418px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:nth-child(2n-1) {
                grid-column: 4/7;
            }
            &:nth-child(2n) {
                grid-column: 7/10;
            }

            @media screen and (max-width: $--screen-md-min) {
                min-height: 40.8vw;
                &:nth-child(2n-1) {
                    grid-column: 3/7;
                }
                &:nth-child(2n) {
                    grid-column: 7/11;
                }
            }

            @media screen and (max-width: $--screen-sm-min) {
                &:nth-child(2n-1) {
                    grid-column: 1/4;
                }
                &:nth-child(2n) {
                    grid-column: 4/7;
                }
            }
            @media screen and (max-width: $--screen-xs-min) {
                &:nth-child(2n-1), &:nth-child(2n) {
                    grid-column: 1/7;
                }
            }
        }
    }

    .expos {
        &__container {
            @extend %popoverContainer;

            display: flex;
            gap: 40px;

            @media screen and (max-width: $--screen-sm-min) {
                flex-wrap: wrap;
            }
        }
        &__card {
            @include cardArrow(33px);
            @extend %cardShadow;
            flex: 0 1 50%;
            min-height: 200px;
            padding: 33px 77px 33px 33px;

            display: flex;
            align-items: center;
            gap: 24px;

            &--text {
                flex: 1 1 62%;

                h3 {
                    margin-bottom: 20px;
                }

                h4 {
                    margin-bottom: 12px;
                }
            }

            &--img {
                flex: 0 1 172px;
                
                img {
                    object-fit: contain;
                    border-radius: 8px;
                }
            }

            @media screen and (max-width: $--screen-lg-min) {
                padding: 22px 45px 22px 22px;

                &::after {
                    right: 22px;
                    bottom: 22px;
                }
            }

            @media screen and (max-width: $--screen-md-min) {
                flex-direction: column;
            }

            @media screen and (max-width: $--screen-md-min) and (min-width: calc($--screen-xs-min + 1px)) {
                &--img {
                    flex: 0 1 150px;
                    img {
                        height: 166px;
                    }
                }

                &--text h3 {
                    font-size: 30px;
                }
            }

            @media screen and (max-width: $--screen-sm-min) {
                flex: 1 0 100%;
            }
            @media screen and (max-width: $--screen-xs-min) {
                padding: 16px 16px 61px;
                &::after {
                    right: 16px;
                    bottom: 16px;
                }
            }
            
        }

        &__popover {
            @include popover;

            &--content {
                display: flex;
                gap: 32px;

                padding-right: 49px;

                @media screen and (max-width: $--screen-lg-min) {
                    padding-right: 19px;
                }
                @media screen and (max-width: $--screen-sm-min) {
                    padding-right: 0px;
                }
            }

            &--text {
                display: flex;
                gap: 32px;

                & > div.video {

                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                    flex: 1 1 50%;

                    @media screen and (min-width: calc($--screen-md-min + 1px)) {
                        min-height: 545.625px;
                    }
                    @media screen and (min-width: calc($--screen-sm-min + 1px)) and (max-width: $--screen-md-min) {
                        min-height: 37.89vw;
                    }
                    @media screen and (max-width: $--screen-sm-min) {
                        flex: 1 0 auto;
                        min-height: 545.625px;
                    }
                    @media screen and (max-width: $--screen-xxs-min) {
                        min-height: calc((100vw - 32px) * 1.81);
                    }
                }

                @media screen and (max-width: $--screen-sm-min) {
                    flex-direction: column;
                }
            }

            @media screen and (max-width: $--screen-lg-min) {
                &.is_active {
                    padding-right: 45px;
                }
            }
            @media screen and (max-width: $--screen-sm-min) {
                &.is_active {
                    padding-right: 20px;
                }
            }
        }
    }

    .flip-card__items {
        display: grid;
        grid-auto-flow: column;
        grid-column: 3/12;
        grid-template-columns: repeat(9, 1fr);

        @media screen and (max-width: $--screen-md-min) {
            grid-column: 2/13;
        }
        @media screen and (max-width: $--screen-xs-min) {
            grid-column: 1/6;
        }
    }

    .card-item {
        height: 300px;
        background-color: transparent;
        border-radius: 20px;
        width: 100%;
        max-width: 510px;
        position: relative;
        transition: all .3s ease;

        cursor: pointer;

        @include cardTranslate($colorHover: white);

        @media screen and (max-width: $--screen-md-min) {
            height: 25vw;
        }

        @media screen and (max-width: $--screen-sm-min) {
            height: 35vw;
        }

        @media screen and (max-width: $--screen-xs-min) {
            position: static;
            margin-bottom: 10px;
            height: calc(91.4vw * 0.55);
        }

        &:nth-child(2n-1) {
            grid-column: 1/6;

            @media screen and (max-width: $--screen-sm-min) {
                grid-column: 1/7;
            }

            @media screen and (max-width: $--screen-xs-min) {
                grid-column: 1/10;
            }
        }

        &:nth-child(2n) {
            grid-column: 5/10;
            justify-self: end;

            @media screen and (max-width: $--screen-sm-min) {
                grid-column: 4/10;
            }

            @media screen and (max-width: $--screen-xs-min) {
                grid-column: 1/10;
            }
        }

        small {
            position: absolute;
            top: 20px;
            left: 10px;
            right: 10px;
            text-align: center;

            @media screen and (max-width: $--screen-md-min) {
                font-size: .875rem;
            }
        }

    }

    .light-gallery img {
        width: inherit;
    }
</style>