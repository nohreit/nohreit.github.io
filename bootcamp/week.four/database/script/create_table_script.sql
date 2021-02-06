

CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name  VARCHAR(30),
	last_name VARCHAR(30),
	gender CHAR(1),
	date_of_birth DATE
);
	
create table directors (
	director_id serial primary key,
	first_name  VARCHAR(30),
	last_name VARCHAR(30),
	date_of_birth DATE,
	nationality VARCHAR(30)
);

CREATE TABLE movies (
	movie_id SERIAL PRIMARY KEY,
	movie_name VARCHAR(50) NOT NULL,
	movie_length INT,
	movie_lang VARCHAR(20),
	release_date DATE,
	age_certificate VARCHAR(5),
	director_id INT,
	FOREIGN KEY (director_id)  REFERENCES  directors (director_id)
);

create table movies_revenues (
	revenue_id serial primary key, 
	movie_id varchar(30),
	domestic_takings varchar(30),
	international_takings varchar(30)
);
	
create table movies_actors (
	actor_id int,
	movie_id int
);