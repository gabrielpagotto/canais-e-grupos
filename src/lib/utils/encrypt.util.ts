import bcrypt from 'bcrypt';

const SALTS = 10;

export async function createPasswordHash(password: string) {
  return await bcrypt.hash(password, SALTS);
}

export async function comparePasswordHash(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}
