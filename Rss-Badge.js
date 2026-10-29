// Auto RSS Badge for thenotarygiant.com - drag and drop this file to thenotarygiant/notary-update
// Add this line before </body> in your main HTML: <script src="rss-badge.js"></script>
(function() {
  var link = document.createElement('a');
  link.href = 'http://validator.w3.org/feed/check.cgi?url=https%3A//thenotarygiant.com/feed.xml';
  link.target = '_blank';
  link.rel = 'noopener';
  link.title = 'Validate my RSS feed';
  
  var img = document.createElement('img');
  img.src = 'https://validator.w3.org/feed/images/valid-rss-rogers.png';
  img.alt = '[Valid RSS] - thenotarygiant.com feed validated by W3C';
  img.style.border = '0';
  img.style.margin = '10px';
  
  link.appendChild(img);
  
  // Append to footer if exists, otherwise to body
  var footer = document.querySelector('footer') || document.body;
  footer.appendChild(link);
})();
