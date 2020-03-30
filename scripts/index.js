// Load the images on page-load
function preloader() {
    const imagesPaths = [
        "../images/img-1.jpg",
        "../images/img-2.jpg",
        "../images/img-3.jpg"
        ];
    const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
        }
    
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
        window.addEventListener("load", preloader);

const p = console.log;

const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

// create array that will store the data
let pages = [
    {
        heading: "Lower Solar Panels Installation Fee",
        bodyText: "Solar power is usable energy generated from the sun in the form of electric or thermal energy. Solar energy is captured in a variety of ways, the most common of which is with photovoltaic solar panels that convert the sun’s rays into usable electricity. Concurrent with an increase in solar panel efficiency, the cost of solar energy has fallen substantially. <br>In the last decade alone, the cost of a solar panel installation fell over 60 percent.<br>(Robert S. . (n.d.). Solar energy: what you need to know. Retrieved March 29, 2020, from https://www.energysage.com/solar/)",
        thumb: "./images/img-1.jpg"
    },
    {
        heading: "Higher Wind Power Usage",
        bodyText: "Wind energy is now the lowest-cost option for new electricity generation in Canada. In December 2017, a competitive electricity-supply auction in Alberta yielded the lowest-ever rate paid for wind energy in the country, a weighted average of $37 per megawatt hour. Similarly, in October 2018, a competitive procurement in Saskatchewan resulted in an average bid price of $42 per megawatt hour, with the winning bid coming in below $35 per megawatt hour.<br>Affordable Power. (n.d.). Affordable Power. Retrieved March 30, 2020, from https://canwea.ca/wind-facts/affordable-power/",
        thumb: "./images/img-2.jpg"
    },
    {
        heading: "Using Bioethanol to Power Cars",
        bodyText: "Estimates claim that in just five years, there could be 1.5 billion cars on the road. If this is the case, then we will continue to need and produce a lot of fuel. The production of petrol creates CO2 emissions and as we all know, using it also produces harmful emissions.<br>	Ramesh Chander Kuhad, Rishi Gupta, Yogender Pal Khasa, Ajay Singh, Y.-H. Percival Zhang, Bioethanol production from pentose sugars: Current status and future prospects, Renewable and Sustainable Energy Reviews, Volume 15, Issue 9, 2011, Pages 4950-4962, ISSN 1364-0321, https://doi.org/10.1016/j.rser.2011.07.058",
        thumb: "./images/img-3.jpg"
    }
];

// create function that handles click-event
function  clickBtn(ev) {
    
    let clickedButton = ev.target;
    
    let index = btnsArray.indexOf(clickedButton);
    p(index);
    
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

        // remove currently present id="active"
        for (let i = 0; i<ctrlBtns.length; i++){
            // claiming that current element in the loop containe attribute
            if(ctrlBtns[i].id){
                ctrlBtns[i].removeAttribute('id');
            }  
        }

        // assign id="active" to the currently clicked button
        clickedButton.id='active';    
    
    // load the corresponding data into <div class="container"></div>
    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
        <img src=${pages[index].thumb} alt="icons">
        <p class = "bodytext">${pages[index].bodyText}</p>
    `;
}

for(let i = 0; i<ctrlBtns.length; i++){ 
    ctrlBtns[i].addEventListener('click', clickBtn);  
}
