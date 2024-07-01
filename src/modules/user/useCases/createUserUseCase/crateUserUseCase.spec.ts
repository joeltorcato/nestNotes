import { compare } from 'bcrypt'; // Importa a função compare do bcrypt para comparar senhas.
import { UserRepositoryInMemory } from '../../repositories/UserRepositoryInMemory'; // Importa o repositório em memória.
import { CreateUserUseCase } from './createUserUseCase'; // Importa o caso de uso de criação de usuário.

let createUserUseCase: CreateUserUseCase; // Declaração da variável para o caso de uso.
let userRepositoryInMemory: UserRepositoryInMemory; // Declaração da variável para o repositório em memória.

describe('Create User', () => {
  beforeEach(() => {
    // Inicializa as variáveis antes de cada teste.
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('Should be able to create a new user', async () => {
    // Verifica que o repositório está vazio antes da criação do usuário.
    expect(userRepositoryInMemory.users).toEqual([]);

    // Executa o caso de uso para criar um novo usuário.
    const user = await createUserUseCase.execute({
      name: 'Joel Fernandes',
      email: 'a12022@ae4outubro.pt',
      password: '5DEZEMBRO_',
    });

    // Verifica que o usuário foi adicionado ao repositório.
    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('Should be able to create a new user with password encrypted', async () => {
    // Define uma senha sem encriptação.
    const userPasswordWithoutEncryption = '1209';

    // Executa o caso de uso para criar um novo usuário com a senha fornecida.
    const user = await createUserUseCase.execute({
      name: 'Joel Fernandes',
      email: 'a12022@ae4outubro.pt',
      password: userPasswordWithoutEncryption,
    });

    // Compara a senha sem encriptação com a senha encriptada do usuário.
    const userHasPasswordEncrypted = await compare(
      userPasswordWithoutEncryption,
      user.password,
    );
    // Verifica que a senha foi corretamente encriptada.
    expect(userHasPasswordEncrypted).toBeTruthy();
  });
});
