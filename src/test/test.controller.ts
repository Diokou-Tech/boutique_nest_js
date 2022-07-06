import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
@Controller('test')
export class TestController {
  constructor(private readonly TestService: TestService) {}
  @Get()
  getTest(): string {
    return this.TestService.getTest();
  }
}
