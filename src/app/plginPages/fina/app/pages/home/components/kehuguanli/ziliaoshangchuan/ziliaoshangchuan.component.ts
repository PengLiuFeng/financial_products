import { Component, OnInit, EventEmitter ,ViewChild,ElementRef} from '@angular/core';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-ziliaoshangchuan',
  templateUrl: './ziliaoshangchuan.component.html',
  styleUrls: ['./ziliaoshangchuan.component.scss']
})
export class ZiliaoshangchuanComponent {

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor() {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ',';
      }
    }
    return files;
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'your-path-to-backend-endpoint',
      method: 'POST',
      data: { foo: 'bar' },
    };
    this.files = [];
    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();
  }
//   fileData: FileItemModel[] = [];

//   // 获取文件上传的inputHTML元素
//   @ViewChild('filesMulti') private fileMulti: ElementRef;

//   // 当选择本地文件后触发此方法
//   fileChange() {

//     // 获取选中的文件数组
//     const t_files = this.fileMulti.nativeElement.files;

//     const fileThis = this;
//     for (let i = 0; i < t_files.length; i++) {
//       const fileItem: FileItemModel = new FileItemModel();
//       fileItem.fileName = files[i].name;
//       fileItem.file = files[i];
//       fileItem.status = '未上传';
//       fileThis.fileData.push(fileItem);
//     }

//     // 清空html中file的显示信息
//     $(this.fileMulti.nativeElement).val('');
//   }

//   // 删除选择的本地文件
//   fileDel(name: string) {
//     for (let i = 0; i < this.fileData.length; i++) {
//       if (this.fileData[i].fileName === name) {
//         this.fileData.splice(i, 1);
//       }
//     }
//   }
// }

// // 单个文件上传

// fileUpload(file, index) {

//   // 构造参数
//   const formData = new FormData();
//   formData.append('file', file, file.name);

//   // 上传至服务器
//   this.http.post('/file/upload', formData).subscribe((data: any) => {
//     if (respData.success && respData.errcode === 2000) { // 如果上传成功

//       // 此文件状态改为已上传
//       this.fileData[index].status = '已上传';

//       // 文件名称改为服务器返回的文件名
//       this.fileData[index].fileName = respData.data.fileName;

//       // 记录文件的ID
//       this.fileData[index].fileId = respData.data.fileId;
//     } else {

//       // 将此文件的文件状态改为‘上传失败’
//       this.fileData[index].status = '上传失败';
//     }
//   });

}
