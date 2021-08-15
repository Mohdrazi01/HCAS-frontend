export class Chat {
  messageText?: null | string;
  user?: null | string;
  public ImageBinary = '';
  public ImageHeaders = '';

  /**
   *
   */
  constructor() {


  }

  AddData(ImageBinary:string,
    ImageHeaders : string)
    {
      this.ImageBinary = ImageBinary;
      this.ImageHeaders = ImageHeaders;
    }
}
