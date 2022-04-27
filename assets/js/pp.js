fetch('https://api.github.com/users/LitRhap')
  .then(response => response.json())
  .then(data => document.getElementById("alip").src=data.avatar_url);
  fetch('https://api.github.com/users/Akkun3704')
  .then(response => response.json())
  .then(data => document.getElementById("arip").src=data.avatar_url);
  fetch('https://api.github.com/users/Rlxfly')
  .then(response => response.json())
  .then(data => document.getElementById("farel").src=data.avatar_url);
  fetch('https://api.github.com/users/Felix-403')
  .then(response => response.json())
  .then(data => document.getElementById("pelix").src=data.avatar_url);
  fetch('https://api.github.com/users/Len-cmd')
  .then(response => response.json())
  .then(data => document.getElementById("lentod").src=data.avatar_url);
  fetch('https://api.github.com/users/ScarLet0x')
  .then(response => response.json())
  .then(data => document.getElementById("ahmad").src=data.avatar_url);
