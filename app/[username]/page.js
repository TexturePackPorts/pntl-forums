export default async function UserProfile({ params }) {
  const { username } = params;

  const res = await fetch(`http://localhost:3000/api/users/${username}`);
  const user = await res.json();

  if (res.status !== 200) {
    return (
      <div>
        <h1>User not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <img
        src={user.image}
        alt={user.name}
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
    </div>
  );
}
