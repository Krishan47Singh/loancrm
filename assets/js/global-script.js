console.log("Test Krishan");

// Load the sidebar component
fetch('../inc/form.html')
    .then(response => response.text())
    .then(data => {
        console.log("🚀 ~ data:", data)
        document.getElementById('reg-form').innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));