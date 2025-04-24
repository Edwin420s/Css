<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Webpage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        header {
            text-align: center;
            margin-bottom: 20px;
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        #colorBox {
            width: 100px;
            height: 100px;
            background-color: blue;
            margin-top: 20px;
        }
        #container div {
            background-color: yellow;
            padding: 10px;
            margin-top: 10px;
        }
        footer {
            text-align: center;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Interactive Webpage with JavaScript</h1>
    </header>

    <main>
        <p id="text">This is a simple paragraph. Click the button to change its text.</p>

        <button id="changeTextBtn">Change Text</button>

        <div id="colorBox"></div>
        <button id="changeColorBtn">Change Color</button>

        <button id="toggleBoxBtn">Toggle Box Visibility</button>

        <div id="container"></div>
    </main>

    <footer>
        <p>Created for learning purposes. Happy Coding! 💻✨</p>
    </footer>

    <script>
        // Change text content dynamically
        const changeTextBtn = document.getElementById('changeTextBtn');
        const text = document.getElementById('text');

        changeTextBtn.addEventListener('click', () => {
            text.textContent = 'The text has been changed! 🎉';
        });

        // Modify CSS styles via JavaScript
        const changeColorBtn = document.getElementById('changeColorBtn');
        const colorBox = document.getElementById('colorBox');

        changeColorBtn.addEventListener('click', () => {
            colorBox.style.backgroundColor = colorBox.style.backgroundColor === 'blue' ? 'green' : 'blue';
        });

        // Add or remove an element when a button is clicked
        const toggleBoxBtn = document.getElementById('toggleBoxBtn');
        const container = document.getElementById('container');

        toggleBoxBtn.addEventListener('click', () => {
            const newElement = document.createElement('div');
            newElement.textContent = 'This is a new element!';
            newElement.style.backgroundColor = 'yellow';
            newElement.style.padding = '10px';
            newElement.style.marginTop = '10px';

            if (container.hasChildNodes()) {
                container.innerHTML = '';  // Remove the element if it exists
            } else {
                container.appendChild(newElement);  // Add the element if it doesn't exist
            }
        });
    </script>
</body>
</html>
