import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Repo({ repository, onLike }) {
  return (
    <View style={styles.repositoryContainer}>
      <Text style={styles.repository}>{repository.title}</Text>

      <View style={styles.techsContainer}>
        {repository.techs.map((tech) => {
          return (
            <Text style={styles.tech} key={tech}>
              {tech}
            </Text>
          );
        })}
      </View>

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
          testID={`repository-likes-${repository.id}`}
        >
          {repository.likes} {repository.likes === 1 ? "curtida" : "curtidas"}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLike(repository.id)}
          testID={`like-button-${repository.id}`}
        >
          <Text style={styles.buttonText}>Curtir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#1a1a1a",
    padding: 20,
  },
  repository: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#7159c1",
    marginBottom: 10,
  },
  techsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    color: "#fff",
    overflow: "hidden",
    marginBottom: 10,
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "rgba(255,255,255,0.5)",
  },
  button: {
    // marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
});
