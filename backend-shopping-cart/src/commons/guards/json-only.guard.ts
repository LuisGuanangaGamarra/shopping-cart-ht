import { Request } from 'express';

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnsupportedMediaTypeException,
} from '@nestjs/common';

@Injectable()
export class JsonOnlyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const contentType = request.headers['content-type'];

    if (!contentType || !contentType.includes('application/json')) {
      throw new UnsupportedMediaTypeException(
        'solo peticiones con contenido de tipo application/json son permitidas',
      );
    }

    return true;
  }
}
