import Users from "../../model/Users";
import IBaseService from "../IBaseService";
import { IPayload } from "./passport.service";
import Bycrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

class AuthenticateService implements IBaseService {
  create(data: any) {
    return Users.create(data);
  }

  get() {
    return Users.find({}, { password: 0 }).exec();
  }

  getOne(identifier: any) {
    return Users.findOne(identifier).exec();
  }

  edit(identifier: any) {
    throw new Error("Method not implemented.");
  }

  update(identifier: any) {
    throw new Error("Method not implemented.");
  }

  delete(identifier: any) {
    throw new Error("Method not implemented.");
  }

  authenticate(creds: { username: string; password: string }): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const { username, password } = creds;
        const data = await Users.findOne({ username });

        if (!data) return resolve(null);
        const isCorrect = await Bycrypt.compare(password, data.password);

        if (!isCorrect) return resolve(null);
        const { id, name, email, avatar, role, permission } = data;
        const payload: IPayload = {
          id,
          username,
          name,
          email,
          avatar,
          role,
          permission
        };
        const token = await this.generateJwt(payload);
        resolve({ token });
      } catch (error) {
        reject(error);
      }
    });
  }

  private generateJwt(payload: IPayload): Promise<string> {
    return new Promise((resolve, reject) => {
      const expiresIn = 60 * 60 * 4; // expires in 4 hours
      Jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn },
        (err, encoded) => {
          if (err) return reject(err);
          return resolve(encoded);
        }
      );
    });
  }
}

const authService = new AuthenticateService();
export default authService;
