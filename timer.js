document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const counterEl = document.getElementById('counter');
  
    setInterval(() => {
      counter++;
      counterEl.innerText = counter;
    }, 3000);
});