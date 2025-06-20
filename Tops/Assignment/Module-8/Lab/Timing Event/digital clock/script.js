function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  
    // Add leading zeros
    const formattedTime = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':') + ' ' + amPm;
  
    document.getElementById('clock').textContent = formattedTime;
  }
  
  // Initial call to display the clock immediately
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  