export const mainOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  lazy: true,
  tip: false,
  simplePage: true,
  searchShow: true,
  searchMenuSpan: 4,
  searchSpan: 5,
  dialogWidth: "50%",
  tree: true,
  border: true,
  index: true,
  selection: true,
  // addBtn: false,
  viewBtn: true,
  // editBtn: false,
  delBtn: false,
  // editBtnText: '审核',
  menuWidth: 200,
  highlightCurrentRow: true,
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
      label: "推荐id",
      prop: "rlid",
      type: "select",
      display:false,
      dicData: [],
      props: {
        label: "name",
        value: "rlid",
      },
      hide: true,
    },
    {
      label: "商户",
      prop: "miid",
      display:false,
      addDisplay: false,
      editDisplay: false,
      hide: true,
    },
    {
      label: "封面",
      prop: "coverurl",
      span: 24,
      addDisplay:false,
      formslot: true,
      slot: true,
    },
    {
      label: "封面",
      prop: "coveurl",
      hide: true,
      viewDisplay:false,
      editDisplay:false,
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 80,
      align: "center",
      addDisplay: false,
      search: true,
      //状态：1.正常 2.禁用
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
      width: 160,
      hide: true,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 160,
      hide: true,
      display: false,
    },
  ],
};

export const viewOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  lazy: true,
  tip: false,
  simplePage: true,
  searchShow: true,
  searchMenuSpan: 4,
  searchSpan: 5,
  dialogWidth: "50%",
  tree: true,
  border: true,
  index: true,
  selection: true,
  addBtn: false,
  viewBtn: false,
  editBtn: false,
  delBtn: false,
  emptyBtn: false,
  submitBtn: false,
  disabled: true,
  menuWidth: 268,
  highlightCurrentRow: true,
  dialogClickModal: false,
  column: [
    {
      label: "标签1",
      prop: "labelone",
      rules: [
        {
          required: true,
          message: "请输入标签1",
          trigger: "blur",
        },
      ],
    },
    {
      label: "标签2",
      prop: "labetwo",
      rules: [
        {
          required: true,
          message: "请输入标签2",
          trigger: "blur",
        },
      ],
    },
    {
      label: "特色1",
      prop: "toneone",
      rules: [
        {
          required: true,
          message: "请输入特色1",
          trigger: "blur",
        },
      ],
    },
    {
      label: "特色2",
      prop: "tonetwo",
      rules: [
        {
          required: true,
          message: "请输入特色2",
          trigger: "blur",
        },
      ],
    },
    {
      label: "详情id",
      prop: "rdid",
      display:false,
      // type: "select",
      search: true,
      dicData: [],
      props: {
        label: "name",
        value: "rlid",
      },
      hide: true,
    },
    {
      label: "推荐id",
      prop: "rlid",
      type: "select",
      display:false,
      search: true,
      dicData: [],
      props: {
        label: "name",
        value: "rlid",
      },
      hide: true,
    },
    {
      label: "简介",
      prop: "blurb",
      type: "textarea",
      span: 24,
      rows: 8,
      rules: [
        {
          required: true,
          message: "请输入简介",
          trigger: "blur",
        },
      ],
    },
    {
      label: "创建时间",
      prop: "credate",
      width: 160,
      hide: true,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 160,
      hide: true,
      display: false,
    },
  ],
};

export const editOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  tip: false,
  simplePage: true,
  searchShow: false,
  searchMenuSpan: 4,
  dialogWidth: "50%",
  tree: true,
  border: true,
  index: true,
  selection: true,
  addBtn: false,
  viewBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 260,
  dialogClickModal: false,
  column: [
    {
      label: "标签1",
      prop: "labelone",
      rules: [
        {
          required: true,
          message: "请输入标签1",
          trigger: "blur",
        },
      ],
    },
    {
      label: "标签2",
      prop: "labetwo",
      rules: [
        {
          required: true,
          message: "请输入标签2",
          trigger: "blur",
        },
      ],
    },
    {
      label: "特色1",
      prop: "toneone",
      rules: [
        {
          required: true,
          message: "请输入特色1",
          trigger: "blur",
        },
      ],
    },
    {
      label: "特色2",
      prop: "tonetwo",
      rules: [
        {
          required: true,
          message: "请输入特色2",
          trigger: "blur",
        },
      ],
    },
    {
      label: "简介",
      prop: "blurb",
      rows: 8,
      type: "textarea",
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入简介",
          trigger: "blur",
        },
      ],
    },
    {
      label: "详情id",
      prop: "rdid",
      // type: "select",
      display:false,
      search: true,
      dicData: [],
      props: {
        label: "name",
        value: "rlid",
      },
      hide: true,
    },
  ],
};

export const addOption = {
  height: "auto",
  calcHeight: 10,
  dialogDrag: true,
  tip: false,
  simplePage: true,
  searchShow: false,
  searchMenuSpan: 4,
  dialogWidth: "50%",
  tree: true,
  border: true,
  index: true,
  selection: true,
  addBtn: false,
  viewBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 260,
  dialogClickModal: false,
  column: [
    {
      label: "标签1",
      prop: "labelone",
      rules: [
        {
          required: true,
          message: "请输入标签1",
          trigger: "blur",
        },
      ],
    },
    {
      label: "标签2",
      prop: "labetwo",
      rules: [
        {
          required: true,
          message: "请输入标签2",
          trigger: "blur",
        },
      ],
    },
    {
      label: "特色1",
      prop: "toneone",
      rules: [
        {
          required: true,
          message: "请输入特色1",
          trigger: "blur",
        },
      ],
    },
    {
      label: "特色2",
      prop: "tonetwo",
      rules: [
        {
          required: true,
          message: "请输入特色2",
          trigger: "blur",
        },
      ],
    },
    {
      label: "简介",
      prop: "blurb",
      rows: 8,
      type: "textarea",
      span: 24,
      rules: [
        {
          required: true,
          message: "请输入简介",
          trigger: "blur",
        },
      ],
    },
    {
      label: "推荐id",
      prop: "rlid",
      // type: "select",
      display:false,
      search: true,
      dicData: [],
      props: {
        label: "name",
        value: "rlid",
      },
      hide: true,
    },
  ],
};

export const carouselOption = {
  height: "auto",
  calcHeight: 200,
  dialogDrag: true,
  lazy: true,
  tip: false,
  simplePage: true,
  searchShow: true,
  searchMenuSpan: 4,
  searchSpan: 5,
  dialogWidth: "50%",
  tree: true,
  border: true,
  index: true,
  selection: true,
  // addBtn: false,
  viewBtn: true,
  editBtn: false,
  delBtn: false,
  menuWidth: 80,
  highlightCurrentRow: true,
  dialogClickModal: false,
  column: [
    {
      label: "详情id",
      prop: "rdid",
      display:false,
      // type: "select",
      dicData: [],
      props: {
        label: "name",
        value: "rlid",
      },
      hide: true,
    },
    {
      label: "图片id",
      prop: "rpid",
      display:false,
      hide:true,
    },
    { 
      label: "图片",
      prop: "purl",
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "商户",
      prop: "miid",
      display:false,
      addDisplay: false,
      editDisplay: false,
      hide: true,
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 180,
      align: "center",
      addDisplay: false,
      search: true,
      //状态：1.正常 2.禁用
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
      width: 160,
      hide: true,
      display: false,
    },
    {
      label: "修改时间",
      prop: "upddate",
      width: 160,
      hide: true,
      display: false,
    },
  ],
};

