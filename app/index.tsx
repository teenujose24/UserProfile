import UserCard from "@/components/UserCard";
import UserProfile from "@/components/UserProfile";
import userData from "@/data/UserData";
import React from "react";
import { View, StyleSheet } from "react-native";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <UserProfile
        user={userData}
        render={(user) => <UserCard user={user} />}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
