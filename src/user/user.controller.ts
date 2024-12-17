import { Controller, Delete, Get, Post, Put, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO): Promise<JSON> {
        const createdUser = await this.userService.createUser(createUserDTO);

        return res.status(HttpStatus.OK).json({
            data: createdUser,
            message: 'User was successfully created.',
            status: HttpStatus.OK
        });
    }

    @Delete('/:id')
    async deleteUser(@Res() res, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const deletedUser = this.userService.deleteUser(id);
            jsonResponse = {
                data: deletedUser,
                message: `User with id ${id} was deleted.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `User with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }

    @Get('/getAll')
    async getAllUsers(@Res() res): Promise<JSON> {
        const users = await this.userService.getUsers();

        return res.status(HttpStatus.OK).json({
            data: users,
            message: 'Returning all users.',
            status: HttpStatus.OK
        });
    }

    @Get('/:id')
    async getUserById(@Res() res, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const user = await this.userService.getUser(id);
            jsonResponse = {
                data: user,
                message: `Returning user ${id}.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `User with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }

    @Put(':id')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Param('id') id): Promise<JSON> {
        let jsonResponse;

        try {
            const user = await this.userService.updateUser(id, createUserDTO);
            jsonResponse = {
                data: user,
                message: `Returning updated user ${id}.`,
                status: HttpStatus.OK
            }
        } catch(error) {
            jsonResponse = jsonResponse = {
                data: null,
                message: `User with id ${id} was not found.`,
                status: HttpStatus.NOT_FOUND
            }
        }

        return res.status(jsonResponse.status).json(jsonResponse);
    }
}
