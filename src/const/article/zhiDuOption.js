export const zhiDuOption = {
    height: "auto",
    calcHeight: 86,
    tip: false,
    searchShow: false,
    searchMenuSpan: 4,
    dialogWidth: "50%",
    border: true,
    index: true,
    viewBtn: true,
    delBtn: false,
    editBtn: false,
    // emptyBtn:false,
    selection: true,
    dialogClickModal: false,
    column: [
        {
            label: "标题",
            prop: "title",
            maxlength: 64,
            showWordLimit: true,
            width: 260,
            overHidden: true,
            span: 24,
            search: true,
            searchSpan:5,
            rules: [{
                required: true,
                message: "请输入标题",
                trigger: "blur",
            },],
        },
        {
            label: "编号",
            prop: "code",
            search: true,
            readonly: true,
            searchSpan:5,
            rules: [{
                required: true,
                message: "请输入编号",
                trigger: "blur",
            },],
            width: 160,
            overHidden: true
        },
        {
            label: "发布单位",
            prop: "publishUnit",
            width: 180,
            search: true,
            searchSpan:5,
            rules: [{
                required: true,
                message: "请输入发布单位",
                trigger: "blur",
            },],
            overHidden: true
        },
        {
            label: "文章类别",
            prop: "categoryId",
            width: 260,
            overHidden: true,
            type: "tree",
            defaultExpandAll: false,
            search: true,
            checkStrictly: true,
            searchSpan:5,
            dicData: [],
            props: {
                label: "title",
                value: "id",
            },
            rules: [{
                required: true,
                message: "请选择文章类别",
                trigger: "click",
            },],
        },
        {
            label: "浏览范围",
            prop: "scanScope",
            width: 180,
            overHidden: true,
            dataType: "String",
            maxlength: 64,
            span: 24,
            search: true,
            showWordLimit: true,
            searchSpan:5,
            value: "1",
            type: "select",
            dicUrl: "/api/zl-system/dict/dictionary?code=article_scope",
            props: {
                label: "dictValue",
                value: "dictKey",
            },
            rules: [{
                required: true,
                message: "请选择浏览范围",
                trigger: "blur"
            }]
        },
        // {
        //     label: "排序",
        //     prop: "sort",
        //     rules: [{
        //         required: true,
        //         message: "请输入排序",
        //         trigger: "blur",
        //     }, ],
        // },
        // {
        //     label: "类型",
        //     prop: "operate",
        //     type: "select",
        //     dicData: LOW_TYPE,
        //     search: true,
        //     align:"center",
        //     value: 1,
        //     props: {
        //         label: "dictValue",
        //         value: "dictKey",
        //     },
        //     rules: [{
        //         required: true,
        //         message: "请输入类型",
        //         trigger: "blur",
        //     },],
        //     change: (val) => {
        //         let column1 = this.findObject(this.option.column, "attachment");
        //         let column2 = this.findObject(this.option.column, "description");
        //         let column3 = this.findObject(this.option.column, "content");
        //         Vue.set(column1, `editDisplay`, val.value != 1);
        //         Vue.set(column1, `addDisplay`, val.value != 1);
        //         Vue.set(column1, `viewDisplay`, val.value != 1);
        //         Vue.set(column2, `editDisplay`, val.value == 1);
        //         Vue.set(column2, `addDisplay`, val.value == 1);
        //         Vue.set(column2, `viewDisplay`, val.value == 1);
        //         Vue.set(column3, `editDisplay`, val.value == 1);
        //         Vue.set(column3, `addDisplay`, val.value == 1);
        //     },
        // },
        {
            label: "文号",
            prop: "reference",
            search: true,
            rules: [{
                required: true,
                message: "请输入文号",
                trigger: "blur",
            },],
            width: 140,
            overHidden: true
        },
        {
            label: "附件",
            prop: "attachment",
            // type: "upload",
            span: 24,
            formslot: true,
            width: 100,
            props: {
                label: "name",
                value: "url",
            },
            loadText: "附件上传中，请稍等",
            slot: true,
            propsHttp: {
                res: "data",
                url: "link",
            },
            tip: "",
            action: "/api/zl-resource/oss/endpoint/put-file",
        },
        {
            label: "摘要",
            prop: "description",
            width: 260,
            maxlength: 255,
            showWordLimit: true,
            overHidden: true,
            type: 'textarea',
            span: 24,
            rules: [{
                required: true,
                message: "请输入摘要",
                trigger: "blur",
            },],
        },
        {
            label: "内容编辑",
            hide: true,
            overHidden: true,
            maxlength: 255,
            showWordLimit: true,
            width: 260,
            prop: "content",
            span: 24,
            formslot: true,
        }
    ],
}