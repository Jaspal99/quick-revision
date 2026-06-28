function ProfilePage({userId}:{userId: string}) {
    return <ProfileForm key={userId} userId={userId} />;
}

function ProfileForm({userId}:{userId: string}) {
    return <div>Profile Form for user {userId}</div>;
}