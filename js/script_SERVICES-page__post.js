var collectionOfPublishedPosts = document.querySelectorAll('.resentPosts__post');
// console.log(collectionOfPublishedPosts);
// console.log(window)

window.addEventListener('load', function() {
    for(let i = 0; i < collectionOfPublishedPosts.length; i += 1) {
            // console.log(collectionOfPublishedPosts[i].baseURI);
            // console.log(collectionOfPublishedPosts[i]);
            // console.dir(collectionOfPublishedPosts[i]);

            var idPost = collectionOfPublishedPosts[i].id;
            // console.log(x)

            var numberId = idPost.substring(idPost.length, idPost.length - 1)
            // console.log(numberId)

            var currentURL = collectionOfPublishedPosts[i].baseURI;
            // console.log(currentURL);

            var numberURL = currentURL.substring(currentURL.length - 5, currentURL.length - 6);
            // console.log(numberURL)


        if(numberURL === numberId) {
            collectionOfPublishedPosts[i].style.display = 'none';
        } else {
            collectionOfPublishedPosts[i].style.display = 'block';
        }
    }
});