<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :permission="permissionList" :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel"
            @row-update="rowUpdate" @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <template slot="status" slot-scope="scope">
                <enable :data="scope.row.status"></enable>
            </template>
            <template slot="codeurl" slot-scope="scope">
                <el-image :src="scope.row.codeurl" class="list-images-box-1" :preview-src-list="srcList"></el-image>
            </template>
            <template #menu="{ size, row, index }">
                <el-button v-if="row.level !='0'" type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="rowUpdate(row, index)">
                    <i class="iconfont iconicon_doc"></i>
                    编辑
                </el-button>
            </template>
        </avue-crud>
    </basic-container>
</template>
  
<script>
import { getList, update, add } from "@/api/user/account";
import { getList as roleList } from "@/api/user/role";
import { mainOption } from "@/const/user/account"

export default {
    data() {
        return {
            form: {},
            selectionList: [],
            srcList: [],
            query: {},
            loading: true,
            parentId: 0,
            status: 1,
            page: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
            },
            option: mainOption,
            data: []
        };
    },
    computed: {
        ids() {
            let ids = [];
            this.selectionList.forEach(ele => {
                ids.push(ele.id);
            });
            return ids.join(",");
        }
    },
    mounted() {
        this.initData()
    },
    methods: {
        initData() {
            let params = {}
            roleList(this.page.currentPage, this.page.pageSize, Object.assign(params, this.query)).then(res => { //角色
                const column = this.findObject(this.option.column, "roleName");
                column.dicData = res.data.data.roleList;
            })
        },
        handleAdd(row) {
            this.$refs.crud.rowAdd();
        },
        rowSave(row, done, loading) {
            row.roleid = row.roleName //选项卡 重新赋值
            if (row.level == "2") {
                row.supuid = row.supname
            }
            add(row).then((res) => {
                // 获取新增数据的相关字段
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                this.refreshChange()
                done(row);
            }, error => {
                window.console.log(error);
                loading();
            });
        },
        rowUpdate(row, index, done, loading) {
            if (row.type == '3') {
                row.roleid = row.roleName //选项卡 重新赋值
            }
            update(row).then(() => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                this.refreshChange()
                done(row);
            }, error => {
                window.console.log(error);
                loading();
            });
        },
        searchReset() {
            this.query = {};
            this.parentId = 0;
            this.onLoad(this.page, this.query);
        },
        searchChange(params, done) {
            this.query = params;
            this.page.currentPage = 1;
            this.onLoad(this.page, this.query);
            done();
        },
        selectionChange(list) {
            this.selectionList = list;
        },
        selectionClear() {
            this.selectionList = [];
            this.$refs.crud.toggleSelection();
        },
        beforeOpen(done, type) {
            if (["add", "edit"].includes(type)) {
            }
            if (["edit", "view"].includes(type)) {
            }
            done();
        },
        beforeClose(done) {
            done();
        },
        currentChange(currentPage) {
            this.page.currentPage = currentPage;
        },
        sizeChange(pageSize) {
            this.page.pageSize = pageSize;
        },
        refreshChange() {
            this.parentId = 0
            this.onLoad(this.page, this.query);
        },
        onLoad(page, params = {}) {
            this.loading = true;
            getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
                if (res && res.data) {
                    let data = res.data.data
                    if (data.userList) {
                        this.data = data.userList
                    }
                    const column = this.findObject(this.option.column, "supname");
                    column.dicData = res.data.data.userList;
                    this.page.total = data.count;
                }
                this.loading = false;
                this.selectionClear();
            });
        },
    }
};
</script>
  
<style></style>
  