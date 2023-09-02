<template>
    <view class="notdata">
        <image :src="`${imgUrl}notdata.png`" class="item-img"></image>
        <view>暂无数据</view>
    </view>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
const imgUrl = inject<string>('imgUrl');
</script>

<style lang="scss" scoped>
.notdata {
    text-align: center;
}
</style>
