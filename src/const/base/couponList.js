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
      label: "优惠券id",
      prop: "ccid",
      hide: true,
      display: false,
      rules: [
        {
          required: true,
          message: "请输入优惠券id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "名称",
      prop: "name",
      span: 24,
      minWidth: 200,
      rules: [
        {
          required: true,
          message: "请输入内容",
          trigger: "blur",
        },
      ],
    },
    {
      label: "描述",
      prop: "desc",
      type: "textarea",
      span: 24,
      minWidth: 250,
      rules: [
        {
          required: true,
          message: "请输入描述",
          trigger: "blur",
        },
      ],
    },
    {
      label: "券的类型",
      prop: "ctid",
      type: "select",
      props: {
        label: "name",
        value: "ctid",
      },
      hide: true,
      rules: [
        {
          required: true,
          message: "请输入优惠券类型",
          trigger: "blur",
        },
      ],
    },
    {
      label: "兑换码",
      prop: "rcode",
      minWidth: 180,
      addDisplay: false,
      editDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入兑换码",
          trigger: "blur",
        },
      ],
    },

    {
      label: "种类",
      prop: "type",
      type: "select",
      width: 90,
      align: "center",
      search: true,
      //种类:1.折扣券 2.满减券3.指定券
      dicData: [
        {
          label: "折扣券",
          value: "1",
        },
        {
          label: "满减券",
          value: "2",
        },
        {
          label: "指定券",
          value: "3",
        },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          return {
            num: {
              addDisplay: true,
            },
            threshold: {
              addDisplay: true,
            },
            cid: {
              addDisplay: false,
            },

          };
        } else if (val == "3") {
          return {
            cid: {
              addDisplay: true,
            },
            num: {
              addDisplay: false,
            },
            threshold: {
              addDisplay: false,
            },
          };
        } else {
          return {
            num: {
              addDisplay: false,
            },
            threshold: {
              addDisplay: false,
            },
            cid: {
              addDisplay: false,
            },
          };
        }
      },
      rules: [
        {
          required: true,
          message: "请选择种类",
          trigger: "blur",
        },
      ],
    },
    {
      label: "折扣",
      prop: "discount",
      align: "center",
      rules: [
        {
          required: true,
          message: "请输入折扣",
          trigger: "blur",
        },
      ],
    },
    {
      label: "满减门槛",
      prop: "threshold",
      align: "center",
      addDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入满减门槛",
          trigger: "blur",
        },
      ],
    },
    {
      label: "满减数值",
      prop: "num",
      align: "center",
      addDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入满减数值",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商品",
      prop: "cid",
      hide: true,
      type: "select",
      props: {
        label: "name",
        value: "cid",
      },
      addDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入商品id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "发放方式",
      prop: "way",
      type: "select",
      width: 90,
      align: "center",
      search: true,
      //发放方式:1.自由领取2.限量发放
      dicData: [
        {
          label: "自由领取",
          value: "1",
        },
        {
          label: "限量发放",
          value: "2",
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择发放方式",
          trigger: "blur",
        },
      ],
    },
    // {
    //   label: "状态",
    //   prop: "status",
    //   type: "select",
    //   width: 90,
    //   align: "center",
    //   search: true,
    //   addDisplay: false,
    //   props: {
    //     label: "label",
    //     value: "value",
    //   },
    //   //状态:1.正常 2.禁用
    //   dicData: [
    //     {
    //       label: "正常",
    //       value: "1",
    //     },
    //     {
    //       label: "禁用",
    //       value: "2",
    //     },
    //   ],
    //   rules: [
    //     {
    //       required: true,
    //       message: "请选择状态",
    //       trigger: "blur",
    //     },
    //   ],
    // },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 90,
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
        {
          label: "待发布",
          value: "3",
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
      label: "有效期(天)",
      prop: "validity",
      align: "center",
      rules: [
        {
          required: true,
          message: "请输入满减数值",
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
