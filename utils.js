export const xhrFetch = url => {
    const xhr = new XMLHttpRequest;
    xhr.open("GET", url, false)
    xhr.send()

    return xhr.responseText;
}