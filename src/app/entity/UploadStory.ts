export class UploadStory {
  private _title: string;
  private _formData: FormData;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get formData(): FormData {
    return this._formData;
  }

  set formData(value: FormData) {
    this._formData = value;
  }

  constructor(){}
}
