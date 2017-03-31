var vm = new Vue({
    el: '#user-list',
    data: {
        ranking: []
    },
    mounted: function () {
        axios.get('static/mockdata.json').then((res) => {
            this.ranking = res.data._items
            console.log("ranking:" + res.data._items)
        });
    }
});