// import axios from 'axios';
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const returnCorrectRequest = (method: Method, data: unknown): RequestInit => {
  if (method === 'GET') {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};

export const sendApiRequest = async <T>(
  url: string,
  method: Method,
  data: unknown,
): Promise<T> => {
  const response = await fetch(url, returnCorrectRequest(method, data));
  if (!response.ok) {
    const message = `request was unsuccessful ${response.statusText}`;
    throw new Error(message);
  }
  return (await response.json()) as Promise<T>;
};
