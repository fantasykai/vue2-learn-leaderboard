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