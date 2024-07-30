import {AxiosError, AxiosRequestConfig} from 'axios';
import axiosInstance from '../axiosIntance';

// Interface for the error response
interface ErrorResponse {
  msg: string;
}

// Get the data from the server
export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  } catch (error: any) {
    handleErrorResponse(error);
    throw error;
  }
};

// Post the data to the server
export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  } catch (error: any) {
    handleErrorResponse(error);
    throw error;
  }
};

// Check if the response is an error
const isErrorResponse = (data: any): data is ErrorResponse => {
  return data && typeof data.msg === 'string';
};

const handleErrorResponse = (error: AxiosError) => {
  if (error.response) {
    const errorData = error.response.data;
    if (isErrorResponse(errorData)) {
      console.log('Error Response:', errorData.msg);
    } else {
      console.log('Error Response:', errorData);
    }
  } else {
    console.log('Request Error:', error.message);
  }
};
