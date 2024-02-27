import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(private readonly prismaService: PrismaService) {}

    private randomId: number | null = null;

    private findRandomUserId(max: number): void {
        this.randomId = Math.floor(Math.random() * max);
    }

    public getRandomId(max: number): number {
        this.findRandomUserId(max);
        return this.randomId;
    }

    public async getUsers() {
        const users = await this.prismaService.user.findMany();
        return users;
    }

    public async createUser(data) {
        const response = await this.prismaService.user.create({
            data: {
                name: data.name,
                role: data.role
            }
        });
        return response;
    }
}
