import Profile from "../../components/profile";

export function ProfileContainer({ name, email, image, description }) {
    const profileDescription = `Опис: ${description}`;
    const profileName = `Ім'я: ${name}`;
    const profileEmail = `Пошта: ${email}`;

    return (
        <Profile
            image={image}
            name={profileName}
            description={profileDescription}
            email={profileEmail}
        />
    );
}
