import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SocialRoutingModule } from './social-routing.module';
import { FormsModule } from '@angular/forms';
import { NgChatComponent } from './ng-chat/ng-chat.component';
import { HomeComponent } from './home/home.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { NgNewsfeedComponent } from './ng-newsfeed/ng-newsfeed.component';


import { VideoPostComponent } from './video-post/video-post.component';
import { ComponentPostComponent } from './component-post/component-post.component';
import { StatusUpdateComponent } from './status-update/status-update.component';
import { RelationshipComponent } from './relationship/relationship.component';


@NgModule({
  declarations: [
    NgChatComponent,
    HomeComponent,
    FriendsListComponent,
    FollowersListComponent,
    NgNewsfeedComponent,
    VideoPostComponent,
    ComponentPostComponent,
    StatusUpdateComponent,
    RelationshipComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SocialModule { }
