export const mainOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
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
  editBtn: false,
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
      type: 'number',
      rules: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "type",
      type: "select",
      width: 100,
      align: "center",
      hide: true,
      slot: true,
      addDisplay: false,
      //账号-修改 1.修改密码2.重置密码3.修改角色 4.启用、禁用
      dicData: [
        {
          label: "修改密码",
          value: "1",
        },
        {
          label: "重置密码",
          value: "2",
        },
        {
          label: "修改角色",
          value: "3",
        },
        {
          label: "启用或禁用",
          value: "4",
        },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "1") {
          return {
            account:{
              editDisplay: false,
            },
            newpwd: {
              editDisplay: true,
            },
            oldpwd: {
              editDisplay: true,
            },
            roleName: {
              editDisplay: false,
            },
            status: {
              editDisplay: false,
            },
          };
        }else if (val == "2") {
          return {
            account:{
              editDisplay: true,
            },
            newpwd: {
              editDisplay: true,
            },
            newpwd: {
              editDisplay: false,
            },
            oldpwd: {
              editDisplay: false,
            },
            status: {
              editDisplay: false,
            },
          };
        }else if (val == "3") {
          return {
            account:{
              editDisplay: false,
            },
            roleName: {
              editDisplay: true,
            },
            newpwd: {
              editDisplay: false,
            },
            oldpwd: {
              editDisplay: false,
            },
            status: {
              editDisplay: false,
            },
          };
        } else if (val == "4") {
          return {
            account:{
              editDisplay: false,
            },
            status: {
              editDisplay: true,
            },
            newpwd: {
              editDisplay: false,
            },
            oldpwd: {
              editDisplay: false,
            },
            roleName: {
              editDisplay: false,
            },
          };
        }else{
          return {
            account:{
              editDisplay: false,
            },
            newpwd: {
              editDisplay: false,
            },
            oldpwd: {
              editDisplay: false,
            },
            roleName: {
              editDisplay: false,
            },
            status: {
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
      label: "介推码",
      prop: "invitationcode",
      minWidth: 140,
      rules: [
        {
          required: true,
          message: "请输入介推码",
          trigger: "blur",
        },
      ],
    },
    {
      label: "介推码二维码",
      prop: "codeurl",
      minWidth: 140,
      rules: [
        {
          required: true,
          message: "请输入介推码",
          trigger: "blur",
        },
      ],
    },
    {
      label: "密码",
      prop: "password",
      editDisplay: false,
      viewDisplay: false,
      hide:true,
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
      label: "新密码",
      prop: "newpwd",
      minWidth: 140,
      hide:true,
      viewDisplay: false,
      addDisplay: false,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
      ],
    },
    {
      label: "旧密码",
      prop: "oldpwd",
      minWidth: 140,
      hide:true,
      viewDisplay: false,
      addDisplay: false,
      editDisplay: false,
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
      display:false,
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
      editDisplay: false,
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
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入角色id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "是否启用",
      prop: "status",
      type: "select",
      width: 100,
      slot: true,
      align: "center",
      addDisplay: false,
      editDisplay: false,
      //状态:1.正常 2.禁用
      dicData: [
        {
          label: "启用",
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
          message: "请选择是否启用",
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
      editDisplay: false,
      search: true,
      //级别：0.管理员 1.主管 2.员工 3.非员工
      dicData: [
        {
          label: "管理员",
          value: "0",
        },
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
