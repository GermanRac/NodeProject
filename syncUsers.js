const User = require('./models/user'); 
const firebaseAdmin = require('./firebaseConfig'); 

async function syncUsersToFirebase() {
    try {
        const users = await User.getAll(); // Obtener todos los usuarios de PostgreSQL

        for (const user of users) {
            const userRef = firebaseAdmin.database().ref('users').push();
            await userRef.set({
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                points: user.points,
                password: user.password 
            });

            console.log(`Usuario ${user.email} sincronizado con Firebase`);
        }

        console.log('Sincronización completada');
    } catch (error) {
        console.error('Error durante la sincronización', error);
    }
}

syncUsersToFirebase();
