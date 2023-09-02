<template>
    <view class="conatiner">
        <view class="three-six-nine-conts" style="margin-top: 20rpx">
            <view class="three-six-nine">
                <view class="three-totals">
                    <view class="three-left">
                        <image class="threes-left" :src="imgUrl + '3.png'" mode=""></image>
                        <view class="mian-left">
                            <text class="mian-left-text">免</text>
                        </view>
                        <view class="three-contents"> 拎包入住一口价 杜绝装修乱加价 </view>
                    </view>
                    <view class="three-bottom">
                        <view class="three-img-text">
                            <image class="three-bottom-img" :src="imgUrl + 'gongdi_1.png'" mode=""></image>
                            <view class="three-bottom-text"> 免设计费 </view>
                        </view>
                        <view class="three-img-text">
                            <image class="three-bottom-img" :src="imgUrl + 'gongdi_2.png'" mode=""></image>
                            <view class="three-bottom-text"> 免保洁费 </view>
                        </view>
                        <view class="three-img-text">
                            <image class="three-bottom-img" :src="imgUrl + 'gongdi_3.png'" mode=""></image>
                            <view class="three-bottom-text"> 免施工管理费 </view>
                        </view>
                    </view>
                </view>
                <view class="six-totals">
                    <view class="three-left">
                        <image class="threes-left" :src="imgUrl + '6.png'" mode=""></image>
                        <view class="mian-left">
                            <text class="mian-left-text">包</text>
                        </view>
                        <view class="three-contents"> 先省心再省钱 一站式全包 </view>
                    </view>
                    <view class="six-bottom">
                        <view class="six-bottom-img">
                            <image class="six-img-texts" :src="imgUrl + 'bjc-background.png'" mode=""></image>

                            <image class="six-img-texts" :src="imgUrl + 'brg-background.png'" mode=""></image>

                            <image class="six-img-texts" :src="imgUrl + 'bdzg-background.png'" mode=""></image>

                            <image class="six-img-texts" :src="imgUrl + 'bdj-background.png'" mode=""></image>

                            <image class="six-img-texts" :src="imgUrl + 'bcg-background.png'" mode=""></image>

                            <image class="six-img-texts" :src="imgUrl + 'bwy-background.png'" mode=""></image>
                        </view>
                    </view>
                </view>

                <view class="nine-totals">
                    <view class="three-left">
                        <image class="threes-left" :src="imgUrl + '9.png'" mode=""></image>
                        <view class="mian-lefts">
                            <text class="mian-left-text">不限</text>
                        </view>
                        <view class="nine-contents"> 价格公开透明 材料用量9不限 </view>
                    </view>
                    <view class="nine-bottom">
                        <image class="nine-img-texts" :src="imgUrl + 'tjx-background.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'dxmsbx-background.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'dbpfbx-backgrouond.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'sgmsbx-background.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'czpfbx-background.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'czgsbx-background.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'cgmsbx-background.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'kggsbx-background.png'" mode=""></image>

                        <image class="nine-img-texts" :src="imgUrl + 'djgsbx-background.png'" mode=""></image>
                    </view>
                </view>
            </view>
        </view>

        <view class="twelve-craft">
            <view class="twelve-craft-title"> 每次创新，都是为了让你住定更好，让家变得更美，让理想中的生活和你靠的更近 </view>
            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'one.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 下水静音 </view>
                    <view class="twleve-text-bottom"> 专用隔音材料，有效减少噪音的影响 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'two.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 安全接线 </view>
                    <view class="twleve-text-bottom"> 专用的接线端子，牢固、安全、导电好 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'three.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 精准防线 </view>
                    <view class="twleve-text-bottom"> 装修前家装元素墙面体现，确保基础工程无误 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'four.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 黄色墙固 </view>
                    <view class="twleve-text-bottom"> 选用环保材料、抗碱、增加面牢固度 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'five.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 透明管线 </view>
                    <view class="twleve-text-bottom"> 管内没有电线接口，一目了然，诚信看到 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'six.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 卫水宝抗菌水管 </view>
                    <view class="twleve-text-bottom"> 具有节能节材、环保、耐腐蚀、维修简便、使 用寿命长等优点 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'seven.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 墙面防开裂挂网 </view>
                    <view class="twleve-text-bottom"> 为墙面增加网状加固层，可有效避免前面开裂 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'eight.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 燃气报警 </view>
                    <view class="twleve-text-bottom"> 为家中用火安全保驾护航 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'nines.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 无沙找平 </view>
                    <view class="twleve-text-bottom"> 自流平技术，利用重力达到地面水平，并具备 隔音、吸潮、保温的功能 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'ten.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 双层石膏吊顶 </view>
                    <view class="twleve-text-bottom"> 轻钢龙骨，转角加固工艺，有效防吊顶裂缝 防止开裂 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'eleven.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 防水高度达到1.8米 </view>
                    <view class="twleve-text-bottom"> 淋浴区1.8米，其他区域0.3米为行业规范，沪 尚茗居全屋1.8米 </view>
                </view>
            </view>

            <view class="twleve-img-text">
                <image class="twelve-img" :src="imgUrl + 'twelve.png'" mode=""></image>
                <view class="twleve-text">
                    <view class="twleve-text-top"> 大弯工艺 </view>
                    <view class="twleve-text-bottom"> 别墅级的水电走线工艺，抽线换线更加方便省力 </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const imgUrl = ref('https://xcx4hsmj.oss-cn-hangzhou.aliyuncs.com/xuezhuangxiu/');
</script>

<style lang="scss" scoped>
.twleve-text-bottom {
    margin-top: 16rpx;
    width: 506rpx;
    height: 24rpx;
    font-size: 24rpx;
    color: #866962;
}

.twleve-text-top {
    width: 243rpx;
    height: 28rpx;
    font-size: 28rpx;
    color: #3f1910;
}

.twleve-text {
    width: 506rpx;
    height: 70rpx;
    margin-left: 31rpx;
}

.twelve-img {
    width: 70rpx;
    height: 70rpx;
    padding-left: 50rpx;
}

.twleve-img-text {
    width: 100%;
    height: 80rpx;
    margin-top: 58rpx;
    display: flex;
    flex-direction: row;
}

.twelve-craft-title {
    width: 554rpx;
    height: 67rpx;
    margin-left: 69rpx;
    padding-top: 149rpx;
    color: #e62b00;
    font-size: 28rpx;
    text-indent: 1.5em;
}

.nine-img-texts {
    width: 96rpx;
    height: 154rpx;
    margin-top: 27rpx;
    margin-left: 22rpx;
}

.nine-bottom {
    width: 624rpx;
    height: 342rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.nine-totals {
    width: 624rpx;
    height: 500rpx;
}

.six-bottom-img {
    width: 100%;
    height: 126rpx;
}

.six-bottom {
    width: 700rpx;
    height: 126rpx;
}

.six-totals {
    width: 620rpx;
    height: 296rpx;
}

.six-img-texts {
    width: 94rpx;
    height: 126rpx;
    margin-top: 27rpx;
    margin-left: 9rpx;
}

.twelve-craft {
    width: 690rpx;
    height: 1908rpx;
    margin-left: 30rpx;
    margin-top: 10rpx;
    background-image: url('https://xcx4hsmj.oss-cn-hangzhou.aliyuncs.com/xuezhuangxiu/twelve-background.png');
    background-repeat: no-repeat;
    background-size: 100% 100% !important;
}

.nine-contents {
    width: 105%;
    font-size: 15rpx;
    margin-top: 18%;
    margin-left: -15rpx;
}

.three-six-nine-conts {
    width: 690rpx;
    height: 1378rpx;
    margin-left: 30rpx;
    background-size: 100% 100%;
    background-image: url('https://xcx4hsmj.oss-cn-hangzhou.aliyuncs.com/xuezhuangxiu/three-six-nine-background.png');
    display: flex;
    flex-direction: row;
}

.three-six-nine {
    width: 620rpx;
    height: 1192rpx;
    margin-left: 36rpx;
    margin-top: 128rpx;
    display: flex;
    flex-direction: column;
}

.three-totals {
    width: 620rpx;
    height: 350rpx;
}

.three-bottom-text {
    width: 145rpx;
    height: 35rpx;
    font-size: 24rpx;
    color: #b73718;
    margin-left: 58rpx;
    margin-top: 18rpx;
    display: flex;
}

.three-bottom-img {
    width: 192rpx;
    height: 137rpx;
    margin-left: 33rpx;
    margin-top: 22rpx;
    display: flex;
}

.three-img-text {
    width: 192rpx;
    height: 181rpx;
    margin-left: 24rpx;
}

.three-bottom {
    width: 620rpx;
    height: 230rpx;
    display: flex;
    margin-left: -55rpx;
    flex-direction: row;
}

.three-left {
    width: 620rpx;
    height: 124rpx;
    margin-left: 6rpx;
    background-size: 100% 100%;
    background-image: url('https://xcx4hsmj.oss-cn-hangzhou.aliyuncs.com/xuezhuangxiu/threes-background.png');
    display: flex;
    flex-direction: row;
}

.threes-left {
    width: 34rpx;
    height: 78rpx;
    margin-left: 39rpx;
    margin-top: 22rpx;
}

.mian-lefts {
    width: 78rpx;
    height: 36rpx;
    font-size: 25rpx;
    margin-top: 10%;
    background-size: 100% 100%;
    background-image: url('https://xcx4hsmj.oss-cn-hangzhou.aliyuncs.com/xuezhuangxiu/nine-buxian-background.png');
    margin-top: 20rpx;
    margin-left: 32rpx;
}

.mian-left {
    width: 48rpx;
    height: 36rpx;
    font-size: 25rpx;
    margin-top: 10%;
    background-size: 100% 100%;
    background-image: url('https://xcx4hsmj.oss-cn-hangzhou.aliyuncs.com/xuezhuangxiu/mian.png');
    margin-top: 20rpx;
    margin-left: 32rpx;
}

.mian-left-text {
    width: 26rpx;
    height: 26rpx;
    color: #fff600;
    font-size: 26rpx;
    margin-left: 11rpx;
    margin-top: 6rpx;
}

.nine-contents {
    width: 446rpx;
    height: 29rpx;
    color: #602d21;
    font-size: 29rpx;
    margin-top: 71rpx;
    margin-left: -75rpx;
}

.three-contents {
    width: 446rpx;
    height: 29rpx;
    color: #602d21;
    font-size: 29rpx;
    margin-top: 71rpx;
    margin-left: -45rpx;
}
</style>
