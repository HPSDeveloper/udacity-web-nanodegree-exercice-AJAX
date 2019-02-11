/**
 * Created by Hans-Peter Schmid on 22.12.2018.
 */
function addArticles(jsData){ //jQuery.ajax passing JavaScript-Object.
    let htmlContent = '';
    if(jsData && jsData.response && jsData.response.docs){
        let body = document.getElementsByTagName('body')[0];
        for(doc of jsData.response.docs){
            htmlContent = `<h1>${doc.headline.main}</h1>
                               <div>${doc.snippet}</div>`;
            var div = document.createElement('div');
            div.innerHTML = htmlContent;
            body.appendChild(div);
        }
    }else{
        htmlContent = '<div class="error-no-image">No content available</div>';
        document.body.innerHTML = htmlContent;
    };

}
const searchedForText = 'fetch api';
fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=336836fcc47c46d0a41ff200a23e129f`)
    .then(response => response.json())
    .then(addArticles);
