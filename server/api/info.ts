export default defineEventHandler((event) => {

    return {
      node: event.node,
      context: event.context,
      headers: event.headers
    }
  })