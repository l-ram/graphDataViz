const airports: string[] = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(
  " "
);

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "LOKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const adjancencyList = new Map();

const addNode = (airport: string[]) => {
  adjancencyList.set(airport, []);
};

const addEdge = (origin, destination) => {
  adjancencyList.get(origin).push(destination);
  adjancencyList.get(destination).push(origin);
};

airports.forEach(addEdge);

console.table(adjancencyList);
