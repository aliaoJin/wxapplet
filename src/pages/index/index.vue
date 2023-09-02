<template>
    <view class="container">
        <view class="item-btn" :style="{ background: `url(${item.bgimg})` }" v-for="(item, index) in btnList" :key="index" @click="goPage(item.url)">
            <image class="btn-icon" :src="item.icon"></image>
            <view>
                <view class="title">{{ item.label }}</view>
                <view class="title">{{ item.des }}</view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue';
type list = {
    bgimg: string;
    label: string;
    url: string;
    icon: string;
    des: string;
};
const btnList = ref<list[]>([
    {
        bgimg: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/bg1.png',
        label: '每日一签',
        url: '/subPack/draw/index',
        icon: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/qian2.png',
        des: '心诚则灵 情真则明',
    },
    {
        bgimg: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/bg2.png',
        label: '每日一卦',
        url: '/subPack/divine/index',
        icon: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/bag.png',
        des: '周易爻卦 预知未来',
    },
    {
        bgimg: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/bg3.png',
        label: '指纹算命',
        url: '/subPack/fingerprint/index',
        icon: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/zw.png',
        des: '知晓命运 解读自己',
    },
    {
        bgimg: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/bg4.png',
        label: '功德木鱼',
        url: '/subPack/woodenFish/index',
        icon: 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/my.png',
        des: '积善成德 神明自得',
    },
]);

function goPage(url: string) {
    uni.navigateTo({ url });
}
</script>

<style scoped lang="scss">
.container {
    padding: 30rpx;
    display: flex;
    flex-direction: column;
    gap: 85rpx;
    align-items: center;
    background: #f6f6f6;
    height: 100vh;
    .item-btn {
        min-width: 500rpx;
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
        padding: 20rpx 80rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 120rpx;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .btn-icon {
        height: 188rpx;
        width: 200rpx;
    }
    .title:nth-child(1) {
        font-size: 32rpx;
        font-weight: bolder;
        color: #8e3a22;
        margin-bottom: 10rpx;
    }
    .title:nth-child(2) {
        font-size: 24rpx;
        font-weight: bolder;
        color: #8e3a22;
    }
}
</style>
