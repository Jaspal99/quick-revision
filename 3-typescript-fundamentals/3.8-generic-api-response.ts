type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

type gUser = {
  id: string;
  name: string;
};

type UserResponse = ApiResponse<gUser>;
