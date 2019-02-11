/**
 * Created by Hans-Peter Schmid on 22.12.2018.
 */
function addArticles(){
    const data = JSON.parse(this.responseText);
    if(data && data.response && data.response.docs){
        let body = document.getElementsByTagName('body')[0];
        for(doc of data.response.docs){
            let htmlContent = `<h1>${doc.headline.main}</h1>
                               <div>${doc.snippet}</div>`;
            var div = document.createElement('div');
            div.innerHTML = htmlContent;
            body.appendChild(div);
        }
    }else{
        htmlContent = '<div class="error-no-image">No content available</div>';
    };
    document.body.innerHTML = htmlContent;
}
const searchedForText = 'JavaScript';
const articleRequest = new XMLHttpRequest();
articleRequest.onload = addArticles;
articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=336836fcc47c46d0a41ff200a23e129f`);
articleRequest.send();