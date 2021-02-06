create table owners (
	owner_id serial primary key,
	first_name varchar(30),
	last_name varchar(30),
	city varchar(30),
	state char(2)
);

create table pets (
	pet_id serial primary key,
	species varchar(30),
	full_name varchar(30),
	age integer,
	owner_id integer,
	constraint fk_owners foreign key (owner_id) references owners (owner_id)
);


