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
  menuWidth: 220,
  dialogClickModal: false,
  column: [
    {
      label: "商户名称",
      prop: "name",
      span: 24,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入商户名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "主管姓名",
      prop: "supname",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入主管姓名",
          trigger: "blur",
        },
      ],
    },
    {
      label: "推荐人",
      prop: "uname",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入推荐人姓名",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系方式",
      prop: "phone",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入联系方式",
          trigger: "blur",
        },
      ],
    },
    {
      label: "主管电话",
      prop: "supphone", // "supphone": "普吉", //主管电话
      type: "number",
      editDisplay: false,
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入主管电话",
          trigger: "blur",
        },
      ],
    },
    {
      label: "经理电话",
      prop: "uphone", // "uphone": "15687371830", //经理电话
      type: "number",
      editDisplay: false,
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入经理电话",
          trigger: "blur",
        },
      ],
    },
    {
      label: "主管提成",
      prop: "supcommission",
      dataType: "number",
      append: "%",
      hide: true,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入上级提成",
          trigger: "blur",
        },
      ],
    },
    {
      label: "主管分佣",
      prop: "supcoratio",
      dataType: "number",
      append: "%",
      hide: true,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入主管分佣",
          trigger: "blur",
        },
      ],
    },
    {
      label: "付款方式",
      prop: "payway",
      type: "select",
      width: 90,
      align: "center",
      // "payway": null, //付款方式：1.微信 2.支付宝 3.银行卡转账 4.现价 5.其它
      dicData: [
        {
          label: "微信",
          value: "1",
        },
        {
          label: "支付宝",
          value: "2",
        },
        {
          label: "银行卡转账",
          value: "3",
        },
        {
          label: "现金",
          value: "4",
        },
        {
          label: "其它",
          value: "5",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择付款方式",
          trigger: "blur",
        },
      ],
    },
    {
      label: "加盟状态",
      prop: "appstatus",
      type: "select",
      width: 90,
      align: "center",
      editDisplay: false,
      //申请状态:1.申请中 2.加盟成功 3.申请失败
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
      label: "签约方式",
      prop: "way",
      editDisplay: false,
      width: 90,
      rules: [
        {
          required: true,
          message: "请输入签约方式",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户id",
      prop: "miid",
      span: 24,
      hide: true,
      display: false,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入商户id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "订单id",
      prop: "joid",
      span: 24,
      hide: true,
      display: false,
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
      label: "总金额",
      prop: "totalamount",
      hide: true,
      dataType: "number",
      append: "元",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入总金额",
          trigger: "blur",
        },
      ],
    },
    {
      label: "金额",
      prop: "price",
      hide: true,
      dataType: "number",
      append: "元",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入金额",
          trigger: "blur",
        },
      ],
    },
    {
      label: "支付状态",
      prop: "paystatus",
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
      label: "价格",
      prop: "price",
      hide: true,
      dataType: "number",
      append: "元",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入价格",
          trigger: "blur",
        },
      ],
    },
    {
      label: "提成",
      prop: "commission",
      dataType: "number",
      append: "%",
      hide: true,
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
      label: "上级提成",
      prop: "levelratio",
      dataType: "number",
      append: "%",
      hide: true,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入上级提成",
          trigger: "blur",
        },
      ],
    },
    {
      label: "提成比例",
      prop: "coratio",
      dataType: "number",
      append: "%",
      hide: true,
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
      hide: true,
      dataType: "number",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入期限",
          trigger: "blur",
        },
      ],
    },
    {
      label: "付款截图",
      prop: "payurl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
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

export const confirmOption = {
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
  menuWidth: 200,
  dialogClickModal: false,
  column: [
    {
      label: "订单id",
      prop: "joid",
      span: 24,
      hide: true,
      display: false,
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
      label: "签约方式",
      prop: "swid",
      type: "select",
      hide: true,
      dicData: [],
      props: {
        label: "name",
        value: "swid",
      },
      editDisplay: false,
      width: 90,
    },
    {
      label: "签约方式id",
      prop: "way",
      span: 24,
      hide: true,
      display: false,
      editDisplay: false,
    },
    { 
      label: "金额",
      prop: "price",
      hide: true,
      dataType: "number",
      append: "元",
      editDisplay: false,
    },
    {
      label: "总金额",
      prop: "totalamount",
      hide: true,
      dataType: "number",
      append: "元",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入总金额",
          trigger: "blur",
        },
      ],
    },
    {
      label: "期限",
      prop: "term",
      hide: true,
      dataType: "number",
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入期限",
          trigger: "blur",
        },
      ],
    },
  ],
};

export const payConfirmOption = {
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
  menuWidth: 200,
  dialogClickModal: false,
  column: [
    {
      label: "订单id",
      prop: "joid",
      span: 24,
      hide: true,
      display: false,
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
      label: "付款方式",
      prop: "payway",
      type: "select",
      width: 90,
      align: "center",
      // "payway": null, //付款方式：1.微信 2.支付宝 3.银行卡转账 4.现价 5.其它
      dicData: [
        {
          label: "微信",
          value: "1",
        },
        {
          label: "支付宝",
          value: "2",
        },
        {
          label: "银行卡转账",
          value: "3",
        },
        {
          label: "现金",
          value: "4",
        },
        {
          label: "其它",
          value: "5",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择付款方式",
          trigger: "blur",
        },
      ],
    },
    {
      label: "付款截图",
      prop: "payurl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
    },
  ],
};