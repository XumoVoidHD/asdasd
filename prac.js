// script.js
let userDataArray = [];

function validateVideoID(videoID) {
    return /^[0-9]{5}$/.test(videoID);
}

function validateVideoDescription(description) {
    return description.length <= 250;
}

function validateVideoLength(length) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(length);
}

function validatePositiveInteger(value) {
    return /^[0-9]+$/.test(value);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateUserAge(age) {
    const numAge = parseInt(age);
    return !isNaN(numAge) && numAge >= 18 && numAge <= 100;
}

function validateProfileDescription(description) {
    return description.length <= 250;
}

function validateProfilePictureURL(url) {
    return url.length <= 100;
}

function validateRatings(rating) {
    const numRating = parseInt(rating);
    return !isNaN(numRating) && numRating >= 1 && numRating <= 5;
}

function displayErrors(errors) {
    for (const key in errors) {
        const errorElementId = `${key}Error`;
        const errorElement = document.getElementById(errorElementId);
        if (errorElement) {
            errorElement.textContent = errors[key];
        }
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function submitData() {
    clearErrors();
    const formData = document.getElementById('dataEntryForm');
    const videoID = formData.videoID.value;
    const videoDescription = formData.videoDescription.value;
    const videoLength = formData.videoLength.value;
    const likes = formData.likes.value;
    const comments = formData.comments.value;
    const shares = formData.shares.value;
    const views = formData.views.value;
    const userID = formData.userID.value;
    const userAge = formData.userAge.value;
    const userGender = formData.userGender.value;
    const followerCount = formData.followerCount.value;
    const followingCount = formData.followingCount.value;
    const totalLikes = formData.totalLikes.value;
    const totalVideos = formData.totalVideos.value;
    const profileDescription = formData.profileDescription.value;
    const profilePictureURL = formData.profilePictureURL.value;
    const ratings = formData.ratings.value;
    const location = formData.location.value;

    let errors = {};

    if (!validateVideoID(videoID)) errors.videoID = "Video ID must be a 5-digit positive integer.";
    if (!validateVideoDescription(videoDescription)) errors.videoDescription = "Video Description cannot exceed 250 characters.";
    if (videoLength && !validateVideoLength(videoLength)) errors.videoLength = "Invalid Video Length format (HH:MM:SS).";
    if (likes && !validatePositiveInteger(likes)) errors.likes = "Likes must be a positive integer.";
    if (comments && !validatePositiveInteger(comments)) errors.comments = "Comments must be a positive integer.";
    if (shares && !validatePositiveInteger(shares)) errors.shares = "Shares must be a positive integer.";
    if (views && !validatePositiveInteger(views)) errors.views = "Views must be a positive integer.";
    if (!validateEmail(userID)) errors.userID = "Invalid email format.";
    if (userAge && !validateUserAge(userAge)) errors.userAge = "User Age must be between 18 and 100.";
    if (!userGender) errors.userGender = "Please select a gender.";
    if (followerCount && isNaN(parseInt(followerCount))) errors.followerCount = "Follower Count must be an integer.";
    if (followingCount && isNaN(parseInt(followingCount))) errors.followingCount = "Following Count must be an integer.";
    if (totalLikes && isNaN(parseInt(totalLikes))) errors.totalLikes = "Total Likes must be an integer.";
    if (totalVideos && isNaN(parseInt(totalVideos))) errors.totalVideos = "Total Videos must be an integer.";
    if (!validateProfileDescription(profileDescription)) errors.profileDescription = "Profile Description cannot exceed 250 characters.";
    if (!validateProfilePictureURL(profilePictureURL)) errors.profilePictureURL = "Profile Picture URL cannot exceed 100 characters.";
    if (ratings && !validateRatings(ratings)) errors.ratings = "Ratings must be between 1 and 5.";
    if (!location) errors.location = "Please select a location.";

    if (Object.keys(errors).length > 0) {
        displayErrors(errors);
    } else {
        const userData = {
            videoID,
            videoDescription,
            videoLength,
            likes: parseInt(likes) || 0,
            comments: parseInt(comments) || 0,
            shares: parseInt(shares) || 0,
            views: parseInt(views) || 0,
            userID,
            userAge: parseInt(userAge) || null,
            userGender,
            followerCount: parseInt(followerCount) || 0,
            followingCount: parseInt(followingCount) || 0,
            totalLikes: parseInt(totalLikes) || 0,
            totalVideos: parseInt(totalVideos) || 0,
            profileDescription,
            profilePictureURL,
            ratings: parseInt(ratings) || null,
            location
        };
        userDataArray.push(userData);
        displayUserData();
        formData.reset();
    }
}

function displayUserData() {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = "";
    if (userDataArray.length === 0) {
        userDataDiv.innerHTML = "<p>No user data entered yet.</p>";
        document.getElementById('avgLikes').textContent = '0';
        document.getElementById('avgVideos').textContent = '0';
        document.getElementById('avgRatings').textContent = '0';
        document.getElementById('highRatingUsers').textContent = '0';
        return;
    }

    userDataArray.forEach((user, index) => {
        userDataDiv.innerHTML += `
            <div class="user-entry">
                <h3>User ${index + 1}</h3>
                <p><strong>Video ID:</strong> ${user.videoID}</p>
                <p><strong>Description:</strong> ${user.videoDescription}</p>
                <p><strong>Length:</strong> ${user.videoLength ||