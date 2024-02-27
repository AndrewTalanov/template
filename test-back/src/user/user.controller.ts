import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/getUsers')
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('randomIdUser/:max')
    getRandomIdUser(@Param('max') max: number) {
        return this.userService.getRandomId(max);
    }

    @Post('/createUser')
    createUser(@Body() data: any ) {
        return this.userService.createUser(data);
    }

}