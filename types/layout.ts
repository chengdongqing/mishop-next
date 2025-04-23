import { LayoutHeroCategoryItemType } from '@/enums/layout';
import { Banner } from '@/types/banner';
import { Product } from '@/types/product';

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
  categoryId: number | null;
  parentCategoryId: number | null;
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
