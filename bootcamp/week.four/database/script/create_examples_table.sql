-- Table: public.examples

-- DROP TABLE public.examples;

CREATE TABLE public.examples
(
    example_id integer NOT NULL DEFAULT nextval('examples_example_id_seq'::regclass),
    first_name character varying(30) COLLATE pg_catalog."default",
    last_name character varying(30) COLLATE pg_catalog."default",
    date_of_birth date NOT NULL,
    email character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT examples_pkey PRIMARY KEY (example_id),
    CONSTRAINT examples_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE public.examples
    OWNER to postgres;