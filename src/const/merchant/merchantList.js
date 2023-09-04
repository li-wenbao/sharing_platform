export const mainOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  lazy: true,
  tip: false,
  simplePage: true,
  searchShow: true,
  searchMenuSpan: 4,
  searchSpan: 5,
  dialogWidth: "50%",
  tree: true,
  border: true,
  index: true,
  selection: true,
  addBtn: false,
  viewBtn: true,
  // editBtn: false,
  delBtn: false,
  // editBtnText: '审核',
  menuWidth: 268,
  highlightCurrentRow: true,
  dialogClickModal: false,
  // addRowBtn: true,
  // cellBtn: true, //开启行编辑模式
  column: [
    {
      label: "名称",
      prop: "name",
      span: 24,
      // cell: true,
      rules: [
        {
          required: true,
          message: "请输入名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型名称",
      prop: "mtName",
      type: "select",
      dicData: [],
      addDisplay: false,
      editDisplay: false,
      props: {
        label: "name",
        value: "mtid",
      },
      rules: [
        {
          required: true,
          message: "请输入类型名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型名称",
      prop: "mtid",
      type: "select",
      search: true,
      dicData: [],
      props: {
        label: "name",
        value: "mtid",
      },
      hide: true,
    },
    {
      label: "商户",
      prop: "miid",
      display:false,
      addDisplay: false,
      editDisplay: false,
      hide: true,
    },
    {
      label: "联系人",
      prop: "contacts",
      rules: [
        {
          required: true,
          message: "请输入联系人",
          trigger: "blur",
        },
      ],
    },
    {
      label: "性别",
      prop: "sex",
      type: "radio",
      width: 80,
      align: "center",
      dicData: [
        {
          label: "先生",
          value: "1",
        },
        {
          label: "女士",
          value: "2",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择性别",
          trigger: "blur",
        },
      ],
    },
    {
      label: "加盟状态",
      prop: "appStatus",
      type: "select",
      width: 90,
      align: "center",
      editDisplay: false,
      //加盟状态:1.申请中 2.加盟成功 3.申请失败
      dicData: [
        {
          label: "申请中",
          value: "1",
        },
        {
          label: "加盟成功",
          value: "2",
        },
        {
          label: "申请失败",
          value: "3",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择申请状态",
          trigger: "blur",
        },
      ],
    },
    {
      label: "支付状态",
      prop: "payStatus",
      type: "select",
      width: 90,
      align: "center",
      search: true,
      addDisplay: false,
      //支付状态:0.待确认 1.待付款 2.已付款 3.已取消 4.已退款
      dicData: [
        {
          label: "待确认",
          value: "0",
        },
        {
          label: "待付款",
          value: "1",
        },
        {
          label: "已付款",
          value: "2",
        },
        {
          label: "已退款",
          value: "3",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择支付状态",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系方式",
      prop: "phone",
      search: true,
      type:'number',
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入路由地址",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 80,
      align: "center",
      addDisplay: false,
      editDisplay:false,
      search: true,
      // slot: true,
      // 1.审核中 2.正常 3.审核失败 4.注销 5.已取消
      dicData: [
        {
          label: "审核中",
          value: "1",
        },
        {
          label: "正常",
          value: "2",
        },
        // {
        //   label: "审核失败",
        //   value: "3",
        // },
        // {
        //   label: "注销",
        //   value: "4",
        // },
        // {
        //   label: "已取消",
        //   value: "5",
        // },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          return {
            uid: {
              editDisplay: false,
            },
            account: {
              editDisplay: true,
            },
            password: {
              editDisplay: true,
            },
            roleid: {
              editDisplay: true,
            },
          };
        } else if (val == "4") {
          return {
            uid: {
              editDisplay: true,
            },
            account: {
              editDisplay: false,
            },
            password: {
              editDisplay: false,
            },
            roleid: {
              editDisplay: false,
            },
          };
        } else {
          return {
            account: {
              editDisplay: false,
            },
            password: {
              editDisplay: false,
            },
            roleid: {
              editDisplay: false,
            },
            uid: {
              editDisplay: false,
            },
          };
        }
      },
      rules: [
        {
          required: true,
          message: "请选择状态",
          trigger: "blur",
        },
      ],
    },
    {
      label: "账号id",
      prop: "uid",
      hide: true,
      // display:false,
      addDisplay: false,
      editDisplay: false,
      type: "select",
      dicData: [],
      props: {
        label: "name",
        value: "uid",
      },
    },
    {
      label: "账号",
      prop: "account",
      hide: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "密码",
      prop: "password",
      hide: true,
      value:"123456",
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "角色",
      prop: "roleid",
      hide: true,
      type: "select",
      dicData: [],
      props: {
        label: "name",
        value: "roleid",
      },
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "推介码",
      prop: "invitationcode",
      search: true,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入推介码",
          trigger: "click",
        },
      ],
    },
    {
      label: "创建时间",
      prop: "credate",
      width: 160,
      hide: true,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 160,
      hide: true,
      display: false,
    },
  ],
};

export const  processOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  lazy: true,
  tip: false,
  simplePage: true,
  searchShow: true,
  searchMenuSpan: 4,
  searchSpan: 5,
  dialogWidth: "50%",
  tree: true,
  border: true,
  index: true,
  selection: true,
  // addBtn: false,
  viewBtn: true,
  // editBtn: false,
  delBtn: false,
  menuWidth: 268,
  highlightCurrentRow: true,
  dialogClickModal: false,
  column: [
    {
      label: "名称",
      prop: "name",
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型名称",
      prop: "mtid",
      type: "select",
      search: true,
      dicData: [],
      props: {
        label: "name",
        value: "mtid",
      },
      hide: true,
    },
    {
      label: "联系人",
      prop: "contacts",
      rules: [
        {
          required: true,
          message: "请输入联系人",
          trigger: "blur",
        },
      ],
    },
    {
      label: "性别",
      prop: "sex",
      type: "radio",
      width: 80,
      align: "center",
      dicData: [
        {
          label: "先生",
          value: "1",
        },
        {
          label: "女士",
          value: "2",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择性别",
          trigger: "blur",
        },
      ],
    },
    {
      label: "支付状态",
      prop: "payStatus",
      type: "select",
      width: 90,
      align: "center",
      search: true,
      addDisplay: false,
      //支付状态:0.待确认 1.待付款 2.已付款 3.已取消 4.已退款
      dicData: [
        {
          label: "待确认",
          value: "0",
        },
        {
          label: "待付款",
          value: "1",
        },
        {
          label: "已付款",
          value: "2",
        },
        {
          label: "已退款",
          value: "3",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择支付状态",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系方式",
      prop: "phone",
      search: true,
      type:'number',
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入路由地址",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 80,
      align: "center",
      addDisplay: false,
      search: true,
      // slot: true,
      // 1.审核中 2.正常 3.审核失败 4.注销 5.已取消
      dicData: [
        {
          label: "审核中",
          value: "1",
        },
        {
          label: "正常",
          value: "2",
        },
        // {
        //   label: "审核失败",
        //   value: "3",
        // },
        // {
        //   label: "注销",
        //   value: "4",
        // },
        // {
        //   label: "已取消",
        //   value: "5",
        // },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          return {
            uid: {
              editDisplay: false,
            },
            account: {
              editDisplay: true,
            },
            password: {
              editDisplay: true,
            },
            roleid: {
              editDisplay: true,
            },
          };
        } else if (val == "4") {
          return {
            uid: {
              editDisplay: true,
            },
            account: {
              editDisplay: false,
            },
            password: {
              editDisplay: false,
            },
            roleid: {
              editDisplay: false,
            },
          };
        } else {
          return {
            account: {
              editDisplay: false,
            },
            password: {
              editDisplay: false,
            },
            roleid: {
              editDisplay: false,
            },
            uid: {
              editDisplay: false,
            },
          };
        }
      },
      rules: [
        {
          required: true,
          message: "请选择状态",
          trigger: "blur",
        },
      ],
    },
    {
      label: "账号id",
      prop: "uid",
      hide: true,
      // display:false,
      addDisplay: false,
      editDisplay: false,
      type: "select",
      dicData: [],
      props: {
        label: "name",
        value: "uid",
      },
    },
    {
      label: "账号",
      prop: "account",
      value:"",
      hide: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "密码",
      prop: "password",
      hide: true,
      value:"123456",
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "角色",
      prop: "roleid",
      hide: true,
      type: "select",
      dicData: [],
      props: {
        label: "name",
        value: "roleid",
      },
      addDisplay: false,
      editDisplay: false,
    },
  ],
};
