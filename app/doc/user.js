module.exports = {
    find: {
        method: "get",
        path: "/user",
        tags: [
            "사용자"
        ],
        summary: "사용자 목록 조회",
        description: "사용자 목록 조회 및 이름, 위치를 이용한 사용자 검색",
        parameters: {
            "x-access-token": {
                description: "사용자의 엑세스 토큰 (JWT)",
                type: "string",
                in: "header",
                required: true
            },
            name: {
                description: "사용자 이름 기반 검색을 위한 쿼리 파라미터 (사용자 이름)",
                type: "string",
                in: "query",
                required: true
            }
        },
        responses: {
            "200": {
                description: "사용자 목록 조회 성공",
                examples: {
                    "application/json": [
                        {
                            "id": "unko",
                            "name": "unko",
                            "email": "unko@gmail.com",
                            "phone": "010-5055-4752",
                            "ward": [
                                30.154,
                                127.1452
                            ],
                            "schools": [
                                {
                                    "_id": "5545sdfssfeddfdf",
                                    "name": "unko elementry school"
                                }
                            ]
                        },
                    ]
                }
            }
        }
    },

    profile: {
        find: {
            method: "get",
            path: "/user/profile",
            tags: [
            "사용자"
            ],
            summary: "사용자 프로필 조회",
            description: "사용자 자신의 프로필 조회",
            parameters: {
                "x-access-token": {
                    description: "사용자의 엑세스 토큰 (JWT)",
                    type: "string",
                    in: "header",
                    required: true
                }
            },
            responses: {
                "200": {
                    description: "사용자 프로필 조회 성공",
                    examples: {
                        "application/json": [
                            {
                                "id": "unko",
                                "name": "unko",
                                "email": "unko@gmail.com",
                                "phone": "010-5055-4752",
                                "ward": [
                                    30.154,
                                    127.1452
                                ],
                                "schools": [
                                    {
                                        "_id": "5545sdfssfeddfdf",
                                        "name": "unko elementry school"
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        
        update: {
            method: "put",
            path: "/user/profile",
            tags: [
            "사용자"
            ],
            summary: "사용자 프로필 수정",
            description: "사용자 자신의 프로필 수정",
            parameters: {
                "x-access-token": {
                    description: "사용자의 엑세스 토큰 (JWT)",
                    type: "string",
                    in: "header",
                    required: true
                },
                name: {
                    description: "사용자 이름",
                    type: "string",
                    in: "query",
                    required: true
                },
                email: {
                    description: "사용자 이메일",
                    type: "string",
                    in: "query",
                    required: true
                },
                phone: {
                    description: "사용자 전화번호",
                    type: "string",
                    in: "query",
                    required: true
                }
            },
            responses: {
                "200": {
                    description: "사용자 프로필 수정 성공"
                }
            }
        }
    }
}