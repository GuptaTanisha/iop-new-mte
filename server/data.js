import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },{
            name: 'Admin1',
            email: 'admin1@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        }
    ],
}

export default data;
