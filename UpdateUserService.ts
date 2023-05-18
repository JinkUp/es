import { hash } from "bcryptjs";

interface IUserRequest {
    id: string;     name: string;     email: string;     admin?: boolean;    password: string;
  }
  
  class UpdateUserService {
    async execute({ id, name, email,  admin = false, password }: IUserRequest) {     
      if (!id) {
        throw new Error("id obrigatorio");
      }    
      if (!name) {
        throw new Error("Nome obrigatorio");
      }      
      if (!password) {
        throw new Error("Password Obrigatorio");
      }     
      const passwordHash = await hash(password, 8)
      var vuser = {
        name:"Nome 1", email:"email 2", admin:"teste", password:passwordHash
      }
      return vuser;
    }
  }
  
  export { UpdateUserService };