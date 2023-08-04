export const mainOption = {
  height: "auto",
  calcHeight: 10,
  tip: false,
  simplePage: true,
  searchShow: false,
  searchMenuSpan: 4,
  dialogWidth: "50%",
  border: true,
  index: true,
  selection: true,
  viewBtn: true,
  delBtn: false,
  menuWidth: 160,
  dialogClickModal: false,
  column: [
    {
      label: "名称",
      prop: "name",
      minWidth:180,
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
      label: "账号",
      prop: "account",
      minWidth: 140,
      rules: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
      ],
    },
    {
      label: "密码",
      prop: "password",
      value:"123456",
      minWidth: 140,
      rules: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
      ],
    },
    {
      label: "账号id",
      prop: "uid",
      addDisplay:false,
      editDisplay:false,
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入账号id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "角色名称",
      prop: "roleName",
      minWidth:140,
      type: "select",
      dicData: [],
      props: {
        label: "name",
        value: "roleid",
      },
      rules: [
        {
          required: true,
          message: "请输入角色名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "角色id",
      prop: "roleid",
      addDisplay:false,
      display:false,
      rules: [
        {
          required: true,
          message: "请输入角色id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "级别",
      prop: "level",
      type: "select",
      width: 100,
      align: "center",
      search: true,
      //级别：1.主管 2.员工 3.非员工
      dicData: [
        {
          label: "主管",
          value: "1",
        },
        {
          label: "员工",
          value: "2",
        },
        {
          label: "非员工",
          value: "3",
        },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          return {
            supname: {
              addDisplay: true,
            },
          };
        }else{
          return {
            supname: {
              addDisplay: false,
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
      label: "上级",
      prop: "supname",
      minWidth:140,
      type: "select",
      dicData: [],
      props: {
        label: "name",
        value: "uid",
      },
      addDisplay:false,
      editDisplay:false,
      rules: [
        {
          required: true,
          message: "请选择上级",
          trigger: "blur",
        },
      ],
    },
    {
      label: "上级uid",
      prop: "supuid",
      display:false,
      hide: true,
      // rules: [
      //   {
      //     required: true,
      //     message: "请输入账号id",
      //     trigger: "blur",
      //   },
      // ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 100,
      align: "center",
      addDisplay: false,
      //状态:1.正常 2.禁用
      dicData: [
        {
          label: "正常",
          value: "1",
        },
        {
          label: "禁用",
          value: "2",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择状态",
          trigger: "blur",
        },
      ],
    },
    {
      label: "创建时间",
      prop: "credate",
      width: 160,
      // hide: true,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 160,
      // hide: true,
      display: false,
    },
  ],
};
