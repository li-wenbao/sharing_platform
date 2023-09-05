<template>
    <div class="unitsInput-content flex">
        <el-input v-model="value" :type="type" :name="name" :placeholder="placeholder"></el-input>
        <span class="flex justify-end" style="margin-left: -50px;z-index: 100;">{{ units }}</span>
    </div>
</template>

<script>
export default {
    name: "unitsInput",
    data() {
        return {

        }
    },
    props: {
        type: {
            type: String,
            default: "number",
        },
        name:  {
            type: String,
            default: "",
        },
        units: [String,''],
        value: [String,'']
    },
    computed:{
        placeholder(){
            return "请输入" + this.name
        }
    },
    methods: {
      
    }
}
</script>

<style lang="scss" scoped>
.unitsInput-content {
    width: 100%;
}
</style>