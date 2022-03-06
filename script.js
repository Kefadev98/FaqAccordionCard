const accItem = document.querySelectorAll('.faks-hidden');
const accHeading = document.querySelectorAll('.faks-title');

for (i = 0; i < accHeading.length; i++) {

    accHeading[i].addEventListener('click', function () {
        let itemClass = this.parentNode.className;
        for (j = 0; j < accItem.length; j++) {
            accItem[j].className = 'faks-hidden';
        }
        if (itemClass == 'faks-hidden') {
            this.parentNode.className = 'selected';
        }
    })
}

