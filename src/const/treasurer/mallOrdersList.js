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
  menuWidth: 200,
  dialogClickModal: false,
  column: [
    {
      label: "单号",
      prop: "oid",
      rules: [
        {
          required: true,
          message: "请输入单号",
          trigger: "blur",
        },
      ],
    },
    {
      label: "金额",
      prop: "amount",
      rules: [
        {
          required: true,
          message: "请输入金额",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系方式",
      prop: "phone",
      type:'number',
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
      label: "wuid",
      prop: "wuid",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入功能id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
      align: "center",
      search: true,
      addDisplay: false,
      // value: 1,
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
  ],
};

export const merOption = {
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
  menuWidth: 200,
  dialogClickModal: false,
  column: [
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
      align: "center",
      search: true,
      addDisplay: false,
      //状态:1.未支付 2.支付中 3.支付取消 4.支付失败 5.系统关单 6.用户关单 7.转入退款 8.待确认 9.订单完成 10.待使用11.使用中
      dicData: [
        {
          label: "未支付",
          value: "1",
        },
        {
          label: "支付中",
          value: "2",
        },
        {
          label: "支付取消",
          value: "3",
        },
        {
          label: "支付失败",
          value: "4",
        },
        {
          label: "系统关单",
          value: "5",
        },
        {
          label: "用户关单",
          value: "6",
        },
        {
          label: "转入退款",
          value: "7",
        },
        {
          label: "待确认",
          value: "8",
        },
        {
          label: "订单完成",
          value: "9",
        },
        {
          label: "待使用",
          value: "10",
        },
        {
          label: "使用中",
          value: "11",
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
  ],
};
