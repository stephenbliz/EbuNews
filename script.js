// .............Querying the DOM............

const logo = document.querySelector(".logo");
const news = document.querySelector(".news");
const contactUs = document.querySelector('.contact-us');
const newsList = document.querySelectorAll('.news-list');
const angle = document.querySelector('.angle');
const newsDropdown = document.querySelector('.news-dropdown');
const trending = document.querySelector('.trending');
const output = document.querySelector('.newsOutput');
const entertainment = document.querySelector('.entertainment');
const business = document.querySelector('.business');
const health = document.querySelector('.health');
const sport = document.querySelector('.sport');
console.log(entertainment)
const key = '827e18936842457f965de14dd6302c79';



// ................functions.................

// get all Nigerian news
const getNews = async () => { 
    const base = 'https://newsapi.org/v2/top-headlines?country=ng';
    const query = `&apiKey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data;
    // console.log(data);
    
};

// getNews();

// get Nigerian news by category
const getNewscategory = async (cate) => {
    const base = 'https://newsapi.org/v2/top-headlines?country=ng';
    const query = `&apiKey=${key}`;
    const type = `&category=${cate}`;
    const response = await fetch(base + type + query);
    const data = await response.json();
    return data;
    // console.log(data);
};
// getNewscategory('entertainment');

// update ui
const updateUi = (data) => {
    // console.log(data.articles);
    const articles = data.articles;
    articles.forEach((article) => {

        if(!article.urlToImage){
            let html = `
    <div class="singleNews">
         <div class="newsOutput-image"><img src="./images/newsimage.jpg" alt=""></div>
            <hi class="newsOutput-title">${article.title}</hi>
       </div> `;

    output.innerHTML += html;
        }else{
            let html = `
    <div class="singleNews">
         <div class="newsOutput-image"><img src="${article.urlToImage}" alt=""></div>
            <hi class="newsOutput-title">${article.title}</hi>
       </div> `;

    output.innerHTML += html;
        }
    });

};


// ............ dropdown and close the news menu..............

news.addEventListener('click', () => {
    angle.classList.toggle('down');
    newsDropdown.classList.toggle('display');
    trending.classList.toggle('section1');
});

// ............updating the ui with trending news...............

logo.addEventListener('click', () => {
    window.location.replace('./index.html');
    
});

// console.log(location);

getNews().then((data) => {
    updateUi(data);
    }).catch((err) => {
        console.log(err);
    });




// ...............updating the ui with entertainment news..................


entertainment.addEventListener('click', () =>{
    window.location.replace('./entertainment.html');

});

getNewscategory('entertainment').then((data) => {
    console.log(data);
    updateUi(data);
}).catch((err) => {
    console.log(err);
});

// ...............updating the ui with health news..................

health.addEventListener('click', () =>{
    window.location.replace('./health.html');
    
});

getNewscategory('health').then((data) => {
    console.log(data);
    updateUi(data);
}).catch((err) => {
    console.log(err);
});

// ............updating the ui with business news..................

business.addEventListener('click', () =>{
    window.location.replace('./business.html');
    
});

getNewscategory('business').then((data) => {
    console.log(data);
    updateUi(data);
}).catch((err) => {
    console.log(err);
});

// ............updating the ui with sport news..................

sport.addEventListener('click', () =>{
    window.location.replace('./sport.html');
    
});

getNewscategory('sport').then((data) => {
    console.log(data);
    updateUi(data);
}).catch((err) => {
    console.log(err);
});