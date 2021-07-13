const getLastPageFromParams = (headers) => {
    const headerPagination = headers.link
    const relLast = headerPagination.split(',').filter(rel => rel.indexOf('rel="last"') !== -1)[0]
    return +relLast.substring(relLast.lastIndexOf('?') + 1, relLast.lastIndexOf('>')).split('&').map(param => param.split('='))[1][1]
}
export {
    getLastPageFromParams
}