<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Fundamentals Assignment</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            color: #333;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            padding: 30px 0;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
        }
        
        h2 {
            font-size: 1.8rem;
            margin: 25px 0 15px;
            color: #1a2a6c;
            border-bottom: 2px solid #fdbb2d;
            padding-bottom: 8px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }
        
        @media (max-width: 768px) {
            .content {
                grid-template-columns: 1fr;
            }
        }
        
        .section {
            background: rgba(255, 255, 255, 0.92);
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
        }
        
        .section:hover {
            transform: translateY(-5px);
        }
        
        .part {
            margin-bottom: 30px;
        }
        
        .code-block {
            background: #2d3748;
            color: #e2e8f0;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            line-height: 1.5;
        }
        
        .interactive-demo {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #1a2a6c;
        }
        
        button {
            background: #1a2a6c;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            margin: 10px 5px;
            transition: background 0.3s ease;
        }
        
        button:hover {
            background: #2c3e99;
        }
        
        input, select {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            margin: 5px;
            width: 200px;
        }
        
        .output {
            margin-top: 15px;
            padding: 15px;
            background: #edf2f7;
            border-radius: 6px;
            min-height: 50px;
        }
        
        .highlight {
            color: #fdbb2d;
            font-weight: bold;
        }
        
        .user-inputs {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
        }
        
        .user-inputs > div {
            display: flex;
            flex-direction: column;
        }
        
        .user-inputs label {
            font-size: 0.9rem;
            margin-bottom: 5px;
            color: #4a5568;
        }
        
        .grid-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            margin: 15px 0;
        }
        
        .grid-item {
            background: #1a2a6c;
            color: white;
            padding: 15px;
            text-align: center;
            border-radius: 6px;
        }
        
        .task-list {
            list-style-type: none;
            margin: 15px 0;
        }
        
        .task-list li {
            padding: 10px;
            background: #f8f9fa;
            margin: 8px 0;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .task-list button {
            padding: 6px 12px;
            font-size: 0.9rem;
        }
        
        footer {
            text-align: center;
            padding: 30px 0;
            color: white;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🚀 JavaScript Fundamentals</h1>
            <p class="subtitle">Mastering Variables, Functions, Loops, and DOM Manipulation</p>
        </header>
        
        <div class="content">
            <div class="section">
                <!-- Part 1: JavaScript Basics -->
                <div class="part">
                    <h2>🎯 Part 1: JavaScript Basics</h2>
                    <p>Variables, data types, operators, and conditionals</p>
                    
                    <div class="code-block">
                        // Variable declarations<br>
                        let userName = "John";<br>
                        const userAge = 25;<br>
                        let isStudent = true;<br><br>
                        
                        // Conditional logic<br>
                        if (isStudent) {<br>
                        &nbsp;&nbsp;console.log(`${userName} is a student.`);<br>
                        } else {<br>
                        &nbsp;&nbsp;console.log(`${userName} is not a student.`);<br>
                        }
                    </div>
                    
                    <div class="interactive-demo">
                        <h3>User Info Check</h3>
                        <div class="user-inputs">
                            <div>
                                <label for="name">Your Name:</label>
                                <input type="text" id="name" placeholder="Enter your name">
                            </div>
                            <div>
                                <label for="age">Your Age:</label>
                                <input type="number" id="age" placeholder="Enter your age">
                            </div>
                            <div>
                                <label for="student">Are you a student?</label>
                                <select id="student">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <button onclick="checkUserInfo()">Check Info</button>
                        <div class="output" id="userOutput"></div>
                    </div>
                </div>
                
                <!-- Part 2: JavaScript Functions -->
                <div class="part">
                    <h2>❤️ Part 2: JavaScript Functions</h2>
                    <p>Reusable blocks of logic for common tasks</p>
                    
                    <div class="code-block">
                        // Function to calculate area of a rectangle<br>
                        function calculateArea(width, height) {<br>
                        &nbsp;&nbsp;return width * height;<br>
                        }<br><br>
                        
                        // Function to format a string<br>
                        function formatGreeting(name, age) {<br>
                        &nbsp;&nbsp;return `Hello, ${name}! You are ${age} years old.`;<br>
                        }
                    </div>
                    
                    <div class="interactive-demo">
                        <h3>Function Demonstrations</h3>
                        <button onclick="calculateRectangleArea()">Calculate Rectangle Area</button>
                        <button onclick="showGreeting()">Show Greeting</button>
                        <div class="output" id="functionOutput"></div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <!-- Part 3: JavaScript Loops -->
                <div class="part">
                    <h2>🔁 Part 3: JavaScript Loops</h2>
                    <p>Using loops for repetitive tasks and iterations</p>
                    
                    <div class="code-block">
                        // For loop example<br>
                        for (let i = 1; i <= 5; i++) {<br>
                        &nbsp;&nbsp;console.log(`Iteration number: ${i}`);<br>
                        }<br><br>
                        
                        // While loop example<br>
                        let count = 1;<br>
                        while (count <= 5) {<br>
                        &nbsp;&nbsp;console.log(`Count is: ${count}`);<br>
                        &nbsp;&nbsp;count++;<br>
                        }
                    </div>
                    
                    <div class="interactive-demo">
                        <h3>Loop Demonstrations</h3>
                        <button onclick="runForLoop()">Run For Loop</button>
                        <button onclick="runWhileLoop()">Run While Loop</button>
                        <button onclick="generateMultiplicationTable()">Multiplication Table</button>
                        <div class="output" id="loopOutput"></div>
                    </div>
                </div>
                
                <!-- Part 4: DOM Manipulation -->
                <div class="part">
                    <h2>🌐 Part 4: DOM Manipulation</h2>
                    <p>Making web pages interactive with JavaScript</p>
                    
                    <div class="code-block">
                        // Changing text content<br>
                        document.getElementById('elementId').textContent = 'New text';<br><br>
                        
                        // Handling click events<br>
                        button.addEventListener('click', function() {<br>
                        &nbsp;&nbsp;// Action to perform on click<br>
                        });<br><br>
                        
                        // Creating new elements<br>
                        const newElement = document.createElement('div');<br>
                        newElement.textContent = 'Dynamic content';<br>
                        document.body.appendChild(newElement);
                    </div>
                    
                    <div class="interactive-demo">
                        <h3>DOM Interaction Examples</h3>
                        <button onclick="changeText()">Change Text</button>
                        <button onclick="changeBackground()">Change Background</button>
                        <button onclick="addItem()">Add List Item</button>
                        <button onclick="removeLastItem()">Remove Last Item</button>
                        
                        <div class="output">
                            <p id="changeableText">This text will change when you click the button.</p>
                            <ul id="dynamicList">
                                <li>Initial item</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <p>JavaScript Fundamentals Assignment &copy; 2023</p>
        </footer>
    </div>

    <script>
        // Part 1: JavaScript Basics
        function checkUserInfo() {
            // Get user input
            const userName = document.getElementById('name').value || 'Guest';
            const userAge = document.getElementById('age').value || 'unknown';
            const isStudent = document.getElementById('student').value === 'true';
            
            // Using conditional logic
            let statusMessage;
            if (isStudent) {
                statusMessage = `Hello ${userName}! You are a student.`;
            } else {
                statusMessage = `Hello ${userName}! You are not a student.`;
            }
            
            // Display output
            const outputElement = document.getElementById('userOutput');
            outputElement.innerHTML = `
                <p>${statusMessage}</p>
                <p>Your age is: <span class="highlight">${userAge}</span></p>
            `;
        }
        
        // Part 2: JavaScript Functions
        function calculateRectangleArea() {
            const width = parseFloat(prompt('Enter the width of the rectangle:'));
            const height = parseFloat(prompt('Enter the height of the rectangle:'));
            
            if (isNaN(width) || isNaN(height)) {
                alert('Please enter valid numbers!');
                return;
            }
            
            // Using a function to calculate area
            const area = calculateArea(width, height);
            
            const outputElement = document.getElementById('functionOutput');
            outputElement.innerHTML = `
                <p>The area of a rectangle with width ${width} and height ${height} is: <span class="highlight">${area}</span></p>
            `;
        }
        
        function calculateArea(width, height) {
            return width * height;
        }
        
        function showGreeting() {
            const userName = document.getElementById('name').value || 'Guest';
            const userAge = document.getElementById('age').value || 'unknown';
            
            // Using a function to format a greeting
            const greeting = formatGreeting(userName, userAge);
            
            const outputElement = document.getElementById('functionOutput');
            outputElement.innerHTML = `
                <p>${greeting}</p>
            `;
        }
        
        function formatGreeting(name, age) {
            return `Hello, ${name}! You are ${age} years old.`;
        }
        
        // Part 3: JavaScript Loops
        function runForLoop() {
            const outputElement = document.getElementById('loopOutput');
            outputElement.innerHTML = '<p>For loop output:</p>';
            
            // Using a for loop
            for (let i = 1; i <= 5; i++) {
                outputElement.innerHTML += `<p>Iteration number: <span class="highlight">${i}</span></p>`;
            }
        }
        
        function runWhileLoop() {
            const outputElement = document.getElementById('loopOutput');
            outputElement.innerHTML = '<p>While loop output:</p>';
            
            // Using a while loop
            let count = 1;
            while (count <= 5) {
                outputElement.innerHTML += `<p>Count is: <span class="highlight">${count}</span></p>`;
                count++;
            }
        }
        
        function generateMultiplicationTable() {
            const number = parseInt(prompt('Enter a number for multiplication table:'));
            
            if (isNaN(number)) {
                alert('Please enter a valid number!');
                return;
            }
            
            const outputElement = document.getElementById('loopOutput');
            outputElement.innerHTML = `<p>Multiplication table for ${number}:</p>`;
            
            // Using a for loop to generate a multiplication table
            for (let i = 1; i <= 10; i++) {
                outputElement.innerHTML += `<p>${number} × ${i} = <span class="highlight">${number * i}</span></p>`;
            }
        }
        
        // Part 4: DOM Manipulation
        function changeText() {
            // Changing text content
            const textElement = document.getElementById('changeableText');
            textElement.textContent = 'The text has been changed using JavaScript!';
            textElement.style.color = '#1a2a6c';
            textElement.style.fontWeight = 'bold';
        }
        
        function changeBackground() {
            // Changing styles
            const outputs = document.querySelectorAll('.output');
            const colors = ['#edf2f7', '#feebc8', '#c6f6d5', '#bee3f8'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            outputs.forEach(output => {
                output.style.backgroundColor = randomColor;
            });
        }
        
        function addItem() {
            // Creating new elements
            const list = document.getElementById('dynamicList');
            const newItem = document.createElement('li');
            newItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(newItem);
        }
        
        function removeLastItem() {
            // Removing elements
            const list = document.getElementById('dynamicList');
            if (list.children.length > 1) {
                list.removeChild(list.lastChild);
            }
        }
    </script>
</body>
</html>
