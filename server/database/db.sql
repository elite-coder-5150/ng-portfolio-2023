/* 2023-10-31 07:32:52 [9 ms] */ 
use `portfolio_2023`;


/* 2023-10-31 07:52:12 [17 ms] */ 
drop table follow_system;
/* 2023-10-31 07:52:29 [30 ms] */ 
create table follow_system (
    follow_id int(11) AUTO_INCREMENT primary key,
    followee varchar(255),
    follower varchar(255),
    follow_date datetime default CURRENT_TIMESTAMP
);
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



alter table online_users
    add column ststus enum('online', 'offline') NOT NULL;

alter table online_users
    add column last_active TIMESTAMP;/* 2023-11-01 06:49:20 [56 ms] */ 
alter table online_users
    add column last_active TIMESTAMP;

