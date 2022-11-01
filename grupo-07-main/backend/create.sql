create table IF NOT EXISTS
cars(id int auto_increment primary key,
title varchar(255),
city_id int;
license_plate varchar (255),
description varchar(255),
availability bit(1) NOT NULL DEFAULT '0',
image_id int,
category_id int,
feature_id int;
policy_id int;

create table IF NOT EXISTS
categories(id int auto_increment primary key,
title varchar(255),
description varchar(255),
url_image varchar (255);


create table IF NOT EXISTS
cities(id int auto_increment primary key,
name varchar(255),
country varchar(255),

create table IF NOT EXISTS
images(id int auto_increment primary key,
title varchar(255),
url_image varchar (255);

create table IF NOT EXISTS
features(id int auto_increment primary key,
title varchar(255),
description varchar(255),
url_image varchar (255);

create table IF NOT EXISTS
policies(id int auto_increment primary key,
termsAndConditions1 bit(1) NOT NULL DEFAULT '0',
termsAndConditions2 bit(1) NOT NULL DEFAULT '0',
safeAndSecurityPolicy1 bit(1) NOT NULL DEFAULT '0',
safeAndSecurityPolicy2 bit(1) NOT NULL DEFAULT '0',
cancellationPolicy1 bit(1) NOT NULL DEFAULT '0',
cancellationPolicy2 bit(1) NOT NULL DEFAULT '0',

