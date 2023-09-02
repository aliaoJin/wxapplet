<template>
    <navBar>
        <template #content>
            <view class="nav">
                <view class="back-icon">
                    <uni-icons type="back " size="26" color="#ffffff" @click="onBack"></uni-icons>
                </view>
                <view class="nav-title">电子木鱼</view>
            </view>
        </template>
    </navBar>
    <view class="container" :style="{ paddingTop: globalData.navHeight + 'px' }">
        <view class="accumulate">本次功德：{{ merits }} </view>
        <view class="content-muyu">
            <view class="list">
                <view v-for="(item, index) of virtuesList" :key="index" class="list-item">
                    {{ item }}
                </view>
            </view>
            <view class="woodfish-box">
                <view class="woodfish" @click="handleKnock">
                    <view class="woodfish-imgbox" :class="{ 'fat-woodfish': isAnimate }">
                        <image src="../../static/woodfish_black.svg" mode=""></image>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import navBar from '@/components/navBar.vue';
import { getdeviceInfo } from '@/utils/deviceInfo';
const { globalData } = getdeviceInfo();
const audioCtx = uni.createInnerAudioContext();
audioCtx.src = 'https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/knock.mp3';
const virtuesList: any = ref([]);
const merits: any = ref(uni.getStorageSync('num') || 0);

// 敲木鱼动画
const isAnimate: any = ref(false);
const animateKnock = () => {
    virtuesList.value.push('功德+1');
    merits.value++;
    uni.setStorageSync('num', merits.value);
    isAnimate.value = !isAnimate.value;
    setTimeout(() => {
        isAnimate.value = !isAnimate.value;
    }, 80);
};
const de_animateKnock = debounce(animateKnock, 80);

function debounce(fn: Function, delay: number) {
    // 存储定时标识符，以便清除定时器
    let timer: any = null;
    return function _debounce(...args: any) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const handleKnock = async () => {
    // 播放动画
    de_animateKnock();
    // 播放声音
    audioCtx.stop();
    audioCtx.play();
};

function onBack() {
    uni.navigateBack();
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
    .accumulate {
        display: flex;
        justify-content: center;
        font-weight: bolder;
        font-size: 32rpx;
        margin-bottom: 35rpx;
        color: #fff;
    }
    .content-muyu {
        position: relative;
        left: 50%;
        top: 25vh !important;
        transform: translateX(-50%);
    }
    // background-repeat: no-repeat;
}
.list {
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
}
@keyframes text-animation {
    from {
        top: 0;
        // transform: scale(1.1);
        font-size: 32rpx;
        font-weight: bolder;
    }
    to {
        top: -300rpx;
        opacity: 0;
    }
}

.list-item {
    font-size: 28rpx;
    position: absolute;
    animation: text-animation linear 1.5s forwards;
}
@keyframes fat {
    0%,
    50% {
        transform: scale(1.1);
    }
}
.fat-woodfish {
    animation: fat;
    animation-duration: 80ms;
}
.woodfish-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .woodfish {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 100upx;
        width: 400upx;
        height: 400upx;
        margin-top: 50upx;
        margin-bottom: 50upx;
        .woodfish-imgbox {
            image {
                width: 180px;
                height: 180px;
                color: #ffffff;
            }
        }
    }
    .title {
        font-size: 40upx;
        color: #a6a6a6;
    }
}
</style>
