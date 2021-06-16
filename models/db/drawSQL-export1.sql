DROP DATABASE IF EXISTS likeminded_db;
CREATE DATABASE likeminded_db;
USE likeminded_db;
CREATE TABLE `Events`(
    `event_id` INT AUTO_INCREMENT,
    `author_id` INT NOT NULL,
    `plan_origin` INT,
    `event_name` CHAR(255),
    `event_desc` TEXT,
    PRIMARY KEY `events_event_id_primary`(`event_id`)
);

CREATE TABLE `Plans`(
    `plan_id` INT AUTO_INCREMENT,
    `author_id` INT NOT NULL,
    `clique_origin_id` INT,
    `plan_name` CHAR(255),
    `plan_desc` TEXT,
    PRIMARY KEY `plans_plan_id_primary`(`plan_id`)
);

CREATE TABLE `Cliques`(
    `clique_id` INT NOT NULL AUTO_INCREMENT,
    `author_id` INT NOT NULL,
    `clique_name` CHAR(255) NOT NULL,
    `plans` CHAR(255) NOT NULL,
    `members` CHAR(255) NOT NULL,
    `community_id` INT NOT NULL,
    PRIMARY KEY `cliques_clique_id_primary`(`clique_id`)
);

CREATE TABLE `Community`(
    `community_id` INT NOT NULL AUTO_INCREMENT,
    `author_id` INT NOT NULL,
    PRIMARY KEY `community_community_id_primary`(`community_id`)
);

CREATE TABLE `user`(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `username` CHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,
    PRIMARY KEY `user_user_id_primary`(`user_id`)
);

<<<<<<< HEAD
/* Don't use space on table or column names */ 
CREATE TABLE `Clique_members`( 
	`member_list` CHAR(255) NOT NULL
=======
CREATE TABLE `Clique members`(
	`user_id` INT NOT NULL,
	 `clique_id` INT NOT NULL
>>>>>>> main
);

ALTER TABLE
    `Events` ADD CONSTRAINT `events_plan_origin_foreign` FOREIGN KEY(`plan_origin`) REFERENCES `Plans`(`plan_id`);
ALTER TABLE
    `Plans` ADD CONSTRAINT `plans_clique_origin_foreign` FOREIGN KEY(`clique_origin_id`) REFERENCES `Cliques`(`clique_id`);
ALTER TABLE
    `Cliques` ADD CONSTRAINT `cliques_community_id_foreign` FOREIGN KEY(`community_id`) REFERENCES `Community`(`community_id`);
ALTER TABLE
    `Plans` ADD CONSTRAINT `plans_author_foreign` FOREIGN KEY(`author_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Cliques` ADD CONSTRAINT `cliques_author_foreign` FOREIGN KEY(`author_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Events` ADD CONSTRAINT `events_author_foreign` FOREIGN KEY(`author_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Clique_members` ADD CONSTRAINT `clique_members_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Clique_members` ADD CONSTRAINT `clique_members_clique_id_foreign` FOREIGN KEY(`clique_id`) REFERENCES `Cliques`(`clique_id`);