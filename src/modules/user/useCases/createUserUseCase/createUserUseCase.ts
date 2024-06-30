import { Injectable } from '@nestjs/common'; // Importa o decorator Injectable do NestJS.
import { UserRepository } from '../../repositories/UserRepository'; // Importa o repositório de usuário.
import { User } from '../../entities/User'; // Importa a entidade de usuário.
import { hash } from 'bcrypt'; // Importa a função de hash do bcrypt.

// Define a interface para o pedido de criação de usuário.
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {} // Injeta o repositório de usuário.

  async execute({ name, email, password }: CreateUserRequest) {
    // Cria uma nova instância de usuário, com a senha criptografada.
    const user = new User({
      name,
      email,
      password: await hash(password, 10), // Hash da senha com fator de custo 10.
    });

    // Chama o método para salvar o usuário no repositório.
    await this.userRepository.create(user);
  }
}
