import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const jwtService = new JwtService({ secret: process.env.JWT_SECRET });
      const decoded = jwtService.decode(token);
      request.user = decoded;
    }
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
