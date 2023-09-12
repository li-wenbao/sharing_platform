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
  menuWidth: 100,
  dialogClickModal: false,
  column: [
    {
      label: "商户名称",
      prop: "cname",
      rules: [
        {
          required: true,
          message: "请输入商户名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "规格名称",
      prop: "name",
      rules: [
        {
          required: true,
          message: "请输入规格名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "订单号",
      prop: "oid",
      // hide: true,
      rules: [
        {
          required: true,
          message: "请输入单号",
          trigger: "blur",
        },
      ],
    },
    {
      label: "价格",
      prop: "price",
      dataType: "number",
      append: "元",
      width: 140,
      rules: [
        {
          required: true,
          message: "请输入价格",
          trigger: "blur",
        },
      ],
    },
    {
      label: "次数",
      prop: "number",
      dataType: "number",
      append: "次",
      span:8,
      //次数(type=2才有)
      rules: [
        {
          required: true,
          message: "请输入次数",
          trigger: "blur",
        },
      ],
    },
    {
      label: "数量",
      prop: "quantity",
      dataType: "number",
      append: "个",
      span:8,
      rules: [
        {
          required: true,
          message: "请输入数量",
          trigger: "blur",
        },
      ],
    },
    {
      label: "订单id(子)",
      prop: "did",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入订单id(子)",
          trigger: "blur",
        },
      ],
    },
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
      label: "类型",
      prop: "type",
      type: "select",
      align: "center",
      search: true,
      addDisplay: false,
      span:8,
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
      control: (val, form) => {
        if (val == "2") {
          return {
            number: {
              hide: true,
              display: true,
              editDisplay: true,
            },
          };
        }else {
          return {
            number: {
              hide: false,
              display: false,
              editDisplay: false,
            },
          };
        }
      },
      rules: [
        {
          required: true,
          message: "请选择类型",
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
  viewBtn: true,
  delBtn: false,
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
  viewBtn: true,
  delBtn: false,
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
      type: "number",
      maxlength: 11,
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
      label: "库存",
      prop: "stock",
      hide: true,
      dataType:"number",
      append: '个',
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
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
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
