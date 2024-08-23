let assignmentArray = [
    {
        title: "Product Card Component Using React",
        link: "./Product Card Component Using React\index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Product%20Card%20Component%20Using%20React"
    }, {
        title: "Temperature Converter",
        link: "./Temperature Converter/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Temperature%20Converter"
    }, {
        title: "Firebase Authentication",
        link: "./Firebase Authentication/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Firebase%20Authentication"
    }, {
        title: "Todo Local Storage",
        link: "./Todo Local Storage/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Todo%20Local%20Storage"
    }, {
        title: "Card Using ForEach",
        link: "./Card Using ForEach/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Card%20Using%20ForEach"
    }, {
        title: "Expense Tracking Application",
        link: "./Expense Tracking App/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Expense%20Tracking%20App"
    }, {
        title: "Text Editor",
        link: "./Text Editor/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Text%20Editor"
    }, {
        title: "Image Gallery",
        link: "./Image Gallery/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Image%20Gallery"
    }, {
        title: "Calculator",
        link: "./Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Calculator"
    }, {
        title: "Attendance Application",
        link: "./Attendance Application/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Attendance%20Application"
    }, {
        title: "Age Calculator",
        link: "./Age Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Age%20Calculator"
    }, {
        title: "Dice Game",
        link: "./Dice Game/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Dice%20Game"
    }, {
        title: "RGB Color Picker",
        link: "./RBG Color Picker/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/RBG%20Color%20Picker"
    }, {
        title: "Simple Calculator",
        link: "./Simple Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Simple%20Calculator"
    }, {
        title: "Resturant Menu",
        link: "./Menu/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Resturant%20Menu"
    }, {
        title: "Percentage Calculator",
        link: "./Percentage Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/javascript-projects/tree/main/Percentage%20Calculator"
    }
]

let assignmentDiv = document.getElementById("assignmentDiv")

assignmentArray.forEach((data, i) => {
    let content = `<div class="p-4 lg:w-1/3">
                    <div
                        class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-20 rounded-lg overflow-hidden text-center relative">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-800 mb-1">ASSIGNMENT</h2>
                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${data.title}</h1>
                        <a class="text-indigo-800 inline-flex items-center" href="${data.link}">View
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <div
                            class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                            <span
                                class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm px-3 py-1 border-r-2 border-l-2 border-gray-400">
                                <a class="text-gray-500 inline-flex items-center" href="${data.code}">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>code</a>
                            </span>
                        </div>
                    </div>
                </div>`

    assignmentDiv.innerHTML += content
});




