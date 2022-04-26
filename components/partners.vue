<template>
    <div class="marquee partners-gallery__wrapper">
        <div 
            ref="marquee" 
            class="partners-gallery marquee__inner" 
            :style="`transform: translate(${positionX}px, 0)`"
            @mouseenter="pauseAnimation"
            @mouseleave="startAnimation"
        >
            <div class="partners-gallery__item " v-for="(i, idx) in randList" :key="idx">
                <img :src="require('../assets/img/partners/p-'+i+'.svg')" alt="">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => {
        return {
            speedX: -1,
            positionX: 0,
            isPaused: false,
            defaultPadding: 70,
            el: null
        }
    },
    mounted(){
        this.el = this.$refs.marquee
        this.startAnimation();
    },
    beforeDestroy(){
        this.pauseAnimation()
    },
    computed: {
        randList() {
            const a = [1, 2, 3, 4, 5, 6]
            return a.concat(a).concat(a)
        }
    },
    methods: {
        startAnimation() {
            this.isPaused = false
            this.step(this.el)
        },
        pauseAnimation() {
            this.isPaused = true
        },
        step() {
            if (Math.abs(this.positionX) > this.el.firstElementChild.offsetWidth) {
                this.positionX += (this.el.firstElementChild.offsetWidth + this.defaultPadding)
                this.el.appendChild(this.el.firstElementChild.cloneNode(true))
                this.el.firstElementChild.remove()
            }

            this.positionX = this.positionX + this.speedX;
            if (!this.isPaused) {
                window.requestAnimationFrame(this.step);
            }
        },
    }
}

</script>

<style lang="scss">

.marquee {
  overflow: hidden;
  font-size: 0;
  white-space: nowrap;
  cursor: default;
  user-select: none;
}

.marquee__inner {
  position: relative;
}

.partners-gallery {
  display: flex;
  align-items: center;

  &__wrapper {
    grid-column: 1/11;
    overflow: hidden;
    white-space: nowrap;
  }

  &__item {
    flex: 1 0 200px;
    max-width: 200px;
    margin-right: 70px;
  }
}
</style>