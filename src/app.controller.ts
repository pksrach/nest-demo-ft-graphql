import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getTest(): string {
    return 'Hello World!';
  }

  @Get()
  getStatus(): Map<string, string> {
    return this.appService.getStatus();
  }
}
