{
    "orderID":3,
    "productID":2,
    "quantity":4,
    "orderValue":16.60,
    "links": [
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"GET" },
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"PUT" }
    ]
}


{
    "albumID":3,
    "albumName":2,
    "Artist":4,
    "total_tracks": 9,
    "Rating":16.60,
    "links": [
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"GET" },
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"PUT" }
    ]
}


{
    "albumID":3,
    "albumName":2,
    "Artist":4,
    "genre(s)": ,
    "length": ,
    "total_tracks": 9,
    "label": Polydor,
    "Rating":16.60,
    "links": [
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"GET" },
        {"rel":"product","href":"https://adventure-works.com/customers/3", "action":"PUT" }
    ]
}




albumID: {
    required: true,
    type: Number
},
albumName: {
    required: true,
    type: String
},
yearReleased: {
    required: true,
    pattern: "^\\d{2}-\\d{2}-\\d{4}$"
},
genres: {
    required: true,
    type: String
},
length: {
    required: true,
    type: Number
},
label: {
    required: true,
    type: String
},
producer: {
    required: true,
    type: String
},



age: {
    require: true,
    type: Number
},



Released	March 2, 1984
Genre	
Heavy metal[1]hard rock[1]comedy rock
Length	35:36
Label	Polydor
Producer	
Christopher GuestMichael McKeanHarry Shearer