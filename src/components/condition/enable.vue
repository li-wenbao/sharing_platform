<template>
    <div>
        <!-- 启用状态 -->
        <div v-if="type == 1">
            <div class="fz-primary" v-if="data == '1'">正常</div>
            <div class="fz-danger" v-else-if="data == '2'">禁用</div>
        </div>
        <!-- 审核状态 -->
        <div v-else-if="type == 2">
            <div class="fz-primary" v-if="data == '1'">正常</div>
            <div class="fz-success" v-else-if="data == '2'">审核中</div>
        </div>
        <!-- 是否跳转 -->
        <div v-else-if="type == 3">
            <div class="fz-primary" v-if="data == '1'">是</div>
            <div class="fz-info" v-else-if="data == '2'">否</div>
        </div>
        <!-- 种类类型 -->
        <div v-else-if="type == 4">
            <div class="fz-primary" v-if="data == '1'">折扣券</div>
            <div class="fz-success" v-else-if="data == '2'">满减券</div>
            <div class="fz-warning" v-else-if="data == '3'">指定券</div>
        </div>
        <!-- 发放方式 -->
        <div v-else-if="type == 5">
            <div class="fz-primary" v-if="data == '1'">自由领取</div>
            <div class="fz-success" v-else-if="data == '2'">限量发放</div>
        </div>
        <!-- 发放方式 -->
        <div v-else-if="type == 6">
            <div class="fz-primary" v-if="data == '1'">正常</div>
            <div class="fz-success" v-else-if="data == '2'">禁用</div>
            <div class="fz-warning" v-else-if="data == '3'">待发布</div>
        </div>
        <!-- 审核状态 -->
        <div v-else-if="type == 7">
            <div class="fz-primary" v-if="data == '1'">审核中</div>
            <div class="fz-success" v-else-if="data == '2'">正常</div>
            <div class="fz-danger" v-else-if="data == '3'">审核失败</div>
            <div class="fz-success" v-else-if="data == '4'">注销</div>
            <div class="fz-info" v-else-if="data == '5'">已取消</div>
        </div>
        <!-- 支付状态 0.待确认 1.待付款 2.已付款 3.已取消 4.已退款-->
        <div v-else-if="type == 8">
            <div class="fz-info" v-if="data == '0'">待确认</div>
            <div class="fz-primary" v-else-if="data == '1'">待付款</div>
            <div class="fz-success" v-else-if="data == '2'">已付款</div>
            <div class="fz-danger" v-else-if="data == '3'">已取消</div>
            <div class="fz-success" v-else-if="data == '4'">已退款</div>
        </div>
        <!-- 加盟状态:1.申请中 2.加盟成功 3.申请失败-->
        <div v-else-if="type == 9">
            <div class="fz-primary" v-if="data == '1'">申请中</div>
            <div class="fz-success" v-else-if="data == '2'">加盟成功</div>
            <div class="fz-danger" v-else-if="data == '3'">申请失败</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "enable",
    props: {
        type: {
            type: String,
            default: '1'
        },
        data: {
            type: String,
        }
    }
}
</script>

<style></style>