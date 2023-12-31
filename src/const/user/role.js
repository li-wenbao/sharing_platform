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
      span: 12,
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
      display: false,
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
      span: 12,
      width: 160,
    },
    {
      label: "创建时间",
      prop: "credate",
      width: 140,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 140,
      display: false,
    },
    {
      label: "备注",
      prop: "remark",
      rows: 5,
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
        width: 140,
        display: false,
      },
      {
        label: "修改时间",
        prop: "upddate",
        width: 140,
        display: false,
      },
      {
        label: "备注",
        prop: "remark",
        span: 24,
      },
    ],
  };
  