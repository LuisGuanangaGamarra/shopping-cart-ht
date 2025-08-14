import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JsonOnlyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const contentType = request.headers['content-type'];

    if (!contentType || !contentType.includes('application/json')) {
      throw new UnsupportedMediaTypeException(
        'Only application/json requests are allowed',
      );
    }

    return true;
  }
}
