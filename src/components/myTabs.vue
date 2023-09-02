<template>
    <view class="container" :style="containerStyle">
        <scroll-view class="scroll-view_H" :style="scrollStyle" scroll-x="true" scroll-left="0">
            <view class="list" :style="listStyle">
                <view :class="['normal-tabs', { tabs: item.value === current && isAfter }]" v-for="(item, index) in tabsList" :key="index" @click="onChangeTabs(item)">
                    <view class="tabs-content">
                        <view v-if="item.icon">
                            <image class="tabs-img" :style="tabsIconStyle" :src="item.icon"></image>
                        </view>
                        <view v-if="item.fontIcon">
                            <uni-icons custom-prefix="iconfont" :type="item.fontIcon" size="28"></uni-icons>
                        </view>
                        <view>{{ item.label }}</view>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
interface IProps {
    tabsList: Array<{
        value: number;
        label: string;
        icon?: string;
        fontIcon?: string;
    }>;
    listStyle?: string;
    scrollStyle?: string;
    isAfter?: boolean;
    tabsIconStyle?: string;
    containerStyle?: string;
}

interface IEmits {
    (event: 'change', value: string): void;
}

const emits = defineEmits<IEmits>();
const props = withDefaults(defineProps<IProps>(), {
    tabsList: () => {
        return [];
    },
    isAfter: true,
    scrollStyle: '',
    tabsIconStyle: '',
});

const current = ref(props.tabsList[0].value); //当前tabBar栏
// 切换tabBar时
const onChangeTabs = (e: any) => {
    current.value = e.value;
    emits('change', e.label);
};
</script>

<style lang="scss" scoped>
.container {
    background: #fff;
    padding-top: 5rpx;
}
.scroll-view_H {
    white-space: nowrap;
    width: 100%;
    height: 100rpx;
    border-bottom: 1rpx solid #f6f6f6;
    // background: #c9a1a1;
    ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
        color: transparent;
    }

    .list {
        width: 100%;
        height: 100% !important;
        display: inline-block;
        display: flex;
        align-items: center;
        color: #1e2732;
    }
    .normal-tabs {
        padding: 10rpx 25rpx;
        background: #e0e8fc;
        margin-right: 10rpx;
    }
    .tabs {
        font-weight: bolder;
    }
    // .tabs::after {
    //     content: '';
    //     width: 50%;
    //     height: 5rpx;
    //     display: block;
    //     margin: 0 auto;
    //     margin-top: 6rpx;
    //     background-color: #1e2732;
    //     border-radius: 30px;
    // }
    .tabs-content {
        text-align: center;
    }
    .tabs-img {
        height: 50rpx;
        width: 50rpx;
        border-radius: 10rpx;
    }
}
</style>
