import { NestFactory } from "@nestjs/core";
import { ConsumerModule } from "./consumer.module";


async function bootstrap() {
  const app = await NestFactory.create(ConsumerModule);
  await app.listen(process.env.PORT || 3000);
  console.log('⚙️ PORT:', process.env.PORT);

}
bootstrap();
