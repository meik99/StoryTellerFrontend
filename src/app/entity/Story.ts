export class Story {
  private _title: string;
  private _description: string;
  private _messages: string[][];

  constructor(title: string, description: string, messages: string[][]) {
    this._title = title;
    this._description = description;
    this._messages = messages;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get messages(): string[][] {
    return this._messages;
  }

  set messages(value: string[][]) {
    this._messages = value;
  }
}
