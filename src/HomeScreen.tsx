import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation/types";
import { IN_MEMORY_POSTS, Post } from "./data/posts";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const renderItem = ({ item }: { item: Post }) => {
    return (
      <View style={styles.postCard}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postBody}>{item.body}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>{item.author}</Text>
          <Text style={styles.metaText}>{item.createdAt}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home Feed</Text>
        <Text style={styles.subtitle}>Posts loaded from in-memory array</Text>
      </View>

      <FlatList
        data={IN_MEMORY_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: "Login" }] })}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  postCard: {
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fafafa",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  postBody: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metaText: {
    fontSize: 12,
    color: "#555",
  },
  button: {
    borderWidth: 1.5,
    borderColor: "#000",
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
