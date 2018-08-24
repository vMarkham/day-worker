Create the Uber of day traders who want to do yard work for a day or maybe tile or build a deck, or just need to make some cash and has two willing hands.

# day-worker-server

## Database Structure

![]()

## Setup
1. Fork and clone this repository
1. `createdb day-worker-dev`
1. `npm run setup`

## Routes

**GET /api/users**
- generic/temp route for testing

**GET /api/users/:id**
- generic/temp route for testing

**POST /api/users**
- Create a new user
    - required fields in body:
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

