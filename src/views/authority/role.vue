<template>
  <basic-container>
    <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form"
      :before-open="beforeOpen" @row-del="rowDel" @row-update="rowUpdate" @row-save="rowSave"
      @search-change="searchChange" @search-reset="searchReset" @selection-change="selectionChange"
      @current-change="currentChange" @size-change="sizeChange" @refresh-change="refreshChange" @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger" size="small" icon="el-icon-delete" v-if="permission.role_delete" plain
          @click="handleDelete">删 除
        </el-button>
        <!-- <el-button size="small"
                   icon="el-icon-setting"
                   @click="handleRole"
                   v-if="userInfo.role_name.includes('admin')"
                   plain>权限设置
        </el-button> -->
        <el-button size="small" icon="el-icon-setting" @click="handleRole" plain>权限设置
        </el-button>
      </template>
    </avue-crud>
    <el-dialog title="角色权限配置" append-to-body :visible.sync="box" width="345px">
      <el-tabs type="border-card">
        <el-tab-pane label="菜单权限">
          <el-tree :data="menuGrantList" show-checkbox node-key="menuid" ref="treeMenu"
            :default-checked-keys="menuTreeObj" :props="props">
          </el-tree>
        </el-tab-pane>
        <!-- <el-tab-pane label="数据权限">
          <el-tree :data="dataScopeGrantList" show-checkbox node-key="id" ref="treeDataScope"
            :default-checked-keys="dataScopeTreeObj" :props="props">
          </el-tree>
        </el-tab-pane>
        <el-tab-pane label="接口权限">
          <el-tree :data="apiScopeGrantList" show-checkbox node-key="id" ref="treeApiScope"
            :default-checked-keys="apiScopeTreeObj" :props="props">
          </el-tree>
        </el-tab-pane> -->
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="box = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </basic-container>
</template>

<script>
import { add, getList, getRole, getRoleTree, grant, grantTree, remove, update, pushRole } from "@/api/system/role";
import { mapGetters } from "vuex";
import website from '@/config/website';

export default {
  data() {
    return {
      uid: website.uid,
      form: {},
      box: false,
      props: {
        label: "name",
        value: "menuid"
      },
      menuGrantList: [],
      dataScopeGrantList: [],
      apiScopeGrantList: [],
      apiGrantList: [],
      menuTreeObj: [],
      dataScopeTreeObj: [],
      apiScopeTreeObj: [],
      selectionList: [],
      query: {},
      loading: true,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      option: {
        height: "auto",
        calcHeight: 10,
        tip: false,
        simplePage: true,
        searchShow: true,
        searchMenuSpan: 6,
        tree: true,
        border: true,
        index: true,
        selection: true,
        viewBtn: true,
        dialogWidth: 900,
        dialogClickModal: false,
        column: [
          {
            label: "角色名称",
            prop: "name",
            search: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入角色名称",
                trigger: "blur"
              }
            ]
          },
          {
            label: "角色id",
            prop: "roleid",
            hide: true
          },
          {
            label: "角色标识",
            prop: "sign",
            width: 160,
          },
          {
            label: "创建时间",
            prop: "credate",
            width: 160,
            display: false,
          },
          {
            label: "修改时间",
            prop: "upddate",
            width: 160,
            display: false,
          },
          {
            label: "备注",
            prop: "remark",
            span: 24,
          },
        ]
      },
      data: []
    };
  },
  computed: {
    ...mapGetters(["userInfo", "permission"]),
    ids() {
      let ids = [];
      this.selectionList.forEach(ele => {
        ids.push(ele.roleid);
      });
      return ids.join(",");
    },
    idsArray() {
      let ids = [];
      this.selectionList.forEach(ele => {
        ids.push(ele.roleid);
      });
      return ids;
    }
  },
  methods: {
    initData(uid, roleid) {
      getRoleTree(uid, roleid).then(res => {
        const column = this.findObject(this.option.column, "roleid");
        column.dicData = res.data.data;
        this.roleTree = column.dicData;
      });
    },
    submit() {
      const menuList = this.$refs.treeMenu.getCheckedKeys();
      const dataScopeList = this.$refs.treeDataScope.getCheckedKeys();
      const apiScopeList = this.$refs.treeApiScope.getCheckedKeys();
      grant(this.idsArray, menuList, dataScopeList, apiScopeList).then(() => {
        this.box = false;
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.onLoad(this.page);
      });
    },
    rowSave(row, done, loading) {
      add(row).then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        done();
      }, error => {
        window.console.log(error);
        loading();
      });
    },
    rowUpdate(row, index, done, loading) {
      update(row).then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        done();
      }, error => {
        window.console.log(error);
        loading();
      });
    },
    rowDel(row) {
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(row.id);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
    },

    searchReset() {
      this.query = {};
      this.onLoad(this.page);
    },
    searchChange(params, done) {
      this.query = params;
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
        this.initData(this.uid, this.form.roleid);
      }
      done();
    },
    handleRole() {
      if (this.selectionList.length !== 1) {
        this.$message.warning("只能选择一条数据");
        return;
      }
      this.menuTreeObj = [];
      this.dataScopeTreeObj = [];
      this.apiScopeTreeObj = [];
      // this.roleTree
      getRoleTree(this.uid, this.ids).then(res => {
        let data = res.data.data;
        console.log("Mr. L 🚀 ~ column.dicData:", data)
        this.menuGrantList = data;
        this.menuTreeObj = data;
        // data.forEach((item, index) => {
        //   this.menuTreeObj = item.list
        //   if (item.list.length > 0) {
        //     item.list.forEach((smitem, smindex) => {
        //       this.menuTreeObj = smitem.list
        //     })
        //   }
        // })
        this.box = true;
      });
      // getRoleTree().then(res => {
      //     this.menuGrantList = res.data.data.menu;
      //     this.dataScopeGrantList = res.data.data.dataScope;
      //     this.apiScopeGrantList = res.data.data.apiScope;
      //     getRole(this.ids).then(res => {
      //       this.menuTreeObj = res.data.data.menu;
      //       this.dataScopeTreeObj = res.data.data.dataScope;
      //       this.apiScopeTreeObj = res.data.data.apiScope;
      //       this.box = true;
      //     });
      //   });
    },
    handleDelete() {
      if (this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(this.ids);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$refs.crud.toggleSelection();
        });
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
      this.loading = true;
      getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
        this.data = res.data.data.roleList;
        this.loading = false;
        this.selectionClear();
      });
    }
  }
};
</script>
