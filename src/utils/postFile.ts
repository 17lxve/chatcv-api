import { UploadedFile } from "express-fileupload";
import { readFileSync } from "fs";
import { Client } from "ssh2";

// function postFile(file:UploadedFile){
function postFile() {
  console.log("hey ssh");
  const connection = new Client();
  connection
    .on("ready", () => {
      console.log("SSH ready");
      connection.exec("uptime", (err, stream) => {
        if (err) throw err;
        stream
          .on("close", (code: string, signal: any) => {
            console.log(
              "Stream :: close :: code: " + code + ", signal: " + signal,
            );
            connection.end();
          })
          .on("data", (data: any) => {
            console.log("STDOUT: " + data);
          })
          .stderr.on("data", (data) => {
            console.error("STDERR: " + data);
          });
      });
    })
    .connect({
      host: process.env.HOST,
      port: parseInt(process.env.PORT || "22"),
      username: process.env.USERNAME,
      privateKey: process.env.PK,
    });
}

export default postFile;
