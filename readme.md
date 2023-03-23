
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









