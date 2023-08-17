export const mainOption = {
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
  // addBtn: false,
  viewBtn: true,
  // editBtn: false,
  delBtn: false,
  menuWidth: 200,
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
          trigger: "blur",
        },
      ],
    },
    {
      label: "角色",
      prop: "roleid",
      addDisplay: false,
      editDisplay: false,
      hide: true,
      type: "select",
      // slot: true,
      dicData: [],
      props: {
        label: "name",
        value: "roleid",
      },
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
  ],
};

export const rolePermissionsOption = {
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
    // addBtn: false,
    viewBtn: true,
    // editBtn: false,
    delBtn: false,
    menuWidth: 200,
    dialogClickModal: false,
    column: [

        // "menuid": 164, //菜单id
        // "parentid": 163, //父菜单id
        // "parentname": null, //父菜单名称
        // "name": "菜单列表", //菜单名称
        // "url": "/", //菜单url
        // "perms": "menu1", //标识(无实际用处)
        // "type": 1, //类型  0:目录  1:菜单   2:按钮
        // "icon": "index", //图标
        // "ordernum": 1, //排序
        // "credate": "2023-07-26 17:24:52", //创建时间
        // "upddate": "2023-07-26 17:24:52", //修改时间
        // "open": true, //true 已选中 false 未选中
        // "list": null //子集
      {
        label: "角色名称",
        prop: "name",
        search: true,
        span: 24,
        rules: [
          {
            required: true,
            message: "请输入角色名称",
            trigger: "blur",
          },
        ],
      },
      {
        label: "角色",
        prop: "roleid",
        addDisplay: false,
        editDisplay: false,
        hide: true,
        type: "select",
        // slot: true,
        dicData: [],
        props: {
          label: "name",
          value: "roleid",
        },
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
    ],
  };
  