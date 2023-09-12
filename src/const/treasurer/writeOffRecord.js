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
      label: "规格名称",
      prop: "nname",
      minWidth: 180,
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
      label: "规格封面",
      prop: "nsurl",
      minWidth: 140,
      span: 24,
    },
    {
      label: "订单id",
      prop: "oid",
      addDisplay: false,
      editDisplay: false,
      display: false,
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入订单id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "规格id",
      prop: "nsid",
      addDisplay: false,
      editDisplay: false,
      display: false,
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入规格id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "价格",
      prop: "nprice",
      dataType: "number",
      append: "元",
      span: 8,
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
      prop: "namount",
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
      label: "数量",
      prop: "nquantity",
      dataType: "number",
      append: "个",
      span: 8,
      rules: [
        {
          required: true,
          message: "请输入数量",
          trigger: "blur",
        },
      ],
    },
    {
      label: "核销次数",
      prop: "nnum",
      dataType: "number",
      append: "次",
      span: 8,
      rules: [
        {
          required: true,
          message: "请输入核销次数",
          trigger: "blur",
        },
      ],
    },
    {
      label: "核销时间",
      prop: "ncredate",
      width: 140,
      display: false,
    },
  ],
};
