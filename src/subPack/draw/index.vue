<template>
    <navBar>
        <template #content>
            <view class="nav">
                <view class="back-icon">
                    <uni-icons type="back " size="26" color="#ffffff" @click="onBack"></uni-icons>
                </view>
                <view class="nav-title">每日一签</view>
            </view>
        </template>
    </navBar>
    <view class="container" :style="{ paddingTop: globalData.navHeight + 'px' }">
        <view v-if="!explain">
            <image src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/hdx.png" class="hdx-image hdx-img"></image>
            <image src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/intro_text.png" class="hdx-image hdx-tip"></image>
        </view>
        <view v-else class="hdx-image hdx-info">
            <view>{{ hdxInfo.sort }} {{ hdxInfo.name }}</view>
            <view class="poetry">
                <view class="poetry-item" v-for="(item, index) in hdxInfo.qianshi.trim().split(' ')" :key="index">
                    <text>{{ item }}</text>
                </view>
            </view>
            <view>{{ hdxInfo.story }}</view>
            <view>{{ hdxInfo.qianshi_mean }}</view>
            <view class="tag">
                <view>事业：{{ hdxInfo.shiye }}</view>
                <view>财富：{{ hdxInfo.caifu }}</view>
                <view>姻缘：{{ hdxInfo.yinyuan }}</view>
                <view>健康：{{ hdxInfo.jiankang }}</view>
            </view>
        </view>

        <!-- index_btn.png -->
        <image src="https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/index_btn.png" class="hdx-image hdx-btn" @click="handleSubmit"></image>
        <!-- <rich-text :nodes="nodes" class="rich-title"></rich-text> -->
    </view>
    <custom-dialog ref="customDia">
        <template #content>
            <image src="../../static/yq.gif" style="border-radius: 20rpx; height: 500rpx"></image>
        </template>
    </custom-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import navBar from '@/components/navBar.vue';
import CustomDialog from '@/components/CustomDialog.vue';
import { onLoad } from '@dcloudio/uni-app';
import { getdeviceInfo } from '@/utils/deviceInfo';
import { getList } from './hdx';
const { globalData } = getdeviceInfo();
const customDia = ref();
const explain = ref<boolean>(false);
function onBack() {
    uni.navigateBack();
}
function handleSubmit() {
    explain.value = false;
    customDia.value.openDialog();
    getRandomElementFromArray();
    setTimeout(() => {
        customDia.value.closeDialog();
        explain.value = true;
    }, 3000);
}

const hdxInfo: any = ref('');
function getRandomElementFromArray() {
    hdxInfo.value = '';
    const arr: any = getList();
    const randomIndex = Math.floor(Math.random() * arr.length);
    hdxInfo.value = arr[randomIndex];
}
// getRandomElementFromArray();
console.log('hdxInfo.value==', hdxInfo.value);
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

    .hdx-image {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .hdx-info {
        color: #eaeef1;
        font-weight: bold;
        padding: 40rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30rpx;
        font-size: 32rpx;
        .tag {
            font-size: 26rpx;
        }
    }
    .poetry {
        text-align: center;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-content: center;
        gap: 24rpx;
        .poetry-item {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            letter-spacing: 4rpx;
            background: #e6af78;
            padding: 15rpx;
            border-radius: 6rpx;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
    }

    .hdx-img {
        width: 750rpx;
        height: 620rpx;
    }
    .hdx-tip {
        margin-top: 40rpx;
        height: 293.72rpx;
    }
    .hdx-btn {
        height: 100rpx;
        margin-top: 100rpx;
        left: 9%;
        animation: btnAnimate-data 1.5s linear infinite;
    }
    @keyframes btnAnimate-data {
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

    .yao-img {
        border-radius: 20rpx !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
}
.rich-title {
    word-break: break-all !important;
    white-space: pre-warp !important;
}
</style>
