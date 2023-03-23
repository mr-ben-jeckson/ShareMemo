
## Author

- [@ben-jeckson](https://github.com/mr-ben-jeckson)

## Acknowledgements
This project is open sourced MERN Stack Application and you can put your portfolio the whole entired project or parts of them.
## API References of Backend

#### REGISTER

```http
  POST /auth/register
```

| Req Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstName` | `string` | **Required**. min 2 - max 50 |
| `lastName` | `string` | **Required**. min 2 - max 50 |
| `email` | `string` | **Required** **Unqiue** |
| `password` | `string` | **Required**. min 8 |
| `picture` | `file` | **jpg** **jpeg** **png** |
| `location` | `string` | **Required** |
| `occupation` | `string` | **Required** |

#### LOGIN

```http
  POST /auth/login
```

| Req Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. min 2 - max 50 |
| `password` | `string` | **Required**. min 8 |

#### GET USER
```http
  GET /user/{req}
```
| Req Param | Type     | Description                | Headers |
| -------- | ------- | ------------------------- | ------- |
| `id` | `string` | **Required** | Authorization : **Bearer token** |

#### GET USER's FRIENDS
```http
  GET /user/{req}/friends
```
| Req Param | Type     | Description                | Headers |
| -------- | ------- | ------------------------- | ------- |
| `id` | `string` | **Required** | Authorization : **Bearer token** |

#### PATCH ADD FRIEND OR REMOVE FRIEND
```http
    PATCH /user/{req}/{req}
```
| Req Param | Type     | Description                | Headers |
| -------- | ------- | ------------------------- | ------- |
| `id` | `string` | **Required** | Authorization : **Bearer token** |
| `friendId` | `string` | **Required** |

#### GET ALL POSTS
```http
    GET /posts/
```
| Headers | Authorization : **Bearer Token** |
| ------- | ------ |

#### GET SINGLE USER's ALL POST
```http
    GET /posts/{req}/posts
```
| Req Param | Type     | Description                | Headers |
| -------- | ------- | ------------------------- | ------- |
| `id` | `string` | **Required** | Authorization : **Bearer token** |

#### PATCH ADDING LIKE OR REMOVING LIKE
```http
    PATCH /posts/{req}/like
```

| Req Param | Type     | Description                | Headers |
| -------- | ------- | ------------------------- | ------- |
| `id` | `string` | **Required** | Authorization : **Bearer token** |










## Installation

```
git clone https://github.com/mr-ben-jeckson/ShareMemo
```
```
cd backend && npm install 
```
```
open .env.example and copy all
```
```
touch .env or create a new file .env
```
```
MONGO_URL = cluster or mongodb://127.0.0.1:27017/MONGO_LOCAL_MONGO_DB 
PORT = Your host port or 5000
JWT_SECRET = Your secret string or @34iKnmQt
```
```
cd ../ Back to Main Folder and cd frontend
```
```
npm install
```
```
npm start
```
```
open constant.js in src Folder
```
```
replace your environment variables for base url and api url 

export const env = {
    APP_URL: "here for client",
    API_URL: "here for server"
};
```
```
Enjoy the app
```

# ShareMemo 

A photo sharing social media with friend



## Landing Page after login

![App Screenshot](https://raw.githubusercontent.com/mr-ben-jeckson/molla-theme/main/lib/scs.PNG)




## Tech Stack

**Client:** React, Redux, Material UI, Material Icons,

**Server:** Node, Express

