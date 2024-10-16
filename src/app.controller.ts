import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DefinitionDto } from './dtos/definition.dto';
import { ApiExtraModels, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BasicDtoV1 } from './dtos/basic.v1.dto';

@Controller()
@ApiExtraModels(BasicDtoV1)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: [DefinitionDto] })
  @ApiOperation({
    summary: 'Get all definitions',
  })
  getDefinitions(): DefinitionDto[] {
    return this.appService.getDefinitions();
  }
}
