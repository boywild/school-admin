import Mock from 'mockjs2'
import { builder } from '../util'
const students = () => {
  return builder({
    data: [
      {
        id: 1,
        no: '202103050606',
        description: 'Alipay',
        callNo: '4657374959569696969',
        status: '18827032021',
        age: 33,
        school: '湖北大学知行学院',
        zy: '电子信息工程',
        updatedAt: '2018-07-26 00:00:00',
        score: 223
      },
      {
        id: 2,
        no: '2021030506063',
        description: 'Alipay',
        callNo: '4657374959569696969',
        status: '18827032021',
        age: 33,
        school: '湖北大学知行学院',
        zy: '电子信息工程',
        updatedAt: '2018-07-26 00:00:00',
        score: 223
      },
      {
        id: 3,
        no: '202103050606４',
        description: 'Alipay',
        callNo: '4657374959569696969',
        status: '18827032021',
        age: 33,
        school: '湖北大学知行学院',
        zy: '电子信息工程',
        updatedAt: '2018-07-26 00:00:00',
        score: 223
      },
      {
        id: 4,
        no: '202103050606３',
        description: 'Alipay',
        callNo: '4657374959569696969',
        status: '18827032021',
        age: 33,
        school: '湖北大学知行学院',
        zy: '电子信息工程',
        updatedAt: '2018-07-26 00:00:00',
        score: 223
      },
      {
        id: 5,
        no: '202103050606１',
        description: 'Alipay',
        callNo: '4657374959569696969',
        status: '18827032021',
        age: 33,
        school: '湖北大学知行学院',
        zy: '电子信息工程',
        updatedAt: '2018-07-26 00:00:00',
        score: 223
      },
      {
        id: 6,
        no: '2021030506067',
        description: 'Alipay',
        callNo: '4657374959569696969',
        status: '18827032021',
        age: 33,
        school: '湖北大学知行学院',
        zy: '电子信息工程',
        updatedAt: '2018-07-26 00:00:00',
        score: 223
      }
    ],
    pageSize: 10,
    pageNo: 0,
    totalPage: 6,
    totalCount: 57
  })
}
Mock.mock(/\/students/, 'get', students)
