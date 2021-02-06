-- Part A

-- 1)

-- select a.first_name || ' ' || a.last_name as Actor
-- from actors a, movies m, movies_actors ma, directors d
-- where ma.actor_id = a.actor_id 
-- and ma.movie_id = m.movie_id
-- and d.director_id = m.director_id
-- and d.first_name = 'Wes'
-- and d.last_name = 'Anderson'
-- group by a.first_name, a.last_name;

select a.first_name || ' ' || a.last_name as Actor
from actors a
join movies_actors ma
on ma.actor_id = a.actor_id
join movies m
on ma.movie_id = m.movie_id
join directors d
on d.director_id = m.director_id
where d.first_name = 'Wes'
and d.last_name = 'Anderson'
group by a.first_name, a.last_name;

-- 2)

-- select d.first_name || ' ' || d.last_name as Director
-- from directors d, movies m, movies_revenues mr
-- where d.director_id = m.director_id
-- and m.movie_id = mr.movie_id
-- order by mr.domestic_takings
-- limit 1;

select d.first_name || ' ' || d.last_name as Director
from directors d
join movies m
on d.director_id = m.director_id
join movies_revenues mr
on m.movie_id = mr.movie_id
order by mr.domestic_takings
limit 1;

-- Part B

-- 1)

select first_name || ' ' || last_name as Actors
from actors
where date_of_birth > (
	select date_of_birth
	from actors
	where first_name = 'Marlon' and last_name = 'Brando'
);

-- 2)

select movie_name
from movies m
join movies_revenues mr
on m.movie_id = mr.movie_id
where domestic_takings > 300;

-- 3)

select movie_name, movie_length as shortest
from movies m
join movies_revenues mr
on m.movie_id = mr.movie_id
where domestic_takings > (
	select avg(domestic_takings) from movies_revenues
)
order by movie_length limit 1;

select movie_name, movie_length as longest
from movies m
join movies_revenues mr
on m.movie_id = mr.movie_id
where domestic_takings > (
	select avg(domestic_takings) from movies_revenues
)
order by movie_length desc limit 1;

-- Part C

-- 1)

select m.first_name, m.last_name, m.date_of_birth, m.gender
from (
    select actor_id, first_name, last_name, date_of_birth , gender
    from actors
    where gender = 'M' and date_of_birth is not null
    order by date_of_birth limit 1
) as m
union
select f.first_name, f.last_name, f.date_of_birth, f.gender
from (
    select actor_id, first_name, last_name, date_of_birth, gender
    from actors of
    where gender = 'F' and date_of_birth is not null
    order by date_of_birth limit 1
) as f;

-- 2)

select movie_name, movie_length, age_certificate
from movies
where age_certificate > (
	select avg(movie_length)
	from movies
);

-- I am quite unsure about the question. The query above will not work due to datatype disparity.
-- age_certificate is a varchar and movie_length is a integer. Unless casting it, that will not work.
-- Even with cast on age_certificate, however, there will still be a problem as there are alphabets
-- such as 'PG' which cannot be converted. Likewise converting the column from varchar to integer
-- will not help either. Below is my other understanding of the question.

select movie_name, movie_length, age_certificate
from movies
where movie_length > (
	select avg(movie_length)
	from movies
);






