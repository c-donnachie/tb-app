import { useEffect, useState } from "react"
import { getTaks } from "../../api"

const useTasks = (isFocused) => {
  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const data = await getTaks()
    const newData = data.sort((a, b) => b.id - a.id)
    setTasks(newData)
  }

  useEffect(() => {
    if (isFocused) {
      loadTasks()
    }
  }, [isFocused])

  return { tasks, setTasks, loadTasks }
}

export default useTasks
