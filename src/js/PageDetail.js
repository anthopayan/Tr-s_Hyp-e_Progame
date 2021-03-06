const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url + argument + "?key=" + process.env.KEY;
console.log(argument);
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { genres, stores, rating, ratings_count, publishers, tags, platforms, developers, name, released, description, website } = response;

          let articleDOM = document.querySelector(".page-detail .article");
          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("a.site").innerHTML = website;
          articleDOM.querySelector("p.rating").innerHTML = rating;
          articleDOM.querySelector("p.ratings_count").innerHTML = ratings_count;
          
          articleDOM.querySelector("a.site").href = website;
          var listpublisher = [];
          publishers.forEach((publisher) => {
            listpublisher.push(publisher.name);
          });
          articleDOM.querySelector("p.publishers").innerHTML = listpublisher.join(', ');
          var listtag = [];
          tags.forEach((tag) => {
            listtag.push(tag.name);
          });
          articleDOM.querySelector("p.tags").innerHTML = listtag.join(', ');
          var listgenre = [];
          genres.forEach((genre) => {
            listgenre.push(genre.name);
          });
          articleDOM.querySelector("p.genres").innerHTML = listgenre.join(', ');
          var listdeveloper = [];
          developers.forEach((developer) => {
            listdeveloper.push(developer.name);
          });
          articleDOM.querySelector("p.developers").innerHTML = listdeveloper.join(', ');
          var listplatform = [];
          platforms.forEach((platform) => {
            listplatform.push(platform.platform.name);
          });
          articleDOM.querySelector("p.platforms").innerHTML = listplatform.join(', ');
          articleDOM.querySelector("a.stores").innerHTML = stores[0].store.name;
          articleDOM.querySelector("a.stores").href = `http://${stores[0].store.domain}`;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <p class="description"></p>
          <p>Release Date:</p>
          <p class="release-date">Release date : <span></span></p>
          <p>Publisher:</p>
          <p class="publishers"></p>
          <p>Tags:</p>
          <p class="tags"></p>
          <p>Genre:</p>
          <p class="genres"></p>
          <p>Developer:</p>
          <p class="developers"></p>
          <p>Platforms:</p>
          <p class="platforms"></p>
          <p>Moyenne:</p>
          <p class="rating"></p>
          <p>Votes:</p>
          <p class="ratings_count"></p>
          <p>Site:</p>
          <a class="site"></a>
          <p>BUY:</p>
          <a class="stores" ></a>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageDetail };