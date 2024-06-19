import { View, Text, Image, StyleSheet } from "react-native";
import userData from "@/data/UserData";
import React from "react";
import UserProfile from "./UserProfile";

interface User {
  name: string;
  avatar: string;
  bio: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.coverImage} />

        <Image
          source={{
            uri: user.avatar,
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user.name}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoValue}>{user.bio}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  coverImage: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#E3B6A8",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",

    height: 200,
    color: "#E3A593",
  },
  avatar: {
    width: 120,
    height: 120,
    marginTop: 20,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  content: {
    marginTop: 20,
    padding: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
});
