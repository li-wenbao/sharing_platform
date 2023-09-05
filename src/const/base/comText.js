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
      label: "文本id",
      prop: "pmid",
      hide: true,
      display:false,
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
      //1.首页公告 2.其它
      dicData: [
        {
          label: "首页公告",
          value: '1',
        },
        {
          label: "其它",
          value: '2',
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
      width: 100,
      align: "center",
      search: true,
      addDisplay: false,
      //状态:1.正常 2.禁用
      dicData: [
        {
          label: "启用",
          value: '1',
        },
        {
          label: "禁用",
          value:'2',
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
      label: "是否跳转",
      prop: "isjump",
      type: "select",
      width: 100,
      align: "center",
      //是否跳转:1.是 2.否 
      dicData: [
        {
          label: "是",
          value: '1',
        },
        {
          label: "否",
          value: '2',
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择是否跳转",
          trigger: "blur",
        },
      ],
    },
    {
      label: "跳转url",
      prop: "jumpurl",
      hide: true,
      span:24,
      rules: [
        {
          required: true,
          message: "请输入跳转url",
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
