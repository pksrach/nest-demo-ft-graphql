import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): any {
    return {
      status: 'OK',
      message: 'Server is running',
    };
  }

  getHello(): string {
    return 'Hello World!';
  }
}
