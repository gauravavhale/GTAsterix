function UserProfile({ name }) {
	return (
		<div>
			<h1>User Profile</h1>
			<p>Name: {name}</p>
		</div>
	);
}

const UserProfileWithLoading = withLoading(UserProfile);

window.UserProfileWithLoading = UserProfileWithLoading;