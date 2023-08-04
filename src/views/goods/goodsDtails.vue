<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel"
            @row-update="rowUpdate" @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad" @tree-load="treeLoad">
            <template slot="menuLeft">
                <el-button type="danger" size="small" icon="el-icon-delete" v-if="permission.dept_delete" plain
                    @click="handleDelete">删 除
                </el-button>
            </template>
            <template slot-scope="scope" slot="purl">
                <el-image :src="scope.row.purl"></el-image>
            </template>
            <template slot-scope="scope" slot="purlForm">
                <imageUpload :disabled="scope.disabled" v-model="form.purl"></imageUpload>
            </template>
        </avue-crud>
    </basic-container>
</template>

<script>
import { getList, update, add } from "@/api/base/carousel";
import { mainOption } from "@/const/base/carousel"
import { mapGetters } from "vuex";
import website from '@/config/website';

export default {
    data() {
        return {
            form: {},
            selectionList: [],
            query: {},
            loading: true,
            parentId: 0,
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
    methods: {
        handleAdd(row) {
            this.parentId = row.id;
            const column = this.findObject(this.option.column, "parentId");
            column.value = row.id;
            column.addDisabled = true;
            this.$refs.crud.rowAdd();
        },
        rowSave(row, done, loading) {
            console.log("Mr. L 🚀 ~ row:", row)
            let params = {
                miid: row.miid,
                purlList: row.purl,
            }
            add(params).then((res) => {
                // 获取新增数据的相关字段
                const data = res.data.data;
                // row.id = data.id;
                // row.deptCategoryName = data.deptCategoryName;
                // row.tenantId = data.tenantId;
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                done(row);
            }, error => {
                window.console.log(error);
                loading();
            });
        },
        rowUpdate(row, index, done, loading) {
            update(row).then(() => {
                this.$message({
                    type: "success",
                    message: "操作成功!"
                });
                // 数据回调进行刷新
                done(row);
            }, error => {
                window.console.log(error);
                loading();
            });
        },
        searchReset() {
            this.query = {};
            this.parentId = 0;
            this.onLoad(this.page);
        },
        searchChange(params, done) {
            this.query = params;
            this.parentId = '';
            this.page.currentPage = 1;
            this.onLoad(this.page, params);
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
                // this.initData();
            }
            if (["edit", "view"].includes(type)) {
                // getDept(this.form.id).then(res => {
                //     this.form = res.data.data;
                // });
            }
            done();
        },
        beforeClose(done) {
            this.parentId = "";
            done();
        },
        currentChange(currentPage) {
            this.page.currentPage = currentPage;
        },
        sizeChange(pageSize) {
            this.page.pageSize = pageSize;
        },
        refreshChange() {
            this.onLoad(this.page, this.query);
        },
        onLoad(page, params = {}) {
            params = {
                miid: this.parentId,
                status: 1,
            }
            this.loading = true;
            getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
                this.data = res.data.data.pictureList;
                this.loading = false;
                this.selectionClear();
            });
        },
    }
};
</script>

<style></style>
