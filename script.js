function chooseColor(colorName) {
    // 1. Get the "Hello world!" element and change its color
    const helloText = document.getElementById('helloText');
    helloText.style.color = colorName;

    // 2. Get the history list element
    const historyList = document.getElementById('historyList');

    // 3. Create a brand new <li> list item element
    const newListItem = document.createElement('li');
    newListItem.textContent = colorName;
    newListItem.style.color = colorName; // Optional: colors the history text to match!
    newListItem.style.fontWeight = 'bold';

    // 4. Append (add) the new item to the vertical history list
    historyList.appendChild(newListItem);
}