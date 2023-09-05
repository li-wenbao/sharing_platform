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
  menuWidth: 160,
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
    // {
    //   label: "封面",
    //   prop: "coverurl",
    //   span: 24,
    //   formslot: true,
    //   slot: true,
    // },
    {
      label: "类型id",
      prop: "ctid",
      hide: true,
      addDisplay: false,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入类型id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户",
      prop: "miid",
      hide: true,
      editDisplay: false,
      // addDisplay: false,
      type: "select",
      width: 90,
      align: "center",
      dicData:[],
      props: {
        label: "name",
        value: "miid",
      },
      rules: [
        {
          required: true,
          message: "请输入商户id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 90,
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
      label: "排序",
      prop: "sort",
      width: 100,
      align: "center",
      rules: [
        {
          required: true,
          message: "请输入排序",
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
