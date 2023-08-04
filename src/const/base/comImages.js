export const mainOption = {
  height: "auto",
  calcHeight: 10,
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
      label: "图片id",
      prop: "ppid",
      hide: true,
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
      label: "图片",
      prop: "purl",
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
      label: "类型",
      prop: "type",
      type: "select",
      width: 180,
      align: "center",
      search: true,
      //1.首页 2.附近 3.我的
      dicData: [
        {
          label: "首页",
          value: '1',
        },
        {
          label: "附近",
          value: '2',
        },
        {
          label: "我的",
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
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
      align: "center",
      search: true,
      addDisplay: false,
      props: {
        label: "label",
        value: "value",
      },
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
      label: "是否跳转",
      prop: "isjump",
      type: "select",
      width: 180,
      align: "center",
      props: {
        label: "label",
        value: "value",
      },
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
