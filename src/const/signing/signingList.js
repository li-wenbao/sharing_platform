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
  menuWidth: 200,
  dialogClickModal: false,
  column: [
    {
      label: "名称",
      prop: "name",
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
      label: "id",
      prop: "swid",
      hide: true,
      display: false,
      addDisplay: false,
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
      width: 180,
      align: "center",
      search: true,
      //类型：1.按月 2.按季度 3.按年 4.买断
      dicData: [
        {
          label: "按月",
          value: "1",
        },
        {
          label: "按季度",
          value: "2",
        },
        {
          label: "按年",
          value: "3",
        },
        {
          label: "买断",
          value: "4",
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
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
      align: "center",
      search: true,
      addDisplay: false,
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
          message: "请选择状态",
          trigger: "blur",
        },
      ],
    },
    {
      label: "价格",
      prop: "price",
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
      label: "上级提成",
      prop: "levelratio",
      hide: true,
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
      prop: "ratio",
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入提成比例",
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
