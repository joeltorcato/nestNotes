import { NestFactory } from '@nestjs/core'; // Importa NestFactory para criar a aplicação NestJS.
import { AppModule } from './app.module'; // Importa o módulo principal da aplicação.

async function bootstrap() {
  // Cria uma instância da aplicação NestJS usando o módulo principal.
  const app = await NestFactory.create(AppModule);
  // Faz a aplicação ouvir requisições na porta 3000.
  await app.listen(3000);
}
// Chama a função bootstrap para iniciar a aplicação.
bootstrap();
