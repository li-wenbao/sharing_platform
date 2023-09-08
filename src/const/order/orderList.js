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
  menuWidth: 320,
  dialogClickModal: false,
  column: [
    {
      label: "单号",
      prop: "oid",
      span: 24,
      hide: true,
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
      dataType: "number",
      append: "元",
      span: 24,
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
      type: "number",
      maxlength: 11,
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入联系方式",
          trigger: "blur",
        },
      ],
    },
    {
      label: "用户id",
      prop: "wuid",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入用户id",
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
      search: true,
      addDisplay: false,
      //状态:1.未支付 2.支付中  3.支付取消 4.支付失败
      //5.待确认 6.待使用  7.使用中 8.待评价
      //9.系统关单(超时未支付) 10.用户关单(申请退款)
      //11.转入退款 12.订单完成
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
          label: "待确认",
          value: "5",
        },
        {
          label: "待使用",
          value: "6",
        },
        {
          label: "使用中",
          value: "7",
        },
        {
          label: "待评价",
          value: "8",
        },
        {
          label: "系统关单",
          value: "9",
        },
        {
          label: "用户关单",
          value: "10",
        },
        {
          label: "转入退款",
          value: "11",
        },
        {
          label: "订单完成",
          value: "12",
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
      width: 140,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 140,
      display: false,
    },
  ],
};

// 退货订单 returnOrderDescList
export const retOrdOption = {
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
  viewBtn: false,
  editBtn: false,
  addBtn: false,
  delBtn: false,
  menuWidth: 80,
  dialogClickModal: false,
  column: [
    {
      label: "商品id",
      prop: "cid",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入商品id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户id",
      prop: "miid",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入商户id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户名称",
      prop: "mname",
      type: "number",
      maxlength: 11,
      width: 100,
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入商户名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户电话",
      prop: "mphone",
      type: "number",
      maxlength: 11,
      width: 100,
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入商户电话",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商品名称",
      prop: "cname",
      type: "number",
      maxlength: 11,
      width: 100,
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入商品名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商品封面",
      prop: "curl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "套卡次数",
      prop: "number",
      addDisplay: false,
      editDisplay: false,
      dataType: "number",
      append: "次",
      rules: [
        {
          required: true,
          message: "请添加套卡次数",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型",
      prop: "type",
      type: "select",
      width: 80,
      align: "center",
      search: true,
      addDisplay: false,
      //类型:1.单品 2.套卡
      dicData: [
        {
          label: "单品",
          value: "1",
        },
        {
          label: "套卡",
          value: "2",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择类型",
          trigger: "blur",
        },
      ],
    },
  ],
};
// 退货订单 shareCommoditySpec 
export const shaSpecOption = {
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
  viewBtn: false,
  editBtn: false,
  addBtn: false,
  delBtn: false,
  emptyBtn: false,
  submitBtn: false,
  disabled: true,
  menuWidth: 200,
  dialogClickModal: false,
  column: [
    {
      label: "商品id",
      prop: "cid",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入商品id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "规格id",
      prop: "sid",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入规格id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "规格名称",
      prop: "name",
      width: 100,
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入规格名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "价格",
      prop: "price",
      dataType:"number",
      append: '元',
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入价格",
          trigger: "blur",
        },
      ],
    },
    {
      label: "折扣",
      prop: "discount",
      hide: true,
      dataType:"number",
      value:'100',
      append: '%',
      rules: [
        {
          required: true,
          message: "请输入折扣",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
      span: 8,
      align: "center",
      addDisplay: false,
      //状态:1.正常 2.禁用
      dicData: [
        {
          label: "正常",
          value: '1',
        },
        {
          label: "禁用",
          value: '2',
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
      label: "库存",
      prop: "stock",
      hide: true,
      dataType:"number",
      append: '个',
      span: 8,
      rules: [
        {
          required: true,
          message: "请输入库存",
          trigger: "blur",
        },
      ],
    },
    {
      label: "销量",
      prop: "sales",
      hide: true,
      dataType:"number",
      append: '个',
      span: 8,
      rules: [
        {
          required: true,
          message: "请输入销量",
          trigger: "blur",
        },
      ],
    },
    {
      label: "规格封面",
      prop: "surl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
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
  ],
};
