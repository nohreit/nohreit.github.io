-- Table: public.movies_revenues

-- DROP TABLE public.movies_revenues;

CREATE TABLE public.movies_revenues
(
    revenue_id integer NOT NULL DEFAULT nextval('movie_revenues_revenue_id_seq'::regclass),
    movie_id character varying(30) COLLATE pg_catalog."default",
    domestic_takings character varying(30) COLLATE pg_catalog."default",
    international_takings character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT movie_revenues_pkey PRIMARY KEY (revenue_id)
)

TABLESPACE pg_default;

ALTER TABLE public.movies_revenues
    OWNER to postgres;