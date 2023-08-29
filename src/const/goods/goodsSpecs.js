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
      label: "名称",
      prop: "name",
      search: true,
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
      label: "价格",
      prop: "price",
      type:"number",
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
      type:"number",
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
      type:"number",
      rules: [
        {
          required: true,
          message: "请输入库存",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商品id",
      prop: "cid",
      hide: true,
      editDisplay: false,
      addDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入商品id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "封面",
      prop: "surl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "规格id",
      prop: "sid",
      hide: true,
      addDisplay: false,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入规格id",
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
      addDisplay: false,
      //状态:1.正常 2.禁用
      dicData: [
        {
          label: "启用",
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
