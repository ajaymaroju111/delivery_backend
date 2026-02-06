import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Identity } from '@prisma/client';

@Injectable()
export class IdentityRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: { username: string; email: string; password: string; role: string }): Promise<Identity> {
    return this.prisma.identity.create({ data });
  }

  async findByEmail(email: string): Promise<Identity | null> {
    return this.prisma.identity.findUnique({ where: { email } });
  }
}
