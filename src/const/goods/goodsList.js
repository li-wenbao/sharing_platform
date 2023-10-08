export const mainAllOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  tip: false,
  // simplePage: true,
  searchShow: false,
  searchMenuSpan: 4,
  dialogWidth: "50%",
  border: true,
  index: true,
  selection: true,
  // addBtn: false,
  viewBtn: true,
  // editBtn: false,
  delBtn: false,
  menuWidth: 220,
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
    {
      label: "类型id",
      prop: "ctid",
      hide: true,
      search: true,
      display: false,
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
      label: "商品id",
      prop: "cid",
      hide: true,
      display: false,
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
    {
      label: "商品封面",
      prop: "curl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "商品类型",
      prop: "ctidName",
      type: "select",
      hide: true,
      viewDisplay: false,
      dicData: [],
      props: {
        label: "name",
        value: "ctid",
      },
      rules: [
        {
          required: true,
          message: "请输入类型名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型",
      prop: "type",
      type: "select",
      width: 90,
      align: "center",
      props: {
        label: "label",
        value: "value",
      },
      // "type": "1", //类型: 1单品2.套卡
      dicData: [
        {
          label: "单品",
          value: "1",
        },
        {
          label: "套卡",
          value: "2",
        },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          return {
            number: {
              addDisplay: true,
              editDisplay: true,
            },
          };
        } else {
          return {
            number: {
              addDisplay: false,
              editDisplay: false,
            },
          };
        }
      },
      rules: [
        {
          required: true,
          message: "请选择类型",
          trigger: "blur",
        },
      ],
    },
    {
      label: "套卡次数",
      prop: "number",
      addDisplay: false,
      editDisplay: false,
      dataType: "number",
      append: "次",
      rules: [
        {
          required: true,
          message: "请添加套卡次数",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      width: 200,
      slot: true,
      align: "center",
      addDisplay: false,
      editDisplay: false,
      search: true,
      type: "switch",
      align: "center",
      //状态:1.正常 2.禁用 3.待发布
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
        {
          label: "下架",
          value: "4",
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
      label: "类型名称",
      prop: "typeName",
      hide: true,
      span: 24,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入名称",
          trigger: "blur",
        },
      ],
    },
  ],
};

export const mainExaOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  tip: false,
  // simplePage: true,
  searchShow: false,
  searchMenuSpan: 4,
  dialogWidth: "50%",
  border: true,
  index: true,
  selection: true,
  addBtn: false,
  viewBtn: true,
  // editBtn: false,
  delBtn: false,
  menuWidth: 220,
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
    {
      label: "类型id",
      prop: "ctid",
      hide: true,
      search: true,
      display: false,
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
      label: "商品id",
      prop: "cid",
      hide: true,
      display: false,
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
    {
      label: "商品封面",
      prop: "curl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "商品类型",
      prop: "ctidName",
      type: "select",
      hide: true,
      viewDisplay: false,
      dicData: [],
      props: {
        label: "name",
        value: "ctid",
      },
      rules: [
        {
          required: true,
          message: "请输入类型名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型",
      prop: "type",
      type: "select",
      width: 90,
      align: "center",
      props: {
        label: "label",
        value: "value",
      },
      // "type": "1", //类型: 1单品2.套卡
      dicData: [
        {
          label: "单品",
          value: "1",
        },
        {
          label: "套卡",
          value: "2",
        },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          return {
            number: {
              addDisplay: true,
              editDisplay: true,
            },
          };
        } else {
          return {
            number: {
              addDisplay: false,
              editDisplay: false,
            },
          };
        }
      },
      rules: [
        {
          required: true,
          message: "请选择类型",
          trigger: "blur",
        },
      ],
    },
    {
      label: "套卡次数",
      prop: "number",
      addDisplay: false,
      editDisplay: false,
      dataType: "number",
      append: "次",
      rules: [
        {
          required: true,
          message: "请添加套卡次数",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      width: 200,
      slot: true,
      align: "center",
      addDisplay: false,
      editDisplay: false,
      search: true,
      type: "switch",
      align: "center",
      //状态:1.正常 2.禁用 3.待发布
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
      label: "类型名称",
      prop: "typeName",
      hide: true,
      span: 24,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入名称",
          trigger: "blur",
        },
      ],
    },
  ],
};

export const mainOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  lazy: true,
  tip: false,
  // simplePage: true,
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
  menuWidth: 220,
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
    {
      label: "类型id",
      prop: "ctid",
      hide: true,
      display: false,
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
      label: "商品id",
      prop: "cid",
      hide: true,
      display: false,
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
    {
      label: "商品封面",
      prop: "curl",
      maxlength: 64,
      showWordLimit: true,
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "商品类型",
      prop: "ctidName",
      type: "select",
      hide: true,
      viewDisplay: false,
      dicData: [],
      props: {
        label: "name",
        value: "ctid",
      },
      rules: [
        {
          required: true,
          message: "请输入类型名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "类型",
      prop: "type",
      type: "select",
      width: 90,
      align: "center",
      props: {
        label: "label",
        value: "value",
      },
      // "type": "1", //类型: 1单品2.套卡
      dicData: [
        {
          label: "单品",
          value: "1",
        },
        {
          label: "套卡",
          value: "2",
        },
      ],
      control: (val, form) => {
        //按条件设置显示隐藏
        if (val == "2") {
          return {
            number: {
              addDisplay: true,
              editDisplay: true,
            },
          };
        } else {
          return {
            number: {
              addDisplay: false,
              editDisplay: false,
            },
          };
        }
      },
      rules: [
        {
          required: true,
          message: "请选择类型",
          trigger: "blur",
        },
      ],
    },
    {
      label: "套卡次数",
      prop: "number",
      addDisplay: false,
      editDisplay: false,
      dataType: "number",
      append: "次",
      rules: [
        {
          required: true,
          message: "请添加套卡次数",
          trigger: "blur",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      width: 200,
      slot: true,
      align: "center",
      addDisplay: false,
      editDisplay: false,
      search: true,
      type: "switch",
      align: "center",
      //状态:1.正常 2.禁用 3.待发布
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
      label: "类型名称",
      prop: "typeName",
      search: true,
      hide: true,
      span: 24,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      rules: [
        {
          required: true,
          message: "请输入名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "创建时间",
      prop: "credate",
      width: 140,
      hide: true,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 140,
      hide: true,
      display: false,
    },
  ],
};
