export default function getLists (options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          src: 'http://img2.ooopic.com/13/13/83/33bOOOPIC72_20211.jpg',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          id: 2,
          src: 'http://img2.ooopic.com/13/13/83/33bOOOPIC72_202.jpg',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          id: 3,
          src: 'http://img.hkwb.net/att/site2/20140611/ec7002f7c3011c4f9c866ee218a1da45.jpg',
          title: '标题三',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          id: 4,
          src: 'http://img2.ooopic.com/13/13/83/33bOOOPIC72_202.jpg',
          title: '标题四',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          id: 5,
          src: 'http://img2.ooopic.com/13/13/83/33bOOOPIC72_202.jpg',
          title: '标题五',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          id: 6,
          src: 'http://img.hkwb.net/att/site2/20140611/ec7002f7c3011c4f9c866ee218a1da45.jpg',
          title: '标题六',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          id: 7,
          src: 'http://img2.ooopic.com/13/13/83/33bOOOPIC72_20211.jpg',
          title: '标题七',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }
      ]
      resolve(data)
    }, 1000)
  })
}
