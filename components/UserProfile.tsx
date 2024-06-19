import { View, StyleSheet } from "react-native";

interface User {
  name: string;
  avatar: string;
  bio: string;
}
interface UserProfileProps {
  user: User;
  render: (user: {
    name: string;
    avatar: string;
    bio: string;
  }) => React.ReactNode;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, render }) => {

  return <View style={styles.container}>{render(user)}</View>;
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    alignItems: "center",
    margin: 20,
  },
});
