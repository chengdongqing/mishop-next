import { LayoutHeroCategoryItemType } from '@/app/enums';
import { Banner } from '@/app/types/banner';
import { Product } from '@/app/types/product';

export interface LayoutHeaderNav {
  id: number;
  name: string;
  href?: string;
  children?: Product[];
}

export interface LayoutHeroCategory {
  id: number;
  name: string;
  children: LayoutHeroCategoryItem[];
}

export interface LayoutHeroCategoryItem {
  id: number;
  associatedId: number;
  name: string;
  pictureUrl: string;
  type: LayoutHeroCategoryItemType;
}

export interface LayoutBrick {
  id: number;
  name: string;
  promotions: Banner[];
  children: LayoutBrickTab[];
}

export interface LayoutBrickTab {
  id: number;
  name: string;
  keyword: string;
  children: Product[];
}
