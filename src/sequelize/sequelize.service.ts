import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class SequelizeService {
  constructor(config: ConfigService) {}
}