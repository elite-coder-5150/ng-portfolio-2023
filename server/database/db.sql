/* 2023-10-31 07:32:52 [9 ms] */ 
use `portfolio_2023`;


/* 2023-10-31 07:52:12 [17 ms] */ 
drop table follow_system;
/* 2023-10-31 07:52:29 [30 ms] */ 
create table follow_system (
    `follow_id` int(11) AUTO_INCREMENT primary key,
    `followee` varchar(255),
    `follower` varchar(255),
    `follow_date` datetime default CURRENT_TIMESTAMP
);

create table `follow_system` (
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
create table `notifications` (
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
alter table `notifications`
    add column `message` varchar(255);
/* 2023-10-31 08:35:00 [23 ms] */ 
create table `newsletter` (
    `newsletter_id` int(11) not null,
    `f_name` varchar(255) not null,
    `email` varchar(255) not null,
    `status` enum ('active', 'inactive') not null,
    `created_at` timestamp not null default CURRENT_TIMESTAMP
 );

use `portfolio_2023`;

CREATE TABLE components (
  component_id INT AUTO_INCREMENT PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  version VARCHAR(20) NOT NULL,
  type ENUM('angular', 'react', 'vue', 'stand alone') NOT NULL,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

use portfolio_2023;

alter table online_users
    add column ststus enum('online', 'offline') NOT NULL;

alter table online_users
    add column last_active TIMESTAMP;/* 2023-11-01 06:49:20 [56 ms] */ 
alter table online_users
    add column last_active TIMESTAMP;

alter table `components`
    add column `description` TEXT after `version`;/* 2023-11-01 09:01:21 [227 ms] */ 
    

-------------------------------------------------------------------------------

-- Active: 1683683697292@@127.0.0.1@8889@portfolio_2023
use `portfolio_2023`;

SELECT * FROM chat;

create table conversation (
    convo_id int(11) int AUTO_INCREMENT primary key,
    subject varchar(255),
    date_created datetime default CURRENT_TIMESTAMP
);

create table follow_system (
    follow_id int(11) AUTO_INCREMENT primary key,
    followee varchar(255),
    follower varchar(255),
    follow_date datetime default CURRENT_TIMESTAMP
);

select * from follow_system;
SELECT * FROM blocked_users;
SELECT * FROM message;

create table if not exists `priv_msg` (
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

 create table `notifications` (
    `notification_id` int(11) not null,
    `notified_by` int(11) not null,
    `type` varchar(255) not null,
    `notify_to` int(11) not null,
    `notify_of` int(11) not null,
    `post_id` int(11) not null,
    `time` datetime not null,
    `status` enum('read', 'unread') default 'unread'
 );
 alter table `notifications`
    add column `message` varchar(255);

 SELECT * FROM notifications;

 create table `newsletter` (
    `newsletter_id` int(11) not null,
    `f_name` varchar(255) not null,
    `email` varchar(255) not null,
    `status` enum ('active', 'inactive') not null,
    `created_at` timestamp not null default CURRENT_TIMESTAMP
 );

 SELECT * FROM `newsletter`;

--- how can i join these shemas so each user has a list of components they have created
create table if not exists `components` (
    `c_id` int(11) primary key not null,
    `c_name` varchar(255) not null,
    `c_version` int(11) not null,
    `c_author` varchar(255) not null,
    `c_description` varchar(255) not null,
    `c_type` enum ('angular', 'react', 'vue', 'stand along', 'node'),
    `c_created_at` DATETIME,
    `c_updated_at` DATETIME
);

create table if not exists `users` (
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
    add column `category` VARCHAR(30) after c_description;

select * from `components`;

select * from `notifications`;

create table `status_update` (
    `p_id` int(11) NOT NULL auto_increment primary key,
    `u_id` int(11) NOT NULL,
    `content`  text not null,
    `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `comments` (
  `comment_id` INT PRIMARY KEY AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `comment_content` TEXT NOT NULL,
  `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

alter table `comments`
    add column `like_count` int default 0;

create index idx_cmt_post_id on `posts` (`post_id`);
create index idx_cmt_user_id on `users` (`u_id`);

update the comments by one.
update `comments`
set like_count = like_count + 1;

select c.comment_content, p.content 
from comments c 
join status_update p on c.post_id = p.p_id





CREATE TABLE IF NOT EXISTS `videos` (
  `video_id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `uploader` INT NOT NULL, -- Assuming uploader is the user_id
  `description` TEXT,
  `likes` INT DEFAULT 0,
  `dislikes` INT DEFAULT 0,
  `upload_timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (`uploader`) REFERENCES `users` (`user_id`)
);

CREATE TABLE IF NOT EXISTS `subscriptions` (
  `subscription_id` INT PRIMARY KEY AUTO_INCREMENT,
  `subscriber_id` INT NOT NULL, -- User subscribing
  `channel_id` INT NOT NULL); -- User's subscribed channel
--   FOREIGN KEY (`subscriber_id`) REFERENCES `users` (`user_id`),
--   FOREIGN KEY (`channel_id`) REFERENCES `users` (`user_id`)

create table if not exists `video_posts`(
    `video_post_id` int(11) NOT NULL,
    `video_title` varchar(255) NOT NULL,
    `uploader` int(11) NOT NULL,
    `description` TEXT NOT NULL,
    `likes` int(11) NOT NULL,
    `dislikes` int(11) not null,
    `shares` int(11) NOT NULL
);

create table `video_subscribers` (
    `subscription_id` INT PRIMARY KEY AUTO_INCREMENT,
    `subscriber_id` INT NOT NULL,
    `channel_id` INT NOT NULL
);

create index idx_subscriber_id on `users` (`u_id`);
create index idx_channel_id on `users` (`u_id`);

SELECT * FROM video_posts;
create index idx_uploader on `users` (`u_id`);

select  shares from `video_posts`;
create index user_id on `users` (`u_id`);
create index idx_subscription_id on `subscriptions` (`subscription_id`);

select * from `videos`

SELECT * FROM `blocked_users`

select count(*) as total_subs from subscriptions

select count(*) as total from `status_update`

create table `notifications` (
    `notify_id` int(11) primary key AUTO_INCREMENT NOT NULL,
    `notified_by` int(11) not null,
    `type` varchar(255) not null,
    `notify_to`int(11) not null,
    `post_id` int(11) not null,
    `time` timestamp not null,
    `status` enum ('read', 'unread') default 'unread',
    `msg` text
);

create index idx_notify_id on `users` (`u_id`);

create table `posts` (
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

alter table `components`
    drop column `category`;

drop database component_manager;
drop database if exists `portfolio`;

drop database `code_base`;
drop database `codehub`;
drop database `dive_sea`;
drop database `phoenix_cds`;

alter table `tasks`
    drop column `assignee_id`;

select t.assignee from tasks t