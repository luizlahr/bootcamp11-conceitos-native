import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import Header from "./components/Header";
import RepoList from "./components/RepoList";
import api from "./services/api";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/repositories");
      setRepositories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleLikeRepository(id) {
    try {
      await api.post(`/repositories/${id}/like`);
      const updated = repositories.map((repo) => {
        if (repo.id === id) {
          repo.likes++;
        }
        return repo;
      });
      setRepositories([...updated]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0d0d0d" />
      <SafeAreaView style={styles.container}>
        <Header />
        <RepoList repositories={repositories} onLike={handleLikeRepository} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
});
