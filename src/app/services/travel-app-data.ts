import { ArticlesSource1Type } from '../models/TravelAppData/articles-source1-type';
import { ArticlesSource2Type } from '../models/TravelAppData/articles-source2-type';
import { ArticlesSource3Type } from '../models/TravelAppData/articles-source3-type';
import { ArticlesSource4Type } from '../models/TravelAppData/articles-source4-type';
import { DestinationsType } from '../models/TravelAppData/destinations-type';
import { ImageSet1Type } from '../models/TravelAppData/image-set1-type';
import { ImageSet2Type } from '../models/TravelAppData/image-set2-type';
import { SelectedArticlesType } from '../models/TravelAppData/selected-articles-type';

export async function getSelectedArticles(): Promise<SelectedArticlesType[]> {
  const response = await fetch('../../static-data/travel-app-data-selected-articles-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getDestinations(): Promise<DestinationsType[]> {
  const response = await fetch('../../static-data/travel-app-data-destinations-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getImageSet1(): Promise<ImageSet1Type[]> {
  const response = await fetch('../../static-data/travel-app-data-image-set1-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getImageSet2(): Promise<ImageSet2Type[]> {
  const response = await fetch('../../static-data/travel-app-data-image-set2-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource1(): Promise<ArticlesSource1Type[]> {
  const response = await fetch('../../static-data/travel-app-data-articles-source1-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource2(): Promise<ArticlesSource2Type[]> {
  const response = await fetch('../../static-data/travel-app-data-articles-source2-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource3(): Promise<ArticlesSource3Type[]> {
  const response = await fetch('../../static-data/travel-app-data-articles-source3-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getArticlesSource4(): Promise<ArticlesSource4Type[]> {
  const response = await fetch('../../static-data/travel-app-data-articles-source4-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
