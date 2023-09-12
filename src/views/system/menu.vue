<template>
  <basic-container>
    <avue-crud :option="option" :table-loading="loading" :data="data" ref="crud" v-model="form" :page.sync="page"
      :before-open="beforeOpen" :before-close="beforeClose" @row-del="rowDel" @row-update="rowUpdate" @row-save="rowSave"
      @search-change="searchChange" @search-reset="searchReset" @selection-change="selectionChange"
      @current-change="currentChange" @size-change="sizeChange" @refresh-change="refreshChange" @on-load="onLoad"
      @tree-load="treeLoad">
      <template slot="menuLeft">
        <el-button type="danger" size="small" icon="el-icon-delete" plain @click="handleDelete">删 除
        </el-button>
      </template>
      <template slot-scope="scope" slot="menu">
        <el-button type="text" icon="el-icon-circle-plus-outline" size="small"
          @click.stop="handleAdd(scope.row, scope.index)">新增子项
        </el-button>
      </template>
      <template slot-scope="{row}" slot="icon">
        <div style="text-align:center">
          <i :class="row.icon" />
        </div>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
import { getLazyList, remove, update, add, getRoutes } from "@/api/system/menu";
import { mapGetters } from "vuex";
import iconList from "@/config/iconList";

export default {
  data() {
    return {
      form: {},
      query: {},
      loading: true,
      selectionList: [],
      parentId: 0,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
      },
      option: {
        height: "auto",
        calcHeight: 10,
        dialogDrag: true,
        lazy: true,
        tip: false,
        simplePage: true,
        searchShow: false,
        searchMenuSpan: 4,
        dialogWidth: "50%",
        tree: true,
        border: true,
        index: true,
        selection: true,
        viewBtn: true,
        menuWidth: 300,
        dialogClickModal: false,
        column: [
          {
            label: "菜单名称",
            prop: "name",
            search: true,
            rules: [
              {
                required: true,
                message: "请输入菜单名称",
                trigger: "blur"
              }
            ]
          },
          {
            label: "授权",
            prop: "perms",
            search: true,
            rules: [
              {
                required: true,
                message: "请输入菜单名称",
                trigger: "blur"
              }
            ]
          },
          {
            label: "路由链接",
            prop: "url",
            rules: [
              {
                required: true,
                message: "请输入路由地址",
                trigger: "blur"
              }
            ]
          },
          {
            label: "上级菜单",
            prop: "parentid",
            type: "tree",
            defaultExpandAll: true,
            dicData: [],
            hide: true,
            minWidth: 160,
            props: {
              label: "name",
              value: 'menuid'
            },
            rules: [
              {
                required: false,
                message: "请选择上级菜单",
                trigger: "click",
              },
            ],
          },
          {
            label: "菜单图标",
            prop: "icon",
            type: "icon",
            slot: true,
            iconList: iconList,
            width: 100,
            rules: [
              {
                required: true,
                message: "请输入菜单图标",
                trigger: "click"
              }
            ]
          },
          {
            label: "菜单类型",
            prop: "type",
            type: "radio",
            dicData: [
              {
                label: "目录",
                value: 0
              },
              {
                label: "菜单",
                value: 1
              },
              {
                label: "按钮",
                value: 2
              }
            ],
            hide: true,
            rules: [
              {
                required: true,
                message: "请选择菜单类型",
                trigger: "blur"
              }
            ]
          },
          {
            label: "排序",
            prop: "ordernum",
            type: "number",
            width: 100,
            align: "center",
            rules: [
              {
                required: true,
                message: "请输入菜单排序",
                trigger: "blur"
              }
            ]
          },
        ]
      },
      data: []
    };
  },
  watch: {
  },
  computed: {
    ...mapGetters(["userInfo"]),
    ids() {
      let ids = [];
      this.selectionList.forEach(ele => {
        ids.push(ele.menuid);
      });
      return ids.join(",");
    }
  },
  methods: {
    initData() {
      getRoutes(this.userInfo.token).then(res => {
        const column = this.findObject(this.option.column, "parentid");
        column.dicData = res.data.data;
      });
    },
    handleAdd(row) {
      this.parentId = row.parentid;
      const column = this.findObject(this.option.column, "parentid");
      column.value = row.parentid;
      column.addDisabled = true;
      this.$refs.crud.rowAdd();
    },
    rowSave(row, done, loading) {
      if (row.parentid == '') {
        row.parentid = 0;
      }
      add(row).then((res) => {
        // 获取新增数据的相关字段
        const data = res.data;
        row.id = data.code;
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
      row.orderNum = row.ordernum
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
    rowDel(row, index, done) {
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(row.menuid);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          // 数据回调进行刷新
          this.refreshChange()
          done(row);
        });
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
          // 刷新表格数据并重载
          this.data = [];
          this.parentId = 0;
          this.$refs.crud.refreshTable();
          this.$refs.crud.toggleSelection();
          // 表格数据重载
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
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
        this.initData();
      }
      if (["edit", "view"].includes(type)) {
      }
      done();
    },
    beforeClose(done) {
      this.$refs.crud.tableForm = {};
      this.$refs.crud.value.parentid = "";
      this.$refs.crud.value.addDisabled = false;
      this.$refs.crud.option.column.filter((item) => {
        if (item.prop === "parentid") {
          item.value = "";
          item.addDisabled = false;
        }
      });
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
      this.loading = true;
      getLazyList(this.parentId, Object.assign(params, this.query)).then(res => {
        if (res && res.data) {
          this.data = res.data.data;
        }
        this.loading = false;
        this.selectionClear();
      });
    },
    treeLoad(tree, treeNode, resolve) {
      const parentId = tree.menuid;
      getLazyList(parentId).then(res => {
        resolve(res.data.data);
      });
    }
  }
};
</script>

<style></style>
