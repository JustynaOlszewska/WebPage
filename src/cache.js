 function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function () {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["../img/icons8-triangle-arrow-48 (1).png",
    "../img/icons8-triangle-arrow-48 (2).png", "../img/icons8-triangle-arrow-48.png",
    "../img/icons8-up-24.png", "../img/icons8-quote-left-64.png",
    "../img/icons8-chevron-right-30.png", "../img/icons8-chevron-left-30.png"
])

  

