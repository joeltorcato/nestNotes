import { randomUUID } from 'crypto';

interface IUser{
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class User{
  props: IUser;
  _id: string;

  constructor(props: IUser, id ?: string) {
    this.props = props;
    this._id = id || randomUUID(); // Nós vamos buscar o valor da class, não o valor do constructor.
  }
}