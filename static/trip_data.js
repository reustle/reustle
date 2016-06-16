var rawTrips = [{
    mode: 'taxi',
    coords: [
        [115.259199, -8.505599], // ubud
        [115.212629, -8.670458] // denpasar
    ]
},{
    mode: 'bus',
    coords: [
        [115.212629, -8.670458], // denpasar
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
        [106.815026, -6.137510] // jakarta train station
    ]
}];

var unused = [
{"mode": "Boat", "from": "Jakarta", "to": "Singapore"},
{"mode": "Train", "from": "Singapore -> Kuala Lumpur -> Surat Thani -> Bangkok -> Tak -> Chiang Mai"},
{"mode": "Bus", "from": "Tak", "to": "Mae Sot"},
{"mode": "Pickup", "from": "Mae Sot", "to": "Tak Park"},
{"mode": "Motorcycle", "from": "Mae Sot", "to": "Myawaddy"},
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

