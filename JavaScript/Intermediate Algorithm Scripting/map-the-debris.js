function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
        let alt = arr[i].avgAlt;
        let a = earthRadius + alt;
        let T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM));
        result.push({ name: arr[i].name, orbitalPeriod: T });
    }
    return result;
}
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);