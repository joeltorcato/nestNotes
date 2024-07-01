import { User } from '../entities/User'; // Importa a entidade User.
import { UserRepository } from './UserRepository'; // Importa a interface UserRepository.

export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = []; // Armazena os usuários em um array na memória.

  // Implementa o método create para adicionar um usuário ao array.
  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
