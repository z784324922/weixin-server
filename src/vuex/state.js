
//  state 唯一数据源   存储组件的数据 
//  获取state  store.state.count 

//  mapState 
// store.state.key
// this.$store.state.key
export default {
    date:"",
    daily:[],
    userInfo:[],
    nowDay:new Date(),
    
    slots:[
        {
            flex: 1,
            values: [],
            className: 'slot',
        }
    ],
    refuelingList:[],   //加油工单
    slagCarWorkList:[],  //渣车工单
    backhoeWorkList:[],  //挖机工单
    myProjects:[], //所有项目
    projectId:"", //项目id
    project:"", //第一个项目名
    backhoeQuestions:[
        {
            questionId:1,
            question:"若使用途中工作配件无法正常使用（脚踏板感应不灵敏、充电器无法充电、手机支架无法固定）怎么办",
            answer:"联系土老板工作人员进行免费更换"
        },{
            questionId:2,
            question:"若在工作时，经常忘记拍照怎么办",
            answer:"请牢记土老板app正确操作流程，对自己的收入和对运输车司机的收入负责"
        },{
            questionId:3,
            question:"光线不太好的情况下拍的照片无法识别运输车量编号怎么办",
            answer:"这些数据将无法计算在正常计数次数上，请项目方改善施工照明条件"
        },{
            questionId:4,
            question:"若在工作时，无意拍错或漏拍怎么办",
            answer:"请在第一时间联系项目管理员多维度核对处理，若超时，错拍或漏拍按没有工作量进行处理"
        },{
            questionId:5,
            question:"下班工作之余，在哪里查看当日工作量",
            answer:"打开土老板app并登录，主页面会显示今日工时、今日已挖车数、本月工时、本月挖车数，自行查看"
        },{
            questionId:6,
            question:"若在工作时，土老板app自动退出怎么办",
            answer:"土老板app在6分钟内未操作的情况下会自行退出，请重新登录即可"
        },{
            questionId:7,
            question:"土老板app数据会不会因为手机原因丢失",
            answer:"土老板app产生的所有数据都会实时自动上传到土老板专用服务器上，不用担心数据会丢失，数据丢失与否手机无关"
        }
    ],
    slagcarQuestions:[
        {
            questionId:8,
            question:"怎么查询当日装载数据",
            answer:"打开土老板app并登录，主页面点击今日装载车数即可查询"
        },
        {
            questionId:9,
            question:"管理员说我有几车没有行驶轨迹怎么办",
            answer:"我们的计量逻辑是通过多维度来计量运输车装载次数，若有无轨迹数据出现，则可以通过其他维度来定性是否为正确数据，请按正确操作流程操作则基本上不会出现无轨迹情况"
        },
        {
            questionId:10,
            question:"我手机内存不足会不会影响数据准确性",
            answer:"不会，因为运输车辆匹配挖机及运输车量轨迹数据都是通过网络实现实时上传至土老板自己的服务器进行储存，所需手机内存要求并不高"
        },
        {
            questionId:11,
            question:"我把挖机司机得罪了，他故意不给我拍照怎么办",
            answer:"若发生此类情况，请及时联系土老板工作人员，我们会通过轨迹维度判断运输车是否正常工作，并及时联系项目管理员或挖机老板进行沟通处理，确保以后不再出现类似事件"
        },
        {
            questionId:12,
            question:"挖机司机因为非人为原因导致拍照出现问题怎么办",
            answer:"我们会第一时间与项目管理员沟通或者挖机司机沟通，检查挖机司机使用的软件设备，有问题及时修复或更换，并通过其他维度确保运输车司机数据的正常，保证司机的利益不会受到影响"
        },
    ]
}

