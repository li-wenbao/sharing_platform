<template>
    <div class="tencent-container" style="position: relative;">
        <div style="position: absolute;top:0;z-index: 100;">
            <div class="flex align-center m-2">
                <el-input placeholder="请输入内容" v-model="inputValue" class="input-with-select" @input="onSearch()"
                    @blur="souShow = false">
                    <el-button slot="append" icon="el-icon-search" @click="onSearch()"></el-button>
                </el-input>
                <!-- <div>{{ latLngPosition }}</div> -->
                <el-input placeholder="" style="width: 360px;" class="ml-4" v-model="latLngPosition">
                    <template slot="prepend">坐标</template>
                    <el-button slot="append" @click="onLatLng()">确认</el-button>
                </el-input>
            </div>
            <div v-show="souShow" class="souShow-container">
                <div v-for="(item, index) in searchList" :key="index" @click="onChangeAddress(item)"
                    class="mt-2 mb-2 pointer">
                    <div class="flex align-center">
                        <span></span> {{ item.title }}
                    </div>
                    <div class="flex align-center">
                        <span class="mr-2">位置</span> {{ item.address }}
                    </div>
                    <div class="divide-current"></div>
                </div>
            </div>
        </div>
        <div id="mapItem" class="mapItem-container" style="position: absolute;top:0;z-index: 1;"></div>
    </div>
</template>

<script>
// 初始化地图
import { Message } from 'element-ui';
export default {
    data() {
        return {
            map: null,
            key: "VRBBZ-3S46X-YS74T-TVJ7M-DV4EE-VMBOX",
            marker: "",
            longitude: "",
            latitude: "",
            latLngPosition: "",
            inputValue: "",
            queryParams: {},
            searchList: [],
        }
    },
    mounted() {
        // 1，初始化腾讯地图
        this.geolocation = new qq.maps.Geolocation(this.key, 'mapItem');
        // 2，并且开始定位
        this.getMyLocation();
    },
    methods: {
        // 获取当前位置
        getMyLocation() {
            this.geolocation.getLocation(this.showPosition, this.errorPosition); //开启定位
        },
        // 定位成功
        showPosition(position) {
            console.log('定位成功', position);
            this.longitude = position.lng;
            this.latitude = position.lat;
            this.queryParams.address = position.city + position.province + position.addr;
            // 定位成功后开始绘制地图
            this.setMap();
        },

        // 定位失败 继续尝试定位
        errorPosition(e) {
            console.log('定位失败，再次进行定位');
            // 此判断是防止多次绘制地图
            if (!this.map) {
                this.getMyLocation();
            }
        },
        /*
     *  setMap 此方法主要是绘制地图和地图标点
     *  绘制地图
     *  绘制地图演示：https://lbs.qq.com/webDemoCenter/glAPI/glMap/createMap
     *  地图标点演示：https://lbs.qq.com/webDemoCenter/glAPI/glMarker/glImagetext
     *  路线规划演示：https://lbs.qq.com/webDemoCenter/glAPI/glPolyline/polylineRoutePlan
     */
        setMap() {
            // 防止重复绘制地图
            if (this.map) {
                return;
            };
            // 获取存放地图的容器
            this.mapEl = document.getElementById('mapItem');
            //设置地图中心点
            this.startPosition = new TMap.LatLng(this.latitude, this.longitude);
            //定义工厂模式函数
            var myOptions = {
                rotation: 20, //设置地图旋转角度
                pitch: 30, //设置俯仰角度（0~45）
                zoom: 18, //设置地图缩放级别
                center: this.startPosition, //设置地图中心点坐标
                // mapTypeId:  window.TMap.MapTypeId.ROADMAP, //设置地图样式详情参见MapType
            };
            try {
                // 开始生成地图
                this.map = new TMap.Map(this.mapEl, myOptions);
            } catch (error) {
                console.error('error:', error);
            }
            this.marker = new TMap.MultiMarker({
                map: this.map, //指定地图容器
                styles: {
                    // 点标记样式
                    marker1: new TMap.MarkerStyle({
                        width: 20, // 样式宽
                        height: 30, // 样式高
                        anchor: { x: 10, y: 30 }, // 描点位置
                    }),
                },
                // 点标记数据数组
                geometries: [
                    {
                        id: '1',
                        styleId: 'marker1', // 和上面styles里面的marker1 向对应
                        position: new TMap.LatLng(this.latitude, this.longitude), // 标点的位置
                        properties: {
                            title: 'marker',
                        },
                    },
                ],
            });
            // this.addMarker()
            this.addListenerClick() //监听点击事件添加marker
        },

        //监听点击事件添加marker
        addListenerClick() {
            this.map.on("click", (evt) => {
                this.marker.setMap(null);
                var lat = evt.latLng.getLat().toFixed(6);
                var lng = evt.latLng.getLng().toFixed(6);
                this.latLngPosition = lat + "," + lng;
                this.latitude = lat
                this.longitude = lng
                this.addMarker()
            });
        },
        // 添加标点
        addMarker() {
            // TMap.MultiMarker
            // 地图标点官方演示请见：https://lbs.qq.com/webDemoCenter/glAPI/glMarker/glImagetext
            // if (!this.marker) {
            this.marker = new TMap.MultiMarker({
                map: this.map, //指定地图容器
                styles: {
                    // 点标记样式
                    marker1: new TMap.MarkerStyle({
                        width: 20, // 样式宽
                        height: 30, // 样式高
                        anchor: { x: 10, y: 30 }, // 描点位置
                    }),
                },
                // 点标记数据数组
                geometries: [
                    {
                        id: '2',
                        styleId: 'marker2', // 和上面styles里面的marker1 向对应
                        position: new TMap.LatLng(this.latitude, this.longitude), // 标点的位置
                        properties: {
                            title: 'marker',
                        },
                    },
                ],
            });
            // }
        },
        moveMarker() {
            // 初始化几何图形及编辑器
            new TMap.tools.GeometryEditor({
                map: this.map, //指定地图容器 // 编辑器绑定的地图对象
                overlayList: [{
                    overlay: this.marker, // 可编辑图层
                    id: "marker",
                    selectedStyleId: "highlight"  // 被选中的marker会变为高亮样式
                }],
                actionMode: TMap.tools.constants.EDITOR_ACTION.INTERACT, // 编辑器的工作模式
                activeOverlayId: "marker", // 激活图层
                selectable: true
            });
        },
        removeMarker() {
            if (this.marker) {
                this.marker.setMap(null);
                this.marker = null;
            }
        },
        /* 点击搜索 搜索地址列表
          * 官方演示地址为：https://lbs.qq.com/webDemoCenter/glAPI/glServiceLib/suggestion
        */
        onSearch() {
            this.searchItem = new TMap.service.Search({ pageSize: 10 });
            // 搜索类
            this.suggest = new TMap.service.Suggestion({
                pageSize: 10, // 返回结果每页条目数
                region: this.city, // 限制城市范围
                regionFix: true, // 搜索无结果时是否固定在当前城市
            });
            if (this.inputValue) {
                // 请求腾讯地图接口
                this.suggest.getSuggestions({ keyword: this.inputValue, location: this.map.getCenter() }).then((result) => {
                    this.searchList = result.data;
                    if (typeof this.searchList == 'object') {
                        this.souShow = true;
                    }
                });

            } else {
                Message({
                    message: "请输入地点再进行搜索",
                    type: 'error'
                });
            }
        },
        onChangeAddress(value) {
            this.$emit("onChangeAddress", value)
        },
        onLatLng() {
            this.$emit("initLatLng", this.latLngPosition)
        },
    },
}
</script>

<style lang="scss" scoped>
.tencent-container {
    width: 100%;
    height: 100%;

    .mapItem-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .souShow-container {
        width: 450px;
        height: 200px;
        overflow-y: auto;
        background: #fff;
    }

    .el-select .el-input {
        width: 360px;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }

}
</style>