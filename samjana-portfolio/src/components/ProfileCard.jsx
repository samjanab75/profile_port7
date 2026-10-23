
export default function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img
        src="/profile.jpg"
        alt={profile.name}
        className="profile-card-image"
      />

      <h2>{profile.name}</h2>
      <p>{profile.location}</p>
    </div>
  );
}
