module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define('Film', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_film: {
            type: DataTypes.STRING
        },
        deskripsi: {
            type: DataTypes.TEXT
        },
        sutradara: {
            type: DataTypes.STRING
        },
        tahun_terbit: {
            type: DataTypes.INTEGER
        },
        genre: {
            type: DataTypes.STRING
        }
    });

    return Film;
};

/*
Table name: Film
ID (Primary Key) INT Auto Increment
nama_film
deskripsi
sutradara
tahun_terbit
genre
 */