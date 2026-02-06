import * as bcrypt from 'bcrypt';

export async function hashPassword(password : string) : Promise<string> {
    const saltRounds = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, saltRounds);
}

export async function comparePassword(password: string, hashedPassword: string) : Promise<boolean> {
    return bcrypt.compareSync(password, hashedPassword);
}