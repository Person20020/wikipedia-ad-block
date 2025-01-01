var popups = [".banner", "vector-sitenotice-container", ".overlay-banner"]

function removeAds() {
    try {
        console.log('test');
        var ad = document.querySelectorAll(popups);
        for (var i = 0; i < ad.length; i++) {
            ad[i].remove();
        }
    }
    catch (err) {
        console.log('Error in removeAds(): ' + err);
    }
}

removeAds();