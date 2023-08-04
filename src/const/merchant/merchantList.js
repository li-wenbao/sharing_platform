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
  // addBtn: false,
  viewBtn: true,
  // editBtn: false,
  delBtn: false,
  menuWidth: 200,
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
      prop: "mtName",
      type: "select",
      search: true,
      // slot: true,
      // formslot: true,
      // dicUrl: "/share/merchant/getMerchantTypeList?pageNum=1&pageSize=10",
      dicData: [],
      props: {
        label: "name",
        value: "mtid",
      },
      // dicMethod: "post",
      // dicFormatter:(res)=>{return res.data.merchantTypeList},
      rules: [
        {
          required: true,
          message: "请输入类型名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型id",
      prop: "mtid",
      addDisplay: false,
      editDisplay: false,
      hide: true,
    },
    {
      label: "商户",
      prop: "miid",
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
          message: "请输入菜单名称",
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
      label: "联系方式",
      prop: "phone",
      search: true,
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
        {
          label: "审核失败",
          value: "3",
        },
        {
          label: "注销",
          value: "4",
        },
        {
          label: "已取消",
          value: "5",
        },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          console.log("Mr. L 🚀 ~ form:", form)
          return {
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
      addDisplay: false,
      editDisplay: false,
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
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "角色",
      prop: "roleid",
      hide: true,
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
          message: "请输入菜单图标",
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
