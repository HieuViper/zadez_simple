import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
const UploadImage = ({ setPreviewPic, picURL }) => {
  return (
    <Upload
      name="file"
      maxCount={1}
      // action="/api/articles/image"
      customRequest={(info) => {
        console.log(info);
        setPreviewPic(info.file);
      }}
      showUploadList={false}
      beforeUpload={(file) => {
        console.log(
          "🚀 ~ file: ArticleForm.js:498 ~ ArticleForm ~ file:",
          file
        );
        return new Promise((resolve, reject) => {
          // check the file type
          const isImg =
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png" ||
            file.type === "image/webp" ||
            file.type === "image/gif";
          if (!isImg) {
            message.error("You can only upload images");
            reject(false);
          }

          const isLt5M = file.size / 1024 / 1024 <= 5;
          // check the file size
          if (!isLt5M) {
            message.error(`Image must smaller than 5MB!`);
            reject(false);
          } else {
            resolve(true);
          }
        });
      }}
      headers={{ authorization: "authorization-text" }}
    >
      <Button icon={<UploadOutlined />} className="mb-1">
        {!picURL ? "Upload" : "Change Picture"}
      </Button>
    </Upload>
  );
};

export default UploadImage;
