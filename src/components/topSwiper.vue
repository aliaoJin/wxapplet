<template name="top-swiper">
    <view class="container">
        <view class="uni-margin-wrap">
            <swiper class="swiper" @change="onChange" :current="current" circular :indicator-dots="false" :autoplay="false">
                <swiper-item v-for="(item, index) in imgs" :key="index">
                    <image @click="gopage(item.url)" class="swiper-item uni-bg-red" :src="item.img" style="width: 750rpx; height: 474rpx"></image>
                </swiper-item>
            </swiper>
        </view>
        <!-- 切换btn -->
        <view class="changingbox">
            <view v-if="tabList.length" class="changing_over_box">
                <text v-for="(item, index) in tabList" :key="index" @click="handleTab(item.value)" :class="current === item.value ? 'change_over_btn1' : 'change_over_btn'">{{ item.label }}</text>
            </view>
            <view v-else class="changing_over_box">
                <text @click="onTab(true)" :class="current === 0 ? 'change_over_btn1 vrbtn' : 'change_over_btn vrbtn'">水电VR</text>
                <text @click="onTab(false)" :class="current === 1 ? 'change_over_btn1' : 'change_over_btn'">户型图</text>
            </view>
            <view>
                <text class="img_number">{{ current + 1 }}/{{ imgs.length }}</text>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { defineProps, reactive, ref, inject } from 'vue';
interface IProps {
    imgs: Array<{
        value?: number;
        label?: string;
        url?: string;
        img?: string;
    }>;
    workId: string | number;
    thumbsUpData: string | number;
    isThumbUp: string | number | boolean;
    tabList: Array<any>;
}
interface IEmits {
    (event: 'jumpCityCheck'): void;
}
const props = withDefaults(defineProps<IProps>(), {
    imgs: () => {
        return [];
    },
    vrlink: '',
    workId: 0,
    thumbsUpData: 0,
    isThumbUp: 0,
    tabList: () => {
        return [];
    },
});
const emits = defineEmits<IEmits>();

const current: any = ref(0);
const thumbUpIcon: any = ref('thumb-up');
const thumbUp: any = ref(false);
const zan: any = ref(props.thumbsUpData);

onMounted(() => {
    thumbUpIcon.value = props.isThumbUp == 1 ? 'thumb-up-fill' : 'thumb-up';
    thumbUp.value = props.isThumbUp == 1 ? true : false;
});

function onChange(e: any) {
    current.value = e.detail.current;
}
function onTab(type: any) {
    current.value = type ? 0 : 1;
}
function handleTab(res: any) {
    current.value = res;
}
function gopage(vrlink: any) {
    if (vrlink) {
        uni.navigateTo({
            url: '/subPack/webView/index?travel_link=' + encodeURIComponent(JSON.stringify(props.vrlink)),
        });
    }
}
</script>

<style scoped lang="scss">
.container {
    position: relative;
    .uni-margin-wrap {
        width: 750rpx;
        height: 474rpx;
        .swiper {
            height: 460rpx;
            .swiper-item {
                display: block;
                text-align: center;
            }
        }
    }
    .changingbox {
        position: absolute;
        bottom: 50rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .changing_over_box {
            background: rgba(152, 152, 152, 0.7);
            border-radius: 50rpx;
            padding: 15rpx 9rpx;
            margin-left: 20rpx;
            .change_over_btn {
                border-radius: 50rpx;
                padding: 10rpx 20rpx;
                color: #ffffff;
                font-weight: bolder;
                font-size: 25rpx;
            }
            .change_over_btn1 {
                border-radius: 50rpx;
                padding: 10rpx 20rpx;
                background: #ffffff;
                color: #000000;
                font-weight: bolder;
                font-size: 25rpx;
            }
            .vrbtn {
                margin-right: 20rpx;
            }
        }
        .img_number {
            color: #ffffff;
            background: rgba(152, 152, 152, 0.7);
            padding: 10rpx 20rpx;
            font-size: 25rpx;
            border-radius: 50rpx;
            margin-right: 20rpx;
        }
    }
    .praise_and_share {
        position: absolute;
        top: 10rpx;
        right: 20rpx;
        display: flex;
        .butfx {
            width: 10rpx;
            width: 10rpx;
            height: 40rpx;
            position: absolute;
            z-index: 999;
            opacity: 0;
        }
    }
}

.swiper-list {
    margin-top: 40rpx;
    margin-bottom: 0;
}
.uni-common-mt {
    margin-top: 60rpx;
    position: relative;
}
.info {
    position: absolute;
    right: 20rpx;
}
.uni-padding-wrap {
    width: 550rpx;
    padding: 0 100rpx;
}
</style>
