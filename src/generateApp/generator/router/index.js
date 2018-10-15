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
  const redirectPage = pages.filter(page => page.indexRedirect)[0]
  // let routers = []
  if (redirectPage) {
    rootRouter.redirect = redirectPage.router.path
    routes.push(rootRouter)
  }
  pages.forEach((page, index) => {
    const {name, router} = page
    if (router) {
      const {path, permission} = router
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
  console.log(routes, 'routes')
}
