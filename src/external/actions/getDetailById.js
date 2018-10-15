export default function getDetailById (options) {
  const {id} = options
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          src: 'http://img2.ooopic.com/13/13/83/33bOOOPIC72_20211.jpg',
          fallbackSrc: 'http://i.dimg.cc/3a/cd/68/b4/f1/c9/44/c3/34/7d/d6/3c/e1/3f/62/ce.jpg',
          title: '南宁市人民政府办公厅关于印发南宁市人民政府会议制度的通知',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          createTime: '2018-02-26 16:16:55',
          nDetail: '<p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> <span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">各县、区人民政府，市政府各部门，各管委会，市级各双管单位，</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市直各事业、企业单位：</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">《南宁市人民政府会议制度》已经</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2016</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">年</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">11</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">月</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">12</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">日召开的市十四届人民政府第</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">次常务会议审议通过，现印发给你们，请认真贯彻执行。</span>&nbsp;&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2016</span>年<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">11</span>月<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">17</span>日&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　　　　　　　　　　　　　　　　　　　　<strong style="padding: 0px;list-style: none;line-height: 28px">南宁市人民政府会议制度</strong>&nbsp;　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">&nbsp;</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">为进一步规范市人民政府会议规程，提高会议质量和工作效率，根据自治区和市委的有关规定，特制定本制度。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">一、会议管理</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">坚持精简、高效、务实、节约的原则，提倡少开会、开短会、开小会、开电视或网络视频会议。市人民政府已经发文部署的工作，不再以市人民政府名义召开会议进行部署；能由部门召开的会议，不以市人民政府名义召开；能以电话沟通等方式解决问题的，不再召开会议；能一次性传达部署到基层的会议，不层层开会、层层传达；可以合并召开的会议尽量合并召开；可在小范围召开的会议不召开全市性会议。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">二、会议分类</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市人民政府会议分为市人民政府全体会议、市人民政府党组会议、市人民政府常务会议、市人民政府工作专题会议及市人民政府专业性工作会议等。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（一）市人民政府全体会议</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市人民政府全体会议是市人民政府部署全局工作、讨论决定重大事项的重要会议，会议由市长召集并主持。会议须有三分之二以上组成人员到会方可召开，每年至少召开一次，遇有重要情况可随时召开。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">主要任务：</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．传达贯彻党中央、国务院和自治区党委、政府及市委的重要决定、重要工作部署和重要会议精神；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定市人民政府工作中的重大事项；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">3</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论通过提请市人民代表大会审议的政府工作报告；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">4</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．部署市人民政府重要工作；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">5</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．通报市人民政府工作情况和全市经济社会发展形势；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">6</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论其他需要会议讨论的事项。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">出席人员：市长，副市长，秘书长，市人民政府工作部门主要负责人。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">列席人员：市人民政府党组其他成员，副秘书长和市人民政府其他部门主要负责人。根据工作需要可安排县区人民政府、管委会、市直企事业单位和人民团体的主要负责人列席会议。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（二）市人民政府党组会议</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市人民政府党组会议是集体研究讨论市人民政府重大事项、重大决策部署、党风廉政建设和反腐倡廉等工作的会议，会议由党组书记召集并主持，党组书记不能参加会议时可委托党组副书记召集并主持。会议应当有半数以上党组成员到会方可召开，讨论决定干部任免事项必须有三分之二以上党组成员到会。会议一般每月召开一次，遇有重要情况可随时召开。会议议题由党组书记提出，或由其他党组成员提出建议报党组书记确定。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">主要任务：</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．传达学习党中央、国务院和自治区党委、政府以及市委各项重大决策部署和相关文件精神；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．研究制定贯彻执行党中央、国务院和自治区党委、政府以及市委重大决策部署的具体措施；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">3</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．研究全市经济建设和社会发展中的重大问题，对市政府日常工作提出指导性意见；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">4</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．研究政府机构改革等重大问题；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">5</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．研究政府系统党的建设、党风廉政建设和反腐败工作等问题；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">6</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定需要向市委请示报告的重要事项；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">7</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．按规定应由党组决定的其他事项。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">出席人员：市人民政府党组成员。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">列席人员：根据工作需要，党组会议可邀请不是党组成员的市人民政府领导班子成员列席。会议召集人可根据议题内容指定有关人员列席会议。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（三）市人民政府常务会议</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市人民政府常务会议是讨论决定市人民政府工作中重大事项的决策性会议，会议由市长召集并主持，或委托负责常务工作的副市长召集并主持。会议须半数以上组成人员到会方可召开，原则上每周召开一次，遇有重要情况可随时召开。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">主要任务：</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．传达贯彻党中央、国务院和自治区党委、政府及市委的重要指示、重要工作部署和重要会议精神；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论报请自治区人民政府和市委审定的重大事项；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">3</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论提请市人民代表大会及其常务委员会审议的地方性法规草案，审议政府规章草案；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">4</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论提请市人民代表大会审议的政府工作报告、国民经济和社会发展中长期规划和年度计划、审计计划、财政预决算等重要报告；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">5</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定以市人民政府名义制发的规范性文件等重要文件；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">6</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定市人民政府重点工作和与人民群众利益密切相关的重大事项；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">7</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论重大财政资金安排、政府投资的重大建设项目；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">8</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论城市总体规划、近期建设规划及其年度实施计划、土地利用总体规划、年度建设用地计划和重要专项规划；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">9</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定重大改革方案、重要资源配置和社会分配调节事项及国有资产处置方面的重大事项；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">10</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定市人民政府对各县区人民政府、各管委会、各部门专项工作的考核事项，讨论决定市人民政府各类表扬奖励事项；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">11</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定以市人民政府名义举办的重大活动；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">12</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定各县区人民政府、各管委会、各部门向市人民政府请示的重要事项；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">13</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论决定按法律法规规定应当提交会议研究的其他事项。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">出席人员：市长，副市长，秘书长。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">列席人员：市人民政府党组其他成员，副秘书长、市人民政府办公厅副主任、市人民政府督查室主任，市人民政府发展研究中心主任。根据工作需要可安排县区人民政府、管委会和有关单位主要负责人列席会议。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（四）市人民政府工作专题会议</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市人民政府工作专题会议是研究处理市人民政府日常工作中具体问题的会议，根据工作需要不定期召开，由市长，副市长，秘书长或副秘书长召集并主持。会议议题由会议召集人提出或由市人民政府办公厅（以下简称办公厅）根据来文单位要求报会议召集人确定。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">主要任务：</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论研究市人民政府专项工作；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论研究市人民政府重要工作方案、计划、规划等；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">3</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论研究市人民政府重点工作、重大项目建设有关问题；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">4</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．讨论研究市人民政府有关部门提请市人民政府协调解决的问题；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">5</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．市人民政府与中直、区直单位对接研究具体工作；</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">6</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．按有关规定应提交会议研究的其他事项。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">与会人员：根据议题内容由办公厅提出意见和建议，报会议召集人确定。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（五）市人民政府专业性工作会议</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市人民政府专业性工作会议主要包括廉政、发展改革、工信、教育、民政、财政、人社、环保、城建、水利、农业、农村、商贸、旅游、文化、卫计、交通运输、安全生产、依法行政、扶贫开发、食品安全、政务服务公开等工作会议，原则上每年召开一次，请分管副市长出席。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">与会人员：根据工作需要，由办公厅研究提出意见和建议，报市长或分管副市长确定。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">三、会议组织</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（一）会议方案</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">按照《南宁市人民政府办公厅主要职责内设机构和人员编制规定》的要求，由办公厅负责提出会议方案（市人民政府专业性工作会议，会议提请单位需提前</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">个月向办公厅报送会议计划），并按公文处理规定逐级报批确定。会议方案主要包括会议时间、地点、召集人、与会人员、议程、文件材料及工作要求等内容。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（二）会议筹备</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．会议材料。有关单位应当于会前</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">3</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">个工作日将会议文本材料，包括正式文本（请示、报告）、说明材料、相关政策法律依据等报审，审定后的会议材料原则上于会前</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">个工作日送达与会人员。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">市政府领导同志的讲话稿由部门负责起草，原则上，于会前</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">10</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">个工作日内报办公厅；办公厅审核后，于会前</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">3</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">个工作日内报市政府领导同志审定。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．会议通知。会议通知原则上应提前</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">个工作日以书面形式通过市人民政府内务网办公自动化系统发至参会单位或个人。紧急情况可通过电话、短信通知。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">3</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．会场布置。办公厅负责按照中央、自治区和市委关于改进工作作风、密切联系群众有关规定和会议方案要求做好会标、座位安排、台卡摆放等工作；市机关事务管理局负责按照会议方案要求做好桌椅摆放和音响、灯光调试等工作。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">4</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．会议协调。办公厅负责落实会议安排、会议签到、会议材料印发、会议纪律督查等工作。根据工作需要，可安排有关部门协助配合。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">5</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．宣传报道。市属新闻媒体负责按照中央、自治区和市委有关规定，做好会议宣传报道工作。根据工作需要，重要新闻稿报秘书长或副秘书长审定。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">6</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">．会议纪要。会议讨论情况和决定应当如实记录。会议纪要由办公厅负责草拟，涉及政策性、专业性较强的内容可请有关部门配合。会议纪要报会议召集人签发。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（三）会议材料归档</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">办公厅于会后</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">10</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">个工作日内汇总整理会议的相关资料，包括会议通知、会议签到、会议文件、会议录音整理稿、会议纪要等，并按有关规定归档备查。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">四、会议要求</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（一）严格按规定参加会议。市长召集并主持的会议，涉及县区人民政府、管委会、部门的，由单位主要负责人参加；主要负责人不能参加的，由秘书长汇总并报市长同意后，可由分管负责人参加。副市长召集并主持的会议，由单位分管负责人参加（副市长分管的单位原则上由主要负责人参加），分管负责人因故不能参加的，经报会议召集人同意，可由单位其他负责人及熟悉业务的科长（副科长）参加。秘书长、副秘书长召集并主持的会议，原则上按会议方案要求安排人员参加，如需调整的，应报会议召集人同意。与会人员应提前</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">10</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">分钟进入会场，并按会议指定位置就坐。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（二）严格执行会议请假制度。参会人员因故不能出席会议的，应以书面形式请假，由秘书长、分管副秘书长或办公厅汇总后报会议召集人同意。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（三）提倡开短会，讲短话。市人民政府专业性工作会议，会议召开时间一般控制在</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">90</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">分钟以内。市人民政府主要领导同志出席会议并作总结性讲话，一般控制在</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">60</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">分钟以内；市人民政府其他领导同志讲话，一般控制在</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">30</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">分钟以内；市人民政府工作部门作工作汇报，一般控制在</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">15</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">分钟以内。其他会议按有关规定执行。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（四）发表意见简明扼要。除市人民政府专业性工作会议外，其它会议议题汇报人汇报时间一般不超过</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">8</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">分钟，其他参会人员发表意见不超过</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">5</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">分钟。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（五）严格执行保密制度。会议决定事项原则上以正式文件或会议纪要为准，并按会议方案规定的范围印发，未经审批同意，不得翻印或复印。涉密事项与会人员必须严格保密，会后将涉密文件在会场交由办公厅统一收回。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（六）严格遵守会场纪律。开会期间与会人员严禁打瞌睡、随意走动或离开会场，手机必须关机或调至静音、振动状态，不得从事与会议无关的其他工作。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（七）参会人员要注重仪容仪表，着装应当整齐、大方、得体，具体按会议方案要求执行。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（八）严格执行会议有关规定，厉行节约，反对铺张浪费，会议经费标准严格按照《南宁市本级会议费管理办法》执行。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">五、会议落实</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（一）市人民政府会议决定的事项，由办公厅组织有关部门具体实施。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（二）有关部门在执行中遇到重大问题应当及时报告市人民政府。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">（三）按照《南宁市政府系统督查工作督查通报办法》等有关文件要求，办公厅负责对会议确定事项落实情况进行督查和通报，由市绩效办将通报情况纳入全市年度绩效考评范围。</span>&nbsp; </p> <p style="padding: 0px;margin-top: 0px;margin-bottom: 29px;list-style: none;line-height: 28px;font-family: 宋体, Arial, sans-serif;white-space: normal;"> 　　<span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">六、本制度自发布之日起实施。《南宁市人民政府会议制度》（南府办〔</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">2011</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">〕</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">1</span><span style="padding: 0px;list-style: none;line-height: 28px;font-size: 16px">号）同时废止。市人民政府其他会议可参照本制度执行。</span> </p> <p> <br/> </p>',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },
        {
          id: 2,
          src: 'http://img2.ooopic.com/13/13/83/33bOOOPIC72_202.jpg',
          fallbackSrc: 'http://i.dimg.cc/3a/cd/68/b4/f1/c9/44/c3/34/7d/d6/3c/e1/3f/62/ce.jpg',
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
          fallbackSrc: 'http://i.dimg.cc/3a/cd/68/b4/f1/c9/44/c3/34/7d/d6/3c/e1/3f/62/ce.jpg',
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
          fallbackSrc: 'http://i.dimg.cc/3a/cd/68/b4/f1/c9/44/c3/34/7d/d6/3c/e1/3f/62/ce.jpg',
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
          fallbackSrc: 'http://i.dimg.cc/3a/cd/68/b4/f1/c9/44/c3/34/7d/d6/3c/e1/3f/62/ce.jpg',
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
          fallbackSrc: 'http://i.dimg.cc/3a/cd/68/b4/f1/c9/44/c3/34/7d/d6/3c/e1/3f/62/ce.jpg',
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
          fallbackSrc: 'http://i.dimg.cc/3a/cd/68/b4/f1/c9/44/c3/34/7d/d6/3c/e1/3f/62/ce.jpg',
          title: '标题七',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }
      ].filter(item => +item.id === +id)[0]
      resolve(data)
    }, 1000)
  })
}
