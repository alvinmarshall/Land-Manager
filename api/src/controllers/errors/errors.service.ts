class ErrorsService {
  dataExistError(field: string) {
    return {
      status: 400,
      message: `${field} already exist...`,
      error: [`${field} already in use`]
    };
  }

  internalError() {
    return {
      status: 500,
      message: "Something went wrong, try again",
      error: ["Internal error"]
    };
  }
}

const errorService = new ErrorsService();
export default errorService;
