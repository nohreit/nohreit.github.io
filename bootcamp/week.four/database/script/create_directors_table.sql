-- Table: public.directors

-- DROP TABLE public.directors;

CREATE TABLE public.directors
(
    director_id integer NOT NULL DEFAULT nextval('directors_director_id_seq'::regclass),
    first_name character varying(30) COLLATE pg_catalog."default",
    last_name character varying(30) COLLATE pg_catalog."default",
    date_of_birth date,
    nationality character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT directors_pkey PRIMARY KEY (director_id)
)

TABLESPACE pg_default;

ALTER TABLE public.directors
    OWNER to postgres;