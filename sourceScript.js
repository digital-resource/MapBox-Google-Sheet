mapboxgl.accessToken =
  'pk.eyJ1IjoiaXNyYWVsdG9ycmVzIiwiYSI6ImNrZ3c5YmYzZDA4MHUyem4wYzc3bm1obXMifQ.iRvzqOTZ4XvuKovT8oz_7Q'
const map = new mapboxgl.Map({
  container: 'map',
  
  style: 'mapbox://styles/israeltorres/clid4suad002v01qpeper8peb',
  center: [-90.000,38.000],
  attributionControl: false,
  zoom: 4,
  cooperativeGestures: true,
})
const stores = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.3002, 36.58379],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Branson Stagecoach Campground',
        address: '5751 MO-165, Branson, MO 65616',
        city: 'Branson',
        country: 'United States',
        postalCode: '65616',
        state: 'MO',
        link: 'https://goo.gl/maps/mcZfML1t56jj14u59',
        website: 'https://bransonstagecoach.com/',
        property_type: 'RV Park/Campground',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-89.6481741, 43.7793827],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Deep Lake Campground',
        address: '348 Fish Lane, Oxford, WI 53952',
        city: 'Oxford',
        country: 'United States',
        postalCode: '53952',
        state: 'WI',
        link: 'https://goo.gl/maps/6Uef1jEdzyk9yWVL8',
        website: 'https://deeplakecampground.com/',
        property_type: 'RV Park/Campground',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-82.7178226, 29.0319569],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Eleanor Oaks RV Park',
        address: '41 Cattail Ln, Yankeetown, FL 34498',
        city: 'Yankeetown',
        country: 'United States',
        postalCode: '34498',
        state: 'FL',
        link: 'https://goo.gl/maps/AD4Nh1ySDtXoEeZn6',
        website: 'https://www.eleanoroaksrvpark.com/',
        property_type: 'RV Park/Campground',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-107.2936189, 39.5585562],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Glenwood Canyon Resort',
        address: '1308 County Road 129, Glenwood Springs, CO 81601',
        city: 'Glenwood Springs',
        country: 'United States',
        postalCode: '81601',
        state: 'CO',
        link: 'https://goo.gl/maps/yYA7hjvSv4LPuffK6',
        website: 'http://glenwoodcanyonresort.com/',
        property_type: 'RV Park/Campground',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-98.2556167, 40.8201953],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Grand Island KOA Journey',
        address: '904 South B Road, Doniphan, NE 68832',
        city: 'Doniphan',
        country: 'United States',
        postalCode: '68832',
        state: 'NE',
        link: 'https://goo.gl/maps/U2wjEncdGf4Tvm9w9',
        website: 'https://koa.com/campgrounds/grand-island/',
        property_type: 'RV Park/Campground',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-108.7360807, 39.1575739],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Monument RV Resort',
        address: '607 Highway 340, Fruita, Colorado 81521',
        city: 'Fruita',
        country: 'United States',
        postalCode: '81521',
        state: 'CO',
        link: 'https://goo.gl/maps/bSAV8y1zPkUCJdqN8',
        website: 'https://monumentrvresort.com/index.html',
        property_type: 'RV Park/Campground',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-89.6215939, 43.6654347],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Lake Mason Campground',
        address: '4035 1st Ln, Briggsville, WI 53920',
        city: 'Briggsville',
        country: 'United States',
        postalCode: '53920',
        state: 'WI',
        link: 'https://goo.gl/maps/K7QJe4Gm44yKCjLS7',
        website: '',
        property_type: 'RV Park/Campground',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-103.5329282, 44.4051798],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        name: 'Big Rig RV Park',
        address: '3333 Dolan Creek Road, Sturgis, SD 57785',
        city: 'Sturgis',
        country: 'United States',
        postalCode: '57785',
        state: 'SD',
        link: 'https://goo.gl/maps/npZqjYHVgWDcgnUM9',
        website: 'https://www.bigrigrvpark.com/',
        property_type: 'RV Park/Campground',
      },
    },
    // marker color 2 Self storage
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-88.4155378, 42.5609268],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Lake Geneva',
        address: 'N1989 Schaitel Road, Lake Geneva WI 53147',
        city: 'Lake Geneva',
        country: 'United States',
        postalCode: '53147',
        state: 'WI',
        link: 'https://goo.gl/maps/U82PdQTtRCC226Kw6',
        website: 'https://heartlandstoragegroup.com/locations/wi-lake-geneva/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2907819, 36.5632802],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Branson Bay Marina',
        address: '668 Emerald Point Dr, Hollister, MO 65672',
        city: 'Hollister',
        country: 'United States',
        postalCode: '65672',
        state: 'MO',
        link: 'https://goo.gl/maps/U82PdQTtRCC226Kw6',
        website: 'https://www.bransonbaymarina.com/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-87.6882016, 41.9352722],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Chicago Northside Storage - Lakeview',
        address: '2946 N. Western Avenue, Chicago, Illinois 60618',
        city: 'Chicago',
        country: 'United States',
        postalCode: '60618',
        state: 'IL',
        link: 'https://goo.gl/maps/j1orYJeuVuXUNGjUA',
        website: 'https://chicagonorthsidestorage.com/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-108.7340085, 39.1493929],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Fruita - Monument Storage',
        address: '615 S. Mesa, Fruita, CO 81521',
        city: 'Fruita',
        country: 'United States',
        postalCode: '81521',
        state: 'CO',
        link: 'https://goo.gl/maps/x1JET6nKeRoQZsfH7',
        website: 'https://heartlandstoragegroup.com/locations/fruita/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2149484, 36.6829091],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Branson (Bee Creek)',
        address: '1385 Bee Creek Rd, Branson, Missouri 65616',
        city: 'Branson',
        country: 'United States',
        postalCode: '65616',
        state: 'MO',
        link: 'https://goo.gl/maps/STp4jDTDRgARLTRL9',
        website:
          'https://heartlandstoragegroup.com/locations/mo-branson-bee-creek/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.0961099, 36.6683507],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Branson (Forsyth)',
        address: '10772 Missouri 76, Forsyth, Missouri 65653',
        city: 'Forsyth',
        country: 'United States',
        postalCode: '65653',
        state: 'MO',
        link: 'https://goo.gl/maps/MhguyFQp4iy6aegt5',
        website:
          'https://heartlandstoragegroup.com/locations/mo-branson-forsyth/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.1675552, 36.6243508],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Branson (Kirbyville)',
        address: '4081 E State Highway 76, Kirbyville, Missouri 65679',
        city: 'Kirbyville',
        country: 'United States',
        postalCode: '65679',
        state: 'MO',
        link: 'https://goo.gl/maps/FyDwqttxxWDXJ1kK6',
        website:
          'https://heartlandstoragegroup.com/locations/mo-branson-kirbyville/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.1708643, 36.7124103],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Branson (Merriam Woods)',
        address: '4329 Highway 176, Merriam Woods, Missouri 65740',
        city: 'Merriam Woods',
        country: 'United States',
        postalCode: '65740',
        state: 'MO',
        link: 'https://goo.gl/maps/8e95vZ4pMLQESBDX6',
        website:
          'https://heartlandstoragegroup.com/locations/mo-branson-merriam-woods/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.1803707, 36.6538775],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Branson (T Hwy)',
        address: '1174 State Highway T, Branson, Missouri 65616',
        city: 'Branson',
        country: 'United States',
        postalCode: '65616',
        state: 'MO',
        link: 'https://goo.gl/maps/yeoyXUq6ArC4LJu79',
        website:
          'https://heartlandstoragegroup.com/locations/mo-branson-t-highway/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.3751234, 36.7102575],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Branson West',
        address: '19199 Missouri 413, Reeds Spring, Missouri 65737',
        city: 'Reeds Spring',
        country: 'United States',
        postalCode: '65737',
        state: 'MO',
        link: 'https://goo.gl/maps/cAt48mpFPyKME8CF8',
        website: 'https://heartlandstoragegroup.com/locations/mo-branson-west/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-87.2398819, 41.5343722],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Hobart',
        address: '1710 E. State Road 130, Hobart, Indiana 46342',
        city: 'Hobart',
        country: 'United States',
        postalCode: '46342',
        state: 'IN',
        link: 'https://goo.gl/maps/wBmHcm47r1Z5kMhV7',
        website: 'https://heartlandstoragegroup.com/locations/in-hobart/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-87.2398819, 41.5343722],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Klinger Lake',
        address: '69004 Klinger Lake Rd, Sturgis, MI 49091',
        city: 'Sturgis',
        country: 'United States',
        postalCode: '49091',
        state: 'MI',
        link: 'https://goo.gl/maps/wBmHcm47r1Z5kMhV7',
        website: 'https://heartlandstoragegroup.com/locations/klinger-lake/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-86.8783693, 40.4549848],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Lafayette',
        address: '2750 N. 9th Street, Lafayette, Indiana 47904',
        city: 'Lafayette',
        country: 'United States',
        postalCode: '47904',
        state: 'IN',
        link: 'https://goo.gl/maps/iZKnXhkg8KdG6V2aA',
        website: 'https://heartlandstoragegroup.com/locations/in-lafayette/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-87.3254691, 41.5086098],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Merrillville',
        address: '850 E. 61st Street, Merrillville, Indiana 46410',
        city: 'Merrillville',
        country: 'United States',
        postalCode: '46410',
        state: 'IN',
        link: 'https://goo.gl/maps/NsrSQVVgpL9NieV2A',
        website: 'https://heartlandstoragegroup.com/locations/in-merrillville/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-86.8383877, 41.6877834],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Michigan City',
        address: '7176 U.S. 20, Michigan City, Indiana 46360',
        city: 'Michigan City',
        country: 'United States',
        postalCode: '46360',
        state: 'IN',
        link: 'https://goo.gl/maps/qrYddxksdT7jtHNy6',
        website:
          'https://heartlandstoragegroup.com/locations/in-michigan-city/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2135024, 37.0048925],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark A',
        address: '1608 S. 11th Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/iR2CZkrYJM6Dp2QGA',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-a-s-11th-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2063283, 37.0100762],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark B',
        address: '1208 South 3rd Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/N6KPmDfidhQjFrDn7',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-b-3rd-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2328514, 37.078166],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark C',
        address: '6290 N. 23rd Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/zqmsjwzseq6ATamh7',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-n-23rd-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.20554, 37.023738],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark D',
        address: '500 N. 2nd Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/v6vwicZRGXS9m71AA',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-d-n-2nd-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2306313, 37.0519352],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark E',
        address: '3445 N. 21st Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/8kPAeszEWXSai1HC9',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-e-21st-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2306313, 37.0519352],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark F',
        address: '720 E South Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/2yFn4hM2jtDKRy9y5',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-f-e-south-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2123185, 37.0244848],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark G',
        address: '404 N. 10th Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/v3oGFprZB6Zs11wQ8',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-n-10th-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.2264186, 37.0329628],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark H',
        address: '1724 W. Clay Street, Ozark, Missouri 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://goo.gl/maps/LrmtPmAS3G7P91m6A',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-n-10th-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-85.4658315, 41.7960285],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Sturgis A',
        address: '25040 U.S. Highway 12, Sturgis, Michigan 49091',
        city: 'Sturgis',
        country: 'United States',
        postalCode: '49091',
        state: 'MI',
        link: 'https://goo.gl/maps/Qf21hoK27MEuK2Vp7',
        website:
          'https://heartlandstoragegroup.com/locations/mo-ozark-n-10th-street/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-85.4464222, 41.7990743],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Sturgis B',
        address: '68769 White School Road, Sturgis, Michigan 49091',
        city: 'Sturgis',
        country: 'United States',
        postalCode: '49091',
        state: 'MI',
        link: 'https://goo.gl/maps/gL9VK9Ft2fsxAgEw9',
        website: 'https://heartlandstoragegroup.com/locations/mi-sturgis-b/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.4034372, 38.2462598],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Warsaw',
        address: '30559 Shawnee Bend Rd, Warsaw, Missouri 65355',
        city: 'Warsaw',
        country: 'United States',
        postalCode: '65355',
        state: 'MO',
        link: 'https://goo.gl/maps/7ufk3BGjrEiBbkua6',
        website: 'https://heartlandstoragegroup.com/locations/mo-warsaw/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-101.7292451, 41.2579185],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Lake Mac Storage',
        address: '299 NE-92 Lemoyne, NE, 69146',
        city: 'Lemoyne',
        country: 'United States',
        postalCode: '69146',
        state: 'NE',
        link: 'https://goo.gl/maps/a4CFo68qvDdEgNze6',
        website: 'https://www.lakemacstorage.com/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.8346002, 37.145154],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Lawrence County (A) - Mt Vernon',
        address: '12315 State Hwy OO, Mt. Vernon, Missouri 65712',
        city: 'Mt. Vernon',
        country: 'United States',
        postalCode: '65712',
        state: 'MO',
        link: 'https://goo.gl/maps/u5g35621y82cTXqQ7',
        website:
          'https://heartlandstoragegroup.com/locations/mo-lawrence-county-a/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.7881868, 37.0727048],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Lawrence County (R) - Mt Vernon',
        address: '14984 Co Rd 2140, Mt Vernon, Missouri 65712',
        city: 'Mt. Vernon',
        country: 'United States',
        postalCode: '65712',
        state: 'MO',
        link: 'https://goo.gl/maps/dMxWwqqUGbAAhjRz8',
        website:
          'https://heartlandstoragegroup.com/locations/mo-lawrence-county-r/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.7735169, 36.9473522],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Lawrence County (T) - Verona',
        address: '22529 Lawrence 1160 Verona, Missouri 65769',
        city: 'Verona',
        country: 'United States',
        postalCode: '65769',
        state: 'MO',
        link: 'https://goo.gl/maps/p9fKfuAikWq8QFPe9',
        website:
          'https://heartlandstoragegroup.com/locations/mo-lawrence-county-t/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.845413, 37.218715],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Lockwood Miller (E) - Miller',
        address: '509 N. Hwy 39, Miller, Missouri 65707',
        city: 'Miller',
        country: 'United States',
        postalCode: '65707',
        state: 'MO',
        link: 'https://goo.gl/maps/XWNzK6RQTjyos4JH9',
        website:
          'https://heartlandstoragegroup.com/locations/mo-lawrence-county-t/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.951861, 37.389952],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Lockwood Miller (H) - Lockwood',
        address: '208 E 4th St, Lockwood, Missouri 65682',
        city: 'Lockwood',
        country: 'United States',
        postalCode: '65682',
        state: 'MO',
        link: 'https://goo.gl/maps/9pa97uNnQmnBj7zi8',
        website:
          'https://heartlandstoragegroup.com/locations/mo-lockwood-miller-h/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-75.9601987, 41.236002],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Plymouth Storage',
        address: '627 W. Main Street, Plymouth, Pennsylvania 18651',
        city: 'Plymouth',
        country: 'United States',
        postalCode: '18651',
        state: 'PA',
        link: 'https://goo.gl/maps/MBDiGw5FXb89XJYq6',
        website: 'https://heartlandstoragegroup.com/locations/pa-plymouth/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.6048461, 43.1632189],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Rochester Storage',
        address: '444 Central Avenue Suite A, Rochester, New York 14605',
        city: 'Rochester',
        country: 'United States',
        postalCode: '14605',
        state: 'NY',
        link: 'https://goo.gl/maps/4hXc6rKMvY4Dnfzm8',
        website: 'https://heartlandstoragegroup.com/locations/ny-rochester/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-96.5679544, 33.0604876],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Wylie Boat & RV Storage',
        address: '3855 Osage Ln, Wylie, TX 75098',
        city: 'Wylie',
        country: 'United States',
        postalCode: '75098',
        state: 'TX',
        link: 'https://goo.gl/maps/qn6H2a95PqAybYbD6',
        website:
          'https://www.proselfstorage.com/3855-osage-lane-wylie-tx-75098',
        property_type: 'Self Storage',
      },
    },
  ],
}

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl())
map.on('style.load', function () {
  // Add markers to the map.
  for (const marker of stores.features) {
    // Create a DOM element for each marker.
    const el = document.createElement('div')
    const pin = marker.properties.markerImage
    el.className = 'marker'
    el.style.backgroundImage = `url(${pin})`
    // Add markers to the map.
    // new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map)
    el.addEventListener('click', (e) => {
      flyToStore(marker)
      createPopUp(marker)
      e.stopPropagation()
    })
  }
  map.loadImage(
    'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
    function (error, image1) {
      if (error) throw error
      map.loadImage(
        'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
        function (error, image2) {
          if (error) throw error
          map.addImage('image1', image1)
          map.addImage('image2', image2)
          
            map.addLayer({
              id: 'store-locations',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: stores,
              },
              layout: {
                'icon-image': [
                  'match',
                  ['get', 'property_type'],
                  'Self Storage',
                  'image1',
                  'RV Park/Campground',
                  'image2',
                  'default-image',
                ],
                'icon-size': 0.2,
              },
            });
       
          // map.addLayer({
          //   id: 'store-locations',
          //   type: 'symbol',
          //   source: {
          //     type: 'geojson',
          //     data: stores,
          //   },
          //   layout: {
          //     'icon-image': [
          //       'match',
          //       ['get', 'property_type'],
          //       'Self Storage',
          //       'image1',
          //       'RV Park/Campground',
          //       'image2',
          //       'default-image',
          //     ],
          //     'icon-size': 0.2,
          //   },
          // })
        
        }
      )
    }
  )
})

const toggleSidebarButton = document.getElementById('toggleSidebarButton')
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.toggle('show-sidebar')
}
toggleSidebarButton.addEventListener('click', toggleSidebar)
const propertyTypeFilter = document.getElementById('propertyTypeFilter')
propertyTypeFilter.addEventListener('change', updateMapVisibility)

function updateMapVisibility() {
  const checkboxes = propertyTypeFilter.getElementsByTagName('input')
  const selectedPropertyTypes = []

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      selectedPropertyTypes.push(checkbox.value)
    }
  }

  map.setFilter('store-locations', [
    'in',
    'property_type',
    ...selectedPropertyTypes,
  ])
}
map.on('click', 'store-locations', function (e) {
  const marker = e.features[0]
  flyToStore(marker)
  createPopUp(marker)
  const activeItem = document.getElementsByClassName('active')

  if (activeItem[0]) {
    activeItem[0].classList.remove('active')
  }
})
map.on('mouseenter', 'store-locations', function () {
  map.getCanvas().style.cursor = 'pointer'
})
map.on('mouseleave', 'places', function () {
  map.getCanvas().style.cursor = ''
})

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 6,
  })
}

function createPopUp(e) {
  let popUps = document.getElementsByClassName('mapboxgl-popup')
  if (popUps[0]) popUps[0].remove()
  new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat(e.geometry.coordinates)
    .setHTML(
      '<h3 class="mapboxgl-popup-content">' +
        e.properties.name +
        '</h3>' +
        '<h4 class="mapboxgl-popup-content">' +
        '<b>' +
        'Address: ' +
        '</b>' +
        e.properties.address +
        '<h4 class="mapboxgl-popup-content">' +
        '<a target="_blank" style="color:#ee9700!important; text-decoration:none;" href=' +
        e.properties.website +
        '>' +
        'Visit Website' +
        '</a>' +
        '</h4>' +
        '<h4 class="mapboxgl-popup-content">' +
        '<b>' +
        'Type Property:' +
        '</b>' +
        '<br/>' +
        e.properties.property_type +
        '</h4>' +
        '<h4 class="mapboxgl-popup-content">' +
        '<a target="_blank" style="color:#ee9700!important; text-decoration:none;" href=' +
        e.properties.link +
        '>' +
        'View large map' +
        '</a>' +
        '</h4>'
    )
    .addTo(map)
}


// const transformRequest = (url, resourceType) => {
//   const isMapboxRequest =
//     url.slice(8, 22) === 'api.mapbox.com' ||
//     url.slice(10, 26) === 'tiles.mapbox.com'
//   return {
//     url: isMapboxRequest ? url.replace('?', '?pluginName=sheetMapper&') : url,
//   }
// }
// mapboxgl.accessToken =
//   'pk.eyJ1IjoiaXNyYWVsdG9ycmVzIiwiYSI6ImNrZ3c5YmYzZDA4MHUyem4wYzc3bm1obXMifQ.iRvzqOTZ4XvuKovT8oz_7Q'
// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/israeltorres/clid4suad002v01qpeper8peb',
//   center: [-97.56988, 37.529768],
//   attributionControl: false,
//   zoom: 4,
//   cooperativeGestures: true,
//   transformRequest: transformRequest,
// })
// const sheetGeoid = '1V8Nuo8_H88fsiOLZDZq2Ga4VEamdBfZW4i8UrEBmEfA'
// document.addEventListener('DOMContentLoaded', function () {
//   fetch(
//     `https://docs.google.com/spreadsheets/d/${sheetGeoid}/gviz/tq?tqx=out:csv&sheet=MapData`
//   )
//     .then((response) => response.text())
//     .then((csvData) => {
//       makeGeoJSON(csvData)
//     })
//     .catch((error) => console.log(error))
//   function makeGeoJSON(csvData) {
//     csv2geojson.csv2geojson(
//       csvData,
//       {
//         latfield: 'latitude',
//         lonfield: 'longitude',
//         delimiter: ',',
//       },
//       // Add zoom and rotation controls to the map.
//       function (err, data) {
//         map.addControl(new mapboxgl.NavigationControl())
//         /* Assign a unique ID to each store */
//         data.features.forEach(function (store, i) {
//           store.properties.id = i
//         })

//         let image =
//           'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5536ea1606e02798418_pin_6.png'
//         map.on('load', function () {
//           //---------
//           map.loadImage(image, (error, image) => {
//             if (error) throw error
//             // add image to the active style and make it SDF-enabled
//             map.addImage('icon-marker', image, { sdf: true })
//             map.addSource('points', {
//               type: 'geojson',
//               data: data,
//             })
//             //---------
//             map.addLayer({
//               id: 'csvData',
//               type: 'circle',
//               source: {
//                 type: 'geojson',
//                 data: data,
//               },
//               paint: {
//                 'circle-radius': {
//                   base: 2,
//                   stops: [
//                     [10, 10],
//                     [22, 180],
//                   ],
//                 },
//                 'circle-color': [
//                   'match',
//                   ['get', 'property_type'],
//                   'Self Storage',
//                   '#1f88d0',
//                   'RV Park/Campground',
//                   '#fa5252',
//                   '#ffffff',
//                 ],
//               },
//             })
//           })

//         //show location sidebar
//         const toggleSidebarButton = document.getElementById(
//           'toggleSidebarButton'
//         )
//         function toggleSidebar() {
//           const sidebar = document.querySelector('.sidebar')
//           sidebar.classList.toggle('show-sidebar')
//         }
//         toggleSidebarButton.addEventListener('click', toggleSidebar)
//         const propertyTypeFilter = document.getElementById('propertyTypeFilter')
//         propertyTypeFilter.addEventListener('change', updateMapVisibility)

//         function updateMapVisibility() {
//           const checkboxes = propertyTypeFilter.getElementsByTagName('input')
//           const selectedPropertyTypes = []

//           for (const checkbox of checkboxes) {
//             if (checkbox.checked) {
//               selectedPropertyTypes.push(checkbox.value)
//             }
//           }          
         
//           map.setFilter('csvData', [
//             'in',
//             'property_type',
//             ...selectedPropertyTypes,
//           ])
//         }
//           map.on('click', 'csvData', function (e) {
//             const marker = e.features[0]
//             flyToStore(marker)
//             /* Close all other popups and display popup for clicked store */
//             createPopUp(marker)
//             /* Highlight listing in sidebar */
//             const activeItem = document.getElementsByClassName('active')

//             if (activeItem[0]) {
//               activeItem[0].classList.remove('active')
//             }
//           })
//           //Change the cursor to a pointer when the mouse is over the places layer.
//           map.on('mouseenter', 'csvData', function () {
//             map.getCanvas().style.cursor = 'pointer'
//           })
//           // Change it back to a pointer when it leaves.
//           map.on('mouseleave', 'places', function () {
//             map.getCanvas().style.cursor = ''
//           })
//         })
       
//         function flyToStore(currentFeature) {
//           map.flyTo({
//             center: currentFeature.geometry.coordinates,
//             zoom: 5,
//           })
//         }

//         function createPopUp(e) {
//           let coordinates = e.geometry.coordinates.slice()
//           let description =
//             `<h3 class="mapboxgl-popup-content">` +
//             e.properties.property_name +
//             `</h3>` +
//             `<h4 class="mapboxgl-popup-content">` +
//             `<b>` +
//             `Address: ` +
//             `</b>` +
//             e.properties.address +
//             `<h4 class="mapboxgl-popup-content">` +
//             `<a target='_blank' style="color:#ee9700!important; text-decoration:none;" href=` +
//             e.properties.website +
//             `>` +
//             `Visit Website` +
//             `</a>` +
//             `</h4>` +
//             `<h4 class="mapboxgl-popup-content">` +
//             `<b>` +
//             `Type Property:` +
//             `</b>` +
//             `<br/>` +
//             e.properties.property_type +
//             `</h4>` +
//             `<h4 class="mapboxgl-popup-content">` +
//             `<a target='_blank' style="color:#ee9700!important; text-decoration:none;" href=` +
//             e.properties.link +
//             `>` +
//             `View large map` +
//             `</a>` +
//             `</h4>`
//           const popUps = document.getElementsByClassName('mapboxgl-popup')
//           if (popUps[0]) popUps[0].remove()
//           new mapboxgl.Popup()
//             .setLngLat(coordinates)
//             .setHTML(description)
//             .addTo(map)
//         }
//       }
//     )
//   }
// })