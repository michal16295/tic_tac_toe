export const responseWrapper = (
  status: number,
  data: any
): { status: number; data: any } => {
  return { status, data };
};

// This is a shortcut for success with status 200 and data
export const responseSuccess = (data: any) => {
  return responseWrapper(200, data);
};

// This is a shortct for error with service setting the status and error message
export const responseError = (
  status: number,
  error: string,
  data: object = null
) => {
  return responseWrapper(status, { error, data });
};

// This is used for server error message I.e status 500
export const SERVER_ERROR = "Server Error";
