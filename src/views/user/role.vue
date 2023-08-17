<template>
    <basic-container>
        <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
            :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate"
            @row-save="rowSave" @search-change="searchChange" @search-reset="searchReset"
            @selection-change="selectionChange" @current-change="currentChange" @size-change="sizeChange"
            @refresh-change="refreshChange" @on-load="onLoad">
            <template #menu="{ size, row, index }">
                <el-button type="button" class="el-button el-button--text el-button--small"
                    @click.stop.native="openDetail(row, index, 1)">
                    <i class="iconfont iconicon_doc"></i>
                    权限
                </el-button>
            </template>
            <!-- <template slot="menuLeft">
                <el-button size="small" icon="el-icon-delete" @click.stop="openDetail(row, index, 1)" plain>菜单配置
                </el-button>
            </template> -->
        </avue-crud>
        <el-dialog title="角色权限" append-to-body :visible.sync="perShow" width="345px">
            <el-tree :data="menuList" show-checkbox node-key="menuid" ref="treeMenu" :default-checked-keys="roleList"
                :props="props" highlight-current>
            </el-tree>
            <span class="dialog-footer">
                <el-button @click.stop="perShow = false">取 消</el-button>
                <el-button type="primary" @click.stop="submit">确 定</el-button>
            </span>
        </el-dialog>
    </basic-container>
</template>
  
<script>
import { getList, update, add, rolePermissions, setRolePermissions } from "@/api/user/role";
import { getList as getMenuList } from "@/api/base/menu";
import { mapGetters } from "vuex";
import { mainOption } from "@/const/user/role"
import { randomLenNum, changeId, getChidlren } from "@/util/util"
export default {
    components: {
    },
    data() {
        return {
            uid: "",
            roleid: '',
            perShow: false,
            tranceferDataForm: {
                randomKey: randomLenNum(4, true),
            },
            form: {},
            formName: "",    
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
            data: [],
            props: {
                children: 'children',
                label: "name",
            },
            menuList: [],
            roleList: [],
            menuTreeObj: [],
        };
    },
    computed: {
        ...mapGetters(["userInfo"]),
        ids() {
            let ids = [];
            this.selectionList.forEach(ele => {
                ids.push(ele.menuid);
            });
            return ids.join(",");
        },
        idsArray() {
            let ids = [];
            this.selectionList.forEach((ele) => {
                ids.push(ele.menuid);
            });
            return ids;
        },
    },
    mounted() {
    },
    methods: {
        openDetail(row, index, type) {
            this.uid = this.userInfo.token
            this.roleid = row.roleid
            this.roleList = [];
            getMenuList(this.userInfo.token).then(res => {
                this.menuList = res.data.data;
                rolePermissions(this.uid, this.roleid).then(res => {
                    if (res && res.data) {
                        let data = res.data.data
                        changeId(data, "list", "children"); //格式化数据
                        let dad = getChidlren(data, 'open', true)
                        this.roleList = dad
                    }
                    this.loading = false;
                    this.selectionClear();
                });
            })
            this.perShow = true
        },
        handleAdd(row) {
            this.$refs.crud.rowAdd();
        },
        rowSave(row, done, loading) {
            add(row).then((res) => {
                // 获取新增数据的相关字段
                // const data = res.data.data;
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
            if (this.formName == row.name) {
                row.name = ''
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
                this.formName = this.form.name
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
                    if (data.roleList) {
                        this.data = data.roleList
                    }
                    this.page.total = data.count;
                }
                this.loading = false;
                this.selectionClear();
            });
        },
        submit() {
            const menuList = this.$refs.treeMenu.getCheckedKeys();
            let ids = menuList.join(',')
            setRolePermissions(this.roleid, ids).then(() => {
                this.$message({
                    type: "success",
                    message: "操作成功!",
                });
                this.perShow = false;
                this.onLoad(this.page);
            });
        },
    }
};
</script>
  
<style></style>
  