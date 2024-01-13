import {createStore} from 'redux';

const initialState = {
    modpacks: [
        {
          id:1,
          name: 'ADG Volatile',
          imageUrl: 'Volatile1LogoV3.png',
          mcVer: '1.8.0/1.8.9',
          releaseDate: 'November 26, 2014',
          lastUpdated: 'September 17, 2023'
        },
        {
          id:2,
          name: 'ADG Volatile 2',
          imageUrl: 'Volatile2LogoV3.png',
          mcVer: '1.9.4/1.10.2',
          releaseDate: 'June 1, 2016',
          lastUpdated: 'September 17, 2023'
        },
        {
          id:3,
          name: 'ADG Volatile 3',
          imageUrl: 'Volatile3LogoV3.png',
          mcVer: '1.11.2',
          releaseDate: 'May 24, 2017',
          lastUpdated: 'March 25, 2018'
        },
        {
          id:4,
          name: 'ADG Presents Gamer City',
          imageUrl: 'GamerCityLogoV2.png',
          mcVer: '1.10.2',
          releaseDate: 'October 5, 2016',
          lastUpdated: 'September 17, 2023'
        },
        {
            id:5,
            name: 'ADG The Great Adventure',
            imageUrl: 'GreatAdventureLogoV2.png',
            mcVer: '1.7.10',
            releaseDate: 'January 20, 2018',
            lastUpdated: 'September 17, 2023'
        },
        {
            id:6,
            name: 'ADG Presents MCAdventureCity Season 3',
            imageUrl: 'MCASeason3-logo-v2.png',
            mcVer: '1.7.10',
            releaseDate: 'November 27, 2018',
            lastUpdated: 'November 27, 2018'
        },
        {
            id:7,
            name: 'ADG Omega 1',
            imageUrl: 'omega1.png',
            mcVer: '1.12.2',
            releaseDate: 'June 11, 2017',
            lastUpdated: 'January 12, 2024'
        },
        {
            id:8,
            name: 'ADG Omega 2',
            imageUrl: 'omega2.png',
            mcVer: '1.13.2',
            releaseDate: 'March 28, 2019',
            lastUpdated: 'September 17, 2023'
        },
        {
            id:9,
            name: 'ADG Omega 3',
            imageUrl: 'omega3.jpg',
            mcVer: '1.14.4',
            releaseDate: 'October 19, 2019',
            lastUpdated: 'January 9, 2024'
        },
        {
            id:10,
            name: 'ADG Omega 4',
            imageUrl: 'omega4.png',
            mcVer: '1.15.2',
            releaseDate: 'January 6, 2020',
            lastUpdated: 'September 27, 2023'
        },
        {
            id:11,
            name: 'ADG Omega 5',
            imageUrl: 'omega5.jpg',
            mcVer: '1.16.5',
            releaseDate: 'August 19, 2021',
            lastUpdated: 'January 12, 2024'
        },
        {
          id:12,
          name: 'ADG Omega 6',
          imageUrl: 'omega6.jpg',
          mcVer: '1.18.2',
          releaseDate: 'September 18, 2023',
          lastUpdated: 'January 12, 2024'
      },
        {
            id:13,
            name: 'ADG Omicron 1',
            imageUrl: 'Omicron1LogoV3.png',
            mcVer: '1.12.2',
            releaseDate: 'December 25, 2018',
            lastUpdated: 'January 3, 2024'
        },
        {
            id:14,
            name: 'ADG Omicron 1 Lighter Edition',
            imageUrl: 'Omicron1LighterLogoV2.png',
            mcVer: '1.12.2',
            releaseDate: 'November 20, 2019',
            lastUpdated: 'January 3, 2024'
        }
      ]
};

function reducer(state) {
  return state;
}

export const store = createStore(reducer, initialState);