DROP DATABASE IF EXISTS likeminded_db;
CREATE DATABASE likeminded_db;
USE likeminded_db;
CREATE TABLE `Events`(
    `event_id` INT AUTO_INCREMENT,
    `author` CHAR(255),
    `plan_origin` INT,
    `event_name` CHAR(255),
    `event_desc` TEXT,
    PRIMARY KEY `events_event_id_primary`(`event_id`)
);

CREATE TABLE `Plans`(
    `plan_id` INT UNSIGNED AUTO_INCREMENT,
    `author` CHAR(255),
    `clique_origin` CHAR(255),
    `plan_name` CHAR(255),
    `plan_desc` TEXT,
    PRIMARY KEY `plans_plan_id_primary`(`plan_id`)
);

CREATE TABLE `Cliques`(
    `clique_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `author` CHAR(255) NOT NULL,
    `clique_name` CHAR(255) NOT NULL,
    `plans` CHAR(255) NOT NULL,
    `members` CHAR(255) NOT NULL,
    `community_id` INT NOT NULL,
    PRIMARY KEY `cliques_clique_id_primary`(`clique_id`)
);

CREATE TABLE `Community`(
    `community_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `author` CHAR(255) NOT NULL,
    PRIMARY KEY `community_community_id_primary`(`community_id`)
);

CREATE TABLE `user`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` CHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,
    PRIMARY KEY `user_user_id_primary`(`user_id`)
);

CREATE TABLE `Clique members`(
	`member_list` CHAR(255) NOT NULL
);

ALTER TABLE
    `Events` ADD CONSTRAINT `events_plan_origin_foreign` FOREIGN KEY(`plan_origin`) REFERENCES `Plans`(`plan_id`);
ALTER TABLE
    `Plans` ADD CONSTRAINT `plans_clique_origin_foreign` FOREIGN KEY(`clique_origin`) REFERENCES `Cliques`(`clique_id`);
ALTER TABLE
    `Cliques` ADD CONSTRAINT `cliques_community_id_foreign` FOREIGN KEY(`community_id`) REFERENCES `Community`(`community_id`);
ALTER TABLE
    `Plans` ADD CONSTRAINT `plans_author_foreign` FOREIGN KEY(`author`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Cliques` ADD CONSTRAINT `cliques_author_foreign` FOREIGN KEY(`author`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Events` ADD CONSTRAINT `events_author_foreign` FOREIGN KEY(`author`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Clique members` ADD CONSTRAINT `clique members_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Clique members` ADD CONSTRAINT `clique members_clique_id_foreign` FOREIGN KEY(`clique_id`) REFERENCES `Cliques`(`clique_id`);