
interface IUserDelete {
    id: string;
}
class DeleteUserService {
  async execute({id}:IUserDelete) {
   
    var vuser = {
      message: "Registro excluido com sucesso"
    }

    return vuser;
      
           
  }
}

export { DeleteUserService };