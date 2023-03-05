// Create flight objects
var flights = [
	{
		airline: 'ASA',
		number: '1077',
		origin: 'Washington Dulles Intl (KIAD)',
		destination: 'San Francisco Intl (KSFO)',
		dep_time: new Date('March 3, 2023 07:32:00 EST'),
		arrival_time: new Date('March 3, 2023 10:10:00 PST'),
		arrival_gate: 'Gate 23'
	},
	{
		airline: 'ASA',
		number: '1088',
		origin: 'San Francisco Intl (KSFO)',
		destination: 'Washington Dulles Intl (KIAD)',
		dep_time: new Date('March 3, 2023 03:58:00 PST'),
        arrival_time: new Date('March 3, 2023 11:28:00 EST'),
        arrival_gate: 'Gate 15'
    },
    {
        airline: 'ASA',
        number: '1097',
        origin: 'Washington Dulles Intl (KIAD)',
        destination: 'Los Angeles Intl (KLAX)',
        dep_time: new Date('March 3, 2023 05:06:00 EST'),
        arrival_time: new Date('March 3, 2023 07:24:00 PST'),
        arrival_gate: 'Gate 8'
    },
    {
        airline: 'ASA',
        number: '11',
        origin: 'Newark Liberty Intl (KEWR)',
        destination: 'Seattle-Tacoma Intl (KSEA)',
        dep_time: new Date('March 3, 2023 05:00:00 EST'),
        arrival_time: new Date('March 3, 2023 07:27:00 PST'),
        arrival_gate: 'Gate 17'
    },
    {
        airline: 'ASA',
        number: '1113',
        origin: 'Will Rogers World (KOKC)',
        destination: 'Seattle-Tacoma Intl (KSEA)',
        dep_time: new Date('March 3, 2023 05:40:00 CST'),
        arrival_time: new Date('March 3, 2023 07:11:00 PST'),
        arrival_gate: 'Gate 3'
    }
];

// Method to calculate flight duration
function calculateDuration(dep_time, arrival_time) {
    var diff = arrival_time.getTime() - dep_time.getTime();
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);
    return hours + ':' + minutes + ':' + seconds;
}
    
// Populate flights table
var tableBody = document.getElementById('flights-table-body');
for (var i = 0; i < flights.length; i++) {
    var row = document.createElement('tr');
    row.className = (i % 2 == 0) ? 'table-light' : 'table-secondary';
    var flightNum = document.createElement('td');
    flightNum.textContent = flights[i].airline + flights[i].number;
    row.appendChild(flightNum);
    var airline = document.createElement('td');
    airline.textContent = flights[i].airline;
    row.appendChild(airline);
    var origin = document.createElement('td');
    origin.textContent = flights[i].origin;
    row.appendChild(origin);
    var destination = document.createElement('td');
    destination.textContent = flights[i].destination;
    row.appendChild(destination);
    var depTime = document.createElement('td');
    depTime.textContent = flights[i].dep_time.toLocaleString();
    row.appendChild(depTime);
    var arrivalTime = document.createElement('td');
    arrivalTime.textContent = flights[i].arrival_time.toLocaleString();
    row.appendChild(arrivalTime);
    var duration = document.createElement('td');
    duration.textContent = calculateDuration(flights[i].dep_time, flights[i].arrival_time);
    row.appendChild(duration);
    tableBody.appendChild(row);
}