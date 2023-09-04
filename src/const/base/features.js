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
  menuWidth: 160,
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
      label: "内容",
      prop: "content",
      type: "textarea",
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入内容",
          trigger: "blur",
        },
      ],
    },
    {
      label: "icon地址",
      prop: "iconurl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
      rules: [
        {
          required: true,
          message: "请选择icon地址",
          trigger: "blur",
        },
      ],
    },
    {
      label: "功能id",
      prop: "ffid",
      hide: true,
      display:false,
      addDisplay: false,
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
      width: 100,
      align: "center",
      search: true,
      addDisplay: false,
      // value: 1,
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
