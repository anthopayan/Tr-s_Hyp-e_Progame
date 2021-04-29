var searchbtn = document.getElementById('searchbtn');
var searchuser = "";

document.getElementById('searchbtn').addEventListener('click', () => {
  console.log("click")
  var searchuser = document.getElementById('searchuser');
  argument = searchuser.value; 
  PageList(argument);
});


const PageList = (argument) => {
  
    const preparePage = () => {
      let cleanedArgument = argument.replace(/\s+/g, "-");
      let articles = "";
      let btn = "";
   

     
      
      const fetchList = (url, argument, count) => {
        let finalURL = url;
        if (argument) {
          
          finalURL = url + "&search=" + argument;
        }
       


        
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            response.results.forEach((article) => {
              articles += `
                    <div class="cardGame">
                      <h1>${article.name}</h1>
                      <h2>${article.released}</h2>
                      <a href = "#pagedetail/${article.id}">${article.id}</a>
                    </div>
                  `;
            });
            if (count < 0);{
            btn += `
            <div>
            <button id="showmore">Show more</button>
            </div>
          `
       
        }
 

            document.querySelector(".page-list .articles").innerHTML = articles;
            document.getElementById(`showmore`).innerHTML = btn;
          });
      };
 
      fetchList("https://api.rawg.io/api/games?key=" + process.env.KEY, cleanedArgument);
    };
    

  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">...loading</div>
        </section>
      `
  

    
      preparePage();
    };
  
    render();
  };
  export { PageList };

  