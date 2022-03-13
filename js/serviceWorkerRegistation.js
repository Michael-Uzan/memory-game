if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            await navigator.serviceWorker.register('/memory-game/serviceWorker.js')
            console.log('Service Worker: Registered')
        } catch (err) {
            console.log('Service Worker: Error: ', err)
        }
    })
}