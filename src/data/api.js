const settings = {
    host: 'https://parseapi.back4app.com',
    appId: '9WmSPe4rAwgdhoXBMDzkWWX2wcr3vhhLFGF22TLe',
    jsId: 'ToIEo974K1FxUdIUV7pkqNBYzcnT1kSh1ECCMGIU'
}

async function requester(url, options) {
    try {
        const response = await fetch(settings.host + url, options);

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || result.message);
        }

        return result;
    } catch(err) {
        alert(err.message);
        throw err;
    }
}

function getOptions(method, body) {
    const options = {
        method,
        headers: {
            "X-Parse-Application-Id": settings.appId,
            "X-Parse-Javascript-Key": settings.jsId
        }
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = body;
    }

    return options;
}

export async function get(url) {
    return await requester(url, getOptions('get'));
}

export async function post(url, body) {
    return await requester(url, getOptions('post', body));
}

export async function put(url, body) {
    return await requester(url, getOptions('put', body));
}

export async function del(url) {
    return await requester(url, getOptions('delete'));
}

