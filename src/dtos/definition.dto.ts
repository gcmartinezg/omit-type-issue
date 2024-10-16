import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { BasicDtoV1 } from './basic.v1.dto';

export class DefinitionDto extends OmitType(BasicDtoV1, [
  'description',
] as const) {
  @ApiProperty({
    description: 'The definition itself',
    type: String,
  })
  definition: string;

  @ApiProperty({
    description: 'The id of the source',
    minimum: 1,
    type: Number,
  })
  source_id: number;
}
