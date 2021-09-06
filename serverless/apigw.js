exports.handler = async (event, _context) => {
    const { handler } = await import('../.output/server/index.mjs')
    const result = await handler(event)

    if (result.statusCode / 100 !== 2 && result.headers['content-type'])
        result.headers['content-type'] = 'text/html;charset=UTF-8'

    return result
}
