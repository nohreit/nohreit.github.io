-- Table: public.movies_actors

-- DROP TABLE public.movies_actors;

CREATE TABLE public.movies_actors
(
    actor_id character varying(5) COLLATE pg_catalog."default",
    movie_id character varying(5) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.movies_actors
    OWNER to postgres;