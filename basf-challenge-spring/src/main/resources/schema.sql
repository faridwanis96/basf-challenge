drop table if exists item;

create table item (
    id serial primary key,
    name varchar(255),
    description varchar(255)
);

insert into item (name, description)  values ('Test Item', 'Test Item Description');