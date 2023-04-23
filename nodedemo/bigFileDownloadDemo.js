let xhr = new XMLHttpRequest();  
let downloadUrl = "https://example.com/file.zip";  
let downloadedBytes = 0;  
  
function downloadFile() {  
  xhr.open("GET", downloadUrl, true);  
  xhr.responseType = "blob";  
  
  // 设置请求文件的字节范围  
  xhr.setRequestHeader("Range", "bytes=" + downloadedBytes + "-");  
  
  xhr.addEventListener("progress", (e) => {  
    console.log("下载进度: ", e.loaded);  
  });  
  
  xhr.addEventListener("load", () => {  
    let blob = xhr.response;  
    let url = URL.createObjectURL(blob);  
  
    let a = document.createElement("a");  
    a.href = url;  
    a.download = "file.zip";  
    a.click();  
  
    // 释放URL资源  
    URL.revokeObjectURL(url);  
  });  
  
  xhr.send();  
}  
  
function pauseDownload() {  
  xhr.abort();  
}  
  
downloadFile();  


// let downloadUrl = "https://example.com/file.zip";  
// let downloadedBytes = 0;  
// let controller = new AbortController();  
// let signal = controller.signal;  
  
// async function downloadFile() {  
//   try {  
//     const response = await fetch(downloadUrl, {  
//       signal,  
//       headers: new Headers({  
//         Range: "bytes=" + downloadedBytes + "-",  
//       }),  
//     });  
  
//     if (!response.ok) {  
//       throw new Error("Network response was not ok");  
//     }  
  
//     const reader = response.body.getReader();  
//     const contentLength = +response.headers.get("Content-Length");  
//     let receivedLength = 0;  
//     let chunks = [];  
  
//     while (true) {  
//       const { done, value } = await reader.read();  
  
//       if (done) {  
//         break;  
//       }  
  
//       chunks.push(value);  
//       receivedLength += value.length;  
  
//       console.log(`下载进度: ${(receivedLength / contentLength) * 100}%`);  
//     }  
  
//     let blob = new Blob(chunks);  
//     let url = URL.createObjectURL(blob);  
  
//     let a = document.createElement("a");  
//     a.href = url;  
//     a.download = "file.zip";  
//     a.click();  
  
//     URL.revokeObjectURL(url);  
  
//   } catch (error) {  
//     if (error.name === "AbortError") {  
//       console.log("下载暂停");  
//     } else {  
//       console.error("Fetch error: ", error);  
//     }  
//   }  
// }  
  
// function pauseDownload() {  
//   controller.abort();  
// }  
  
// downloadFile();  
