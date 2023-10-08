import {option} from "@/const/base/city"
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
  // delBtn: false,
  menuWidth: 260,
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
      label: "类型名称",
      prop: "mtName",
      addDisplay: true, //新增时不显示
      type: "select",
      dicUrl: "/share/merchant/getMerchantTypeList",
      dicData: [],
      props: {
        label: "name",
        value: "mtid",
      },
      dicMethod: "post",
      dicQuery: {
        pageNum: '1',
        pageSize: '10'
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
      label: "类型id",
      prop: "mtid",
      hide: true,
    },
    {
      label: "联系人",
      prop: "contacts",
      search: true,
      rules: [
        {
          required: true,
          message: "请输入菜单名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "性别",
      prop: "sex",
      search: true,
      type: "radio",
      width: 80,
      align: "center",
      dicData: [
        {
          label: "先生",
          value: '1',
        },
        {
          label: "女士",
          value: '2',
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择性别",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系方式",
      prop: "phone",
      search: true,
      type:'number',
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入路由地址",
          trigger: "blur",
        },
      ],
    },
    {
      label: "账户id",
      prop: "uid",
      hide: true,
      addDisplay: true, //新增时不显示
    },
    {
      label: "推介码",
      prop: "invitationcode",
      search: true,
      rules: [
        {
          required: true,
          message: "请输入菜单图标",
          trigger: "click",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 80,
      align: "center",
      addDisplay: true, //新增时不显示
      search: true,
      // 1.审核中 2.正常 3.审核失败 4.注销 5.已取消
      dicData: [
        {
          label: "审核中",
          value: '1',
        },
        {
          label: "正常",
          value: '2',
        },
        {
          label: "审核失败",
          value: '3',
        },
        {
          label: "注销",
          value: '4',
        },
        {
          label: "已取消",
          value: '5',
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

export const merchantOption = {
  height: "auto",
  calcHeight: 10,
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
  addBtn: false,
  viewBtn: false,
  editBtn: false,
  delBtn: false,
  emptyBtn: false,
  submitBtn: false,
  disabled: true,
  menuWidth: 260,
  dialogClickModal: false,
  column: [
    {
      label: "详情id",
      prop: "mdid",
      hide: true,
      display: false,
      addDisplay: true, //新增时不显示
      viewDisplay: true, //查看时不显示
    },
    {
      label: "商户id",
      prop: "miid",
      hide: true,
      display: false,
      viewDisplay: true, //查看时不显示
    },
    {
      label: "商户封面",
      prop: "coverurl",
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "营业执照",
      prop: "license",
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "人均(元)",
      prop: "evaluate",
      dataType: 'number',
      append: '元',
      rules: [
        {
          required: true,
          message: "请输入人均",
          trigger: "blur",
        },
      ],
    },
    {
      label: "销量",
      prop: "sales",
      dataType: 'number',
      append: '个',
      rules: [
        {
          required: true,
          message: "请输入销量",
          trigger: "blur",
        },
      ],
    },
    {
      label: "评分",
      prop: "score",
      type: "number",
      rules: [
        {
          required: true,
          message: "请输入评分",
          trigger: "blur",
        },
      ],
    },
    {
      label: "省市区",
      prop: "address",
      type: "cascader",
      dicData:option.city,
    },
    {
      label: "详细地址",
      prop: "location",
    },
    {
      label: "经纬度",
      prop: "coordinate",
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

export const merchantBaseOption = {
  height: "auto",
  calcHeight: 10,
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
  addBtn: false,
  viewBtn: false,
  editBtn: false,
  delBtn: false,
  emptyBtn: false,
  submitBtn: false,
  disabled: true,
  menuWidth: 260,
  dialogClickModal: false,
  column: [
    {
      label: "商户id",
      prop: "miid",
      hide: true,
      display: false,
      viewDisplay: true, //查看时不显示
    },
    {
      label: "类型id",
      prop: "mtid",
      hide: true,
      display: false,
      addDisplay: true, //新增时不显示
      viewDisplay: true, //查看时不显示
    },
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
      label: "联系人",
      prop: "contacts",
      search: true,
      span: 8,
      rules: [
        {
          required: true,
          message: "请输入菜单名称",
          trigger: "blur",
        },
      ],
    },
    {
      label: "性别",
      prop: "sex",
      search: true,
      type: "radio",
      span: 8,
      width: 80,
      align: "center",
      dicData: [
        {
          label: "先生",
          value: '1',
        },
        {
          label: "女士",
          value: '2',
        },
      ],
      rules: [
        {
          required: true,
          message: "请选择性别",
          trigger: "blur",
        },
      ],
    },
    {
      label: "联系方式",
      prop: "phone",
      search: true,
      span: 8,
      maxlength: 11,
      rules: [
        {
          required: true,
          message: "请输入路由地址",
          trigger: "blur",
        },
      ],
    },
    {
      label: "账户id",
      prop: "uid",
      hide: true,
      display: false,
      addDisplay: true, //新增时不显示
    },
    {
      label: "推介码",
      prop: "invitationcode",
      search: true,
      rules: [
        {
          required: true,
          message: "请输入菜单图标",
          trigger: "click",
        },
      ],
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      width: 80,
      align: "center",
      addDisplay: true, //新增时不显示
      search: true,
      props: {
        label: "label",
        value: "value",
      },
      // 1.审核中 2.正常 3.审核失败 4.注销 5.已取消
      dicData: [
        {
          label: "审核中",
          value: '1',
        },
        {
          label: "正常",
          value: '2',
        },
        {
          label: "审核失败",
          value: '3',
        },
        {
          label: "注销",
          value: '4',
        },
        {
          label: "已取消",
          value: '5',
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

export const merchantEditOption = {
  height: "auto",
  calcHeight: 10,
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
  addBtn: false,
  viewBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 260,
  dialogClickModal: false,
  column: [
    {
      label: "详情id",
      prop: "mdid",
      editDisplay: false,
      hide:true,
      display:false,
      rules: [
        {
          required: true,
          message: "请输入详情id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户封面",
      prop: "coverurl",
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "营业执照",
      prop: "license",
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "省市区",
      prop: "address",
      type: "cascader",
      dicData:option.city,
      rules: [
        {
          required: true,
          message: "请输入省市区",
          trigger: "blur",
        },
      ],
    },
    {
      label: "详细地址",
      prop: "location",
      
      rules: [
        {
          required: true,
          message: "请输入详细地址",
          trigger: "blur",
        },
      ],
    },
    {
      label: "经纬度",
      prop: "coordinate",
      span:24,
      rules: [
        {
          required: true,
          message: "请输入经纬度",
          trigger: "blur",
        },
      ],
    },
  ],
};

// 新增
export const merchantAddOption = {
  height: "auto",
  calcHeight: 10,
  lazy: true,
  tip: false,
  dialogDrag: true,
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
      label: "详情id",
      prop: "miid",
      display:false,
      rules: [
        {
          required: true,
          message: "请输入详情id",
          trigger: "blur",
        },
      ],
    },
    {
      label: "商户封面",
      prop: "coverurl",
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "营业执照",
      prop: "license",
      span: 24,
      formslot: true,
      slot: true,
    },
    {
      label: "人均(元)",
      prop: "evaluate",
      append: '元',
      rules: [
        {
          required: true,
          message: "请输入人均(元)",
          trigger: "blur",
        },
      ],
    },
    {
      label: "省市区",
      prop: "address",
      type: "cascader",
      dicData:option.city,
      rules: [
        {
          required: true,
          message: "请输入省市区",
          trigger: "blur",
        },
      ],
    },
    {
      label: "详细地址",
      prop: "location",
      rules: [
        {
          required: true,
          message: "请输入详细地址",
          trigger: "blur",
        },
      ],
    },
    {
      label: "经纬度",
      prop: "coordinate",
      slot: true,
      disabled:true,
      rules: [
        {
          required: true,
          message: "请选择经纬度",
          trigger: "blur",
        },
      ],
    },
  ],
};
