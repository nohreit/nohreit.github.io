-- Part A:

insert into owners (owner_id, first_name, last_name, city, state, email)
values
(1, 'Samuel', 'Smith', 'Boston', 'MA', 'samsmith@gmail.com'),
(2, 'Emma', 'Johnson', 'Seatle', 'WA', 'emjohnson@gmail.com'),
(3, 'John', 'Oliver', 'New York', 'NY', 'johnoliver@gmail.com'),
(4, 'Olivia', 'Brown', 'San Francisco', 'CA', 'oliviabrown@gmail.com'),
(5, 'Simon', 'Smith', 'Dallas', 'TX', 'sismith@gmail.com'),
(7, null, 'Maxwell', null, 'CA', 'lordmaxwell@gmail.com');

insert into pets (pet_id, species, full_name, age, owner_id)
values
(1, 'Dog', 'Rex', 6, 1),
(2, 'Rabbit', 'Fluffy', 2,  5),
(3, 'Cat', 'Tom', 8,  2),
(4, 'Mouse', 'Jerry', 2,  2),
(5, 'Dog', 'Biggles', 4,  1),
(6, 'Tortoise', 'Squirtle', 42,  3);

update pets
set age = 3 where species = 'Rabbit' and full_name = 'Fluffy';

delete from owners where last_name = 'Maxwell';

-- Part B:

select movie_name, release_date from movies;

select first_name, last_name
from directors
where nationality = 'American';

select *
from actors
where date_of_birth > '1970-01-01' and gender = 'M';

select movie_name
from movies
where movie_length > 90 and movie_lang = 'English';

-- Part C

select movie_name, movie_lang
from movies
where movie_lang in ('English', 'Spanish', 'Korean');

select first_name, last_name
from actors
where last_name like 'P%' 
and date_of_birth between '1940-01-01' and '1969-12-31';

select first_name, last_name
from directors
where nationality in ('British', 'French', 'German')
and date_of_birth between '1950-01-01' and '1980-12-31';
