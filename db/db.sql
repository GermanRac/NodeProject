DROP TABLE IF EXISTS roles CASCADE;

create table roles (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR (180) NOT NULL UNIQUE,
	route VARCHAR (255) NULL,
	created_at TIMESTAMP (0) NOT NULL,
	updated_at TIMESTAMP (0) NOT NULL

);





DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
	id BIGSERIAL PRIMARY KEY,
	email VARCHAR (255) NOT NULL UNIQUE,
	name VARCHAR (255) NOT NULL,
	lastname VARCHAR (255) NOT NULL,
	points INTEGER (200) NOT NULL,
	consent BOOLEAN NOT NULL, 
	password VARCHAR (255) NOT NULL,
	session_token VARCHAR(255) NULL,
	created_at TIMESTAMP (0) NOT NULL,
	updated_at TIMESTAMP (0) NOT NULL
);

DROP TABLE IF EXISTS user_roles CASCADE;

create table user_roles (
	id_user BIGSERIAL NOT NULL,
	id_rol BIGSERIAL NOT NULL,
	created_at TIMESTAMP (0) NOT NULL,
	updated_at TIMESTAMP (0) NOT NULL,
	FOREIGN KEY (id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_rol) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
	PRIMARY KEY (id_user,id_rol)
);



INSERT INTO  roles (
	name,
	route,
	created_at,
	updated_at

)
VALUES(
	'CLIENTE',
	'client/home',
	'2024-06-05',
	'2024-06-05'
); 