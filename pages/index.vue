<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="yuma-smart">
          <YumaSmart />
        </div>
        <div class="header__title title1">
          <div class="header__title--line">
            <span>Ваши </span> <span>микромаркеты</span>
          </div>
          <div class="grid-layout">
            <span>с&nbsp;</span> <span class="header__title--personal">персональным</span>
          </div>
          <div class="header__title--line end-separated">
            <span>
              мобильным 
              <span class="only-desktop">приложением</span>
            </span>
            <!-- <span class="hidden-desktop">приложением</span> -->
          </div>
        </div>

        <Infoblock button_type="primary" button_text="Начать" text="Продавайте свежую еду и напитки без персонала. Запускайте акции и программы лояльности через приложение." />
      </div>

    </header>
    
    
    <main class="main">
    <div class="container pb">
        <div class="block-offset grid-layout">
            <h2 class="title2 block-offset__title">кому подходит
                <span class="no-word-break">yuma-smart</span></h2>
            <div class="block-offset__content">
              <Collapse :data="who_needs_items" :active_default="1" />
            </div>
        </div>

        <div class="block-offset grid-layout">
            <h2 class="title2 block-offset__title">оптимальные решения 
                <span class="no-word-break">yuma-smart</span></h2>

                <div class="translated-cards">
                    <div v-for="(i, idx) in descisions" :key="idx" class="card translated-card__item {% if forloop.counter == 15 %} active {% else %} inactive {% endif %}">
                        <div class="translated-card__item--front">
                            <h5 class="subtitle">{{i.title}}</h5>
                            <div class="translated-card__item--icon">
                              <img :src="require('../assets/img/'+i.img+'.svg')" :alt="i.title">
                            </div>
                            <div class="translated-card__item--bottom">
                                <small>Вам подойдет</small>
                                <p class="subtitle">{{i.name}}<br>{{i.price}}</p>

                                <small>{{i.subtext}}</small>
                            </div>
                        </div>
                       <div class="translated-card__item--overlay">
                            <div class="translated-card__item--description">
                              <div v-for="d in i.description" :key="d.title" class="translated-card__item--description-group">
                                  <h4 class="subtitle">
                                      {{d.title}}
                                  </h4>
                                  <p>{{d.text}}</p>
                              </div>
                            </div>
                            <a href="#" class="btn large primary">Заказать</a>
                        </div>
                    </div>
                </div>

        </div>

        <div class="block-offset grid-layout">
            <h2 class="title2 block-offset__title">сервис <span class="no-word-break">yuma-smart.</span>
                продуманный.
                бесплатный.</h2>
            <div class="block-offset__content text-blocks plain">
                <div class="text-blocks__col">
                    <div class="text-blocks__item">
                        <h3 class="subtitle text-blocks__item-subtitle">Мобильное приложение под вашим брендом</h3>
                        <p class="text4">С вашей собственной маркетинговой платформой: аналитикой покупательских
                            предпочтений, функциями таргетированной рекламы, системой лояльности с баллами и другими
                            гибкими настройками. Всё включено.</p>
                    </div>
                    <div class="text-blocks__item">
                        <h3 class="subtitle text-blocks__item-subtitle">Техподдержка 24/7. Выезд в день обращения</h3>
                        <p class="text4">Мы решаем любые вопросы по торговому оборудованию и ПО, которые возникают у
                            владельцев микромаркетов и покупателей. Дистанционно или с оперативным выездом.</p>
                    </div>
                </div>
                <div class="text-blocks__col">
                    <div class="text-blocks__item">
                        <h3 class="subtitle text-blocks__item-subtitle">Учет, склад, инвентаризация</h3>
                        <p class="text4">В полном объеме и с управлением через ваш единый личный кабинет. Полноценный
                            учет, инвентаризации и все функции управления складом и заказами, актуальные для сферы
                            общественного питания.</p>
                    </div>
                    <div class="text-blocks__item">
                        <h3 class="subtitle text-blocks__item-subtitle">Полностью готовое решение</h3>
                        <p class="text4">Эквайринг, фискализация, брендирование торгового оборудования - всё это сделаем
                            мы. Вы получите полноценный микромаркет, оформленный в вашем стиле и полностью готовый к
                            работе.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>    
    <LeadForm theme="dark" title="Получите скидку 5%" subtitle="на любое торговое оборудование" small="Акция действует до 01/05/2022" />
        

    <div class="container pb-small">
        <div class="block-offset grid-layout">
            <h2 class="title2 block-offset__title">Ответы на
                вопросы бизнеса</h2>
            <div class="block-offset__content">
              <Collapse :data="faq" extra_class="faq-item" />
            </div>
        </div>
        <div class="block-offset grid-layout">
            <h2 class="title2 block-offset__title">надежность
                ТЕХНОЛОГИИ YUMA</h2>
            <div class="block-offset__content">
                <div class="flip-card__items card-items">
                  <div v-for="(item, idx) in reliability" :key="idx" class="card flip-card card-item" 
                    :style="`top: ${ -(39 * idx) }px`"
                  >
                      <div class="flip-card-inner card-item__inner">
                          <div class="flip-card-front card-item__front">
                              <small>{{item.small}}</small>
                              <h4 class="title2">{{item.num}}</h4>
                          </div>
                          <div class="flip-card-back card-item__back">
                              <p>{{item.back}}</p>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>


    </div>
    <div class="block-offset grid-layout pt0 pb">
        <h2 class="title2 container block-offset__title">партнеры <span class="no-word-break">yuma-smart</span>
            в россии</h2>
        <Partners />
    </div>
</main>
  </div>
</template>

<script>
import Infoblock from '@/components/infoblock'
import LeadForm from '@/components/contact-form'
import Collapse from '@/components/collapse'
import Partners from '@/components/partners'
import YumaSmart from '@/components/svg/yuma-smart'
export default {
  name: 'IndexPage',
  components: {
    Infoblock,
    YumaSmart,
    LeadForm,
    Collapse,
    Partners
  },
  data: () => {
    return {
      faq: [{
          'title': 'Что с эквайрингом, ОФД и т.д.?',
          'text': 'YUMA-SMART — полностью готовое решение со всеми необходимыми для продаж подключениями. Всё, что вам нужно — место для установки, доступ к мобильному интернету и электричеству.'
        },
        {
          'title': 'Как я могу быть уверен, что с торговым оборудованием все в порядке?',
          'text': 'Приобретаемое у нас торговое оборудование оснащено датчиками контроля температуры, положения дверей и т.д. Все статусы, важные для его нормальной работы, вы будете видеть в своем личном кабинете.'
        },
        {
          'title': 'Что если покупатель не сможет открыть холодильник?',
          'text': 'При возникновении любых вопросов по работе оборудования или ПО покупатель 24/7 сможет обратиться к нам на линию поддержки, и мы решим любой его вопрос.'
        },
        {
          'title': 'Захочет ли покупатель скачать мобильное приложение?',
          'text': 'Микромаркеты YUMA-SMART — удобное решение для постоянных покупателей. А благодаря вашему приложению они получат доступ к акциям и привилегиям (баллы и др.), которые вы решите запустить. Им это действительно понравится. Лучшее доказательство — количество скачиваний приложений наших клиентов.'
        },
        {
          'title': 'Может ли недобросовестный покупатель взять товаров больше, чем оплатит?',
          'text': 'Каждый ваш покупатель идентифицируется через мобильное приложение по номеру телефона и банковской карте. С момента авторизации идет видеозапись микромаркета. Взять товар бесконтрольно невозможно.'
        },
        {
          'title': 'Что произойдет, если у покупателя не окажется денег на привязанной карте?',
          'text': 'Приложение позволяет быстро и просто привязать к нему другое платежное средство (банковскую карту, Apple Pay, Google Pay).'
        }
      ],
      who_needs_items: [{
          'title': 'Производителям готовой еды',
          'text': 'У вас уютное кафе, ресторанная сеть, суши-бар или иное кулинарное производство?',
          'steps': ['Автоматизируем продажу блюд "навынос".', 'Запустим магазины без кассиров и с мобильным приложением.', 'Привлекайте больше постоянных гостей, настраивая акции.']
        },
        {
          'title': 'Торговым предприятиям',
          'text': 'У вас розничный магазин, целая торговая сеть или другой формат ритейла?',
          'steps': ['Организуем  новые точки продаж 24/7 в шаговой доступности.', 'Это будут магазины будущего без продавцов и кассиров.', 'Запускайте акции прямо в мобильном приложении для покупателей.']
        },
        {
          'title': 'Организациям в сфере отдыха и досуга',
          'text': 'У вас отель, гостиница, хостел, вы занимаетесь массовыми мероприятиями или другим направлением, где актуально кормить посетителей?',
          'steps': ['Обеспечим круглосуточную автоматизированную зону питания для ваших гостей.', 'Запустим ваше брендированное мобильное приложение.', 'Повышайте лояльность посетителей, используя акции и привилегии.']
        },
        {
          'title': 'У вас другая сфера?',
          'text': 'Офисный центр, спортивный комплекс, учебное заведение, административное здание или иное предприятие, в котором требуется организация питания?',
          'steps': ['Подключим микромаркеты самообслуживания со свежей готовой едой.', 'Создадим ваше мобильное приложение с акциями и программами лояльности', 'Привлекайте покупателей и постоянно увеличивайте ваш доход.']
        },
      ],
      reliability: [{
          'num': '1 миллион',
          'small': 'Скачиваний мобильных приложений наших клиентов',
          'back': 'Мы запускаем мобильные приложения, которыми покупатели действительно активно пользуются.'
        },
        {
          'num': '100 тысяч',
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
          'back': 'Великобритания, Ирландия, США, Австралия, Швейцария, Нидерланды, Индия, ОАЭ, ЮАР, Белоруссия, Казахстан, Украина, Россия.'
        },
      ],
      descisions: [{
          'title': 'Решение под ключ',
          'name': 'Готовый микромаркет',
          'price': 'от 90 тыс. ₽',
          'subtext': '+ 7% от оборота',
          'img': 'Micromarket',
          'description': [{
              'title': 'Торговое оборудование',
              'text': 'Холодильник, витрина и другие варианты на ваш выбор.'
            },
            {
              'title': 'Модуль управления',
              'text': 'Мини-компьютер, который превратит ваше торговое оборудование в умный микромаркет'
            },
            {
              'title': 'Платформа YUMA-SMART',
              'text': 'Mобильное приложение для покупателей и полноценная система учета, которыми вы управляете через единый личный кабинет.'
            }
          ]
        },
        {
          'title': 'Подключим ваш обычный холодильник',
          'name': 'Модуль и Программа',
          'price': '20 тыс. ₽',
          'subtext': '+ 7% от оборота',
          'img': 'Mod+Program',
          'description': [{
              'title': 'Модуль управления',
              'text': 'Мини-компьютер, который превратит ваше торговое оборудование в умный микромаркет'
            },
            {
              'title': 'Платформа YUMA-SMART',
              'text': 'Mобильное приложение для покупателей и полноценная система учета, которыми вы управляете через единый личный кабинет.'
            }
          ]
        },
        {
          'title': 'Подключим ваш умный холодильник',
          'name': 'Программа',
          'subtext': '7% от оборота',
          'img': 'Program',
          'description': [{
            'title': 'Платформа YUMA-SMART',
            'text': 'Mобильное приложение для покупателей и полноценная система учета, которыми вы управляете через единый личный кабинет.'
          }]
        }
      ]
    }
  },
  methods: {
    getCardTranslate(idx) {
      return idx * -39
    }
  }
}
</script>

<style lang="scss">@import '@/assets/scss/_variables.scss';

.yuma-smart {
  margin-bottom: 70px;

  svg {
    width: 100%;
    height: auto;
  }
}

.header__title {
  margin-bottom: 69px;

  &--line {
    display: flex;
    justify-content: space-between;
    text-align-last: right;
  }

  &--personal {
    grid-column: 3/11;
  }
}

.flip-card__items {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(8, 1fr);
}

.card-item {
  height: 300px;
  background-color: transparent;
  border-radius: $--border-radius-default;
  width: 100%;
  position: relative;
  transition: all .3s ease;

  cursor: pointer;

  &:nth-child(2n-1) {
    grid-column: 1/5;
  }

  &:nth-child(2n) {
    grid-column: 4/8;
  }

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  &__front,
  &__back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $--border-radius-default;
    padding: 10px;
  }

  &__front {
    background-color: $--main-white;
  }

  &__back {
    opacity: 0;
    background-color: $--yellow-primary;
  }

  small {
    position: absolute;
    top: 20px;
    left: 10px;
    right: 10px;
    text-align: center;
    font-size: inherit;
  }

  &:hover {
    z-index: 2;

    .card-item__back {
      animation: fadein .3s ease forwards;
    }
  }

}

</style>