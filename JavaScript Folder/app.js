const APIController = (function() {
    const clientId = '';
    const clientSecret = '';

    //private methods
    const _getToken = async () -> {
        const result = await fetch('https://accounts.spotify.com/api/token'), {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/x-www-form-urlenconded',
                'Authorization': 'Basic'
            }
        }
    }
})