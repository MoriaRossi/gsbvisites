// test/user.test.ts
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { User } from '../User'; // Adjust the path based on your project structure
import { UserController } from '../../controller/UserController';
import pool from '../../db/db';

describe('User class', () => {
  it('should return a user with the correct user', async () => {
    const user = await UserController.getUser('jose.mourinho', 'gsbvisites');

    // Adjust the expectation based on the structure of your User class
    expect(user).to.be.instanceOf(User);
    console.log(user);
  });
});
