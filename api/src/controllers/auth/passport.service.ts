// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import passport from "passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import authService from "./auth.service";

/**
 * PassportService
 */

export interface IPayload {
  id: any;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role: string;
  permission: [];
}

export const passportService = () => {
  const opt: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

  const strategy = new Strategy(opt, async (payload: IPayload, done: any) => {
    try {
      const data = await authService.getOne({ _id: payload.id });
      if (!data) {
        done(null, false);
      }

      done(null, data);
    } catch (error) {
      return console.error(error);
    }
  });
  passport.use(strategy);
};
