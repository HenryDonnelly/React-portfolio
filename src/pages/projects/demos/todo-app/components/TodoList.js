import { Button, Card, ListGroup } from 'react-bootstrap'
import { useState, useEffect} from 'react'

// TodoItem uses 'export default', so we don't need curly brackets when importing it
// If it used 'export const', we would need curly brackets
import TodoItem from './TodoItem'

const TodoList = () => {
  const initialValue = [
    {
      text: 'Get milk',
      done: false,
      id: 1
    },
    {
      text: 'Learn react',
      done: false,
      id: 2
    },
    {
      text: 'Go home',
      done: false,
      id: 3
    }
  ]

  // We provide useState with an initial value in the form of a function
  // The function checks if localStorage contains an item named 'list'
  // If so, it returns that list, thereby setting the initial state to the value retrieved from localStorage
  // Otherwise, it uses the hard-coded initialValue array we've defined above
  const [list, setList] = useState(() => {
    const localList = localStorage.getItem('list')

    if(localList){
      return JSON.parse(localList)
    }
    else{
      return initialValue;
    }
  })


  // This hook runs every time its 'dependency array' is updated
  // We *could* also leave the dependency array empty []
  // Doing so would cause the useEffect to run ONCE when our component first renders
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const [inputValue, setInputValue] = useState("")


  // Our component hierarchy goes App -> TodoList -> TodoItem
  // In order to notify the TodoList of a change to a TodoItem
  // We'll pass this markAsDone function down into our TodoItem
  // That way, the TodoItem can trigger markAsDone when a click event happens
  const markAsDone = (id) => {
    // Remember state is immutable.
    // We aren't actually modifying the state here, but using the map() function to create an entirely new list with our change made.
    const newList = list.map((item, index) => {
      if (item.id === id) {
        item.done = true;
      }
      return item;
    })

    // We then overwrite the previous list with our new list (which is the same, apart from the one item which has been set to 'done')
    setList(newList)
  }

  const addTodo = (e) => {
    const newTodo = {
      text: inputValue,
      done: false,
      id: list.length + 1
    }

    setList([
      ...list,
      newTodo
    ])

    setInputValue("")
  }

  const deleteTodo = (id) => {
    setList(list.filter((todo) => todo.id != id))
  }


  const todoItems = list.map((item, index) => {
    // We use a key to uniquely identify each item in our list
    return (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        done={item.done}
        markAsDone={markAsDone}
        deleteTodo={deleteTodo}
      />
    )
  });

  const handleKeyUp = (e) => {
    if (e.key == 'Enter') {
      addTodo();
    }

    
  }

  return (
    <Card>
      <Card.Header>TodoList</Card.Header>
      <Card.Body>
        <ListGroup variant='flush'>
          {todoItems}
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <input
          value={inputValue}
          onKeyUp={handleKeyUp}
          onChange={(e) => setInputValue(e.target.value)} />
        <Button
          onClick={addTodo}
          variant='primary'
          className='float-end'>Add
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default TodoList