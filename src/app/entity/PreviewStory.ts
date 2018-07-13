export class PreviewStory {
  private _id: string;
  private _title: string;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }


  constructor(id: string, title: string) {
    this._id = id;
    this._title = title;
  }


}
