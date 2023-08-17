import {
    getToken
} from "@/util/auth";
import website from "@/config/website";

export const article_settings = {
    menubar: false,
    toolbar: "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
    toolbar_drawer: "sliding",
    quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
    plugins: "link image media table lists fullscreen quickbars",
    language: "zh_CN",
    height: 350,
    fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt",
    // font_formats: "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n;宋体=宋体;黑体=黑体;仿宋=仿宋;微软雅黑=微软雅黑;楷体-GB2312=楷体-GB2312",
    images_upload_handler(blobInfo, success, failure) {
        let xhr = "";
        let formData = "";
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open("POST", `/api/zl-resource/oss/endpoint/put-file`);
        xhr.setRequestHeader(website.tokenHeader, "bearer " + getToken());
        xhr.onload = () => {
            let json = {};
            if (xhr.status !== 200) {
                failure("HTTP Error: ", xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);
            success(json.data.link);
        };
        formData = new FormData();
        formData.append("file", blobInfo.blob());
        xhr.send(formData);
    }
}
