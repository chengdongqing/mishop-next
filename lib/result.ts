type Success<T> = {
  ok: true;
  data: T;
};

type Failure = {
  ok: false;
  error: string;
};

export type Result<T> = Success<T> | Failure;

export const Result = {
  ok<T>(...data: T[]): Result<T> {
    if (data.length === 0) {
      return { ok: true, data: null as T };
    }
    return { ok: true, data: data[0] };
  },
  fail(error: string): Result<never> {
    return { ok: false, error };
  }
};
