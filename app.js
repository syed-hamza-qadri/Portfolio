let assignmentArray = [
    {
        title: "Weather App Using React",
        link: "https://weather-app-using-react-eosin.vercel.app/",
        code: "https://github.com/syed-hamza-qadri/Weather-App-Using-React"
    }, {
        title: "Products Catalog Using React",
        link: "https://products-catalog-using-react.vercel.app/",
        code: "https://github.com/syed-hamza-qadri/Products-Catalog-Using-React"
    }, {
        title: "UseState in React",
        link: "https://use-state-in-react.vercel.app/",
        code: "https://github.com/syed-hamza-qadri/UseState-in-React"
    }, {
        title: "Products Card Component Using React",
        link: "https://products-card-component-using-react.vercel.app/",
        code: "https://github.com/syed-hamza-qadri/Products-Card-Component-Using-React"
    }, {
        title: "Temperature Converter",
        link: "./Temperature Converter/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Temperature%20Converter"
    }, {
        title: "Firebase Authentication",
        link: "./Firebase Authentication/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Firebase%20Authentication"
    }, {
        title: "Todo Local Storage",
        link: "./Todo Local Storage/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Todo%20Local%20Storage"
    }, {
        title: "Card Using ForEach",
        link: "./Card Using ForEach/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Card%20Using%20ForEach"
    }, {
        title: "Expense Tracking Application",
        link: "./Expense Tracking App/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Expense%20Tracking%20App"
    }, {
        title: "Text Editor",
        link: "./Text Editor/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Text%20Editor"
    }, {
        title: "Image Gallery",
        link: "./Image Gallery/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Image%20Gallery"
    }, {
        title: "Calculator",
        link: "./Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Calculator"
    }, {
        title: "Attendance Application",
        link: "./Attendance Application/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Attendance%20Application"
    }, {
        title: "Age Calculator",
        link: "./Age Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Age%20Calculator"
    }, {
        title: "Dice Game",
        link: "./Dice Game/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Dice%20Game"
    }, {
        title: "RGB Color Picker",
        link: "./RBG Color Picker/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/RBG%20Color%20Picker"
    }, {
        title: "Simple Calculator",
        link: "./Simple Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Simple%20Calculator"
    }, {
        title: "Resturant Menu",
        link: "./Resturant Menu/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Resturant%20Menu"
    }, {
        title: "Percentage Calculator",
        link: "./Percentage Calculator/index.html",
        code: "https://github.com/syed-hamza-qadri/Portfolio/tree/main/Percentage%20Calculator"
    }
]

let assignmentDiv = document.getElementById("assignmentDiv")

assignmentArray.forEach((data) => {
    let content = `
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full glass px-8 pt-16 pb-8 border-l-2 border-r-2 border-gray-400 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h2 class="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">ASSIGNMENT</h2>
                <h1 class="title-font sm:text-2xl text-xl font-semibold text-white mb-3 mt-2">${data.title}</h1>
                <a class="btn-custom inline-flex items-center justify-center py-3 px-7 rounded-full mt-4" href="${data.link}">
                    View
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <div class="text-center mt-10 mx-auto">
                    <a class="text-gray-400 hover:text-gray-200 inline-flex items-center border-r-2 border-l-2 border-gray-400 px-3" href="${data.code}">
                        <svg class="w-5 h-5 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Code
                    </a>
                </div>
            </div>
        </div>
    `;

    assignmentDiv.innerHTML += content;
});