export const mainOption = {
  height: "auto",
  calcHeight: 10,
  tip: false,
  dialogDrag: true,
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
      prop: "mpid",
      hide: true,
      viewDisplay:false,
      addDisplay: false,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入图片id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户id",
      prop: "miid",
      hide: true,
      viewDisplay:false,
      addDisplay: false,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入商户id",
          trigger: "blur",
        },
      ],
    },
    // purlList
    {
      label: "图片",
      prop: "purlList",
      maxlength: 64,
      showWordLimit: true,
      editDisplay:false,
      viewDisplay:false,
      hide:true,
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "图片",
      prop: "purl",
      maxlength: 64,
      addDisplay:false,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
      rules: [
        {
          required: true,
          message: "请选择图片",
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
