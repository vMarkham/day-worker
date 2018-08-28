# day-worker-server
The goal of DayWorker is to create a bridge between day laborers and those looking to hire a helping hand. DayWorker is designed to connect job seekers to a variety of different work, whether that be simple yard work, retiling a shower, or even building a deck; DayWorker will bring it's users together so that eager to work helping hands can find those that need them.

## Database Structure

![](./images/day_worker_ERD_rough.png)

## Setup
1. Fork and clone this repository
1. `createdb day-worker-dev`
1. `npm run setup`

## Routes


**GET /api/users/:id**
- Get a user by ID

**POST /api/users/register**
- Create a new user
    - required fields in req.body.create:
```
{
    name,           // STRING
    username,       // STRING
    email,          // STRING
    password,       // STRING
    zipcode,        // INTEGER
    phone           // STRING
}
```

**POST /api/users/login**
- Login existing user
    - required fields in req.body:
```
{
    email,          // STRING
    password,       // STRING
}
```

**PATCH /api/users/:id**
- Update current user info
    - at least one(1) of the following fields in body is required:
```
{
    name,           // STRING
    username,       // STRING
    email,          // STRING
    password,       // STRING
    zipcode,        // INTEGER
    phone           // STRING
}
```

**DELETE /api/users/:id**
- Delete a user by ID
