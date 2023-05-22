export default class ErrorRepository {
  static storage = new Map([[1, 'error1'], [2, 'error2'], [3, 'error3']]);

  static translate(errorNumber) {
    const error = this.storage.get(errorNumber);
    if (error === undefined) { return 'Unknown error'; }
    return error;
  }
}
