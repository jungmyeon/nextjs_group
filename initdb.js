// 몽고 DB
const {MongoClient} = require('mongodb');

// title, slug, summary, content, creator, creator_email
const initData = [
    {
        title: '여행사진 동아리',
        slug: 'travel-photo-club',
        image: '/image/photo1.jpg',
        summary: '우리는 함께 여행의 아름다움을 사진으로 담아내는 동아리입니다.',
        content: '여러분들과 함께 멋진 여행지에서 사진을 찍으며 즐거운 시간을 보내고 싶습니다.',
        creator: '김유신',
        creator_email: 'travelphoto@google.com'
      },
      {
        title: '창업 동아리',
        slug: 'entrepreneurship-club',
        image: '/image/photo2.jpg',
        summary: '창의적이고 도전적인 사람들을 찾습니다.',
        content: '우리 동아리는 초기 스타트업 단계에서의 도움을 주는 것을 목표로 합니다.',
        creator: '홍길동',
        creator_email: 'startupclub@google.com'
      },
      {
        title: '프로그래밍 동아리',
        slug: 'programming-club',
        image: '/image/photo3.jpg',
        summary: '코딩을 좋아하고 함께 공부하고 싶은 학생들을 모집합니다.',
        content: '우리 동아리는 프로그래밍 언어와 알고리즘을 공부하며 실제 프로젝트를 개발하는 기회를 제공합니다. ',
        creator: '유관순',
        creator_email: 'programmingclub@google.com'
      },
      {
        title: '음악 연주 동아리',
        slug: 'music-performance',
        image: '/image/photo4.jpg',
        summary: '우리는 다양한 악기를 연주하고 함께 공연을 준비하는 동아리입니다.',
        content: '연주 동아리는 매주 정기적으로 연습을 진행하고, 학교 및 지역 공연에 참여합니다.',
        creator: '이순신',
        creator_email: 'musicclub@google.com'
      },
      {
        title: '환경 보호 동아리',
        slug: 'environment-club',
        image: '/image/photo5.jpg',
        summary: '우리는 환경 보호를 위해 해변 청소 봉사활동을 진행하는 동아리입니다.',
        content: '환경 동아리는 지속 가능한 삶을 실천하고 환경 문제에 대해 인식을 높이기 위해 다양한 봉사 활동을 계획하고 있습니다.',
        creator: '홍범도',
        creator_email: 'environmentclub@google.com'
      },
    ];

    // 몽고 DB 연결
    async function connectDB(){
        const url = 'mongodb+srv://admin:admin@cluster0.pjqsxxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        const options = {};
        let connectDB;

        if(process.env.NODE_ENV === 'development'){
            if(!global._mongo){
                global._mongo = new MongoClient(url, options).connect()
            }
            return connectDB = global._mongo
        }else{
            return connectDB = new MongoClient(url, options).connect()
        }
    }

    async function insertDummyData(){
        const client = await connectDB();       // url로 연결
        const db = client.db('mydb')        // Database 이름으로 연결
        const collection = db.collection('group');      // group 컬렉션에 접근
        
        await collection.insertMany(initData);          // 객체 배열을 전부 입력(insertOne)
        console.log(`${result} 입력`);
    }
    insertDummyData()

    // node 파일명 
    // node initdb.js