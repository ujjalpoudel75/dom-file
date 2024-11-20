// Button to change background color with a random gradient
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.background = randomGradient();
});

// Function to generate a random gradient background
function randomGradient() {
    const colors = [
        ['#2c3e50', '#bdc3c7'],
        ['#16a085', '#f39c12'],
        ['#2980b9', '#8e44ad'],
        ['#27ae60', '#f1c40f']
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(to bottom, ${randomColor[0]}, ${randomColor[1]})`;
}

// Button to add a new element dynamically
document.getElementById('addElementBtn').addEventListener('click', function() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('added-element');
    newDiv.textContent = "This is a dynamically added element!";
    document.getElementById('newElementContainer').appendChild(newDiv);
});

// Button to animate an element
document.getElementById('animateElementBtn').addEventListener('click', function() {
    let element = document.getElementById('toggleElement');
    
    // Initial animation to scale the element
    element.style.transition = "transform 0.5s ease-in-out";
    element.style.transform = "scale(1.2)";
    
    // After animation ends, reset the scaling
    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 500);
});

// Button to toggle visibility of an element
document.getElementById('toggleVisibilityBtn').addEventListener('click', function() {
    let element = document.getElementById('toggleElement');
    element.classList.toggle('hidden');
});

// Button to modify text content
document.getElementById('modifyTextBtn').addEventListener('click', function() {
    let textElement = document.getElementById('textElement');
    textElement.textContent = "The text content has been successfully changed!";
    textElement.classList.add('modified');
    setTimeout(() => textElement.classList.remove('modified'), 2000);
});

// Button to fetch external data (using JSONPlaceholder API)
document.getElementById('fetchDataBtn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const apiDataContainer = document.getElementById('apiDataContainer');
            apiDataContainer.style.display = 'block';
            apiDataContainer.innerHTML = `
                <h3>Post Title: ${data.title}</h3>
                <p>${data.body}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
});
