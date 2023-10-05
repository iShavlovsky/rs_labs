// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { User } from '../../../../common/schemas-to-ts/User';
import { User_Plain } from '../../../../common/schemas-to-ts/User';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Article {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title: string;
    description: string;
    cover: { data: Media };
    timeRead: number;
    writtenBy: string;
    date: Date;
    body: any;
    users_permissions_user?: { data: User };
    slug?: any;
  };
}
export interface Article_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  description: string;
  cover: Media;
  timeRead: number;
  writtenBy: string;
  date: Date;
  body: any;
  users_permissions_user?: User_Plain;
  slug?: any;
}

export interface Article_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  description: string;
  cover: number;
  timeRead: number;
  writtenBy: string;
  date: Date;
  body: any;
  users_permissions_user?: number;
  slug?: any;
}

export interface Article_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  description: string;
  cover: AdminPanelRelationPropertyModification<Media>;
  timeRead: number;
  writtenBy: string;
  date: Date;
  body: any;
  users_permissions_user?: AdminPanelRelationPropertyModification<User_Plain>;
  slug?: any;
}
