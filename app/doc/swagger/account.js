module.exports = {
    login: {
        method: "post" ,
        path: "/login",
        
        tags: [
            "계정"
        ],

        summary: "로그인",
        description: "아이디, 비밀번호를 통해 엑세스 토큰 발급",
        
        parameters: [
            {
                name: "id",
                description: "사용자의 아이디",
                type: "string",
                in: "query",
                required: true
            },
            {
                name: "pw",
                description: "사용자의 비밀번호",
                type: "string",
                in: "query",
                required: true
            }
        ],

        responses: {
            "200": {
                description: "로그인 성공, 엑세스 토큰 발급",
                
                examples: {
                    "application/json": {
                        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhN2VkZGU4Y2I4MDkzMzQ4ODQ3MDIyOSIsImlhdCI6MTUxODI2OTI5NCwiZXhwIjoxNTE4ODc0MDk0fQ.r5_5vPzS3aa9UgGTR49xp9QyqkngCk8AjboOJjmeTUQ"
                    }
                }
            }
        }
    },

    register: {
        method: "post",
        path: "/register",
        
        tags: [
            "계정"
        ],

        summary: "회원가입",
        description: "사용자 등록",

        parameters: [
            {
                name: "id",
				description: "사용자의 아이디",
				type: "string",
				in: "query",
				required: true
            },
            {
                name: "pw",
				description: "사용자의 비밀번호",
				type: "string",
				in: "query",
				required: true
            },
            {
                name: "name",
				description: "사용자의 이름",
				type: "string",
				in: "query",
				required: true
            },
            {
                name: "email",
				description: "사용자의 이메일",
				type: "string",
				in: "query",
				required: true
            },
            {
                name: "phone",
				description: "사용자의 전화번호",
				type: "string",
				in: "query",
				required: true
            },
        ],

        responses: {
			"201": {
				description: "회원가입 완료"
			}
		}
	}
}