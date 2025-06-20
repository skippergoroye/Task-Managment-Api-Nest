import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configServicve: ConfigService) {}
  getHello(): string {
    const prefix = this.configServicve.get<string>('app.messagePrefix');
    console.log(`Prefix: ${prefix}`);
    return 'Hello World!';
  }
}
