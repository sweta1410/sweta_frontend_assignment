let artists = [{name:'Sweta', approved:true}];
let customers = ['Ankita','KK','Jetal;'];
let bookings = ['Sweta booked by KK','Sweta booked by Kejal'];
let feedbacks = ['KK: Great!','Jetal: Awesome!'];


function showSection(id) {
  document.querySelectorAll('.section').forEach(el=>el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  refreshData();  
}

function refreshData(){
  document.getElementById('artistsList').innerHTML = artists.map(a=>
    `<li>${a.name} – ${a.approved?'Approved':'Pending'}</li>`).join('');
  document.getElementById('customersList').innerHTML = customers.map(c=>`<li>${c}</li>`).join('');
  document.getElementById('bookingsList').innerHTML = bookings.map(b=>`<li>${b}</li>`).join('');
  document.getElementById('feedbackList').innerHTML = feedbacks.map(f=>`<li>${f}</li>`).join('');
}

document.getElementById('addArtistForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('newArtistName').value;
  artists.push({name, approved:false});
  document.getElementById('newArtistName').value = '';
  refreshData();
  alert(`Artist "${name}" added—pending approval.`);
});

// initialize
showSection('artistsSec');
