<template>
    <navBar>
        <template #content>
            <view class="nav">
                <view class="back-icon">
                    <uni-icons type="back " size="26" color="#ffffff" @click="onBack"></uni-icons>
                </view>
                <view class="nav-title">每日一卦</view>
            </view>
        </template>
    </navBar>
    <view class="container" :style="{ paddingTop: globalData.navHeight + 'px' }">
        <image src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/day_gua.png" class="hdx-image gua-tip"></image>
        <view class="gk-box">
            <image src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/day-gui.png" :class="[isShake ? 'gk-img gk-img-animate' : 'gk-img']"></image>
            <view class="coin-list">
                <image v-if="isCoin" :class="[isCoin ? 'coin-img qianbi-one' : 'coin-img']" src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/day-bi.png"></image>
                <image v-if="isCoin" :class="[isCoin ? 'coin-img qianbi-two' : 'coin-img']" src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/day-bi2.png"></image>
                <image v-if="isCoin" :class="[isCoin ? 'coin-img qianbi-three' : 'coin-img']" src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/day-bi2.png"></image>
            </view>
        </view>
        <view class="gua-result" v-if="guaData && isCoin">
            <view>卦名：{{ guaData.book_name }}</view>
            <view>卦辞：{{ guaData.book_means }}</view>
            <view>推断：{{ guaData.book_result }}</view>
            <view>大象{{ guaData.book_all }}</view>

            <view style="margin-top: 20rpx">简介：{{ guaData.book_introduc }}</view>
            <view>介绍：{{ guaData.book_remark }}</view>

            <view style="margin-top: 20rpx">运势：{{ guaData.book_lucky }}</view>
            <view>疾病：{{ guaData.book_disease }}</view>
            <view>失物：{{ guaData.book_lose }}</view>
            <view>爱情：{{ guaData.book_love }}</view>
            <view>诉讼：{{ guaData.book_action }}</view>
        </view>
        <view style="display: flex; justify-content: center; margin-top: 40rpx">
            <image src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/day-btn.png" class="btn-img" @click="handleShake"></image>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import navBar from '@/components/navBar.vue';
import { onLoad } from '@dcloudio/uni-app';
import { getdeviceInfo } from '@/utils/deviceInfo';
import { getList } from './divine';
const { globalData } = getdeviceInfo();
const guaData: any = ref('');
const isCoin: any = ref<boolean>(true);
function onBack() {
    uni.navigateBack();
}
const isShake: any = ref<boolean>(false);
function handleShake() {
    isShake.value = true;
    isCoin.value = false;
    setTimeout(() => {
        isShake.value = false;
        isCoin.value = true;
        getRandomElementFromArray();
    }, 2500);
}
function getRandomElementFromArray() {
    guaData.value = '';
    const arr: any = getList();
    const randomIndex = Math.floor(Math.random() * arr.length);
    guaData.value = arr[randomIndex];
}
</script>

<style scoped lang="scss">
.nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-title {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30;
    color: #ffffff;
}
.container {
    min-height: 100vh;
    background: url('https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/chou-bg.png');
    background-size: 100% 100%;
    background-position: 100% 100%;
    // background-repeat: no-repeat;
}
.hdx-image {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
.gua-tip {
    transform: scale(0.8);
    left: 0%;
    width: 100%;
    height: 300rpx;
}
.gk-box {
    color: #fce9b4;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.gk-img {
    width: 265rpx;
    height: 336rpx;
}
.gk-img-animate {
    -webkit-animation: shakeAnimate 2.5s 2;
    animation: shakeAnimate 2.5s 2;
}
@-webkit-keyframes shakeAnimate {
    0%,
    to {
        -webkit-transform: translate(0);
        transform: translate(0);
    }

    10%,
    20%,
    30%,
    40% {
        -webkit-transform: translate(-0.3125rem);
        transform: translate(-0.3125rem);
    }

    50%,
    60%,
    70%,
    80%,
    90% {
        -webkit-transform: translate(-0.625rem);
        transform: translate(-0.625rem);
    }

    15%,
    25%,
    35%,
    45% {
        -webkit-transform: translate(0.3125rem);
        transform: translate(0.3125rem);
    }

    55%,
    65%,
    75%,
    85%,
    95% {
        -webkit-transform: translate(0.625rem);
        transform: translate(0.625rem);
    }
}

@keyframes shakeAnimate {
    0%,
    to {
        -webkit-transform: translate(0);
        transform: translate(0);
    }

    10%,
    20%,
    30%,
    40% {
        -webkit-transform: translate(-0.3125rem);
        transform: translate(-0.3125rem);
    }

    50%,
    60%,
    70%,
    80%,
    90% {
        -webkit-transform: translate(-0.625rem);
        transform: translate(-0.625rem);
    }

    15%,
    25%,
    35%,
    45% {
        -webkit-transform: translate(0.3125rem);
        transform: translate(0.3125rem);
    }

    55%,
    65%,
    75%,
    85%,
    95% {
        -webkit-transform: translate(0.625rem);
        transform: translate(0.625rem);
    }
}
.coin-list {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 12.5rem;
    margin: 0.9375rem 3.75rem;
}
.coin-img {
    width: 2.8875rem;
    height: 2.8875rem;
    vertical-align: top;
}
.qianbi-one {
    -webkit-animation: qianbione 1.5s 1;
    animation: qianbione 1.5s 1;
    z-index: 10;
}
@keyframes qianbione {
    0% {
        -webkit-transform: translate(4.375rem, -4.375rem);
        transform: translate(4.375rem, -4.375rem);
    }

    to {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}
.qianbi-two {
    -webkit-animation: qianbitwo 1.5s 1;
    animation: qianbitwo 1.5s 1;
    z-index: 10;
}
@keyframes qianbitwo {
    0% {
        -webkit-transform: translateY(-4.375rem);
        transform: translateY(-4.375rem);
    }

    to {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}
.qianbi-three {
    -webkit-animation: qianbithree 1.5s 1;
    animation: qianbithree 1.5s 1;
    z-index: 10;
}
@keyframes qianbithree {
    0% {
        -webkit-transform: translate(-4.375rem, -4.375rem);
        transform: translate(-4.375rem, -4.375rem);
    }

    to {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}

.btn-img {
    height: 114rpx;
    width: 70%;
    animation: btnAnim 1.5s linear infinite;
}
@keyframes btnAnim {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
.gua-result {
    background-size: 100% 100%;
    background-position: 100% 100%;
    padding: 24rpx 70rpx;
    font-size: 28rpx;
    font-weight: bold;
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
