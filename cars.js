const carData = [
    ["Nissan", "Ariya", "Black Diamond Pearl", "2023", "$44,485"],
    ["Jeep", "Grand Cherokee", "White", "2023", "$51,935"],
    ["Ford", "F-350 XLT", "Race Red", "2022", "$63,113"],
    ["Chevrolet", "Volt LT", "Kinetic Blue", "2018", "$15,699"],
    ["Volkswagen", "Beetle 2.0 TSi", "Reef Blue", "2013", "$15,499"]
];

function createTableRows() {
    // Get the table body element
    const tableBody = document.getElementById("carTableBody");
    
    // Loop through the car data array and create a table row for each item
    for (let i = 0; i < carData.length; i++) {
        // Create a table row element
        const row = document.createElement("tr");
        
        // Loop through the subarray and create a table cell for each item
        for (let j = 0; j < carData[i].length; j++) {
            // Create a table cell element
            const cell = document.createElement("td");
            
            // Set the cell's text content to the current item in the subarray
            cell.textContent = carData[i][j];
            
            // Append the cell to the row
            row.appendChild(cell);
        }
        
        // Append the row to the table body
        tableBody.appendChild(row);
    }
}

createTableRows();