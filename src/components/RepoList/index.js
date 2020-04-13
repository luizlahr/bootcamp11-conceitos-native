import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Repo from "../Repo";

export default function RepoList({ repositories, onLike }) {
  return (
    <FlatList
      style={styles.repoList}
      data={repositories}
      keyExtractor={(repo) => repo.id}
      renderItem={({ item: repository }) => (
        <Repo repository={repository} onLike={onLike} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  repoList: {
    flex: 1,
  },
});
