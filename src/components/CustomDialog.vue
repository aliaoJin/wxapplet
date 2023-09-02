<template>
    <view class="custom-dialog" v-if="dialogShow">
        <div class="dialog-content">
            <slot name="content"></slot>
        </div>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dialogShow = ref<boolean>(false);
function closeDialog() {
    dialogShow.value = false;
}
function openDialog() {
    dialogShow.value = true;
}
defineExpose({
    closeDialog,
    openDialog,
});
</script>

<style lang="scss" scoped>
.custom-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.dialog-content {
    border-radius: 10rpx;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dialog-buttons {
    text-align: center;
    margin-top: 10px;
    font-size: 28rpx;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: bolder;
    color: #ffffff;
    margin-top: 40rpx;
    .close-btn {
        background: #fa4616;
        border-radius: 8rpx 8rpx 8rpx 8rpx;
        padding: 20rpx;
    }
}
</style>
