<template>
    <el-popover
    :placement="placement"
    :title="title"
    :trigger="trigger"
    :visible-arrow="false"
    >
    <div class="hint-popover-trigger" slot="reference">
        <svg :width="triggerSize" :height="triggerSize"  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1942_7212)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569ZM3.46273 12.5373C4.66609 13.7406 6.29819 14.4167 8 14.4167C9.70181 14.4167 11.3339 13.7406 12.5373 12.5373C13.7406 11.3339 14.4167 9.70181 14.4167 8C14.4167 6.29819 13.7406 4.66609 12.5373 3.46273C11.3339 2.25937 9.70181 1.58333 8 1.58333C6.29819 1.58333 4.66609 2.25937 3.46273 3.46273C2.25937 4.66609 1.58333 6.29819 1.58333 8C1.58333 9.70181 2.25937 11.3339 3.46273 12.5373Z" fill="#111111"/>
        <path d="M5.2551 5.786C5.25373 5.81829 5.25898 5.85053 5.27053 5.88072C5.28208 5.91091 5.29968 5.93841 5.32225 5.96155C5.34482 5.98468 5.37189 6.00296 5.40179 6.01524C5.43168 6.02753 5.46378 6.03357 5.4961 6.033H6.3211C6.4591 6.033 6.5691 5.92 6.5871 5.783C6.6771 5.127 7.1271 4.649 7.9291 4.649C8.61509 4.649 9.2431 4.992 9.2431 5.817C9.2431 6.452 8.8691 6.744 8.2781 7.188C7.6051 7.677 7.0721 8.248 7.1101 9.175L7.1131 9.392C7.11415 9.45761 7.14095 9.52017 7.18772 9.5662C7.23449 9.61222 7.29748 9.63801 7.3631 9.638H8.17409C8.2404 9.638 8.30399 9.61166 8.35087 9.56478C8.39776 9.51789 8.42409 9.4543 8.42409 9.388V9.283C8.42409 8.565 8.6971 8.356 9.4341 7.797C10.0431 7.334 10.6781 6.82 10.6781 5.741C10.6781 4.23 9.4021 3.5 8.0051 3.5C6.7381 3.5 5.3501 4.09 5.2551 5.786ZM6.8121 11.549C6.8121 12.082 7.2371 12.476 7.8221 12.476C8.4311 12.476 8.8501 12.082 8.8501 11.549C8.8501 10.997 8.4301 10.609 7.8211 10.609C7.2371 10.609 6.8121 10.997 6.8121 11.549Z" fill="#111111"/>
        </g>
        <defs>
        <clipPath id="clip0_1942_7212">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>

    </div>
    <div v-html="content"></div>
  </el-popover>
</template>

<script>
import ElPopover from 'element-ui/lib/popover'
export default {
    props: {
        placement: {
            type: String,
            default: "bottom"
        },
        title: {
            type: String,
            default: ''
        },
        trigger: {
            type: String,
            default: "hover"
        },
        triggerSize: {
            type: String,
            default: '16'
        },
        content: {
            type: String,
            default: ''
        },
    },
    components: {
        ElPopover
    }
}
</script>

<style lang="scss">
@import "~element-ui/packages/theme-chalk/src/popover";
@import '@/assets/scss/_variables';
@import '@/assets/scss/_mixins';

.hint-popover-trigger {
    display: inline-block;
    cursor: pointer;
    width: 16px;
    height: 16px;
    padding-left: 10px;
}
.el-popover {
    @include text6;
    color: #111;
    word-break: normal;
    text-align: left;
    border-radius: 16px;
    box-shadow: $--main-box-shadow;
    max-width: 400px;
    padding: 40px;

    li {
        list-style-position: outside;
        margin-bottom: 1em;
    }
    @media screen and (max-width: $--screen-xs-min) {
        padding: 30px 36px;
    }
}
</style>