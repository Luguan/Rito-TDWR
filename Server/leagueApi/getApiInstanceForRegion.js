const regions = {
  br: {
    host: 'br1.api.riotgames.com',
  },
  eune: {
    host: 'eun1.api.riotgames.com',
  },
  euw: {
    host: 'euw1.api.riotgames.com',
  },
  jp: {
    host: 'jp1.api.riotgames.com',
  },
  kr: {
    host: 'kr.api.riotgames.com',
  },
  lan: {
    host: 'la1.api.riotgames.com',
  },
  las: {
    host: 'la2.api.riotgames.com',
  },
  na: {
    host: 'na1.api.riotgames.com',
  },
  oce: {
    host: 'oc1.api.riotgames.com',
  },
  tr: {
    host: 'tr1.api.riotgames.com',
  },
  ru: {
    host: 'ru.api.riotgames.com',
  },
  pbe: {
    host: 'pbe1.api.riotgames.com',
  },
};

const getApiInstanceForRegion = regionCode => {
  const regionConfig = regions[regionCode];

  //TODO
  class API {}
  new API(regionConfig);
};

module.exports = getApiInstanceForRegion;
