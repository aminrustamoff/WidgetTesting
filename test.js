javascript:(async () => {
  // Create and inject the widget
  const createWidget = () => {
    // Check if the widget already exists
    if (document.getElementById('floating-widget')) {
      console.log('Widget already loaded.');
      return;
    }

    // Widget HTML and styles
    const widgetHTML = `
      <div id="floating-widget">
        <header>Random Number Widget</header>
        <div class="content">
          <label for="number-input">Enter a number:</label><br>
          <input id="number-input" type="number" placeholder="Enter max value" />
          <button id="generate-btn">Generate Random Number</button>
          <p id="result">Result: -</p>
        </div>
      </div>
      <style>
        #floating-widget {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 300px;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 10000;
          font-family: Arial, sans-serif;
        }
        #floating-widget header {
          background: #0078d4;
          color: white;
          padding: 10px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 8px 8px 0 0;
        }
        #floating-widget .content {
          padding: 10px;
          font-size: 14px;
          color: #333;
        }
        #floating-widget input {
          width: calc(100% - 20px);
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        #floating-widget button {
          width: 100%;
          padding: 10px;
          background: #0078d4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        #floating-widget button:hover {
          background: #005bb5;
        }
        #floating-widget p {
          margin-top: 10px;
          font-weight: bold;
        }
      </style>
    `;

    // Create a container for the widget
    const widgetContainer = document.createElement('div');
    widgetContainer.innerHTML = widgetHTML;
    document.body.appendChild(widgetContainer);

    // Add widget functionality
    const input = document.getElementById('number-input');
    const generateBtn = document.getElementById('generate-btn');
    const resultDisplay = document.getElementById('result');

    generateBtn.addEventListener('click', () => {
      const maxValue = parseInt(input.value, 10);
      if (isNaN(maxValue) || maxValue <= 0) {
        resultDisplay.textContent = 'Result: Invalid input';
        return;
      }
      // Generate a random number
      const randomNum = Math.floor(Math.random() * maxValue) + 1;
      resultDisplay.textContent = `Result: ${randomNum}`;
    });
  };

  // Load the widget
  createWidget();
})();
