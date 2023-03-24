<template>
    <div class="logo">
        <a href="/">
            <img :src="require('../assets/img/logo-'+theme+'.svg')" alt="" data-not-lazy>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            default: 'light'
        }
    }

}
</script>

<style lang="scss">
.logo {
    width: 100px;
}
</style>