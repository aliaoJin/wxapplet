<template>
    <navBar>
        <template #content>
            <view class="nav">
                <view class="back-icon">
                    <uni-icons type="back " size="26" color="#ffffff" @click="onBack"></uni-icons>
                </view>
                <view class="nav-title">指纹算命</view>
            </view>
        </template>
    </navBar>
    <view class="container" :style="{ paddingTop: globalData.navHeight + 'px' }">
        <view class="gender">
            <view>男(左手)</view>
            <switch name="switch" color="#409eff" @change="switchChange" />
            <view>女(右手)</view>
        </view>
        <view class="finger" :style="{ flexDirection: genderValue ? 'row' : 'row-reverse' }">
            <view class="finger-item" v-for="(item, index) in fingerprints" :key="index" :style="{ ...item.shapeStyle, transform: genderValue ? item.transform1 : item.transform2 }">
                <view :class="[item.value == 's' ? 'fingerprint-s' : 'fingerprint-o']" :style="item.value == 's' ? item.ftStyle : item.ftStyle2"></view>
            </view>
        </view>
        <view class="finger" :style="{ flexDirection: genderValue ? 'row' : 'row-reverse' }">
            <view class="finger-switch-item" v-for="(item, index) in fingerprints" :key="index">
                <view class="finger-name">
                    <text>{{ item.name }}</text>
                </view>
                <view @click="changeRadioGroup(item)" :class="[item.value == 'o' ? 'switch-item-tip fan-o' : 'switch-item-tip']"> 斗/螺 </view>
                <view @click="changeRadioGroup(item)" :class="[item.value == 's' ? 'switch-item-tip fan-s' : 'switch-item-tip']"> 簸箕 </view>
            </view>
        </view>
        <view class="outcome" v-if="outcomeData">
            <view style="font-size: 30rpx; color: #fff">【人物类型】{{ outcomeData.type }}</view>
            <view>{{ outcomeData.summary }}</view>
            <view style="font-size: 30rpx; color: #fff">【诗曰】</view>
            <view>{{ outcomeData.poetry }}</view>
            <view style="font-size: 30rpx; color: #fff">【性格】</view>
            <view>{{ outcomeData.nature }}</view>
            <view style="font-size: 30rpx; color: #fff">【婚姻】</view>
            <view>{{ outcomeData.marriage }}</view>
            <view style="font-size: 30rpx; color: #fff">【适合职业】</view>
            <view>{{ outcomeData.occupation }}</view>
            <view style="font-size: 30rpx; color: #fff">【健康】</view>
            <view>{{ outcomeData.healthy }}</view>
            <view style="font-size: 30rpx; color: #fff">【运势】</view>
            <view>{{ outcomeData.fortune }}</view>
        </view>
    </view>
</template>
<!-- 斗/螺 O   簸箕 s -->
<script lang="ts" setup>
import { ref } from 'vue';
import navBar from '@/components/navBar.vue';
import { getdeviceInfo } from '@/utils/deviceInfo';
import { getList, getFingerprints } from './fingerprint.ts';
const { globalData } = getdeviceInfo();
const list = getList();
const fingerprints: any = ref(getFingerprints() || []);
const genderValue: any = ref(1); //0女、1男
const outcomeData: any = ref(getList()[0]);

function changePrint() {
    const e: any =
        fingerprints.value.find((e: any) => 'mz' === e.key)?.value +
        fingerprints.value.find((e: any) => 'sz' === e.key)?.value +
        fingerprints.value.find((e: any) => 'zz' === e.key)?.value +
        fingerprints.value.find((e: any) => 'wmz' === e.key)?.value +
        fingerprints.value.find((e: any) => 'xz' === e.key)?.value;
    return list.find((t: any) => t.fp === e);
}

function onBack() {
    uni.navigateBack();
}
// 切换男女
function switchChange(e: any) {
    genderValue.value = e.detail.value ? 0 : 1;
}
// 切换斗 / 簸箕
function changeRadioGroup(item: any) {
    item.value == 'o' ? (item.value = 's') : (item.value = 'o');
    outcomeData.value = changePrint();
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
    .gender {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 35rpx;
        gap: 15rpx;
        // color: #fce9b5;
        color: #ffffff;
    }
    .finger {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        padding: 40rpx;
        .finger-item {
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            position: relative;
            background: #fbe4d4;
        }
        .finger-switch-item {
            font-size: 28rpx;
            border: 1px solid #d9d9d9;
            border-radius: 8rpx;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10rpx;
            position: relative;
        }
        .switch-item-tip {
            writing-mode: vertical-rl;
            padding: 8rpx;
            border-radius: 8rpx;
            color: #ffffff;
        }
        .fan-o {
            background: #409eff;
            border-radius: 8rpx 8rpx 0rpx 0rpx;
        }
        .fan-s {
            background: #409eff;
            border-radius: 0rpx 0rpx 8rpx 8rpx;
        }

        .fingerprint-s {
            width: 200rpx;
            height: 100rpx;
            position: absolute;
            background: url('https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/fingerprint.gif');
            background-repeat: no-repeat !important;
        }
        .fingerprint-o {
            width: 200rpx;
            height: 100rpx;
            position: absolute;
            background: url('https://aliao-img.oss-cn-hangzhou.aliyuncs.com/feng/fingerprint2.gif');
            background-repeat: no-repeat !important;
        }
        .finger-name {
            position: absolute;
            top: -60rpx;
            left: 0rpx;
            font-weight: bolder;
            color: #ffffff;
            writing-mode: horizontal-tb !important;
            min-width: 81rpx;
        }
    }
    .outcome {
        padding: 30rpx;
        font-size: 28rpx;
        color: #1e2732;
        font-weight: bold;
        line-height: 2rpx;
        line-height: 1.5;
    }
}
</style>
