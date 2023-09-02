<template>
    <view class="top-header-bar" :style="navBarStyle">
        <view class="navbar-box" :style="{ height: `${navHeight}px` }">
            <view class="navbar-content" :style="{ top: `${custom.top}px`, height: `${custom.height}px` }">
                <slot name="content"></slot>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { defineProps, reactive, ref, inject } from 'vue';

import { getdeviceInfo } from '@/utils/deviceInfo';

interface IProps {
    navBarStyle: any;
    height: number;
}

interface IEmits {
    (event: 'jumpCityCheck'): void;
}

const props = withDefaults(defineProps<IProps>(), {
    navBarStyle: () => {
        return { backgroundColor: 'none' };
    },
    height: 0,
});

const emits = defineEmits<IEmits>();

// oss地址
const imgUrl = inject<string>('imgUrl');
// 获取导航栏信息
const { globalData, custom } = reactive(getdeviceInfo());
const navHeight: any = ref(props.height ? props.height * globalData.navHeight : globalData.navHeight);
const navBarStyle = ref(props.navBarStyle);
</script>

<style lang="scss" scoped>
.top-header-bar {
    position: fixed;
    left: 0rpx;
    right: 0rpx;
    z-index: 100;
    width: 100%;
    .navbar-box {
        .navbar-content {
            position: absolute;
            left: 0rpx;
            right: 0rpx;
            display: flex;
            align-items: center;
            .logo {
                height: 100%;
                // width: 50rpx;
                display: flex;
                align-items: center;
                margin: 0rpx 13rpx;
                font-size: 26rpx;
                .logo-img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
