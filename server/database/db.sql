/* 2023-10-31 07:32:52 [9 ms] */

create database `portfolio_2023`;

/* 2023-10-31 07:52:12 [17 ms] */

drop table follow_system;

/* 2023-10-31 07:52:29 [30 ms] */

create table
    follow_system (
        `follow_id` int(11) AUTO_INCREMENT primary key,
        `followee` varchar(255),
        `follower` varchar(255),
        `follow_date` datetime default CURRENT_TIMESTAMP
    );

create table
    `follow_system` (
        `follow_id` int(11) AUTO_INCREMENT primary key,
        `sender_id` int(11) not null,
        `receiver_id` int(11) NOT NULL,
        `since` datetime default CURRENT_TIMESTAMP
    );

use `portfolio_2023`;

/* 2023-10-31 08:02:05 [1 ms] */

use component_manager;

/* 2023-10-31 08:03:51 [2 ms] */

use portfolio_2023;

/* 2023-10-31 08:27:12 [37 ms] */

create table
    `notifications` (
        `notification_id` int(11) not null,
        `notified_by` int(11) not null,
        `type` varchar(255) not null,
        `notify_to` int(11) not null,
        `notify_of` int(11) not null,
        `post_id` int(11) not null,
        `time` datetime not null,
        `status` enum('read', 'unread') default 'unread'
    );

/* 2023-10-31 08:33:01 [51 ms] */

alter table `notifications` add column `message` varchar(255);

/* 2023-10-31 08:35:00 [23 ms] */

create table
    `newsletter` (
        `newsletter_id` int(11) not null,
        `f_name` varchar(255) not null,
        `email` varchar(255) not null,
        `status` enum ('active', 'inactive') not null,
        `created_at` timestamp not null default CURRENT_TIMESTAMP
    );

use `portfolio_2023`;

CREATE TABLE
    components (
        component_id INT AUTO_INCREMENT PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        version VARCHAR(20) NOT NULL,
        type ENUM(
            'angular',
            'react',
            'vue',
            'stand alone'
        ) NOT NULL,
        updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

use portfolio_2023;

alter table online_users
add
    column ststus enum('online', 'offline') NOT NULL;

alter table online_users add column last_active TIMESTAMP;

/* 2023-11-01 06:49:20 [56 ms] */

alter table online_users add column last_active TIMESTAMP;

alter table `components`
add
    column `description` TEXT after `version`;

/* 2023-11-01 09:01:21 [227 ms] */

-------------------------------------------------------------------------------

-- Active: 1683683697292@@127.0.0.1@8889@portfolio_2023

use `portfolio_2023`;

SELECT * FROM chat;

create table
    conversation (
        convo_id int(11) int AUTO_INCREMENT primary key,
        subject varchar(255),
        date_created datetime default CURRENT_TIMESTAMP
    );

create table
    follow_system (
        follow_id int(11) AUTO_INCREMENT primary key,
        followee varchar(255),
        follower varchar(255),
        follow_date datetime default CURRENT_TIMESTAMP
    );

select * from follow_system;

SELECT * FROM blocked_users;

SELECT * FROM message;

create table
    if not exists `priv_msg` (
        `p_msg_id` INT PRIMARY KEY AUTO_INCREMENT,
        `pm_sender_id` INT NOT NULL,
        `pm_receiver_id` INT NOT NULL,
        `msg_content` TEXT NOT NULL,
        `msg_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
        `last_seen_date` DATETIME DEFAULT CURRENT_TIMESTAMP
    );

create index `idx_sender_id` on `users` (`u_id`);

create index `idx_receiver_id` on `users` (`u_id`);

use component_manager;

use portfolio_2023;

create table
    `notifications` (
        `notification_id` int(11) not null,
        `notified_by` int(11) not null,
        `type` varchar(255) not null,
        `notify_to` int(11) not null,
        `notify_of` int(11) not null,
        `post_id` int(11) not null,
        `time` datetime not null,
        `status` enum('read', 'unread') default 'unread'
    );

alter table `notifications` add column `message` varchar(255);

SELECT * FROM notifications;

create table
    `newsletter` (
        `newsletter_id` int(11) not null,
        `f_name` varchar(255) not null,
        `email` varchar(255) not null,
        `status` enum ('active', 'inactive') not null,
        `created_at` timestamp not null default CURRENT_TIMESTAMP
    );

SELECT * FROM `newsletter`;

--- how can i join these shemas so each user has a list of components they have created

create table
    if not exists `components` (
        `c_id` int(11) primary key not null,
        `c_name` varchar(255) not null,
        `c_version` int(11) not null,
        `c_author` varchar(255) not null,
        `c_description` varchar(255) not null,
        `c_type` enum (
            'angular',
            'react',
            'vue',
            'stand along',
            'node'
        ),
        `c_created_at` DATETIME,
        `c_updated_at` DATETIME
    );

create table
    if not exists `users` (
        `u_id` int(11) unsigned NOT NULL,
        `u_name` varchar(255) NOT NULL,
        `email` varchar(255) NOT NULL,
        `password` varchar(255) NOT NULL,
        `profile_pic` varchar(255) NOT NULL
    );

select u.u_id, u.u_name
from users u
    left join components c on u.u_id = c.c_author;

alter table `components`
add
    column `category` VARCHAR(30) after c_description;

select * from `components`;

select * from `notifications`;

create table
    `status_update` (
        `p_id` int(11) NOT NULL auto_increment primary key,
        `u_id` int(11) NOT NULL,
        `content` text not null,
        `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS `comments` (
        `comment_id` INT PRIMARY KEY AUTO_INCREMENT,
        `post_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        `comment_content` TEXT NOT NULL,
        `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

alter table `comments` add column `like_count` int default 0;

create index idx_cmt_post_id on `posts` (`post_id`);

create index idx_cmt_user_id on `users` (`u_id`);

update
    the comments by one.update `comments`
set like_count = like_count + 1;

select
    c.comment_content,
    p.content
from comments c
    join status_update p on c.post_id = p.p_id

CREATE TABLE
    IF NOT EXISTS `videos` (
        `video_id` INT PRIMARY KEY AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `uploader` INT NOT NULL,
        -- Assuming uploader is the user_id
        `description` TEXT,
        `likes` INT DEFAULT 0,
        `dislikes` INT DEFAULT 0,
        `upload_timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        --   FOREIGN KEY (`uploader`) REFERENCES `users` (`user_id`)
    );

CREATE TABLE
    IF NOT EXISTS `subscriptions` (
        `subscription_id` INT PRIMARY KEY AUTO_INCREMENT,
        `subscriber_id` INT NOT NULL,
        -- User subscribing
        `channel_id` INT NOT NULL
    );

-- User's subscribed channel

--   FOREIGN KEY (`subscriber_id`) REFERENCES `users` (`user_id`),

--   FOREIGN KEY (`channel_id`) REFERENCES `users` (`user_id`)

create table
    if not exists `video_posts`(
        `video_post_id` int(11) NOT NULL,
        `video_title` varchar(255) NOT NULL,
        `uploader` int(11) NOT NULL,
        `description` TEXT NOT NULL,
        `likes` int(11) NOT NULL,
        `dislikes` int(11) not null,
        `shares` int(11) NOT NULL
    );

create table
    `video_subscribers` (
        `subscription_id` INT PRIMARY KEY AUTO_INCREMENT,
        `subscriber_id` INT NOT NULL,
        `channel_id` INT NOT NULL
    );

create index idx_subscriber_id on `users` (`u_id`);

create index idx_channel_id on `users` (`u_id`);

SELECT * FROM video_posts;

create index idx_uploader on `users` (`u_id`);

select shares from `video_posts`;

create index user_id on `users` (`u_id`);

create index
    idx_subscription_id on `subscriptions` (`subscription_id`);

select * from `videos`

SELECT * FROM `blocked_users`

select count(*) as total_subs from subscriptions

select count(*) as total from `status_update`

create table
    `notifications` (
        `notify_id` int(11) primary key AUTO_INCREMENT NOT NULL,
        `notified_by` int(11) not null,
        `type` varchar(255) not null,
        `notify_to` int(11) not null,
        `post_id` int(11) not null,
        `time` timestamp not null,
        `status` enum ('read', 'unread') default 'unread',
        `msg` text
    );

create index idx_notify_id on `users` (`u_id`);

create table
    `posts` (
        `post_id` int(11) primary key AUTO_INCREMENT,
        `user_post_id` int(11) not null,
        `likes` int(11) not null,
        `dislikes` int(11) not null,
        `shares` int(11) not null,
        `content` text not null,
        `created_at` datetime default CURRENT_TIMESTAMP
    );

create index `idx_user_post_id` on users (`u_id`);

create index `idx_notify_to` on users(`u_id`);

select count(*) as comment_count from comments;

select * from users;

use `portfolio_2023`

alter table `components` drop column `category`;

drop database component_manager;

drop database if exists `portfolio`;

drop database `code_base`;

drop database `codehub`;

drop database `dive_sea`;

drop database `phoenix_cds`;

alter table `tasks` drop column `assignee_id`;

select t.assignee from tasks t;

----------------------------------------------------------------

-- Active: 1683683697292@@127.0.0.1@8889@portfolio_2023

use `portfolio_2023`;

SELECT * FROM chat;

create table
    conversation (
        convo_id int(11) int AUTO_INCREMENT primary key,
        subject varchar(255),
        date_created datetime default CURRENT_TIMESTAMP
    );

select * from follow_system;

SELECT * FROM blocked_users;

SELECT * FROM message;

create table
    if not exists `priv_msg` (
        `p_msg_id` INT PRIMARY KEY AUTO_INCREMENT,
        `pm_sender_id` INT NOT NULL,
        `pm_receiver_id` INT NOT NULL,
        `msg_content` TEXT NOT NULL,
        `msg_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
        `last_seen_date` DATETIME DEFAULT CURRENT_TIMESTAMP
    );

create index `idx_sender_id` on `users` (`u_id`);

create index `idx_receiver_id` on `users` (`u_id`);

use component_manager;

use portfolio_2023;

create table
    `notifications` (
        `notification_id` int(11) not null,
        `notified_by` int(11) not null,
        `type` varchar(255) not null,
        `notify_to` int(11) not null,
        `notify_of` int(11) not null,
        `post_id` int(11) not null,
        `time` datetime not null,
        `status` enum('read', 'unread') default 'unread'
    );

alter table `notifications` add column `message` varchar(255);

SELECT * FROM notifications;

create table
    `newsletter` (
        `newsletter_id` int(11) not null,
        `f_name` varchar(255) not null,
        `email` varchar(255) not null,
        `status` enum ('active', 'inactive') not null,
        `created_at` timestamp not null default CURRENT_TIMESTAMP
    );

SELECT * FROM `newsletter`;

--- how can i join these shemas so each user has a list of components they have created

create table
    if not exists `components` (
        `c_id` int(11) primary key not null,
        `c_name` varchar(255) not null,
        `c_version` int(11) not null,
        `c_author` varchar(255) not null,
        `c_description` varchar(255) not null,
        `c_type` enum (
            'angular',
            'react',
            'vue',
            'stand along',
            'node'
        ),
        `c_created_at` DATETIME,
        `c_updated_at` DATETIME
    );

create table
    if not exists `users` (
        `u_id` int(11) unsigned NOT NULL,
        `u_name` varchar(255) NOT NULL,
        `email` varchar(255) NOT NULL,
        `password` varchar(255) NOT NULL,
        `profile_pic` varchar(255) NOT NULL
    );

select u.u_id, u.u_name
from users u
    left join components c on u.u_id = c.c_author;

alter table `components`
add
    column `category` VARCHAR(30) after c_description;

select * from `components`;

select * from `notifications`;

create table
    `status_update` (
        `p_id` int(11) NOT NULL auto_increment primary key,
        `u_id` int(11) NOT NULL,
        `content` text not null,
        `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS `comments` (
        `comment_id` INT PRIMARY KEY AUTO_INCREMENT,
        `post_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        `comment_content` TEXT NOT NULL,
        `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

alter table `comments` add column `like_count` int default 0;

create index idx_cmt_post_id on `posts` (`post_id`);

create index idx_cmt_user_id on `users` (`u_id`);

update
    the comments by one.update `comments`
set like_count = like_count + 1;

select
    c.comment_content,
    p.content
from comments c
    join status_update p on c.post_id = p.p_id

CREATE TABLE
    IF NOT EXISTS `videos` (
        `video_id` INT PRIMARY KEY AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `uploader` INT NOT NULL,
        -- Assuming uploader is the user_id
        `description` TEXT,
        `likes` INT DEFAULT 0,
        `dislikes` INT DEFAULT 0,
        `upload_timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        --   FOREIGN KEY (`uploader`) REFERENCES `users` (`user_id`)
    );

CREATE TABLE
    IF NOT EXISTS `subscriptions` (
        `subscription_id` INT PRIMARY KEY AUTO_INCREMENT,
        `subscriber_id` INT NOT NULL,
        -- User subscribing
        `channel_id` INT NOT NULL
    );

-- User's subscribed channel

--   FOREIGN KEY (`subscriber_id`) REFERENCES `users` (`user_id`),

--   FOREIGN KEY (`channel_id`) REFERENCES `users` (`user_id`)

create table
    if not exists `video_posts`(
        `video_post_id` int(11) NOT NULL,
        `video_title` varchar(255) NOT NULL,
        `uploader` int(11) NOT NULL,
        `description` TEXT NOT NULL,
        `likes` int(11) NOT NULL,
        `dislikes` int(11) not null,
        `shares` int(11) NOT NULL
    );

create table
    `video_subscribers` (
        `subscription_id` INT PRIMARY KEY AUTO_INCREMENT,
        `subscriber_id` INT NOT NULL,
        `channel_id` INT NOT NULL
    );

create index idx_subscriber_id on `users` (`u_id`);

create index idx_channel_id on `users` (`u_id`);

SELECT * FROM video_posts;

create index idx_uploader on `users` (`u_id`);

select shares from `video_posts`;

create index user_id on `users` (`u_id`);

create index
    idx_subscription_id on `subscriptions` (`subscription_id`);

select * from `videos`

SELECT * FROM `blocked_users`

select count(*) as total_subs from subscriptions

select count(*) as total from `status_update`

create table
    `notifications` (
        `notify_id` int(11) primary key AUTO_INCREMENT NOT NULL,
        `notified_by` int(11) not null,
        `type` varchar(255) not null,
        `notify_to` int(11) not null,
        `post_id` int(11) not null,
        `time` timestamp not null,
        `status` enum ('read', 'unread') default 'unread',
        `msg` text
    );

create index idx_notify_id on `users` (`u_id`);

create table
    `posts` (
        `post_id` int(11) primary key AUTO_INCREMENT,
        `user_post_id` int(11) not null,
        `likes` int(11) not null,
        `dislikes` int(11) not null,
        `shares` int(11) not null,
        `content` text not null,
        `created_at` datetime default CURRENT_TIMESTAMP
    );

create index `idx_user_post_id` on users (`u_id`);

create index `idx_notify_to` on users(`u_id`);

select count(*) as comment_count from comments;

use `portfolio_2023`;

select
    t.task_id,
    t.title,
    t.description,
    t.assignee,
    t.due_date,
    t.priority,
    t.status,
    t.modified_date,
    t.created_date
from tasks t

alter table `users`
add
    column `role` enum ('admin', 'moderator', 'user') not null after u_name;

-- INSERT INTO
--     users (
--         u_id,
--         u_name,
--         role,
--         email,
--         password,
--         profile_pic_url
--     )
-- VALUES (
--         1,
--         'user1',
--         'admin',
--         'user1@example.com',
--         'password1',
--         'url1'
--     ), (
--         2,
--         'user2',
--         'moderator',
--         'user2@example.com',
--         'password2',
--         'url2'
--     ), (
--         3,
--         'user3',
--         'user',
--         'user3@example.com',
--         'password3',
--         'url3'
--     ), (
--         4,
--         'user4',
--         'user',
--         'user4@example.com',
--         'password4',
--         'url4'
--     ), (
--         5,
--         'user5',
--         'user',
--         'user5@example.com',
--         'password5',
--         'url5'
--     ), (
--         6,
--         'user6',
--         'moderator',
--         'user6@example.com',
--         'password6',
--         'url6'
--     ), (
--         7,
--         'user7',
--         'admin',
--         'user7@example.com',
--         'password7',
--         'url7'
--     ), (
--         8,
--         'user8',
--         'user',
--         'user8@example.com',
--         'password8',
--         'url8'
--     ), (
--         9,
--         'user9',
--         'user',
--         'user9@example.com',
--         'password9',
--         'url9'
--     ), (
--         10,
--         'user10',
--         'admin',
--         'user10@example.com',
--         'password10',
--         'url10'
--     ), (
--         11,
--         'user11',
--         'user',
--         'user11@example.com',
--         'password11',
--         'url11'
--     ), (
--         12,
--         'user12',
--         'moderator',
--         'user12@example.com',
--         'password12',
--         'url12'
--     ), (
--         13,
--         'user13',
--         'user',
--         'user13@example.com',
--         'password13',
--         'url13'
--     ), (
--         14,
--         'user14',
--         'user',
--         'user14@example.com',
--         'password14',
--         'url14'
--     ), (
--         15,
--         'user15',
--         'admin',
--         'user15@example.com',
--         'password15',
--         'url15'
--     ), (
--         16,
--         'user16',
--         'user',
--         'user16@example.com',
--         'password16',
--         'url16'
--     ), (
--         17,
--         'user17',
--         'moderator',
--         'user17@example.com',
--         'password17',
--         'url17'
--     ), (
--         18,
--         'user18',
--         'user',
--         'user18@example.com',
--         'password18',
--         'url18'
--     ), (
--         19,
--         'user19',
--         'user',
--         'user19@example.com',
--         'password19',
--         'url19'
--     ), (
--         20,
--         'user20',
--         'admin',
--         'user20@example.com',
--         'password20',
--         'url20'
--     );

alter table `users` drop column `profile_pic`;

alter table `users`
add
    column `profile_pic_url` varchar(255) not null;

select * from `users`;

truncate table `users`;

drop table `users`;

create table
    `online_users` (
        `u_id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `u_name` varchar(255) NOT NULL,
        `status` enum('online', 'offline') NOT NULL default 'offline',
        `last_seen` DATETIME not null
    );

select * from `users`;

 alter table `components`
    drop column `c_id`;

alter table `components`
    add column `c_id` AUTO_INCREMENT primary key;

create table
    `components`(
        `c_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `c_name` varchar(255) NOT NULL,
        `c_author` varchar(255) NOT NULL,
        `c_version` varchar(4) not null,
        `c_description` varchar(255) NOT NULL,
        `c_type` varchar(255) NOT NULL,
        `c_created_at` datetime NOT NULL,
        `c_updated_at` datetime NOT NULL
    );
delete from `online_users` where u_id=2;
select * from `online_users`;

-- get the user_id from the session

alter table `components`
    add column `u_id` int(11) NOT NULL after `c_id`;