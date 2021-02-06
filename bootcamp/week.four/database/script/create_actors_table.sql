-- Table: public.actors

-- DROP TABLE public.actors;

CREATE TABLE public.actors
(
    actor_id integer NOT NULL DEFAULT nextval('actors_actor_id_seq'::regclass),
    first_name character varying(30) COLLATE pg_catalog."default",
    last_name character varying(30) COLLATE pg_catalog."default",
    gender character(1) COLLATE pg_catalog."default",
    date_of_birth date,
    CONSTRAINT actors_pkey PRIMARY KEY (actor_id)
)

TABLESPACE pg_default;

ALTER TABLE public.actors
    OWNER to postgres;