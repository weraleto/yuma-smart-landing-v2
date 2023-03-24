<template>
    <el-breadcrumb class="breadcrumb" :separator="separator">
        <el-breadcrumb-item v-for="link in links" 
            :key="link.link"
            :to="link.to"
        >{{ link.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import ElBreadcrumb from 'element-ui/lib/breadcrumb'
import ElBreadcrumbItem from 'element-ui/lib/breadcrumb-item'
export default {
    props: {
        links: {
            type: Array,
            default: () => {}
        },
        separator: {
            type: String,
            default: '/'
        }
    },
    components: {
        ElBreadcrumb,
        ElBreadcrumbItem
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

$--color-primary: $--yellow-hover;
$--color-text-primary: $--main-black;
$--color-text-regular: $--main-black;
$--color-text-placeholder: $--main-black;

@import "~element-ui/packages/theme-chalk/src/breadcrumb";
@import "~element-ui/packages/theme-chalk/src/breadcrumb-item";

.breadcrumb {
    margin-top: 24px;

    &.el-breadcrumb {
        line-height: 20px;
        font-size: 13px;
    }
    .el-breadcrumb__separator {
        font-weight: 400;
    }
    .el-breadcrumb__inner {
        &.is-link {
            font-weight: 400;
        }
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
        color: $--gray-medium-dark;
    }

    @media screen and (max-width: $--screen-sm-min) {
        margin-top: 20px;
    }
}
</style>