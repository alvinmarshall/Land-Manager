import { config } from "dotenv";
import { resolve } from "path";

switch (process.env.NODE_ENV) {
  case "development":
    console.log("Environment  is Development");
    config({ path: resolve(__dirname, "../.env.development") });
    break;

  case "test":
    console.log("Environment  is Test");
    config({ path: resolve(__dirname, "../.env.test") });
    break;

  case "production":
    console.log("Environment  is Production");
    config({ path: resolve(__dirname, "../.env.production") });
    break;
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled! `);
}

const throwIfNot = <T, K extends keyof T>(
  obj: Partial<T>,
  prop: K,
  msg?: string
): T[K] => {
  if (obj[prop] === undefined || obj[prop] === null) {
    throw new Error(msg || `Environment is missing variable ${prop}`);
  } else {
    return obj[prop] as T[K];
  }
};
// Validate that we have our expected ENV variables defined!
["JWT_SECRET", "PORT", "SERVER_NAME", "MONGO_URL"].forEach(v => {
  throwIfNot(process.env, v);
});

export interface IProcessEnv {
  JWT_SECRET: string;
  PORT: number;
  SERVER_NAME: string;
  MONGO_URL: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}
