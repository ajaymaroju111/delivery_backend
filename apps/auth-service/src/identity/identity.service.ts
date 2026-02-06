import { Injectable } from '@nestjs/common';
import { IdentityRepository } from './identity.repository';
import { hashPassword } from '../common/utils/password.utils';

@Injectable()
export class IdentityService {
  constructor(private identityRepo: IdentityRepository) {}

  async register(username: string, email: string, password: string, role: string) {
    const hashed = await hashPassword(password);
    const identity = await this.identityRepo.create({ username, email, password: hashed, role });
    return identity;
  }

  async findByEmail(email: string) {
    return this.identityRepo.findByEmail(email);
  }
}
