function calcCircleGeometries(radius) {
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius ** 2;
  
    return [area, circumference, diameter];
  }
  
  const results = [
    calcCircleGeometries(1),
    calcCircleGeometries(2),
    calcCircleGeometries(3),
  ];
  
  document.getElementById("area1").textContent = results[0][0];
  document.getElementById("circumference1").textContent = results[0][1];
  document.getElementById("diameter1").textContent = results[0][2];
  
  document.getElementById("area2").textContent = results[1][0];
  document.getElementById("circumference2").textContent = results[1][1];
  document.getElementById("diameter2").textContent = results[1][2];

  document.getElementById("area3").textContent = results[2][0];
  document.getElementById("circumference3").textContent = results[2][1];
  document.getElementById("diameter3").textContent = results[2][2];