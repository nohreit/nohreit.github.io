-- Table: public.movies

-- DROP TABLE public.movies;

CREATE TABLE public.movies
(
    movie_id integer NOT NULL DEFAULT nextval('movies_movie_id_seq'::regclass),
    movie_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    movie_length integer,
    movie_lang character varying(20) COLLATE pg_catalog."default",
    release_date date,
    age_certificate character varying(5) COLLATE pg_catalog."default",
    director_id integer,
    CONSTRAINT movies_pkey PRIMARY KEY (movie_id)
)

TABLESPACE pg_default;

ALTER TABLE public.movies
    OWNER to postgres;