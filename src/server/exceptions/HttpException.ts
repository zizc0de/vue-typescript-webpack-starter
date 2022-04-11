class HttpException extends Error {
  public name: string;
  public status: number;
  public message: string;
  public response: any;

  constructor(err: { status: number; message: string }) {
    super();

    this.name = this.constructor.name;

    this.status = err.status;
    this.message = err.message;
  }

  setStatus(status: number): void {
    this.status = status;
  }

  setResponseData(data: any): void {
    this.response = { error: data };
  }
}

export default HttpException;
