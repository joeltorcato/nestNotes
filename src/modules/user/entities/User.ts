/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

// eslint-disable-next-line prettier/prettier
interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class User {
  props: IUser;
  _id: string;

  constructor(props: Replace<IUser, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    this._id = id || randomUUID(); // Nós vamos buscar o valor da class, não o valor do constructor.
  }
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this.props.name;
  }
  set name(name: string) {
    this.props.name = name;
  }
  get email(): string {
    return this.props.email;
  }
  set email(email: string) {
    this.props.email = email;
  }
  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.props.password = password;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
}
