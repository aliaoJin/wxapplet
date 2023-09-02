<template>
    <uni-popup ref="inputDialog" type="dialog" @change="popupChange">
        <view class="form-box">
            <view class="form-title" style="font-weight: bolder; padding-top: 15rpx; font-size: 30rpx">预约装修</view>
            <view class="form-title">预约后,我们将尽快安排专员给您致电</view>
            <view style="padding: 30rpx 30rpx 0rpx 30rpx; width: 520rpx">
                <uni-forms v-if="isDialog" ref="baseForm" :modelValue="baseFormData" :rules="rules" label-width="60">
                    <uni-forms-item label="姓名" name="name" required>
                        <uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
                    </uni-forms-item>
                    <uni-forms-item label="电话" name="tel" required>
                        <uni-easyinput v-model="baseFormData.tel" placeholder="请输入电话" />
                    </uni-forms-item>
                    <uni-forms-item label="户型" name="house_type_name" required>
                        <uni-easyinput v-model="baseFormData.house_type_name" placeholder="请输入户型" />
                    </uni-forms-item>
                    <uni-forms-item label="面积" name="area" required>
                        <uni-easyinput type="number" v-model="baseFormData.area" placeholder="请输入面积" />
                    </uni-forms-item>
                    <uni-forms-item label="地址" name="address" required>
                        <uni-easyinput type="textarea" v-model="baseFormData.address" placeholder="请输入地址" />
                    </uni-forms-item>
                </uni-forms>
            </view>
            <view class="form-btn">
                <view class="form-btn1" @click="handleForm(false)">取消</view>
                <view class="form-btn2" @click="handleForm(true)">确定</view>
            </view>
        </view>
    </uni-popup>
</template>

<script lang="ts" setup>
import { reservation } from '@/api/api';
import { inject, reactive, ref } from 'vue';
const imgUrl = inject<string>('imgUrl');
const baseForm = ref();
const inputDialog = ref();
const baseFormData: any = reactive({
    type: 4,
    name: '',
    tel: '',
    address: '',
    area: '',
    house_type_name: '',
});
const isDialog = ref<boolean>(false);
const rules: any = reactive({
    name: { rules: [{ required: true, errorMessage: '姓名不能为空' }] },
    tel: {
        rules: [
            { required: true, errorMessage: '电话不能为空' },
            {
                validateFunction: (rule: any, value: any, data: any, callback: any) => {
                    const reg = /^1[3456789]\d{9}$/;
                    if (!reg.test(value)) {
                        callback('请输入有效的手机号码');
                    }
                    return true;
                },
            },
        ],
    },
    address: { rules: [{ required: true, errorMessage: '地址不能为空' }] },
    area: { rules: [{ required: true, errorMessage: '面积不能为空' }] },
    house_type_name: { rules: [{ required: true, errorMessage: '户型不能为空' }] },
});
function handleForm(isOpen: boolean) {
    if (isOpen) {
        baseForm.value
            .validate()
            .then((val: any) => {
                handleReservation();
            })
            .catch((err: any) => {
                console.log('表单错误信息：', err);
            });
    } else {
        inputDialog.value.close();
    }
}
async function handleReservation() {
    const res: any = await reservation(baseFormData);
    if (res.code === 200) {
        inputDialog.value.close();
        uni.showToast({ icon: 'none', title: '预约成功' });
    } else {
        uni.showToast({ icon: 'error', title: res.msg });
    }
}
function handleRes() {
    inputDialog.value.open();
}

function popupChange(e: any) {
    isDialog.value = e.show;
    if (!e.show) {
        baseFormData.name = '';
        baseFormData.tel = '';
        baseFormData.address = '';
        baseFormData.area = '';
        baseFormData.house_type_name = '';
    }
}

defineExpose({ handleRes });
</script>

<style lang="scss" scoped>
.form-box {
    background: #fff;
    // padding: 30rpx;
    border-radius: 20rpx;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.form-title {
    width: 100%;
    text-align: center;
    font-size: 26rpx;
    color: #1e2732;
    margin-top: 15rpx;
}
.form-btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 26rpx;
    border-top: 1rpx solid #e5e5e5;
}
.form-btn1 {
    color: #999;
    flex: 1;
    text-align: center;
    border-right: 1rpx solid #e5e5e5;
    padding: 18rpx;
}
.form-btn2 {
    color: #409eff;
    flex: 1;
    text-align: center;
    padding: 18rpx;
}
</style>
