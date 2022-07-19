const accItem = document.querySelectorAll('.fax-hidden');
const accHeading = document.querySelectorAll('.fax-title');

for (i = 0; i < accHeading.length; i++) {

    accHeading[i].addEventListener('click', function () {
        let itemClass = this.parentNode.className;
        for (j = 0; j < accItem.length; j++) {
            accItem[j].className = 'fax-hidden';
        }
        if (itemClass == 'fax-hidden') {
            this.parentNode.className = 'selected';
        }
    })
}

