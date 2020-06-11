import Mock from 'mockjs'
Mock.setup({
  timeout: '100-500'
});

let getListData = () => {
  // const num = Math.floor(Math.random() * 50);
  const listData = [];
  for (let i = 0; i < 30; i++) {
    listData.push(
      Mock.mock({
        'img': "@Image('30x30','#c33', '#ffffff','小北鼻')",
        'title': '@ctitle',
        'avatar': "@Image('30x40','#c33', '#ffffff','小北鼻')",
        'user': '@cname',
        'liked': true,
      })
    )
  }
  console.log(listData);
  return listData
}

//waterfall
Mock.mock('/api/defect/waterfall', 'get', req => getListData());

export default Mock;