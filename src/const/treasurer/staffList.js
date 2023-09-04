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
      label: "联系方式",
      prop: "phone",
      type:'number',
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入联系方式",
          trigger: "blur",
        },
      ],
    },
  ],
};
