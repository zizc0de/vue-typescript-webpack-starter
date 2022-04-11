import HttpException from '../../exceptions/HttpException';

enum ErrorSource {
  EXTERNAL = 'external',
}

class HttpError extends HttpException {
  constructor(err: any) {
    super(err);

    this.setStatus(err.response.status);

    const { error } = err.response.data;
    const { system: systemError, user: userError } = error;

    this.setResponseData({
      source: ErrorSource.EXTERNAL,
      statusCode: this.status,
      name: systemError?.message,
      message: userError?.message,
    });
  }
}

export default HttpError;
