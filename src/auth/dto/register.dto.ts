import { IsNotEmpty, IsString, MinLength } from 'class-validator';

import { IsAlphanumericOnly } from '../../common/decorators/is-alphanumeric-only.decorator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumericOnly()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
