import generateComponent from '../component'

const rootRouter = {
  path: '/'
}

export default function generateRouter (config, routes) {
  const {pages, parsered} = config
  if (!parsered) {
    console.error('config is not parsed!')
    return
  }
  // let routers = []
  pages.forEach((page, index) => {
    const {name, router} = page
    if (router) {
      const {path, permission} = router
      if (!!page.indexRedirect && !rootRouter.redirect) {
        rootRouter.redirect = path
      }
      routes.push(rootRouter)
      let temp = {
        path,
        name,
        meta: {
          requireAuth: !!permission,
          index
        },
        component: generateComponent(page)
      }

      routes.push(temp)
    }
  })
}
