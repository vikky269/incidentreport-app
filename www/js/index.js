document.addEventListener('deviceready', function() {
  // Handle form submission
  document.getElementById('submitIncident').addEventListener('click', function() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;
    var location = document.getElementById('location').value;
    var images = document.getElementById('images').value;  // Image URLs or file paths

    var data = {
      title: title,
      description: description,
      category: category,
      location: location,
      images: images
    };

    // POST data to the backend
    cordova.plugin.http.post('http://localhost:3000/submit-incident', data, {},
      function(response) {
        console.log('Success:', response);
        alert('Incident Submitted Successfully');
      },
      function(error) {
        console.error('Error:', error);
        alert('Failed to submit the incident');
      }
    )
  })
})

  