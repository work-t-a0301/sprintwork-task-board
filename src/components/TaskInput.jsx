import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input__field"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="タスクを入力してください..."
      />
      <button type="submit" className="task-input__button">追加</button>
    </form>
  )
}

export default TaskInput
