var UBUD = [115.259199, -8.505599],
DENPASAR = [115.212629, -8.670458],
JAKARTA = [106.815026, -6.137510],
BATAM = [104.030454, 1.045626],
SINGAPORE = [103.819836, 1.352083],
HAT_YAI = [100.474688, 7.008647],
KUALA_LUMPUR = [101.686855, 3.139003],
BANGKOK = [100.501765, 13.756331],
MAI_SOT = [98.574665, 16.712405],
MAWLAMYINE = [97.643961, 16.454317],
YANGON = [96.195132, 16.866069],
MANDALAY = [96.089103, 21.958828],
BAGAN = [94.858546, 21.171727],
THAI_CAMBODIA_BORDER = [102.550120, 13.661724],
SIEM_REAP = [103.844813, 13.367097],
SAIGON = [106.629664, 10.823099],
NA_TRANG = [109.196749, 12.238791],
DA_NANG = [108.202167, 16.054407],
HANOI = [105.834160, 21.027764],

TOKYO = [139.691706, 35.689487],
OSAKA = [135.502165, 34.693738],
FUKUOKA = [130.401716, 33.590355],
BUSAN = [129.075642, 35.179554],
SEOUL = [126.977969, 37.566535],

BERGEN = [5.322054, 60.391263],
OSLO = [10.752245, 59.913869],
MORS = [8.728147, 56.818891],
AARHUS = [10.203921, 56.162939],
COPENHAGEN = [12.568337, 55.676097],
BERLIN = [13.404954, 52.520007],
PRAGUE = [14.437800, 50.075538],
BRATISLAVA = [17.107748, 48.148596],
VIENNA = [16.373819, 48.208174],
SALZBURG = [13.055010, 47.809490],
VENICE = [12.315515, 45.440847],
NAPLES = [14.268124, 40.851775],
BARI = [16.8718714, 41.1171432],
ROME = [12.49636550, 41.90278349],
MILAN = [9.1859243, 45.4654219],
ZURICH = [8.541694, 47.3768866],
BERN = [7.4474467, 46.9479739],
GENEVA = [6.14315769, 46.2043907],
MARSEILLE = [5.369779, 43.296482],
BARCELONA = [2.1734034, 41.3850638],

EDINBURGH = [-3.188266, 55.953252],
LIVERPOOL = [-2.9915726, 53.4083714],
BRISTOL = [-2.587909, 51.454513],
LONDON = [-0.12775829, 51.5073509],
BRUSSELS = [4.3517103, 50.8503396],
ROTTERDAM = [4.4777325, 51.9244201],
AMSTERDAM = [4.8951678, 52.3702157],

KEY_WEST= [-81.7799870, 24.5550593],
RALEIGH = [-78.6381787, 35.7795897],
PHILADELPHIA = [-75.1652215, 39.9525839],
CHICAGO = [-87.6297981, 41.8781136],
LITTLE_ROCK = [-92.2895947, 34.7464809],
AUSTIN = [-97.7430607, 30.267153],

MOOSEHEAD = [-69.6506172, 45.6550489],
BOSTON = [-71.0588801, 42.3600825],
NEW_YORK = [-74.0059413, 40.7127837],
OTTAWA = [-75.69719310, 45.42152960];

var rawTrips = [

// Main Route
{
    mode: 'taxi',
    coords: [
        UBUD,
        DENPASAR
    ]
},{
    mode: 'bus',
    coords: [
        DENPASAR,
        [114.438009, -8.160831] // west bali port
    ]
},{
    mode: 'ferry',
    coords: [
        [114.438009, -8.160831], // west bali port
        [114.401437, -8.143105] // east java port
    ]
},{
    mode: 'songthaew',
    coords: [
        [114.401437, -8.143105], // east java port
        [114.340615, -8.222973] // bangawangi train station
    ]
},{
    mode: 'train', 
    coords: [
        [114.340615, -8.222973], // bangawangi train station
        [113.216048, -7.742685], // probolinggo train station
        JAKARTA // train station
    ]
},{
    mode: 'motorbike taxi', 
    coords: [
        JAKARTA, // jakarta train station
        JAKARTA // jakarta port
    ]
},{
    mode: 'ferry', 
    coords: [
        JAKARTA, // jakarta port
        BATAM, // batam port
        SINGAPORE
    ]
},{
    mode: 'train',
    coords: [
        SINGAPORE,
        KUALA_LUMPUR,
        HAT_YAI,
        BANGKOK,
        THAI_CAMBODIA_BORDER
    ]
},{
    mode: 'bus',
    coords: [
        THAI_CAMBODIA_BORDER,
        SAIGON
    ]
},{
    mode: 'train',
    coords: [
        SAIGON,
        NA_TRANG,
        DA_NANG,
        HANOI
    ]
},{
    mode: 'ferry',
    coords: [
        [
            121.44493103027344,
            36.77409249464195
        ],[
            126.97002410888672,
            37.56199695314352
        ]
    ]
},{
    mode: 'train',
    coords: [
        [
          121.44493103027344,
          36.77409249464195
        ],
        [
          120.65391540527344,
          36.56260003738545
        ],
        [
          118.37871551513672,
          36.70365959719456
        ],
        [
          116.97246551513672,
          36.597889133070225
        ],
        [
          116.99443817138672,
          35.496456056584165
        ],
        [
          118.53252410888672,
          35.10193405724606
        ],
        [
          119.25762176513672,
          34.45221847282654
        ],
        [
          120.59795379638672,
          32.342841356393016
        ],
        [
          121.36699676513672,
          31.85889704445453
        ],
        [
          121.47686004638672,
          31.240985378021307
        ],
        [
          120.02666473388672,
          30.315987718557867
        ],
        [
          121.43291473388672,
          29.878755346037977
        ],
        [
          121.32305145263672,
          28.632746799225853
        ],
        [
          119.41143035888672,
          26.470573022375085
        ],
        [
          118.62041473388672,
          25.005972656239187
        ],
        [
          116.51103973388672,
          23.28171917560002
        ],
        [
          114.15996551513672,
          22.796439320919493
        ],
        [
          114.13799285888672,
          22.329752304376473
        ],
        [
          113.28105926513672,
          23.160563309048314
        ],
        [
          111.98467254638672,
          22.95839331808635
        ],
        [
          111.74297332763672,
          22.77618150508651
        ],
        [
          110.38066864013672,
          22.816694126899844
        ],
        [
          108.27129364013672,
          22.735656852206493
        ],
        [
          106.71123504638672,
          21.922663209325922
        ],
        [
          106.53545379638672,
          21.57571893245848
        ],
        [
          105.83232879638672,
          21.022982546427425
        ]
    ]
},{
    mode: 'train',
    coords: [
        TOKYO,
        OSAKA,
        FUKUOKA
    ]
},{
    mode: 'ferry',
    coords: [
        FUKUOKA,
        BUSAN
    ]
},{
    mode: 'train',
    coords: [
        BUSAN,
        SEOUL
    ]
},{
    mode: 'boat',
    coords: [
        [
          -123.15073013305664,
          49.27497287599639
        ],
        [
          -123.46933364868164,
          49.29647160265807
        ],
        [
          -123.38994026184082,
          49.0162566577816
        ],
        [
          -123.06035041809082,
          48.8719414772291
        ],
        [
          -123.00541877746582,
          48.75981008089207
        ],
        [
          -123.26909065246582,
          48.69458640884518
        ],
        [
          -123.27458381652832,
          48.65468584817256
        ],
        [
          -123.10978889465332,
          48.367198426439465
        ],
        [
          -123.29106330871582,
          48.257598529149966
        ],
        [
          -123.71403694152832,
          48.24662559071382
        ],
        [
          -124.81816291809082,
          48.480204398955145
        ],
        [
            -166.58466339111328,
            53.87844040332884
        ],
        [
            -166.68466339111328,
            53.87844040332884
        ],
        [
          -179.9999,
          51
        ]
    ]
},{
    mode: 'boat',
    coords: [
        [
          179.9999,
          51
        ],
        [
          151.10097885131836,
          46.33175800051563
        ],
        [
          147.65127182006836,
          46.27863122156088
        ],
        [
          141.92739486694336,
          45.66012730272194
        ],
        [
          140.76284408569336,
          45.44471679159555
        ],
        [
          140.59804916381836,
          45.29034662473613
        ],
        [
          141.02651596069336,
          43.205175817237304
        ],
        [
          140.57607650756836,
          43.50075243569041
        ],
        [
          140.09267807006836,
          43.41302868475145
        ],
        [
          139.20278549194336,
          42.09822241118974
        ],
        [
          139.70815658569336,
          41.236511201246216
        ],
        [
          140.40029525756836,
          41.31907562295138
        ],
        [
          140.78481674194336,
          41.631867410697474
        ],
        [
          141.74062728881836,
          41.582579601430346
        ],
        [
          142.64150619506836,
          40.43858586704331
        ],
        [
          142.52065658569336,
          38.89958342598271
        ],
        [
          141.98232650756836,
          37.92686760148135
        ],
        [
          141.34511947631836,
          36.56260003738545
        ],
        [
          140.99355697631836,
          35.35321610123824
        ],
        [
          140.20254135131836,
          34.66032236481892
        ],
        [
          139.71914291381836,
          34.66935854524542
        ],
        [
          139.60927963256836,
          34.994003757575776
        ],
        [
          139.79604721069336,
          35.21869749632885
        ],
        [
          139.68618392944336,
          35.43381992014202
        ]
    ]
},

// EUROPE

{
    mode: 'train',
    coords: [
        BERGEN,
        OSLO
    ]
},{
    mode: 'ferry',
    coords: [
        OSLO,
        MORS
    ]
},{
    mode: 'train',
    coords: [
        MORS,
        AARHUS,
        COPENHAGEN,
        BERLIN,
        PRAGUE,
        BRATISLAVA,
        VIENNA,
        SALZBURG,
        // BUS 
        VENICE,
        NAPLES,
        BARI,
        ROME,
        MILAN,
        ZURICH,
        BERN,
        GENEVA,
        MARSEILLE,
        BARCELONA
    ]

// Branches

},{
    mode: 'train',
    coords: [
        BANGKOK,
        // BUS
        MAI_SOT,
        // TAXI
        MAWLAMYINE,
        // TRAIN
        YANGON,
        MANDALAY,
        BAGAN
    ]
},{
    mode: 'train',
    coords: [
        EDINBURGH,
        LIVERPOOL,
        BRISTOL,
        LONDON,
        BRUSSELS,
        ROTTERDAM,
        AMSTERDAM
    ]
},{
    mode: 'trainbuscar',
    coords: [
        KEY_WEST,
        RALEIGH,
        PHILADELPHIA,
        CHICAGO,
        LITTLE_ROCK,
        AUSTIN
    ]
},{
    mode: 'trainbuscar',
    coords: [
        MOOSEHEAD,
        BOSTON,
        NEW_YORK,
        PHILADELPHIA,
        OTTAWA
    ]
}

];

var unused = [
{"mode": "Train", "from": "Bangkok -> Tak -> Chiang Mai"},
{"mode": "Bus", "from": "Tak", "to": "Mae Sot"},
{"mode": "Pickup", "from": "Mae Sot", "to": "Tak Park"},
{"mode": "Motorcycle taxi", "from": "Mae Sot", "to": "Myawaddy"},
{"mode": "Shared Taxi", "from": "Myawaddy", "to": "Mawlamyine"},
{"mode": "Train", "from": "Mawlamyine -> Yangon -> Thazi -> Inle Lake"},
{"mode": "Bus", "from": "Inle Lake -> Mandalay"},
{"mode": "Train", "from": "Mandalay -> Bagan -> Yangon"},
{"mode": "Van", "from": "Bangkok -> Koh Samet Port"},
{"mode": "Boat", "from": "Koh Samet Port -> Koh Samet"},
{"mode": "Bus", "from": "Surat Thani", "to": "Surat Port"},
{"mode": "Boat", "from": "Surat Port", "to": "Koh Phangan"},

{"mode": "Bus", "from": "Berlin", "to": "Germany Port"},
{"mode": "Boat", "from": "Germany Port", "to": "Denmark Port"},
{"mode": "Bus", "from": "Denmark Port", "to": "Copenhagen"},
{"mode": "Bus", "from": "Copenhagen", "to": "Aarhus"},
{"mode": "Bus", "from": "??? Aarhus", "to": "Mors"},
{"mode": "Bus", "from": "Mors", "to": "Denmark Port"},
{"mode": "Boat", "from": "Denmark Port", "to": "Norway Port"},
{"mode": "Train", "from": "Norway Port -> Oslo -> Myrdel -> Flam"},
{"mode": "Boat", "from": "Flam", "to": "Bergen"},
{"mode": "Train", "from": "Berlin", "to": "Chonice PL"},

{"mode": "Van", "from": "Cuzco", "to": "ollantaytambo"},
{"mode": "Train", "from": "ollantaytambo", "to": "Aguas Calientes"},

{"mode": "Car: Boyertown -> Canada"},
{"mode": "Car: Moosehead Lake, ME -> Boston -> New York -> Philadelphia -> Skyline Drive -> Key West, FL"},
{"mode": "Train: Florida -> Philadelphia"},
{"mode": "Train: Austin, TX -> Little Rock, AR -> St Louis, MO -> Chicago -> DC"},
{"mode": "StartupBus: NYC -> Austin, TX"},
{"mode": "StartupBus", "from": "Kansas City", "to": "Austin, TX"},
{"mode": "Car", "from": "Little Rock, AR", "to": "Fayetteville, AR"}
];

