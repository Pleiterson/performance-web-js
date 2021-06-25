(function(){
    const API_KEY = "AIzaSyCZENTwJq_Hreia9ZT1FKvS_KTB22xzeE";
    const CHANNEL_ID = "UCT_4wzTQqmcUvemNkeO0plA";

    const renderVideos = data => {

        const $container = document.getElementById('videos')

        const content = data.items.map(item => {

                console.log('item', item)

                return `
                    <figure>
                        <img src="${item.snippet.thumnails.medium.url}" alt="${item.snippet.description}" />
                        <figcaption>${item.snippet.description}</figcaption>
                        <iframe width="800" height="400" src="https://www.youtube.com/${item.id.videoId}" framborder="0" allow="acceleration" />
                `
        }).join(' ')

        fetch(`
                https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=20
            `
        )

        .then(res => res.json())
        .then(res => renderVideos(res));
    }
})();