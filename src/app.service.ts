import { Injectable } from '@nestjs/common';
import { DefinitionDto } from './dtos/definition.dto';

@Injectable()
export class AppService {
  getDefinitions(): DefinitionDto[] {
    return [
      {
        id: 1,
        name: 'Definition 1',
        is_active: true,
        definition: 'Definition 1',
        source_id: 1,
      },
      {
        id: '2',
        name: 'Definition 2',
        is_active: false,
        definition: 'Definition 2',
        source_id: 2,
      },
    ];
  }
}
