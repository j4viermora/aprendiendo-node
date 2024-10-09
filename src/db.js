import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite', // el motor de base de datos que se esta usando
    storage: './db.sqlite', // el archivo donde se guardará la base de datos
});

// para crear las tablas y las columnas en la base de datos
sequelize.sync();

export const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event_date: {   
        type: DataTypes.DATE,
        allowNull: false,
    }
});


// Ticket entidad - entity
// id - unico
// owner - string
// event_name - string
// event_date - string
