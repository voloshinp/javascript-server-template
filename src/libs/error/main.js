class ApiError extends Error {

  /**
   * Creates an instance of ApiError.
   * @date 11/07/2023 - 13:13:35
   *
   * @constructor
   * @param {string} message
   * @param {number} code
   */
  constructor(message, code) {
    super(message)
    this.code = code
  }

}

export default ApiError