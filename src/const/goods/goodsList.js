export const mainOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  lazy: true,
  tip: false,
  // simplePage: true,
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
  menuWidth: 300,
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
      label: "类型id",
      prop: "ctid",
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入类型id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商品id",
      prop: "cid",
      hide: true,
      addDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入商户id",
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
      rules: [
        {
          required: true,
          message: "请选择商品封面",
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
      search: true,
      //状态:1.正常 2.禁用 3.待发布
      dicData: [
        {
          label: "正常",
          value: '1',
        },
        {
          label: "禁用",
          value: '2',
        },
        {
          label: "待发布",
          value: '3',
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
      label: "类型名称",
      prop: "typeName",
      search: true,
      hide:true,
      span: 24,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型",
      prop: "type",
      type: "select",
      width: 180,
      align: "center",
      props: {
        label: "label",
        value: "value",
      },
      //1.到店消费 2.电话预约 3.在线预约
      dicData: [
        {
          label: "到店消费",
          value: '1',
        },
        {
          label: "电话预约",
          value: '2',
        },
        {
          label: "在线预约",
          value: '3',
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
