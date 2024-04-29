function addAchievements() {
    // Get the input field and value
    var achievementInput = document.getElementById("achievements-list");
    var taskValue = achievementInput.value;

    // Create a new list item and check box
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    // Add the task text to the list item
    var textNode = document.createTextNode(achievementValue);
    li.appendChild(textNode);

    // Add the list item to the task list
    var ul = document.getElementById("achievements-list");
    ul.appendChild(li);

    // Clear the input field
    achievementInput.value = "";
}