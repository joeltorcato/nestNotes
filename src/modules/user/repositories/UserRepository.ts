import { User } from '../entities/User'; // Importa a entidade User.

export abstract class UserRepository {
  // Método abstrato para criar um usuário. Precisa ser implementado por subclasses.
  abstract create(user: User): Promise<void>;
}
