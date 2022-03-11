export const responseWrapper = (status: number, data: object) => {
  let res = { status, data };
  return res;
};

// This is a shortcut for success with status 200 and data
export const responseSuccess = (data: object): object => {
  return responseWrapper(200, data);
};

// This is a shortct for error with service setting the status and error message
export const responseError = (
  status: number,
  error: string,
  data: object = null
): object => {
  return responseWrapper(status, { error, data });
};

// This is used for server error message I.e status 500
export const SERVER_ERROR = "Server Error";
