import { UploadedFile } from "express-fileupload";

function motivate(uploaded: UploadedFile) {
  const name = uploaded.name.replace(".ocx", ".docx");
  console.log(name);
  const md5 = uploaded.md5;
  const saveAs = `${md5}_${name}`;
  uploaded.mv(
    process.env.OS === "Linux"
      ? `/${process.env.USER}/letters/${saveAs}`
      : `C:\\Users\\${process.env.USER}\\Downloads\\letters\\${saveAs}`,
    function (err) {
      if (err) {
        throw err;
      }
    },
  );
  return saveAs;
}

export default motivate;
