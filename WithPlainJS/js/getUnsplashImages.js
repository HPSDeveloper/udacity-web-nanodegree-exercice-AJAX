/**
 * Created by Hans-Peter Schmid on 22.12.2018.
 */
function addImage(){
    let htmlContent = '';
    const data = JSON.parse(this.responseText);
    if(data && data.results && data.results[0]){
        const firstImage = data.results[0];
        htmlContent = `<figure>
            <img src="${firstImage.urls.regular}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                       </figure>`;
    }else{
        htmlContent = '<div class="error-no-image">No images available</div>';
    };
    document.body.innerHTML = htmlContent;
}
const searchedForText = 'JavaScript';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID dc6ccb5a381df77e8f1ca97e5ab7db0c52d9cfb4ac11d9e770fe92e4d3231cf3');
unsplashRequest.send();