/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto'; // Importa a função para gerar UUIDs.
import { Replace } from 'src/utils/replace'; // Importa uma utilidade para substituir tipos.

// Define a interface para os dados do usuário.
interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class User {
  props: IUser; // Propriedades do usuário.
  _id: string; // ID do usuário.

  constructor(props: Replace<IUser, { createdAt?: Date }>, id?: string) {
    // Inicializa as propriedades do usuário, definindo a data de criação se não fornecida.
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    this._id = id || randomUUID(); // Define o ID do usuário, gerando um novo se não fornecido.
  }

  // Getter para o ID.
  get id(): string {
    return this._id;
  }

  // Getter e setter para o nome.
  get name(): string {
    return this.props.name;
  }
  set name(name: string) {
    this.props.name = name;
  }

  // Getter e setter para o email.
  get email(): string {
    return this.props.email;
  }
  set email(email: string) {
    this.props.email = email;
  }

  // Getter e setter para a senha.
  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.props.password = password;
  }

  // Getter e setter para a data de criação.
  get createdAt(): Date {
    return this.props.createdAt;
  }
  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
}
