import { IsNotEmpty, IsString } from 'class-validator';

import { IsAlphanumericOnly } from '../../common/decorators/is-alphanumeric-only.decorator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumericOnly()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
