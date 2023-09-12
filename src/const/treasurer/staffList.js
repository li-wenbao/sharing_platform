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
  addBtn: false,
  delBtn: false,
  editBtn: false,
  menuWidth: 240,
  dialogClickModal: false,
  column: [
    {
      label: "姓名",
      prop: "name",
      minWidth: 180,
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入姓名",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系方式",
      prop: "phone",
      type: "number",
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入联系方式",
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
      rules: [
        {
          required: true,
          message: "请选择级别",
          trigger: "blur",
        },
      ],
    },
    {
      label: "介推码",
      prop: "invitationcode",
      minWidth: 140,
      span: 24,
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
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入介推码",
          trigger: "blur",
        },
      ],
    },
    {
      label: "账号id",
      prop: "uid",
      addDisplay: false,
      editDisplay: false,
      display: false,
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
      label: "创建时间",
      prop: "credate",
      width: 140,
      display: false,
    },
  ],
};

export const commissionOption = {
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
  addBtn: false,
  delBtn: false,
  editBtn: false,
  menuWidth: 90,
  dialogClickModal: false,
  column: [
    {
      label: "订单id",
      prop: "joid",
      span: 24,
      width: 130,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入订单id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "价格",
      prop: "price",
      dataType: "number",
      append: "元",
      rules: [
        {
          required: true,
          message: "请输入价格",
          trigger: "blur",
        },
      ],
    },
    {
      label: "金额",
      prop: "amount",
      dataType: "number",
      append: "元",
      rules: [
        {
          required: true,
          message: "请输入金额",
          trigger: "blur",
        },
      ],
    },
    {
      label: "提成",
      prop: "commission",
      dataType: "number",
      append: "%",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入提成",
          trigger: "blur",
        },
      ],
    },
    {
      label: "提成比例",
      prop: "coratio",
      dataType: "number",
      append: "%",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入提成比例",
          trigger: "blur",
        },
      ],
    },
    {
      label: "期限",
      prop: "term",
      dataType: "number",
      editDisplay: false,
      span: 8,
      rules: [
        {
          required: true,
          message: "请输入期限",
          trigger: "blur",
        },
      ],
    },
    {
      label: "签约方式",
      prop: "way",
      editDisplay: false,
      span: 8,
    },
    {
      label: "创建时间",
      prop: "credate",
      width: 140,
      span: 8,
    },
  ],
};
