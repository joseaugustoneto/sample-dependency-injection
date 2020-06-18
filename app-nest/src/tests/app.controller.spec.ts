import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { AppServiceMock } from './app.service.mock';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: new AppServiceMock() }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  
  describe('root', () => {
    it('should return "Hello World! Mockado"', () => {
      expect(appController.getHello()).toBe('Hello World! Mockado');
    });
  });
});
