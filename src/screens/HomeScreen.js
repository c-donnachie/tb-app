import React from "react"
import Layout from "../layouts/Layout"
import TaskList from "../components/TaskList/TaskList"

export default function HomeScreen() {
  return (
    <Layout>
      <TaskList />
    </Layout>
  )
}
