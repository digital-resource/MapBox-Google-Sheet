console.log = function () {}
console.error = function () {}
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this)
    }
  }
}
mapboxgl.accessToken =
  'pk.eyJ1IjoiaXNyYWVsdG9ycmVzIiwiYSI6ImNrZ3c5YmYzZDA4MHUyem4wYzc3bm1obXMifQ.iRvzqOTZ4XvuKovT8oz_7Q'

const map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/israeltorres/clid4suad002v01qpeper8peb',
  center: [-90.74825, 38.01385],
  attributionControl: false,
  zoom: 3,
  cooperativeGestures: true,
})

const stores = {
  type: 'FeatureCollection',
  features: [
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
        website: 'https://www.monumentrvresort.com/',
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
        name: 'Black Hills Vista',
        address: '3333 Dolan Creek Road, Sturgis, SD 57785',
        city: 'Sturgis',
        country: 'United States',
        postalCode: '57785',
        state: 'SD',
        link: 'https://goo.gl/maps/npZqjYHVgWDcgnUM9',
        website: 'https://blackhillsvista.com/',
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
        website: 'https://heartlandstorage.com/locations/wi-lake-geneva/',
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
        website: 'https://www.gostoreit.com/locations/illinois/chicago/chicago-northside-storage-lakeview/',
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
        name: 'Heartland Storage - Fruita',
        address: '615 S. Mesa, Fruita, CO 81521',
        city: 'Fruita',
        country: 'United States',
        postalCode: '81521',
        state: 'CO',
        link: 'https://goo.gl/maps/x1JET6nKeRoQZsfH7',
        website: 'https://heartlandstorage.com/locations/co-fruita/',
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
        website: 'https://www.gostoreit.com/locations/missouri/branson/heartland-storage-bee-creek/',
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
        website: 'https://heartlandstorage.com/locations/mo-branson-forsyth/',
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
          'https://www.gostoreit.com/locations/missouri/kirbyville/heartland-storage-kirbyville/',
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
          'https://www.gostoreit.com/locations/missouri/merriam-woods/heartland-storage-merriam-woods/',
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
        website: 'https://www.gostoreit.com/locations/missouri/branson/heartland-storage-t-highway/',
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
        website: 'https://www.gostoreit.com/locations/missouri/branson/heartland-storage-branson-west/',
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
        website: 'https://heartlandstorage.com/locations/in-hobart/',
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
        website: 'https://heartlandstorage.com/locations/klinger-lake/',
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
        website: 'https://heartlandstorage.com/locations/in-lafayette/',
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
        website: 'https://heartlandstorage.com/locations/in-merrillville/',
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
        website: 'https://heartlandstorage.com/locations/in-michigan-city/',
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
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-s-11th-street/',
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
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-s-3rd-street/',
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
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-ozark/',
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
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-n-2nd-street/',
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
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-n-21st-street/',
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
          'https://heartlandstorage.com/locations/mo-ozark-f-e-south-street/',
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
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-n-10th-street/',
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
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-w-clay-street/',
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
          'https://www.gostoreit.com/locations/michigan/sturgis/heartland-storage-sturgis-us-12/',
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
        website: 'https://www.gostoreit.com/locations/michigan/sturgis/heartland-storage-white-school-rd/',
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
        website: 'https://www.gostoreit.com/locations/missouri/warsaw/heartland-storage-warsaw/',
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
        website: 'https://www.gostoreit.com/locations/nebraska/lemoyne/lake-mac-storage/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-100.73952144248092, 41.125181821012596],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage – Philip Ave',
        address: '2020 E Philip Ave, North Platte, NE 69101',
        city: 'North Platte',
        country: 'United States',
        postalCode: '69101',
        state: 'NE',
        link: 'https://maps.app.goo.gl/Fqpmn3kqSBc8ySjb8',
        website: 'https://www.gostoreit.com/locations/nebraska/north-platte/heartland-self-storage-philip-ave/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-100.76697576229225, 41.10691357276792],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage – S Willow St',
        address: '3109 S Willow St, North Platte, NE 69101',
        city: 'North Platte',
        country: 'United States',
        postalCode: '69101',
        state: 'NE',
        link: 'https://maps.app.goo.gl/s5sHbXep6xq7uPXV9',
        website: 'https://www.gostoreit.com/locations/nebraska/north-platte/heartland-self-storage-s-willow-st/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-100.81057240337752, 41.140553929162216],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage – Lakeview',
        address: '214 N Lakeview Rd, North Platte, NE 69101',
        city: 'North Platte',
        country: 'United States',
        postalCode: '69101',
        state: 'NE',
        link: 'https://maps.app.goo.gl/cNtWua3qMLYvF7Cm7',
        website: 'https://www.gostoreit.com/locations/nebraska/north-platte/heartland-self-storage-lakeview/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-100.79069661685014, 41.14929853558155],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage – Rodeo Rd',
        address: '2505 W Rodeo Rd Ave, North Platte, NE 69101',
        city: 'North Platte',
        country: 'United States',
        postalCode: '69101',
        state: 'NE',
        link: 'https://maps.app.goo.gl/TdYj3YsqT7A8VVRr5',
        website: 'https://www.gostoreit.com/locations/nebraska/north-platte/heartland-self-storage-rodeo-rd/',
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
        name: 'Heartland Storage - Mt Vernon (North)',
        address: '12315 State Hwy OO, Mt. Vernon, Missouri 65712',
        city: 'Mt. Vernon',
        country: 'United States',
        postalCode: '65712',
        state: 'MO',
        link: 'https://goo.gl/maps/u5g35621y82cTXqQ7',
        website: 'https://www.gostoreit.com/locations/missouri/mt-vernon/heartland-storage-lawrence-state-street/',
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
        name: 'Heartland Storage - Mt Vernon (South)',
        address: '14984 Co Rd 2140, Mt Vernon, Missouri 65712',
        city: 'Mt. Vernon',
        country: 'United States',
        postalCode: '65712',
        state: 'MO',
        link: 'https://goo.gl/maps/dMxWwqqUGbAAhjRz8',
        website: 'https://www.gostoreit.com/locations/missouri/mt-vernon/heartland-storage-mt-vernon/',
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
        name: 'Heartland Storage - Verona',
        address: '22529 Lawrence 1160 Verona, Missouri 65769',
        city: 'Verona',
        country: 'United States',
        postalCode: '65769',
        state: 'MO',
        link: 'https://goo.gl/maps/p9fKfuAikWq8QFPe9',
        website: 'https://www.gostoreit.com/locations/missouri/verona/heartland-storage-lawrence/',
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
        website: 'https://heartlandstorage.com/locations/mo-lawrence-county-t/',
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
        name: 'Lockwood Miller - Lockwood',
        address: '208 E 4th St, Lockwood, Missouri 65682',
        city: 'Lockwood',
        country: 'United States',
        postalCode: '65682',
        state: 'MO',
        link: 'https://goo.gl/maps/9pa97uNnQmnBj7zi8',
        website: 'https://www.gostoreit.com/locations/missouri/lockwood/heartland-storage-4th-street/',
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
        website: 'https://www.gostoreit.com/locations/new-york/rochester/rochester-storage/',
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
        website: 'https://www.gostoreit.com/locations/new-york/rochester/rochester-storage/',
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
          'https://www.wylieboatandrvstorage.com/',
        property_type: 'Self Storage',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-85.52674568290323, 41.794903938041855],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Klinger Lake',
        address: '69004 Klinger Lake Road, Sturgis, Michigan 49091',
        city: 'Sturgis',
        country: 'United States',
        postalCode: '49091',
        state: 'MI',
        link: 'https://maps.app.goo.gl/N7UjGNeAgsiFzUTx7',
        website:
          'https://www.gostoreit.com/locations/michigan/sturgis/heartland-storage-klinger-lake/',
        property_type: 'Self Storage',
      },
    },{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-86.83854221616596, 41.68932450182665],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Michigan City',
        address: '7176 W. U.S. Highway 20, Michigan City, IN 46360',
        city: 'Michigan City',
        country: 'United States',
        postalCode: '46360',
        state: 'IN',
        link: 'https://maps.app.goo.gl/V6qVjRYgE8fmhDZf6',
        website:
          'https://www.heartlandstorage.com/locations/in-michigan-city',
        property_type: 'Self Storage',
      },
    },{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.09612261372598, 36.668539989902],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Branson (Forsyth)',
        address: '10772 State Highway 76 , Forsyth, MO 65653',
        city: 'Forsyth',
        country: 'United States',
        postalCode: '65653',
        state: 'MO',
        link: 'https://maps.app.goo.gl/Q77FJUoBx5KVRX1U7',
        website:
          'https://www.gostoreit.com/locations/missouri/forsyth/heartland-storage-forsyth/',
        property_type: 'Self Storage',
      },
    },{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.20035268858886, 37.00377951260892],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Ozark F',
        address: '720 E. South Street, Ozark, MO 65721',
        city: 'Ozark',
        country: 'United States',
        postalCode: '65721',
        state: 'MO',
        link: 'https://maps.app.goo.gl/effUY9yF9aYadwbw5',
        website:
          'https://www.gostoreit.com/locations/missouri/ozark/heartland-storage-e-south-st/',
        property_type: 'Self Storage',
      },
    },{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-93.28699333092871, 36.560921296266194],
      },
      properties: {
        markerImage:
          'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',
        name: 'Heartland Storage - Clevenger Cove',
        address: '190 Poolside Pass, Hollister, Missouri 65672',
        city: 'Hollister',
        country: 'United States',
        postalCode: '65672',
        state: 'MO',
        link: 'https://maps.app.goo.gl/YA5Dv4JTZiYPpXQD7',
        website:
          'https://www.gostoreit.com/locations/missouri/hollister/heartland-storage-clevenger-cove/',
        property_type: 'Self Storage',
      },
    },
  ],
}
const propertyTypeFilterSelect = document.getElementById('propertyTypeFilter')

function updateMarkers(selectedType) {
  const filteredFeatures = stores.features.filter((feature) => {
    if (selectedType === 'All') {
      return true
    }
    return feature.properties.property_type === selectedType
  })

  map.getSource('locations').setData({
    type: 'FeatureCollection',
    features: filteredFeatures,
  })
}

propertyTypeFilterSelect.addEventListener('change', (event) => {
  const selectedType = event.target.value
  updateMarkers(selectedType)
})

const toggleSidebarButton = document.getElementById('toggleSidebarButton')
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.toggle('show-sidebar')
}
toggleSidebarButton.addEventListener('click', toggleSidebar)
const propertyTypeFilter = document.getElementById('propertyTypeFilter')

map.on('load', function () {
  map.loadImage(
    'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303d5542a25834f9af59ed5_pin_11.png',
    function (error, image) {
      if (error) throw error
      map.loadImage(
        'https://uploads-ssl.webflow.com/62a918d5906c9b3387503b6a/6303bbeccdb661098652ce9f_pin_9.png',

        function (error, image1) {
          if (error) throw error

          map.addImage('custom-marker', image)
          map.addImage('custom-marker1', image1)

          map.addLayer({
            id: 'locations',
            type: 'symbol',
            source: 'locations',
            layout: {
              'icon-image': [
                'match',
                ['get', 'property_type'],
                'Self Storage',
                'custom-marker1',
                'RV Park/Campground',
                'custom-marker',
                'default-image',
              ],
              'icon-allow-overlap': true,
              'icon-size': 0.25,
            },
          })
          updateMarkers('Self Storage')
        }
      )
    }
  )

  map.addSource('locations', {
    type: 'geojson',
    data: stores,
  })

  map.addLayer({
    id: 'locations',
    type: 'symbol',
    source: 'locations',
    layout: {
      'icon-image': [
        'match',
        ['get', 'property_type'],
        'Self Storage',
        'custom-marker1',
        'RV Park/Campground',
        'custom-marker',
        'default-image',
      ],
      'icon-allow-overlap': true,
      'icon-size': 0.25,
    },
  })
})

map.on('click', 'locations', function (e) {
  const marker = e.features[0]
  flyToStore(marker)
  createPopUp(marker)
  const activeItem = document.getElementsByClassName('active')

  if (activeItem[0]) {
    activeItem[0].classList.remove('active')
  }
})
map.on('mouseenter', 'locations', function () {
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
