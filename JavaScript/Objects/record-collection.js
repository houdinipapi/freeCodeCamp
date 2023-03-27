// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];
  // Update the album
  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }
  // Return the full collection
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');