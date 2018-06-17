export class UploadStory {
  private _title: String;
  private _file: File;

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get file(): File {
    return this._file;
  }

  set file(value: File) {
    this._file = value;
  }

  constructor(){}
}
