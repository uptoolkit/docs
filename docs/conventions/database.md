---
sidebar_position: 1
---

# Database

Every templates come with a very opinionated database structure that you cannot change. It allows to make some core concepts working amongst the time and frameworks so you cannot change that.

## Users table

Every toolkit have a concept of user with this default structure :

```mermaid
erDiagram
  User ||--|{ Account : ""
  User {
  string id
  string name
  string email
  timestamp emailVerified
  string image
  }
  User ||--|{ Session : ""
  Session {
  string id
  timestamp expires
  string sessionToken
  string userId
  }
  Account {
  string id
  string userId
  string type
  string provider
  string providerAccountId
  string refresh_token
  string access_token
  int expires_at
  string token_type
  string scope
  string id_token
  string session_state
  string oauth_token_secret
  string oauth_token
  }
  VerificationToken {
  string identifier
  string token
  timestamp expires
  }
```

Users:
- id: reference (could be an integer or uid)
- name: full name of the user
- password: password of the user
- email_verified_at
- language : the current user language in iso format
- created_at : created at time in YYYY-mm-dd H:i:s format
- updated_at : updated time in YYYY-mm-dd H:i:s format

Not mandatory but normalised
- image : the picture of the user (in a string format and full path)
- last_name : last name of the user
- first_name : first name of the user



