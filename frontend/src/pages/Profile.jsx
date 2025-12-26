import React from 'react'

const Profile = () => {
    let user= {
    "id": "u101",
    "username": "tech_traveller",
    "fullName": "Aarav Sharma",
    "profilePicture": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    "bio": "Traveller | Photographer | Tech Enthusiast",
    "followers": 12500,
    "following": 450,
    "postsCount": 134,
    "posts": [
    {
      "id": "p101",
      "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "location": "Maldives",
      "caption": "Paradise found 🌊✨",
      "likes": 1453,
      "comments": 45,
      "uploadTime": "2025-01-02T14:30:00Z"
    },
    {
      "id": "p102",
      "imageUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "location": "New York City",
      "caption": "City lights & late nights 🌃",
      "likes": 998,
      "comments": 32,
      "uploadTime": "2025-01-11T09:12:00Z"
    },
    {
      "id": "p103",
      "imageUrl": "https://images.unsplash.com/photo-1526481280695-3c720685208b",
      "location": "Manali, India",
      "caption": "Into the mountains ⛰️❄️",
      "likes": 2050,
      "comments": 67,
      "uploadTime": "2025-01-21T11:45:00Z"
    }
  ],

  }

 

 


  return (
    <div>
        <img src={user.profilePicture} />
        <h2>{user.fullName} </h2>
        <h3>@{user.username}</h3>
        <p>{user.bio}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Posts: {user.postsCount}</p>
        <div>
            {user.posts.map((post)=>(
                <div key={post.id}>
                    <img src={post.imageUrl} style={{width:"300px"}} />         
                    <p>{post.caption}</p>
                    <p>Location: {post.location}</p>
                    <p>Likes: {post.likes}</p>
                    <p>Comments: {post.comments}</p>
                    <hr />
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Profile
