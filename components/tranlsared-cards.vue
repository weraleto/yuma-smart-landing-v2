<template>
    <div class="translated-cards" @mouseleave="activeCard = activeCardDefault">
        <div v-for="(i, idx) in data" :key="idx"
            class="card translated-card__item" :class="activeCard == idx ? 'active' : 'inactive'"
            @mouseenter="debounce(idx)"
            >
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
</template>

<script>
export default {
    props: {
        data: {
            default: Array,
            default: () => []
        }
    },
    data: () => {
        return {
            activeCard: 0,
            activeCardDefault: 0,
            timer: null
        }
    },
    methods: {
        debounce(idx){
            if(this.timer){
                clearInterval(this.timer)
            }
            this.timer = setTimeout(() => {
                this.activeCard = idx
            }, 100)
        }
    }
}
</script>

<style lang="scss">

@import '@/assets/scss/_variables.scss';


/* card items */


.translated-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1/11;
    min-height: 570px;

    @media screen and (max-width: $--screen-lg-min) {
        min-height: 40.42vw;
    }
}

.translated-card__item {
    min-height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: center;
    padding: 50px 31px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all .25s ease .2s;
    position: relative;

    @media screen and (max-width: $--screen-lg-min) {
        padding: 30px 22px;
    }
}

.translated-card__item.active {
    flex-grow: 1;
    max-width: calc(36% - 28px);
    border-color: $--main-black;
    min-height: 114%;
    align-items: center;
    
    .translated-card__item--front {
       opacity: 0; 
    }
}

.translated-card__item.inactive {
    max-width: calc(33.333% - 28px);

    .translated-card__item--overlay {
        opacity: 0;
    }
}

.translated-card__item--front {
    opacity: 0;
    max-width: 340px;
}

.translated-card__item--icon {
    width: 78%;
    margin: 50px auto 45px;
    @media screen and (max-width: $--screen-md-min) {
        margin: 20px auto;
    }
}

.translated-card__item--overlay {

    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $--main-white;
    border-radius: calc($--border-radius-default) * 2;
    text-align: left;
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: $--screen-md-min) {
        padding: 30px 22px;
        
        .btn.large {
            min-height: 40px;
        }
    }
}

.translated-card__item--description {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;

    @media screen and (max-width: $--screen-lg-min) {
        margin-bottom: 20px;
    }
    @media screen and (min-width: $--screen-md-min) and (max-width: $--screen-lg-min) {
        .subtitle {
            font-size: 22px;
        }
    }
    @media screen and (max-width: $--screen-md-min) {
        p {
            font-size: 14px;
            margin-top: 5px;
        }
    }
}

.translated-card__item--description-group {
    width: 100%;
    max-width: 380px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.translated-card__item--description-group:not(:last-child) {
    margin-bottom: 10px;
}

.translated-card__item.active {
    .translated-card__item--overlay {
        animation: fadein ease-in .4s forwards .4s;
        z-index: 2;
    }
    .translated-card__item--front {
        animation: fadeout ease-out .35s forwards;
    }
}
.translated-card__item.inactive {
    .translated-card__item--overlay {
        animation: fadeout ease-out .35s forwards ;
    }
    .translated-card__item--front {
        animation: fadein ease-in .4s forwards .4s;
    }
}



</style>