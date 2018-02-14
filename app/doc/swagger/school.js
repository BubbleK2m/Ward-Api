module.exports = {
    find: {
        method: 'get',
        path: '/school',

        tags: [
            '사용자'
        ],

        parameters: [
            {
                name: 'x-access-token',
                description: '사용자의 엑세스 토큰 (JWT)',
                type: 'string',
                in: 'header',
                required: true
            },
            {
                name: 'name',
                description: '학교 이름 기반 검색을 위한 쿼리 파라미터 (학교 이름)',
                type: 'string',
                in: 'query',
                required: true
            }
        ],

        responses: {
            '200': {
                description: '학교 목록 조회 성공',
                examples: {
                    'application/json': [
                        {
                            '_id': '5545sdfssfeddfdf',
                            'name': 'unko elementry school'
                        },
                        {
                            '_id': '647823sdf5478q85',
                            'name': 'unko middle school'
                        },
                        {
                            '_id': '75sdf45786wer5df',
                            'name': 'unko high school'
                        }
                    ]
                }
            }
        }
    }
}