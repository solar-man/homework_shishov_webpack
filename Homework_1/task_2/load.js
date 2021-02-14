function loadScript(urls, callback) {
    const srciptArr = Array.from(document.getElementsByTagName('script'), (elem) => elem.attributes.src);
    const promises = [];
    switch ( typeof (urls)) {
        case 'undefined' :
            break;
        case 'function' :
            urls();
            break;
        case 'string' :
            urls = [urls];
        case 'object' :
            for (let url of urls) {
                if(!srciptArr.includes(url)) {
                    const element = document.createElement("script");
                    element.type = "text/javascript";
                    element.src = url;
                    promises.push(new Promise(resolve => {
                        element.onload = resolve;
                    }));
                    document.body.appendChild(element);
                }
            }
            Promise.all(promises).then(callback);
    }
}
