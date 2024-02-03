


document.addEventListener('DOMContentLoaded', (event) => {
    const postButton = document.querySelector('button');
    const feedSection = document.querySelector('.Feedheading');
    
    postButton.addEventListener('click', function() {
  const userPost = document.querySelector('textarea').value;
  const postContainer = document.createElement('div');
  postContainer.style.cssText = `
    border: 1px solid #D3D3D3;
    width: 521px;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin-top: 10px;
    padding: 12px;
    box-sizing: border-box;
    flex-direction: column;
  `;

  const userProfile = document.createElement('div');
  userProfile.style.cssText = `
    display: flex;
    align-items: center;
    margin-bottom: 12px; /* space between profile and text */
  `;

  const profileImage = document.createElement('img');
  profileImage.src = 'profile_image.png'; // Replace with the path to the user's profile image
  profileImage.alt = 'User Profile';
  profileImage.style.cssText = `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px; /* space between profile image and text */
  `;

  const userName = document.createElement('div');
  const userUsername = document.createElement('div');
  userName.textContent = 'Vibhu  '; // Replace with the actual user name
  userUsername.textContent = '@ByVibhu'; // Replace with the actual username
  userUsername.style.cssText = `
    color: #808080; /* light grey color for username */
    font-size: 0.8em;
  `;

  userProfile.appendChild(profileImage);
  userProfile.appendChild(userName);
  userProfile.appendChild(userUsername);
  postContainer.appendChild(userProfile);

  const postText = document.createElement('div');
  postText.textContent = userPost;
  postText.style.cssText = `
    width: 100%; /* full width of the container */
    min-height: 50px; /* minimum height */
    word-wrap: break-word;
  `;

  postContainer.appendChild(postText);
  feedSection.appendChild(postContainer);
});
  });