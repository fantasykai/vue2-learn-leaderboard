var vm = new Vue({
    el: '#user-list',
    data: {
        ranking: [],
        odd: 'odd',
        even: 'even'

    },
    mounted: function () {
        axios.get('static/mockdata.json').then((res) => {
            this.ranking = res.data._items
            console.log("ranking:" + res.data._items)
        });
    },
    filters: {
        numFormat: function (num) {
            if (num < 1000) {
                return num
            } else if (num > 1000 && num < 10000) {
                return num / 1000 + 'k';
            } else if (num > 10000) {
                return num / 10000 + 'w';
            }
        }

    },
    methods: {
        medals: function (index) {
            if (index === 0) {
                return 'img/gold.png';

            } else if (index === 1) {
                return 'img/silver.png';

            } else if (index === 2) {
                return 'img/cooper.png';
            }
        }
    }
});