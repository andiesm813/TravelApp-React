import { useCallback, useEffect, useState } from 'react';
import { ArticlesSource1Type } from '../models/TravelAppData/articles-source1-type';
import { ArticlesSource2Type } from '../models/TravelAppData/articles-source2-type';
import { ArticlesSource3Type } from '../models/TravelAppData/articles-source3-type';
import { ArticlesSource4Type } from '../models/TravelAppData/articles-source4-type';
import { DestinationsType } from '../models/TravelAppData/destinations-type';
import { getArticlesSource1, getArticlesSource2, getArticlesSource3, getArticlesSource4, getDestinations, getImageSet1, getImageSet2, getSelectedArticles } from '../services/travel-app-data';
import { ImageSet1Type } from '../models/TravelAppData/image-set1-type';
import { ImageSet2Type } from '../models/TravelAppData/image-set2-type';
import { SelectedArticlesType } from '../models/TravelAppData/selected-articles-type';

export const useGetSelectedArticles = () => {
  const [selectedArticles, setSelectedArticles] = useState<SelectedArticlesType[]>([]);

  const requestSelectedArticles = useCallback(() => {
    let ignore = false;
    getSelectedArticles()
      .then((data) => {
        if (!ignore) {
          setSelectedArticles(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestSelectedArticles();
  }, [requestSelectedArticles]);

  return { requestTravelAppDataSelectedArticles: requestSelectedArticles, travelAppDataSelectedArticles: selectedArticles, setTravelAppDataSelectedArticles: setSelectedArticles };
}

export const useGetDestinations = () => {
  const [destinations, setDestinations] = useState<DestinationsType[]>([]);

  const requestDestinations = useCallback(() => {
    let ignore = false;
    getDestinations()
      .then((data) => {
        if (!ignore) {
          setDestinations(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestDestinations();
  }, [requestDestinations]);

  return { requestTravelAppDataDestinations: requestDestinations, travelAppDataDestinations: destinations, setTravelAppDataDestinations: setDestinations };
}

export const useGetImageSet1 = () => {
  const [imageSet1, setImageSet1] = useState<ImageSet1Type[]>([]);

  const requestImageSet1 = useCallback(() => {
    let ignore = false;
    getImageSet1()
      .then((data) => {
        if (!ignore) {
          setImageSet1(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestImageSet1();
  }, [requestImageSet1]);

  return { requestTravelAppDataImageSet1: requestImageSet1, travelAppDataImageSet1: imageSet1, setTravelAppDataImageSet1: setImageSet1 };
}

export const useGetImageSet2 = () => {
  const [imageSet2, setImageSet2] = useState<ImageSet2Type[]>([]);

  const requestImageSet2 = useCallback(() => {
    let ignore = false;
    getImageSet2()
      .then((data) => {
        if (!ignore) {
          setImageSet2(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestImageSet2();
  }, [requestImageSet2]);

  return { requestTravelAppDataImageSet2: requestImageSet2, travelAppDataImageSet2: imageSet2, setTravelAppDataImageSet2: setImageSet2 };
}

export const useGetArticlesSource1 = () => {
  const [articlesSource1, setArticlesSource1] = useState<ArticlesSource1Type[]>([]);

  const requestArticlesSource1 = useCallback(() => {
    let ignore = false;
    getArticlesSource1()
      .then((data) => {
        if (!ignore) {
          setArticlesSource1(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource1();
  }, [requestArticlesSource1]);

  return { requestTravelAppDataArticlesSource1: requestArticlesSource1, travelAppDataArticlesSource1: articlesSource1, setTravelAppDataArticlesSource1: setArticlesSource1 };
}

export const useGetArticlesSource2 = () => {
  const [articlesSource2, setArticlesSource2] = useState<ArticlesSource2Type[]>([]);

  const requestArticlesSource2 = useCallback(() => {
    let ignore = false;
    getArticlesSource2()
      .then((data) => {
        if (!ignore) {
          setArticlesSource2(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource2();
  }, [requestArticlesSource2]);

  return { requestTravelAppDataArticlesSource2: requestArticlesSource2, travelAppDataArticlesSource2: articlesSource2, setTravelAppDataArticlesSource2: setArticlesSource2 };
}

export const useGetArticlesSource3 = () => {
  const [articlesSource3, setArticlesSource3] = useState<ArticlesSource3Type[]>([]);

  const requestArticlesSource3 = useCallback(() => {
    let ignore = false;
    getArticlesSource3()
      .then((data) => {
        if (!ignore) {
          setArticlesSource3(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource3();
  }, [requestArticlesSource3]);

  return { requestTravelAppDataArticlesSource3: requestArticlesSource3, travelAppDataArticlesSource3: articlesSource3, setTravelAppDataArticlesSource3: setArticlesSource3 };
}

export const useGetArticlesSource4 = () => {
  const [articlesSource4, setArticlesSource4] = useState<ArticlesSource4Type[]>([]);

  const requestArticlesSource4 = useCallback(() => {
    let ignore = false;
    getArticlesSource4()
      .then((data) => {
        if (!ignore) {
          setArticlesSource4(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestArticlesSource4();
  }, [requestArticlesSource4]);

  return { requestTravelAppDataArticlesSource4: requestArticlesSource4, travelAppDataArticlesSource4: articlesSource4, setTravelAppDataArticlesSource4: setArticlesSource4 };
}
