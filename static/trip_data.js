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
NAPLES = [14.268124, 40.851775];


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
        NAPLES
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

