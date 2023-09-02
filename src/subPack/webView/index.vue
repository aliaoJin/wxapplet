<template>
    <view class="container">
        <web-view :src="links"></web-view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const links = ref('');
onLoad((opt: any) => {
    links.value = JSON.parse(decodeURIComponent(opt.travel_link));
});
</script>
