<template>
    <div class="tabs-wrapper tabs-faq">
        <el-tabs v-model="activeName" :id="id">
            <el-tab-pane :label="tab.label" :name="String(i)" v-for="(tab, i) in data" :key="tab.label">
                <Collapse :data="tab.content" :accordion="false" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {tabsMixin} from '@/mixins/mixins'
    import Collapse from '@/components/collapse'
    

    export default {
        props: {
            data: {
                type: Array,
                default: () => []
            },
        },
        mixins: [tabsMixin],
        components: {
            Collapse
        },
        data: () => {
            return {
            }
        },
    }
</script>

<style lang="scss">
@import '@/assets/scss/_mixins';
@import '@/assets/scss/_variables';
@import '@/assets/scss/components/tabs';

.tabs-faq {
    .el-tabs__content {
        overflow: visible;
    }
}

</style>