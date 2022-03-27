<template>
    <a class="btn large primary"
        @click.prevent="$store.commit('setShowModal', {key: 'showApplyForm', val: true})">Заказать</a>
</template>

<script>
export default {

}
</script>

<style>

</style>