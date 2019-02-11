/**
 * AJAX Reuest with JQuery including Error-Handling
 */
function addImage(jsData){  //JQuery.axax is passing Javascript object.
    let htmlContent = '';
    if(jsData && jsData.results && jsData.results[0]){
        const firstImage = jsData.results[0];
        htmlContent = `<figure>
            <img src="${firstImage.urls.regular}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                       </figure>`;
    }else{
        //Not shure if this is needed, as the Error Handling is done in the ".fail" path too.
        htmlContent = '<div class="error-no-image">No images available</div>';
    };
    document.body.innerHTML = htmlContent;
}
function handleError(jqXHR, textStatus){
    let htmlContent = '';
    if(jqXHR.responseText){
        htmlContent = jqXHR.responseText;
    }else{
        htmlContent = '<div class="error-no-image">No images available</div>';
    }
    document.body.innerHTML = htmlContent;
}
const searchedForText = 'jQuery';

$.ajax({
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
    // headers: {Authorization: 'Client-ID dc6ccb5a381df77e8f1ca97e5ab7db0c52d9cfb4ac11d9e770fe92e4d3231cf3_FALSCH'}
    headers: {Authorization: 'Client-ID dc6ccb5a381df77e8f1ca97e5ab7db0c52d9cfb4ac11d9e770fe92e4d3231cf3'}
}).done(addImage)
    .fail(handleError);
