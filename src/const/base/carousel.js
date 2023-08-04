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
  menuWidth: 260,
  dialogClickModal: false,
  column: [
    {
      label: "图片id",
      prop: "mpid",
      hide: true,
      addDisplay:false
    },
    {
      label: "商户id",
      prop: "miid",
      hide: true,
      editDisplay:false
    },
    {
      label: "图片",
      prop: "purl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      // type: "upload",
      formslot: true,
      slot: true,
      // width: 150,
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
      align: "center",
      addDisplay:false,
      search: true,
      props: {
        label: "label",
        value: "value",
      },
      // 1.审核中 2.正常 3.审核失败 4.注销 5.已取消
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